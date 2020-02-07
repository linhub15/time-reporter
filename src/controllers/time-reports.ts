import { Router } from "https://deno.land/x/oak/mod.ts";

interface TimeReport {
  id: string;
  email: string;
  name: string;
  month: string;
  hours: number;
  payRate: number;
  totalPay: number;
}

export const router = new Router();
router
  .post("/api/time-reports", async (context) => {
    // Note, will crash if invalid json
    const body = await context.request.body();
    context.response.body = body;
  })

  .get("/api/time-reports", async (context) => {
    context.response.body = getTimeReports();
  })

  .get("/api/time-reports/:id", async (context) => {
    if (context.params && context.params.id) {
      context.response.body = getTimeReports()
        .find(x => x.id === context.params.id);
    } else {
      context.response.status = 204; // 204 no content
    }
  });

function getTimeReports(): TimeReport[] {
  return [{
    id: "1",
    email: "bob@gmail.com",
    name: "bob smith",
    month: "JAN",
    hours: 5,
    payRate: 30,
    totalPay: 150
  }, {
    id: "2",
    email: "alice@gmail.com",
    name: "Alice smith",
    month: "Jan",
    hours: 8,
    payRate: 35,
    totalPay: 280
  }];
}
