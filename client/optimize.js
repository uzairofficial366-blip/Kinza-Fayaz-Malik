import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, 'public', 'gallery');
const optimizedDir = path.join(galleryDir, 'optimized');

if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir);
}

const files = fs.readdirSync(galleryDir).filter(file => file.match(/\.(png|jpe?g)$/i));

(async () => {
    for (const file of files) {
        const inputPath = path.join(galleryDir, file);
        const outputPath = path.join(optimizedDir, file.replace(/\.[^/.]+$/, '.webp'));
        try {
            await sharp(inputPath)
                .resize({ width: 800, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Optimized: ${file}`);
        } catch (err) {
            console.error(`Error on ${file}:`, err);
        }
    }
    console.log("Done optimization.");
})();
