import { db, Message } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Message).values([
    { message: 'Hello, World!', user: 'astro'},
    { message: 'Bonjour, le monde!', user: 'astroFR'},
    { message: 'Hola, Mundo!', user: 'astroES' },
  ])

}
