module.exports = eleventyConfig => {
  eleventyConfig.addWatchTarget("./src/assets/css/");
  return {
    dir: {
      input: "src",
      output: "dist",
      includs: "_includes"
    }
  }
}
