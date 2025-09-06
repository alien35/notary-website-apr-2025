export const STATE_MAP: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
  DC: "District of Columbia",
  AB: "Alberta", BC: "British Columbia", MB: "Manitoba", NB: "New Brunswick",
  NL: "Newfoundland and Labrador", NS: "Nova Scotia", ON: "Ontario",
  PE: "Prince Edward Island", QC: "Quebec", SK: "Saskatchewan",
}

export const STATE_ABBR_BY_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(STATE_MAP).map(([abbr, name]) => [name.toLowerCase().replace(/\s+/g, "-"), abbr])
)

// Canadian provinces/territories supported in the UI
export const CANADIAN_ABBRS = new Set<string>([
  "AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK",
])

// Convenience helper
export const isCanadianAbbr = (abbr: string) => CANADIAN_ABBRS.has(abbr)
