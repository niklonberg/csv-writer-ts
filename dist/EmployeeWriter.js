"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter([
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
