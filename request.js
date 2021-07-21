const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.flipkart.com/mobiles/mi~brand/pr?sid=tyy,4io&otracker=nmenu_sub_Electronics_0_Mi",
  cb
);
function cb(error, response, html) {
  if (error) {
    console.log("error");
  } else {
    handleHtml(html);
  }
}

function handleHtml(html) {
  let selTool = cheerio.load(html);
  let el = selTool("._1YokD2._2GoDe3");
  console.log(el.length);
  for (let i = 0; i < el.length; i++) {
    console.log(selTool(el[i]).text());
    console.log("NEXT PRODUCT");
  }
}
