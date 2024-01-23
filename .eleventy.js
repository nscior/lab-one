module.exports = function(eleventyConfig) {
    // Find and copy any `jpg` files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("*.html");
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
};