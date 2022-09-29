import { Decimal } from "decimal.js";
import React from "react";

import "./App.css";

function App() {
  interface Person {
    name: string;
    salary: number; // USD
  }
  interface Company {
    name: string;
    members: Array<Person>;
    subCompanies: Array<Company> | null;
  }
  const data: Array<Company> = [
    {
      name: "Company 1",
      members: [
        { name: "staff 1", salary: 0.2 },
        { name: "staff 2", salary: 0.1 },
      ],
      subCompanies: null,
    },
    {
      name: "Company 2",
      members: [
        { name: "staff 3", salary: 10.1 },
        { name: "staff 4", salary: 10.2 },
      ],
      subCompanies: [
        {
          name: "sub 1 - Company 1",
          members: [
            { name: "staff 5", salary: 9.7 },
            { name: "staff 6", salary: 9.1 },
          ],
          subCompanies: null,
        },
      ],
    },
  ];
  const calculateSalary = (value: Array<Company>): number => {
    let sum: number = 0;
    value.map((a) => {
      if (a.subCompanies !== null) {
        sum +=
          a.members.reduce(
            (a, b) => Number(new Decimal(a).plus(new Decimal(b.salary))),
            0
          ) + calculateSalary(a.subCompanies);
      } else
        sum += a.members.reduce(
          (a, b) => Number(new Decimal(a).plus(new Decimal(b.salary))),
          0
        );
    });

    return sum;
  };

  const sum = calculateSalary(data);
  return <div className="App">Tổng tất cả salary: {sum}</div>;
}

export default App;
