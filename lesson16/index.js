// let res = 0;

// const sum = (n) => {
//   if (n === 1) {
//     return (res = res + 1);
//   } else {
//     res += n;
//     return sum(n - 1);
//   }
// };

// sum(5);
// console.log(res);

// let company = {
//   sales: [
//     { name: "Mirabbos", salary: 1000 },
//     { name: "Javohir", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     sites: [{ name: "JAck", salary: 1300 }],
//   },
// };

// function Calc(company) {
//   if (Array.isArray(company)) {
//     return company.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let br of Object.values(company)) {
//       sum += Calc(br);
//     }
//     return sum;
//   }
// }

// console.log(Calc(company));

const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));
