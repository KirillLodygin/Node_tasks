//require('dotenv').config();
const average = require('image-average-color');
const fs = require('fs');

const path = process.env.PIC;

fs.access(path, fs.F_OK, err => {
  if (err) {
    console.error(err);
    return;
  }

  average(path, (err, color) => {
    if (err) throw err;
    const rgba = color;
    console.log(`rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`);
  });
});
