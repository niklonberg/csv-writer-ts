import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
  "name",
  "id",
  "role",
  "salary",
]);

employeeWriter.addRows([
  { id: 2031, name: "ryu", role: "systems-engineer", salary: 24060 },
  { id: 1325, name: "ken", role: "secretary", salary: 10130 },
  { id: 2031, name: "cammy", role: "devOps-engineer", salary: 42789 },
]);

employeeWriter.saveCSV("./data/employees.csv");
