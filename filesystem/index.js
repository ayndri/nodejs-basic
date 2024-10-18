const fs = require("fs");
const { resolve } = require("path");

//synchronus
const data = fs.readFileSync(resolve(__dirname, "notes.txt"), "UTF-8");
console.log(data);

//asynchronus

/* 
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }

  console.log(data);
};

fs.readFile("./filesystem/notes.txt", "UTF-8", fileReadCallback);
fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);
*/
