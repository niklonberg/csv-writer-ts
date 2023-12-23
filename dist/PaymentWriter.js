"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// type PaymentColumns = ("to" | "from" | "amount" | "service")[]; no longer needed cuz of line 5 in index.ts
const paymentWriter = new index_1.CSVWriter([
    "to",
    "from",
    "amount",
    "service", // we could omit this, cause CSVWriter just takes whatever we pass in
]);
paymentWriter.addRows([
    { to: "mario", from: "luigi", amount: 500, service: "web dev work" },
    { to: "peach", from: "toad", amount: 100, service: "cake" },
]);
paymentWriter.saveCSV("./data/payments.csv");
