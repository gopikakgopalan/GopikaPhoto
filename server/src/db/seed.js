import { randomUUID } from 'node:crypto';
import { db } from './index.js';
import { photos } from './schema.js';
import { photoData } from './photos.data.js';

async function seed() {
  console.log('Seeding photos...');
  for (const p of photoData) {
    await db
      .insert(photos)
      .values({ id: randomUUID(), ...p })
      .onConflictDoNothing({ target: photos.slug });
  }
  console.log(`Done – seeded ${photoData.length} photos.`);
  process.exit(0);
}

seed();