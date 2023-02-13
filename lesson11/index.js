// console.log([] == "0"); ///false
// console.log([] === 0); ///false

// console.log([1, 2, 3, 4, 5] + [6]);

let str = ["orange", "Banana", "apple", "Kiwi"];

// let students = [
//   { id: 1, year: 2003, name: "Abduvohidov Mirabbosbek" },
//   { id: 2, year: 1996, name: "Abduvohidov YAxyobek" },
//   { id: 3, year: 1998, name: "Abduvohidov Mirjalol" },
//   { id: 4, year: 2003, name: "TUrgunpolatov javohir" },
//   { id: 5, year: 2000, name: "Eshmatov Eshmat" },
//   { id: 6, year: 2003, name: "Toshpolatov Toshmat" },
//   { id: 7, year: 2003, name: "GAyratov Gayrat" },
//   { id: 8, year: 1999, name: "Ulugov Ulugbek" },
// ];

let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
let n = [9, 8, 1, 1, 4, 5, 7, 6, 3];

console.log(Array.from("Mirabbosbek", (v) => v.toUpperCase()));

// console.log(new Map([["a", 1][("b", 2)]]).values());
// let obj = { name: "Mirabbosbek", status: "Middle" };

// console.log(res);

// let res = n.filter((value, index, array) => array.indexOf(value) === index);

// console.log(new Set(n));

// console.log(num);

// console.log(num.flat(Infinity).reduce((s, c) => s + c, 0));

// console.log(num[1][1]); //6 javbi index 1,[2,3,4],5,6

// //reduce(calback,initialvalue)//calback nimga return qilsa oshanga teng boaldi
// let res = num.reduce((sum, current, i) => {
//   // console.log(current, i, current - i);
//   // return i - sum;
//   return (sum = current - i);
// }, 0); //boshlangich qiymat hohlagan raqam qoysa boladi

// console.log(res);

// let res = num.reduce((value) => value, 0);///bunda hammasi nol
// let res = num.reduce((sum,current) => sum, 0);///sum colbackda nimaga return qilsa oshanga teng

// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7];
// console.log(a.copyWithin(8, 3, 6));
// [
//   0, 0, 0, 1, 2,
//   3, 4, 5, 1, 2
// ]

// console.log(a.copyWithin(0, 3, 6));[
//   1, 2, 3, 1, 2,
//   3, 4, 5, 6, 7
// ]

// console.log(num.fill(6, 5, 5));

// console.log(num.every((value) => typeof value === "number")); //true
// console.log(num.some((value) => typeof value === "number")); //true

// console.log(num.every((value) => !isNaN(value)));
// console.log(num.every((value) => !isNaN(value)));

// let res = num.forEach((value, index) => {
//   console.log(value+2);
// });
// console.log("==============");

// let resmap = num.map((value, index) => {
//   // console.log(value);
//   // return "hey";
//   return <td>{value.name}</td>;
// });

// console.log(res);
// console.log("==============");
// console.log(resmap);

// console.log(res); ///yilini chiqaryapti

// let res = students.findIndex((value) => {
//   return value.id === 4;
// });

// console.log(
//   students.find((value) => {
//     return value.id === 5;
//   })
// );

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
