#!/usr/bin/env node
// CommonJS version for Node without ESM enabled
const fs = require("node:fs/promises");
const path = require("node:path");
const { DOMParser } = require("xmldom");

// ---------------- CONFIG ----------------
const HOST = "notarycentral.org";
const KEY = "ee4a9ffb7f204256ab55cb464723d8fc";
const KEY_LOCATION = "https://notarycentral.org/ee4a9ffb7f204256ab55cb464723d8fc.txt";

// Default sitemap URL (can override with CLI arg or env var)
const SITEMAP_SOURCE = process.env.SITEMAP_SOURCE || process.argv[2] || "https://notarycentral.org/sitemap.xml";

// Endpoint (Bing; IndexNow engines share behind the scenes)
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || "https://www.bing.com/indexnow";

// Dry run mode (skip POST)
const DRY_RUN = process.env.DRY_RUN === "1";
// ---------------- CONFIG ----------------

async function loadSitemap(src) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    console.log(`Downloading sitemap from ${src} ...`);
    const res = await fetch(src);
    if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
    return await res.text();
  } else {
    console.log(`Reading sitemap from local file: ${src}`);
    return await fs.readFile(path.resolve(src), "utf8");
  }
}

async function extractUrls(xml) {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const root = doc.documentElement && doc.documentElement.tagName ? doc.documentElement.tagName.toLowerCase() : "";

  // Helper: convert NodeList to array safely
  const nodesToArray = (nl) => Array.from(nl || []);

  if (root.includes("sitemapindex")) {
    // The source is a sitemap index. Follow each <sitemap><loc> and extract URLs from each child sitemap.
    const sitemapLocs = nodesToArray(doc.getElementsByTagName("loc"))
      .map((n) => (n && n.textContent ? n.textContent.trim() : ""))
      .filter(Boolean);

    const all = [];
    for (const sm of sitemapLocs) {
      try {
        console.log(`Fetching nested sitemap: ${sm}`);
        const xmlChild = await loadSitemap(sm);
        const childDoc = new DOMParser().parseFromString(xmlChild, "application/xml");
        const urls = nodesToArray(childDoc.getElementsByTagName("loc"))
          .map((n) => (n && n.textContent ? n.textContent.trim() : ""))
          .filter((u) => Boolean(u) && !u.endsWith(".xml"));
        all.push(...urls);
      } catch (e) {
        console.warn(`Failed to process nested sitemap ${sm}:`, e);
      }
    }
    return all;
  }

  // Assume <urlset> document: collect <loc> entries that are actual URLs (not sitemap XML files)
  const locs = nodesToArray(doc.getElementsByTagName("loc"))
    .map((n) => (n && n.textContent ? n.textContent.trim() : ""))
    .filter((u) => Boolean(u) && !u.endsWith(".xml"));
  return locs;
}

function buildPayload(urls) {
  return {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };
}

async function postBatch(batch, index, total) {
  const payload = buildPayload(batch);
  console.log(`Submitting batch ${index + 1}/${total} (${batch.length} URLs)`);

  if (DRY_RUN) {
    console.log("Dry run: skipping POST");
    return;
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    console.log(`✔ Success (HTTP ${res.status})`);
  } else {
    const text = await res.text();
    console.error(`✖ Failed (HTTP ${res.status}):\n${text}`);
  }
}

async function main() {
  try {
    const xml = await loadSitemap(SITEMAP_SOURCE);
    const urls = [...new Set(await extractUrls(xml))];
    console.log(`Found ${urls.length} URL(s)`);

    if (urls.length === 0) {
      console.error("No URLs extracted from sitemap.");
      process.exit(1);
    }

    const BATCH_SIZE = 10000;
    const batches = [];
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      batches.push(urls.slice(i, i + BATCH_SIZE));
    }

    for (let i = 0; i < batches.length; i++) {
      await postBatch(batches[i], i, batches.length);
    }

    console.log("Done.");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

main();
