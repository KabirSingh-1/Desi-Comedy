const Jimp = require('jimp');

Jimp.read('./public/logo.jpeg')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];

      // If pixel is white or very light grey, make it fully transparent
      if (r > 230 && g > 230 && b > 230) {
        this.bitmap.data[idx + 3] = 0; 
      }
    });

    image.write('./public/logo.png', () => {
      console.log('Successfully generated public/logo.png');
    });
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });
