// let obj = { name: "Mirabbos Abduvohidov" };

// let ar = [1, 2, 3, 5, 6, 7, "OShMY", undefined, null, false, true];

// console.log(ar);

///////////////////////

// let arr = [12, function () {}, 23, 34, 45, 666, "Mirabbos"];

// console.log(arr[6]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]); ///arreyni ohirgisini topamiz?
// console.log(arr.at(-1));///bu ham shu

///////////////////////

// let ar = new Array(5);
// let ar = [1,3,4];

// ar[1] = 1; ///1chisi bosh 2chisi bor

// console.log(ar);
// // console.log(ar.length);
// // console.log(arr.length);

///////////////////

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7, 8];

// // console.log(ar1.toString());
// // console.log(ar1.join("!"));

// console.log(ar1.concat(ar2)); //qoshilyapti arraylar

/////////////////

// console.log(typeof {}); //object
// console.log(typeof []); //object

// console.log(Array.isArray(0)); ///false

//////////////

// let ar = [];

// console.log(ar === 0); //false
// console.log(ar == 0); //true
// console.log(ar === "0"); //fasle

/////////////////

// let usur = ["Mirabbos", "JAvohir", "Mirjalol", "Sardor"];

// for (let i = 1; i < usur.length; i += 2) {
//   //   console.log(i);
//   console.log(usur[i]);
// }///toq juf qib chiqaradi

////////////////////

// let usur = ["Mirabbos", "JAvohir", "Mirjalol", "Sardor"];

// for (value of usur) {
//   console.log(value);
// }
// for (index in usur) {
//   console.log(index);
// }

///////////////////////

// let ar = [1, 2, 3];

// // ar.push(4, 5); ///malumot qoshish
// ar.pop(); ///malumot ochiradi
// console.log(ar);

/////////////////////////

// let ar = [1, 2, 3];

// ar.push([4, 4, 6]);

// console.log(ar);  ///yangi erray qoshadi arrayni ichida array

//////////////////////////////////

// let ar = [1, 2, 3, 46];

// // ar.unshift(0); ///malumot qoshadi
// ar.shift();///ochiradi boshidan

// console.log(ar);

///////////////////

// let ar1 = [1, 2, 4, 46];
// let ar2 = [1, 2, 4, 46];

// // ar1.splice(0, 2);
// // ar2.slice(0, 2);  ///asl holatiga tasir qimidi

// console.log(ar1.splice(2, 2));
// console.log(ar2.slice(2, 2));

// ar.splice(0, 2, "MS3"); //yoq  //1,2 ham qoshadi ham ochriadi ham qirqadi   ta parametr bersak qirqidi 3chi parametr qoshadi

// ar.splice(2, 0, 3);  ///0 maulot ochirmidi 3 qoshyapti

////////////////////

// let ar1 = [1, 2, 4, 46,1];

// console.log(ar1.indexOf(1,2));

/////////////////////////

// let ar = "1,2,3,4,5";

// // console.log(ar.split()); ///[ '1', '2', '3', '4', '5' ]

// let ar = [1, 2, 3, 4, 5];

// console.log(ar.join("-").split("-"));

///////////////////////////////////

// let ar = [1, 2, 3, 4, 5];

// // ar.reverse();

// console.log(ar.includes(22));
