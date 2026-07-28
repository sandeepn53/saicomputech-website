import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const inputPath = path.join(rootDir, 'src', 'data', 'reviews.json');
const outputPath = path.join(rootDir, 'src', 'data', 'reviews.ts');

const reviews = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const content = `export type Review = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  source: string;
  verified: boolean;
};

export const reviews: Review[] = ${JSON.stringify(reviews, null, 2)};
`;

fs.writeFileSync(outputPath, content + '\n');
console.log(`Updated ${path.relative(rootDir, outputPath)} from ${path.relative(rootDir, inputPath)}.`);
