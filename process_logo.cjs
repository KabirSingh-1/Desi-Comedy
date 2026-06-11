const { Jimp } = require('jimp');

async function makeTransparent() {
  try {
    const image = await Jimp.read('public/logo.jpeg');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write('public/logo.png');
    console.log('Successfully created transparent logo.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

makeTransparent();
