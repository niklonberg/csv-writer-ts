import { appendFileSync } from "fs";

interface Payment {
  to: string;
  from: string;
  amount: number;
  service: string;
}

type PaymentColumns = ("to" | "from" | "amount" | "service")[];

class CSVWriter {
  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(",") + "\n";
  }

  private csv: string;

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }

  saveCSV(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";

    console.log("file saved to: ", filename);
  }

  addRows(payments: Payment[]): void {
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
