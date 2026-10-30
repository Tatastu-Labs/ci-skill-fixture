import { slugify } from "./slug"
declare const VERSION: string
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === "/health") return Response.json({ version: VERSION, slug: slugify("Health OK") })
    return new Response("ci skill fixture")
  },
}
