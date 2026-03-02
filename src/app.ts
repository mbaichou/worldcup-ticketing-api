import { Hono } from 'hono'

export const app = new Hono()

app.get('/', (c) => {
  return c.json({
    success: true,
    message: process.env.API_NAME 
  })
})

app.get('/health', (c) => {
  return c.json({
    status: "OK",
    environment: process.env.NODE_ENV, 
    version: "1.0.0"
  })
})