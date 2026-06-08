const Jimp = require('jimp');
const fs = require('fs');

Jimp.read('./public/carousel-images/image18.png')
  .then(image => {
    // Convert to JPEG and compress
    return image
      .quality(70) 
      .writeAsync('./public/carousel-images/img18.jpg');
  })
  .then(() => {
    console.log('Successfully compressed and converted image18.png to img18.jpg');
    // Remove the original large PNG
    fs.unlinkSync('./public/carousel-images/image18.png');
    console.log('Original PNG deleted.');
  })
  .catch(err => {
    console.error('Error during compression:', err);
  });
