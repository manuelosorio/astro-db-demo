import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config


const Message = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true, autoIncrement: true}),
    message:  column.text(),
    user: column.text(),
  }
});

export default defineDb({
  tables: {
    Message
  }
});

