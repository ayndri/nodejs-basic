const fs = require("fs");
const { resolve } = require("path");

const readableStream = fs.createReadStream(resolve(__dirname, "article.txt"), {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
