import { appendFileSync } from "fs";

export class CSVWriter<T> {
  // get keys of whatever we pass in, and set the columns to those keys
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(",") + "\n";
  }

  private csv: string;

  saveCSV(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";

    console.log("file saved to: ", filename);
  }

  private formatRow(val: T): string {
    return this.columns.map((col) => val[col]).join(",");
  }

  addRows(values: T[]): void {
    let rows = values.map((val) => this.formatRow(val));

    this.csv += rows.join("\n");

    console.log(this.csv);
  }
}
