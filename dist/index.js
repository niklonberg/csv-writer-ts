"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
    saveCSV(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log("file saved to: ", filename);
    }
    addRows(payments) {
        let rows = payments.map((v) => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
}
const writer = new CSVWriter(["to", "from", "amount", "service"]);
writer.addRows([
    { to: "mario", from: "luigi", amount: 500, service: "web dev work" },
    { to: "peach", from: "toad", amount: 100, service: "cake" },
]);
writer.saveCSV("./data/payments.csv");
