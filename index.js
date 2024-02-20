const fs = require("fs");
const path = require("path");
const readline = require("readline");
const fileSystem = readline.createInterface({
  input: fs.createReadStream("stream.txt"),
  output: process.stdout,
  terminal: false,
});
fileSystem.on('line',(line) => {
    console.log(line);
})
