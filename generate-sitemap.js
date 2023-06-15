const SitemapGenerator = require("sitemap-generator");
const path = require("path");
const targetUrl = "https://alphamedical-bih.com";
const sitemapPath = path.resolve(__dirname, "dist", "sitemap.xml");
const generator = SitemapGenerator(targetUrl, {
  filepath: sitemapPath,
  stripQuerystring: true,
});
generator.start();
generator.on("error", (error) => {
  console.error("Error generating sitemap:", error);
});
generator.on("done", () => {
  console.log("Sitemap generation completed!");
});
