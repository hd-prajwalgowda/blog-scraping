const fs = require('fs');
const axios = require('axios')
const tags = require('./tags.json')
const articles = require('./articles.json')
console.log(articles.length)


// const articles = tags.map((tag)=>{
//     return tag.name.trim()
// })
// // const tag = articles.slice(0,50).join(",").toString().trim()
// const tag = articles.join(",").toString().trim()


// axios.get(`https://dev.to/api/articles?per_page=1000&tags=${tag}`).then(({data}) => {
//     // console.log(data)
    fs.writeFile(`finalTags.json`, JSON.stringify(tags.slice(0,50)), function (err) {
        if (err) return console.log(err);
        console.log(`Data > articles.json`);
      });    
// }).catch((err) => {
//     console.log(err)
// });
