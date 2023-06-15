const fs = require("fs-extra");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

// Define the URLs for your website
const urls = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about-us", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/for-applicants", changefreq: "monthly", priority: 0.8 },
  { url: "/for-companies", changefreq: "monthly", priority: 0.8 },
  { url: "/home", changefreq: "monthly", priority: 0.8 },
  // Add more URLs as needed
];

// Function to generate the XML sitemap
async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://alphamedical-bih.com",
  });

  // Add the URLs to the sitemap
  urls.forEach((url) => {
    sitemap.write(url);
  });

  sitemap.end();

  // Convert the sitemap stream to a string
  const sitemapXml = await streamToPromise(sitemap).toString();

  // Set the output path and filename for the sitemap
  const outputPath = path.join(__dirname, "dist", "sitemap.xml");

  // Write the sitemap XML to the output file
  fs.outputFileSync(outputPath, sitemapXml);

  console.log("Sitemap generated successfully!");
}

// Invoke the function to generate the sitemap
generateSitemap();
