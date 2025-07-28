import { prismaClient } from "@repo/prisma"
import { Hono } from 'hono'

const app = new Hono()

export const routes = app
    .get('/', (c) => {
      return c.text('Hello Hono!')
    })
    .get("/users", async (c) => {
      const users = await prismaClient.user.findMany()
      return c.json(users)
    })
    .get("/cameras", (c) => {
      return c.json([
        {
          brand: "Canon",
          model: "R1",
        },
        {
          brand: "Sony",
          model: "A9",
        },
        {
          brand: "Nikon",
          model: "Z9",
        },
      ])
    })

export type App =  typeof routes
