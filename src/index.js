const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const http = require('http')

var bool;
async function check(url){
    const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
      "--window-size=1920x1080",
    ],
  });
    const page = await browser.newPage();

  await page.goto("url");

  const content = await page.content();
  const $ = cheerio.load(content);

    $("#container > h1 > yt-formatted-string").each((idx, elem) => {
    /**
     * Get the inner HTML which corresponds to the title in text format.
     */
    const title = $(elem).text();
    return title ? true : false;
  });
  browser.close();
}

function validate(url){
    check(url).then((result) => {
        return result;
    })
}
exports.validate = validate;