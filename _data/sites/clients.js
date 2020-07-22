module.exports = {
  name: "tnd-clients", // optional, falls back to object key
  description: "TND client sites",
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run",
  },
  urls: [
    "https://www.freshebt.com/",
    "https://www.midisgroup.com/",
    "https://www.ndbooks.com/",
    "https://www.aaldef.org/",
    "https://www.retroreport.org/",
  ],
};
