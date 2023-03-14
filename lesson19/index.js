// console.log("hey");

// let name = 1;

// let n = 5;

// /////////////////////

// var getData = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(
//     (res) => res.json()
//   );
// };

// const getCache = () => {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//     } else {
//       let res = func(x);
//       console.log(res);
//       cashe.set(x, res);
//     }
//     func(x);
//   };
// };
// getData = getCache(getData);
// getData(5)

//////////////////////////
// call
// apply
// bind

// getcall.call()

// getcall.apply(obj1, ["Bolta1", 23, "red1"]);
// getcall.apply(obj2, ["Bolta2", 20, "red2"]);
// getcall.apply(obj3, ["Bolta3", 21, "red3"]);

// /////////////////////////////////

// getcall.call(obj1);
// getcall.call(obj2);
// getcall.call(obj3);

// let obj1 = { id: 1, name: "toshmat1", surname: "toshmatov" };
// let obj2 = { id: 2, name: "toshmat2", surname: "toshmatov" };
// let obj3 = { id: 3, name: "toshmat3", surname: "toshmatov" };

// function getcall(age) {
//   console.log(this.name, this.surname,age);
// }

// let res = getcall.bind(obj1,20);

// res();

// //////////IIFE

// // (function(){

// // })

// let date = new Date();

// time.innerHTML = data.getSeconds();

// setTimeout(()=>{
//   let date=new Data()
// info

// })

//////DDOS

const sorov = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

sorov();
