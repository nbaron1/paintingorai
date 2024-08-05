import { Hono } from 'hono';

const app = new Hono();

app.get('/helloworld', (c) => {
  return c.json({ data: 'example data' });
});

export default app;
