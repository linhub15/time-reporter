import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(ctx => {
    ctx.response.body ="Hello World";
});

const port = 8000;
console.log(`starting web server on http://localhost:${port}...`)
await app.listen({port: port});