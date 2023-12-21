interface Payment {
  to: string;
  from: string;
  amount: number;
  service: string;
}

type PaymentColumns = [string, string, number, string];

class CSVWriter {
  constructor() {}

  private csv: string;

  addRows(payments: Payment[]): {};
}
