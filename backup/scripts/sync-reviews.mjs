import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const inputPath = path.join(rootDir, 'src', 'data', 'reviews.json');
const outputPath = path.join(rootDir, 'src', 'data', 'reviews.ts');

const fallbackReviews = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.log('Google review sync not configured; using local reviews.');
    return null;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews&key=${encodeURIComponent(apiKey)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok && data.status === 'OK' && Array.isArray(data.result?.reviews)) {
      return data.result.reviews
        .filter((review) => typeof review.rating === 'number' && review.rating >= 4)
        .map((review, index) => ({
          id: index + 1,
          name: review.author_name || 'Google Reviewer',
          role: 'Verified Customer',
          quote: review.text || 'Great experience with our services.',
          rating: review.rating,
          source: 'Google',
          verified: true,
        }));
    }

    console.warn(`Google review sync failed: ${data.status || response.status}`);
    return null;
  } catch (error) {
    console.warn('Google review sync failed:', error instanceof Error ? error.message : error);
    return null;
  }
}

const remoteReviews = await fetchGoogleReviews();
const reviews = remoteReviews ?? fallbackReviews;

const goodReviews = reviews
  .filter((review) => typeof review.rating === 'number' && review.rating >= 4)
  .sort((a, b) => b.rating - a.rating);

const content = `export type Review = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  source: string;
  verified: boolean;
};

export const reviews: Review[] = ${JSON.stringify(goodReviews, null, 2)};
`;

fs.writeFileSync(outputPath, content + '\n');
console.log(`Updated ${path.relative(rootDir, outputPath)} from ${remoteReviews ? 'Google reviews' : 'local reviews'} with ${goodReviews.length} good reviews.`);
