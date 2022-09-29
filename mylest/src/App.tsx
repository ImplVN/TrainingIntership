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
  const flatArray = (yourArray: Company[]): Person[] => {
    let arry: Person[] = [];
    yourArray.forEach((a) => {
      if (a.subCompanies !== null) {
        arry.push(...a.members);
        arry.push(...flatArray(a.subCompanies));
      } else arry.push(...a.members);
    });
    return arry;
  };

  const findSalary = (value: Company[]): Person[] => {
    let arr: Person[] = [];
    for (let newValue of value) {
      if (newValue.subCompanies !== null) {
        arr.push(...newValue.members);
        arr.push(...findSalary(newValue.subCompanies));
      } else {
        arr.push(...newValue.members);
      }
      console.log(arr);
    }
    return arr;
  };
  findSalary(data);

  const findPersonMinSalary = (value: Company[]): Person => {
    return findSalary(value).sort(function (a, b) {
      return a.salary - b.salary;
    })[0];
  };
  let rel = findPersonMinSalary(data);

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

  const findPersonMaxSalary = (value: Array<Company>): Person => {
    return flatArray(value).sort((a, b) => b.salary - a.salary)[0];
  };

  const personMaxSalary = findPersonMaxSalary(data);

  const sum = calculateSalary(data);
  return (
    <div className="App">
      <h1>Tổng tất cả salary: {sum} $ phuongtest2</h1>
      <h1>
        Với nhân sự {personMaxSalary.name} có lương {personMaxSalary.salary} $
        lớn nhất
      </h1>
      <h1>
        người có số lương nhỏ nhất nhỏ nhất là "{rel.name}" với số lương
        {rel.salary}$
      </h1>
    </div>
  );
}

export default App;
