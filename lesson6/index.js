// a > 0 ? console.log((a += 1)) : console.log((a = a));

// if (a > 0) {
//   a++;
//   console.log(a);
// } else {
//   console.log(a);
// }

// let a = Math.round(Math.random() * 2300);

// console.log(a);
// if ((a % 4 == 0) && (a % 100 != 0) || (a % 400 == 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/////////////////

// var str = "webBrain";

// // for ( str = str; str <= 10; str++) {
// //   console.log(str);
// // }
// for(var i=0; i<=str.size(); i++){
//     for(j=i; j<=10; j++){
//         console.log(j);
//     }
// }

/////////////////////

// const acc1 = {
//   name: "Mirabbosbek Abduvohidov",
//   major: "frontend",
//   founded: 2023,
//   "full name": "Webbrain Academy",
// };

// const ac2 = structuredClone(acc1);
// console.log(ac2);

// const acc2 = {
//   name: "Mirabbosbek Abduvohidov",
//   major: "frontend",
//   founded: 2023,
//   "full name": "Webbrain Academy",
// };
// const ac3 = acc1;
// ac3.level = 'sinor';
// console.log(acc1);
// console.log(ac3);
// console.log(account.surname);
// console.log(account["ful name "]);

// let key = "major";

// console.log(account.key); //undefined chiqadi
// console.log(account[key]); //frontend
// console.log(account['key']); //undefined chiqadi
// let name = "major";

// console.log(account.name);
// console.log(account[name]);

// account.name="about"
// console.log(account);
// Object.freeze(account);
// Object.seal(account);
// delete account.name;
// console.log(account);

let name = "Mirabbosbek";
let major = "frontend";

const ak1 = {
  name: "webbrain Academy",
  major: "frontend",
};

console.log("name" in ak1);
