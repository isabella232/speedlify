module.exports = {
  name: "tnd-internal", // optional, falls back to object key
  description: "The New Dynamic web sites",
  options: {
    frequency: 60 * 11 + 30, // 11h, 30m
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://www.thenewdynamic.com/",
    "https://www.thenewdynamic.com/about/",
  ],
};
