import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { photos } from '../db/schema.js';

export const photosRouter = Router();

photosRouter.get('/', async (_req, res) => {
  const rows = await db.select().from(photos);
  res.json(rows);
});

photosRouter.get('/:slug', async (req, res) => {
  const [row] = await db
    .select()
    .from(photos)
    .where(eq(photos.slug, req.params.slug))
    .limit(1);
  if (!row) return res.status(404).json({ error: 'No such photo' });
  res.json(row);
});