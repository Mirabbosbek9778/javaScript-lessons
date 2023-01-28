////// while loop
// let a = Math.round(Math.random() * 100);
// let a=28;
// let sum = 0;
// let c = 0;

// while (sum<a) {
//   c++;
//   sum+=c;
// }
// console.log(c);
///1+2+3+4+5+6+7
// if (a == sum) {
//   console.log(`3ga  karrali sonlar`);
// } else {
//   console.log(`3ga karrai emas`);
// }

///////////////////////

// let num = 10;
// let karra=3;
// for (let i = 1; i <= num; i++) {
// if(i%karra==0){
//     console.log(i);
// }
// }

///////////////////////////

// let i = 3;

// // while (0) {
// //   console.log(`hello world`);
// // }
// do {
//   console.log(`hello world`);
//   i--;
// } while (i == 0);

////////////////////

// function getAvr() {
//   console.log(`Mirabbos`);
//   console.log(`Mirabbos`);
//   console.log(`Mirabbos`);
//   console.log(`Mirabbos`);
//   console.log(`Mirabbos`);
//   console.log(`Mirabbos`);
//   console.log(`--------------------------------`);
// }
// // getAvr();
// // getAvr();

/////////////////////
// console.log(id);//not definded chiqadi

// let id = 1;

// console.log(id);

// function getAvr() {
//   console.log("Mirabbosbek Abduvohidov study in Webbrain Academy");
// }
// getAvr();

// getAvr(); <----error beradi

// const getAvr=function(){
//   console.log("Mirabbosbek Abduvohidov study in Webbrain Academy");

// }
// getAvr();  //bu korinishda chaqirish

// const getAvr=()=>{}

// let name='mirabbos'

// const getAvr = function (name) {
//   // console.log(name);
//   console.log(`${name} , Mirabbosbek Abduvohidov study in Webbrain Academy`);
// };
// getAvr("hello world"); //function col deydi
// getAvr("hello world"); //function col deydi
// getAvr("hello world"); //function col deydi
// getAvr("hello world"); //function col deydi

//////////////////

// const getAvr = function (name, surname, age) {
//   // console.log(name);
//   console.log(`name : ${name}`);
//   console.log(`Surname : ${surname}`);
//   console.log(`Age : ${age} `);
//   console.log(`==============================================`);
// };
// getAvr("Mirabbos", "Abduvohidov", 20);
// getAvr("JAvohir", "Turgunpolatov", 20);
// getAvr("Mirjalol", "Abduvohidov", 24);
// getAvr("YAxyobek", "Abduvohidov", 26);

// ///////////////////
// let name = "Mirabbos";

// const test = () => {
//   let name = "Abduvohidov";  ///shadowi shu yerda log qisak
//   ///////////bir hil nom bilan veraybl shadow boladi
//   console.log(name);
// };
// test();
// console.log(name);

//////////////

// const telegram = (name, surname = "") => {  ///default parametr
//   // if(surname){
//   //   console.log(name,surname);
//   // }else{
//   //   console.log(name);
//   // }

//   // surname ? console.log(name,surname):console.log(name); //ternary operation
//   console.log(name, surname);  // || ""
// };
// telegram("Webbrain");

///////////////

// const gpa=()=>{
//   return "okay?"
// }

// console.log(gpa());  ///undefined chiqadi

/////////////

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let temp = (a + b + c + d) / 4; //orta arifmetigi
//   console.log(temp);
//   return "okay?";
// };
// // console.log(gpa(4.5, 3, 3.5, 2));//3.25
// // console.log(gpa(4, 3.5, 4.5, 3));//3.75
// // console.log(gpa(3.5, 3, 2, 4));//3.124
// // console.log(gpa(2.5, 3.5, 4, 2));//3

// console.log(
//   gpa(4.5, 3, 3.5, 2) +
//     gpa(4, 3.5, 4.5, 3) +
//     gpa(3.5, 3, 2, 4) +
//     gpa(2.5, 3.5, 4, 2) / 4
// );

////////////////

// const getNum = (a) => {
//   // console.log(a);
//   // return a;  ///value return yozishimiz kerak valega birlashyapti returnda
//   let total = 193;
//   // console.log((a * 100) / total);
//   return (a * 100) / total; ///return degani verayblga biriktirib qoyilyapti degani
// };

// console.log(parseInt(getNum(159)));

///////

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let temp = (a + b + c + d) / 4; //orta arifmetigi
//   // console.log(temp);
//   return temp;
// };

// console.log(gpa(5, 3, 3, 2));  ///3.25 chiqadi

/////////////get+

// const getGpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let temp = (a + b + c + d) / 4; //orta arifmetigi
//   // console.log(temp);
//   return temp;
// };

// console.log(getGpa(5, 3, 3, 2));  ///3.25 chiqadi
