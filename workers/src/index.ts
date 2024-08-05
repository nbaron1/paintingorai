import { Hono } from 'hono';

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
app.get('/', (c) => {
  return c.json('Hello world!');
});

export default app;
