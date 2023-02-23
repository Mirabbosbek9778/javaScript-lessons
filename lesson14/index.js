// let obj = { name: "Mirabbosbek", title: "Abduvohidov", data: { year: 2003 } };

// let name = "Mirabbos ";
// let {
//   name: newName,
//   title,
//   data: { year },
// } = obj;

// console.log(data.year);

////////////////

// let ar = ["apple", "orange", "Kiwi"];

// let [bir, ...res] = ar;

// console.log(res);

/////////////////

// const energy = (data = {}) => {
//   console.log(data?.name, id);
// };

// energy();

////////////////

// let obj = { name: "Mirabbosbek", title: "Abduvohidov", data: { year: 2003 } };

// Object.entries(obj).map(([key,value], index) => {
//   console.log(value);
// });
/////name
// title
// data chiqadi

///////
// console.log(Date.now());

// let date = new Date();
// console.log(date.getTime());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// const Today = (symobl) => {
//   let date = new Date();
//   return `Today: ${date.getDate()}${symobl}${
//     date.getMonth() + 1
//   }${symobl}${date.getFullYear()}`;
// };

// console.log(Today('-'));
// console.log(Today('/'));

// let weeks = ["yakshanba", "Dushanba"];

// let date = new Date();

// console.log(weeks[date.getDay()].slice(0, 4));

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

///////////////////

/////JSON
//javascript object notion

let user = {
  name: "Mirabbos",
  year: 2003,
  date: { fullname: "Mirabbosbek Abduvohidov", founded: 2003 },
};

let json = JSON.stringify(user);

let obj = JSON.parse(json);

console.log(obj);
