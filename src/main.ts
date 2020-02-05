import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./controllers/time-reports.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
console.log(`starting web server on http://localhost:${port}...`)
await app.listen({port: port});