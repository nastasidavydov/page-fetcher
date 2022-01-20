const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);

const url = args[0];
const localPath = args[1];


request(`${url}`, (error, response, body) => {
  
  if(!error) {
    fs.writeFile(`${localPath}`, `${body}`, (error) => {

      if (!error) {
        fs.stat(`${localPath}`, (err, stats) => {

          if(!err) {
            console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}`)
          } 
        })
      } 
    })
  } else {
    console.log('Invalid URL')
  }
  
});
