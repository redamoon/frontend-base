const postcss = require("postcss")
const autoprefixer = require("autoprefixer")

module.exports = eleventyConfig => {
  eleventyConfig.addFilter("postcss", function(code) {
    return postcss([autoprefixer]).process(code).css;
  });
  return {
    dir: {
      input: "src",
      output: "dist",
      includs: "_includes"
    }
  }
}
