"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
const fs_1 = require("fs");
// TODO:
// add delete csv file functionality
// add parser of csv file to turn csv file into array of objects (basically the opposite)
class CSVWriter {
    // get keys of whatever we pass in, and set the columns to those keys
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    saveCSV(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log("file saved to: ", filename);
    }
    formatRow(val) {
        return this.columns.map((col) => val[col]).join(",");
    }
    addRows(values) {
        let rows = values.map((val) => this.formatRow(val));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
}
exports.CSVWriter = CSVWriter;
