// // let users = [
// //   { id: 1, name: "Mirabbos1" },
// //   { id: 2, name: "Mirabbos2" },
// //   { id: 3, name: "Mirabbos3" },
// //   { id: 4, name: "Mirabbos4" },
// //   { id: 5, name: "Mirabbos5" },
// // ];

// // const del = (id) => {
// //   let res = users.filter((value) => value.id !== id);
// //   users = res;
// // };

// // const add = (newUser) => {
// //   users = [...users, { id: users.length + 1, ...newUser }];
// // };
// // del(4);
// // add({ name: "hey" });
// // console.log(users);

// // function* gen() {
// //   let sum = yield 1;
// //   yield 2+sum;
// //   yield 3;
// // }

// // const generate = gen();
// // const hey = gen();

// // const generate = generator();
// // const hey = generator();

// // console.log(generate.next());
// // console.log(generate.next(3));

// // console.log(generate.next());
// // console.log(hey.next());
// // console.log(generate.next(3));
// // console.log(generate.next());

// let students = [
//   { id: 1, name: "Mirabbosbek", surname: "Abduvohidov" },
//   { id: 2, name: "Javohir", surname: "Turgunpolatov" },
//   { id: 3, name: "Ulugbek", surname: "Ulugbekov" },
//   { id: 4, name: "Stiv", surname: "Jobs" },
// ];

// function* generator() {
//   let id = students.length;
//   while (1) {
//     yield ++id;
//   }
// }
// const id = generator();

// const del = (id) => {
//   let res = students.filter((value) => value.id !== id);
//   students = res;
// };

// const add = (newUser) => {
//   students = [...students, { id:id.next().value, ...newUser }];
// };

// del(2);
// add({ name: "ali" });
// add({ name: "ali" });
// add({ name: "ali" });
// del(4);

// console.log(students);

// function getId(a) {
//   return function (b) {
//     while (1) {
//      return a+b
//      }
//   };
// }
// getId(1)(2)(3);

function getId(a) {
  let count = a;
  function truc(b) {
    console.log((count += b));
    return truc;
  }
  truc.toString = function () {
    return count;
  };
  return truc;
}

getId(1)(2)(3)(4)(5);
