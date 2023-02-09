// console.log([] == "0"); ///false
// console.log([] === 0); ///false

// console.log([1, 2, 3, 4, 5] + [6]);

let num = [1, 2, 36, 4, 52, 6, 76, 0];
let n = [9, 8, 1, 2, 4, 5, 7, 6, 3];

let str = ["orange", "Banana", "apple", "Kiwi"];

let students = [
  { id: 1, year: 2003, name: "Abduvohidov Mirabbosbek" },
  { id: 2, year: 1996, name: "Abduvohidov YAxyobek" },
  { id: 3, year: 1998, name: "Abduvohidov Mirjalol" },
  { id: 4, year: 2003, name: "TUrgunpolatov javohir" },
  { id: 5, year: 2000, name: "Eshmatov Eshmat" },
  { id: 6, year: 2003, name: "Toshpolatov Toshmat" },
  { id: 7, year: 2003, name: "GAyratov Gayrat" },
  { id: 8, year: 1999, name: "Ulugov Ulugbek" },
];

console.log(
  num.find((value) => {
    return value === 34;
  })
);

// console.log(res);

// let res = students.sort((a, b) => a.name.localeCompare(b.name)); ///alfavit tartibda
// let res = str.sort((a, b) => a.localeCompare(b));

// let res = num.sort((a, b) => b-a);///teskari tartibbda chiqarish

// let res = students.filter((value) => value.year === 2003);
// let res = students.filter((value) => value.id >=5);

// let res = str.filter((value, index) => {
//   return value.length <= 5;
// });

// let res = num.filter((value, index) => {
//   return value<10;
// });
