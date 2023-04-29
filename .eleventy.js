const Image = require("@11ty/eleventy-img");
const pkg = require("./package.json");
const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    formats: ["webp", "jpeg", "svg"],
    widths: [150, 300, 600, "auto"],
    urlPath: "/images/",
    outputDir: "./public/images/"
  });
  let imageAttributes = {
    alt,
    sizes
  };
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(filesMinifier);

  eleventyConfig.addWatchTarget("./src/main.css");

  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/files');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/favicon-dark.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-light.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

  // layouts
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('collection', 'layouts/collection.njk');

  // format dates
  eleventyConfig.addFilter("shortString", (dateObj) => {
    let year = dateObj.getUTCFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[dateObj.getUTCMonth()];
    let day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });
  eleventyConfig.addFilter("fullString", (dateObj) => {
    let year = dateObj.getUTCFullYear();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[dateObj.getUTCMonth()];
    let day = dateObj.getUTCDate();
    return `${month} ${day}, ${year}`;
  });

  // limit number of idems in a collection
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  // version
  eleventyConfig.addShortcode("version", () => pkg.version);

  eleventyConfig.addAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
