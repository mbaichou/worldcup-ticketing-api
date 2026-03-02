import { Hono } from 'hono'

export const app = new Hono()

// Endpoint pour "/" (Home)
app.get('/', (c) => {
  return c.json({
    success: true,
    message: "World Cup Ticketing API" // Vérifie bien l'orthographe ! [cite: 87, 115]
  })
})