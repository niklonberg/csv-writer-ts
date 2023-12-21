"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(",");
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
