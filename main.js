const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const http = require('http')
const request = require('request')

function getHistory(){
  let url = 'https://www.youtube.com/watch?v=0-S5a0eXPoc';
  request(url,(error,response,html)=>{
    let $ = cheerio.load(html);
    $('.yt-simple-endpoint style-scope yt-formatted-string').each((i,element)=>{
      let omg = $(element).attr('href');
      console.log(omg);
    });
  });
}
getHistory();
/*var bool;
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

  await page.goto("https://www.youtube.com/watch?v=0-S5a0eXPoc");
  console.log("Loaded")
  const content = await page.content();
  const $ = cheerio.load(content);
  console.log("Scraping")
  //const vals = await page.evaluate(() => document.getElementsById("yt-formatted-string"), elem => elem.textContent)
   $("yt-formatted-string").each((elem) => {
    
    const title = $(elem).text();
    console.log(title);
    //console.log( title ? true : false);

  });
  browser.close();
}

async function validate(url){
    check(url).then((result) => {
        return result;
    })
}
console.log(validate("hi"))*/