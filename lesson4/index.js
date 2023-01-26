/////////sumning qiymati
// var sum = 0;
// for (i = 1; i < 12; i++) {
//   //   console.log((sum += i));
//   console.log(`sumni qiymati = ${(sum += i)}`);
//   //   if (sum === 10) break;    // 1 3 6 10
//   //   if (i === 1) break;   // 1
//   if (sum === 10) break;
// }

/////// yigindisini topish va  juft toqqa tekshirish

// let i = 1;
// let sum = 0;
// for (i = 1; i <= 5; i++) {
//   sum += i;
// //   console.log(sum);
//   if (sum%2==0) {
//     console.log(sum);
//   }
// }

//// sonni juft va toq sonlar

// let i = 1;
// for (i = 1; i <=5; i++) {
//   if (i % 2 == 0) {
//     console.log(`juft  son : ${i}`);
//   }else{
//     console.log(`toq son : ${i}`);
//   }
// }

//// sumning qiymatini ichidagi jarayonlar

// let i = 1;
// let sum = 0;
// for (i = 1; i <= 5; i++) {
//   console.log(`sumni qiymati : ${sum} +${i}= ${(sum+=i)}`);
//   if(sum===10)
// }

// console.log(i++);
// console.log(++i);
// ++i
// i++
// i+=2
// ++i++

// for (let i = 1; i < 12; i++) {
//   console.log(i);
//   i += i;
// }

///3ga qoldiqli bolinadiganlarni chopamiz

// for (let i = 1; i <= 12; i++) {
//   if (i % 3 === 0) continue;
//    console.log( i);
// }

////teskari tartib 10 9 8 7 ...

// for (let i = 10; i>= 1; i--) {
//    console.log( i);
// }

////nested  loop

// for (let i = 10; i>= 1; i--) {
//     for(let j=1; j<=10; j++){
//         console.log(i);
//     }
//     // console.log(i);
// }

//// switch case

/////hafta kunlar

// let  week =Math.round( Math.random()*10);

// console.log(week);

// switch (week) {
//   case 1:
//     console.log("dushanba ");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("chorshanba");
//     break;
//   case 4:
//     console.log("payshanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
//   default:
//     console.log("not found");
//     break;
// }

/////////////// sonni sozlar bilan chiqarish/////

// let num = Math.round(Math.random() * 1000);
// console.log(num); //745
// e = parseInt(num / 100); //3 xonalik //7
// num = num % 100;
// // console.log(e);
// d = parseInt(num / 10); // 2 xonalik
// // console.log(d);
// num = num % 10;
// c = num;

// // let c = num % 10;   //birlik
// // let d = (num % 100) / 10;   ///onlik
// // let e = num / 100;  ///yuzlik

// switch (e) {
//   case 1:
//     console.log("yuz");
//     break;
//   case 2:
//     console.log("ikki yuz");
//     break;
//   case 3:
//     console.log("uch yuz");
//     break;
//   case 4:
//     console.log("to'rt yuz");
//     break;
//   case 5:
//     console.log("besh yuz");
//     break;
//   case 6:
//     console.log("olti yuz");
//     break;
//   case 7:
//     console.log("yetti yuz");
//     break;
//   case 8:
//     console.log("sakkiz yuz");
//     break;
//   case 9:
//     console.log("toqqiz yuz");
//     break;
// }
// switch (d) {
//   case 1:
//     console.log("o'n");
//     break;
//   case 2:
//     console.log("yigirma");
//     break;
//   case 3:
//     console.log("o'ttiz");
//     break;
//   case 4:
//     console.log("qirq");
//     break;
//   case 5:
//     console.log("ellik");
//     break;
//   case 6:
//     console.log("oltimish");
//     break;
//   case 7:
//     console.log("yettimish");
//     break;
//   case 8:
//     console.log("sakkson");
//     break;
//   case 9:
//     console.log("toqqson");
//     break;
// }
// switch (c) {
//   case 1:
//     console.log("bir");
//     break;
//   case 2:
//     console.log("ikki");
//     break;
//   case 3:
//     console.log("uch");
//     break;
//   case 4:
//     console.log("tort");
//     break;
//   case 5:
//     console.log("besh");
//     break;
//   case 6:
//     console.log("olti");
//     break;
//   case 7:
//     console.log("yetti");
//     break;
//   case 8:
//     console.log("sakkiz");
//     break;
//   case 9:
//     console.log("toqqiz");
//     break;
// }

/////////////////////

// let a = Math.round(Math.random() * 10);
// console.log(a);
// // let a=3
// // let str=""
// // console.log('a \nb');

// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a-i; j++) {
//     console.log("  ");
//   }
//   for (let j = 1; j <= i; j++) {
//     console.log("*   ");
//   }

// }

// //     *
// //   *   *
// // *   *   * 3y 2b
