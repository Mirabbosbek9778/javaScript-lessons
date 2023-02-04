// let obj = {
//   name: "Mirabbosbek",
//   age: 23,
//   child: {
//     name: "javohir",
//     age: 20,
//     child: {
//       name: "rahmatillo",
//       age: 18,
//     },
//   },
// };
// obj = {
//   child: {
//     name: "javohir",
//     age: 20,
//     child: {
//       name: "rahmatillo",
//       age: 18,
//     },
//   },
// };
// obj = {
//   child: {
//     name: "rahmatillo",
//     age: 18,
//   },
// };
// let sum = 0;
// while (1) {
//   if (obj) {
//     // console.log(obj.age);
//     sum += obj.age;
//   } else {
//     break;
//   }
//   obj = obj.child; ///ichidagi malumotga tenglab qoyyapti
// }
// /////ichidagi bor yoqligini tekshirib boldik
// console.log(sum);
// ////yigindiis hisobladik agelarni
// ////Nan qayati

// //////////////////
// {
//   console.log(this);
// }

/////

// function sayHi() {
//   console.log("Hello world");
// }

// let name = "JAvohir";

// let usur = {
//   // name: "Mirabbos",
//   name,
//   // sayHi
//   sayHi() {
//     ///function demasdan qisqartirma shaklda yozdik
//     console.log("hello world ");
//   },
// };
// usur.sayHi();

// ///////////////////////

// let usur = {
//   name: "Mirabbos",
//   sayHi() {
//     console.log(this);
//     console.log(usur);
//     console.log(`hello world, ${/*this*/usur.name} `); ////name ni ololmidi   this name oladi
//   },
// };
// usur.sayHi();

// // /////////////usur ozgarishi bolib qoladi this ishaltgan maqul

// //////////////////////////

// let usr=usur

// let user = {
//   name: "Mirabbosbek",
//   sayHi() {
//     console.log(`hi , ${this.name}`);
//   },
//   getname: function () {
//     return () => {
//       console.log(`hi's, ${this.name}`);
//     };
//   },
// };

// let usr = user;
// usr.getname()();

////////////////

// function getname() {
//   this.name = name;
//   this.sayHi = function () {
//     console.log("hi", this.name);
//     return "hey";
//   };
//   // console.log(this);
// }

// new getname('eshat').sayHi();

//////////////

// let func = {};

// func.name = "test";

// console.log(func);

// function getname() {
//   console.log(new.target);
// };

// new getname('java')

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// // console.log(id1);
// // console.log(id1 === id2);
// let name = "symbol";
// let obj = {
//   [id1]: "Mirabbosbek",
//   ["id2"]: "Abduvohidov3",
//   id2: "Abduvohidov2",
//   [id2]: "Abduvohidov1",
// };

// console.log(obj.id2)

/////////////

// let obj = {
//   name: "Mirabbosbek",
//   title: "Abduvohidov",
//   age: "111",
// };

// for (value in obj) {
//   // console.log(obj.value);
//   console.log(obj[value]);
// }
// ////ichidagi keylarni chiqarib berarkan

///////////////////

let name = "WEBBRAIN";

// let obj = {
//   name: "Mirabbosbek",
//   title: "Abduvohidov",
//   age: "111",
//   child: {
//     childname: "testing name",
//   },
// };
// const {
//   name: newName,
//   title,
//   child: { childname: test },
// } = obj;

// // console.log(child.name);

// // console.log(title);

// // console.log(obj.name);

// console.log(test);
// console.log(obj.age);

/////////////bjectni ichidan ajratib olib chiqdi

//////////////////////////

// let obj = {
//   child: {
//     childname: "testing name",
//   },
// };

// // obj.name='new name'
// // console.log(obj);
// // console.log(...obj);

// console.log(obj);
// obj={...obj.child}
// console.log(obj);

const obj = {
  name: "webbrain",
  age: 2345,
};
console.log({ obj, name: "Academy" });
console.log({ ...obj, name: "Academy" });
console.log({ name: "Academy", ...obj });
