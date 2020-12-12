const fetch = require('node-fetch');

async function main() {
  var bool = false;
  const url = "https://www.youtube.com/watch?v=gnkrDse9QKc";
  const response = await fetch(url, {
      method: 'HEAD'
  }).catch(err => bool = true)

  if(!bool) {
    console.log(response.ok);
  } else {
    console.log("FAILED")
  }
}
main();