import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './public/assets';
const QUALITY = 82; // WebP quality (0-100)

const files = readdirSync(ASSETS_DIR).filter(f => extname(f).toLowerCase() === '.png');

console.log(`\n🖼  Optimizando ${files.length} imágenes PNG → WebP...\n`);

let totalBefore = 0;
let totalAfter  = 0;

for (const file of files) {
  const inputPath  = join(ASSETS_DIR, file);
  const outputPath = join(ASSETS_DIR, basename(file, '.png') + '.webp');

  const sizeBefore = statSync(inputPath).size;
  totalBefore += sizeBefore;

  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const sizeAfter = statSync(outputPath).size;
    totalAfter += sizeAfter;
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);

    console.log(`  ✅ ${file}`);
    console.log(`     ${(sizeBefore / 1e6).toFixed(2)} MB → ${(sizeAfter / 1e6).toFixed(2)} MB  (−${saved}%)\n`);

    // Remove original PNG after successful conversion
    unlinkSync(inputPath);
  } catch (err) {
    console.error(`  ❌ Error con ${file}:`, err.message);
  }
}

console.log('─'.repeat(50));
console.log(`Total antes:  ${(totalBefore / 1e6).toFixed(2)} MB`);
console.log(`Total después: ${(totalAfter  / 1e6).toFixed(2)} MB`);
console.log(`Ahorro total:  ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
console.log('\n✨ Imágenes optimizadas. Recuerda actualizar las referencias a .webp en los componentes.\n');
