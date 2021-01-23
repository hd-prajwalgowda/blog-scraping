const fs = require('fs');
const puppeteer = require('puppeteer')
const TurndownService = require('turndown')
const articles = require('./articles.json')
var turndownService = new TurndownService({headingStyle:"atx"})


let final = []
const scrape = async()=>{
for (let index = 0; index < 3; index++) {
    const element = articles[index];
    
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(element.url,{waitUntil: 'domcontentloaded'})
        await page.setRequestInterception(true);
        page.on('request', request => {
            if (request.resourceType() === 'image' || req.resourceType() === 'stylesheet')
              request.abort();
            else
              request.continue();
          });
        await page.waitForSelector('div[class=crayons-article__main]');
        const html = await page.$eval('.crayons-article__main',el=>el.innerHTML)
        var markdown = await turndownService.turndown(html)
        // await html.dispose()
        browser.close()
        final.push(markdown)
}
}

// fs.writeFile(`finalTags.json`, JSON.stringify(finalArticles), function (err) {
    //     if (err) return console.log(err);
    //     console.log(`Data > articles.json`);
    // });
(async()=>{
    await scrape()
    console.log(final)
})()    