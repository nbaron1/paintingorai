import { Hono } from 'hono';

export interface Env {
  DB: D1Database;
}

const app = new Hono();

app.get('/', async (c) => {
  const env = c.env as Env;

  try {
    const result = await env.DB.prepare('SELECT * FROM painting').all();

    console.log({ result });
  } catch (error) {
    console.log('err', error);
  }

  return c.json('Hello world!');
});

export default app;
