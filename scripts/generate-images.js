const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const HIGHLIGHT_COLOR = '#B58A00'; // HSL(45, 100%, 35%) converted to hex
const BACKGROUND_COLOR = '#FFFFFF';
const TEXT_COLOR = '#FFFFFF';

async function generateLogo(size, text = '4lor') {
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${size * 0.1}" fill="${HIGHLIGHT_COLOR}"/>
      <text
        x="50%"
        y="50%"
        font-family="Inter, sans-serif"
        font-size="${size * 0.4}"
        font-weight="bold"
        fill="${TEXT_COLOR}"
        text-anchor="middle"
        dominant-baseline="central"
      >${text}</text>
    </svg>
  `;

  return Buffer.from(svg);
}

async function generateOgImage() {
  const width = 1200;
  const height = 630;
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${BACKGROUND_COLOR}"/>
      <rect x="0" y="0" width="${width}" height="${height * 0.4}" fill="${HIGHLIGHT_COLOR}"/>
      <text
        x="50%"
        y="20%"
        font-family="Inter, sans-serif"
        font-size="72"
        font-weight="bold"
        fill="${TEXT_COLOR}"
        text-anchor="middle"
        dominant-baseline="central"
      >4lor</text>
      <text
        x="50%"
        y="65%"
        font-family="Inter, sans-serif"
        font-size="48"
        font-weight="bold"
        fill="#000000"
        text-anchor="middle"
        dominant-baseline="central"
      >Cultural Marxism &amp; WEF Analysis</text>
    </svg>
  `;

  return Buffer.from(svg);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  await fs.mkdir(publicDir, { recursive: true });

  // Generate favicon.png (16x16)
  const favicon = await generateLogo(16);
  await sharp(favicon)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico')); // Still naming it .ico for compatibility

  // Generate favicon-16x16.png
  await sharp(favicon)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // Generate favicon-32x32.png
  const favicon32 = await generateLogo(32);
  await sharp(favicon32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // Generate apple-touch-icon.png (180x180)
  const appleTouchIcon = await generateLogo(180);
  await sharp(appleTouchIcon)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate android-chrome icons
  const chrome192 = await generateLogo(192);
  await sharp(chrome192)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

  const chrome512 = await generateLogo(512);
  await sharp(chrome512)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

  // Generate OG image
  const ogImage = await generateOgImage();
  await sharp(ogImage)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('All images generated successfully!');
}

main().catch(console.error); 