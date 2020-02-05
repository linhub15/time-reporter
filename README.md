# Time Reporter

## Use Cases
1. Worker submit a time report
2. Owner view time reports


## Data

### Time Report
* email
* name
* month
* teaching hours
* rate of pay
* other payment or deductions (optional)
* total payment (calculated)
* additional comments (optional)
* eSignature (timestamp, machine, browser ...)

## Tech

* Web API
  * POST /api/time-report
  * GET /api/time-reports
  * GET /api/time-reports/{id}