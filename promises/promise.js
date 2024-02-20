const Jszip = require("jszip");
const fsPromises = require("fs").promises;
const zipper = require('zip-local')
const promise = async () => {
  try {
    const data = await fsPromises.readFile("Felistus.CV.pdf");
    zipper.sync.zip("./zipper").compress().save("pack.zip");
  } catch (err) {
    console.error(err);
  }
};

promise()
