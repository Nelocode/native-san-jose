import ffmpegStatic from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';
import { statSync } from 'fs';

ffmpeg.setFfmpegPath(ffmpegStatic);

const INPUT  = './public/assets/trailer.mp4';
const OUTPUT = './public/assets/trailer-optimized.mp4';

const sizeBefore = statSync(INPUT).size;
console.log(`\n🎬  Comprimiendo video...`);
console.log(`    Entrada: ${(sizeBefore / 1e6).toFixed(2)} MB\n`);

ffmpeg(INPUT)
  .videoCodec('libx264')
  .audioCodec('aac')
  .outputOptions([
    '-crf 28',          // Calidad visual (18=lossless, 28=buena, 35=aceptable)
    '-preset slow',     // Mejor compresión (lento pero vale la pena)
    '-movflags +faststart', // Streaming optimizado
    '-vf scale=-2:1080',    // Máximo 1080p
    '-b:a 96k',             // Audio ligero
  ])
  .on('progress', (p) => {
    if (p.percent) process.stdout.write(`\r    Progreso: ${p.percent.toFixed(1)}%    `);
  })
  .on('end', () => {
    const sizeAfter = statSync(OUTPUT).size;
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
    console.log(`\n\n  ✅ trailer-optimized.mp4`);
    console.log(`     ${(sizeBefore / 1e6).toFixed(2)} MB → ${(sizeAfter / 1e6).toFixed(2)} MB  (−${saved}%)`);
    console.log('\n  Reemplaza trailer.mp4 con trailer-optimized.mp4 y actualiza la referencia en Hero.tsx\n');
  })
  .on('error', (err) => {
    console.error('\n  ❌ Error:', err.message);
  })
  .save(OUTPUT);
