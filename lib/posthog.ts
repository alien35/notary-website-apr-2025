import { PostHog } from "posthog-node"

export default function PostHogClient() {
  const posthogClient = new PostHog("phc_nUy33Uim4TknQWhbu1dkLndoORwkAH66ZqB89BMAvj9", {
    host: "https://us.i.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
