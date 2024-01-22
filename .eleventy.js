module.exports = function(eleventyConfig) {
    module.exports = function(eleventyConfig) {
        // Find and copy any `jpg` files, maintaining directory structure.
        eleventyConfig.addPassthroughCopy("img");
        eleventyConfig.addPassthroughCopy("bundle.css");
        eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
      };
  };