const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const svgBuffer = await fs.readFile(path.join(__dirname, '../public/icon.svg'));
  
  // Generate PNG favicon
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/icon.png'));

  // Generate larger PNG for Apple devices
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-icon.png'));

  // Also create a favicon.ico to ensure complete browser support
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon.ico'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 