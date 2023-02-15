///yili boyicha tartib bilan chiqarish

let students = [
  { id: 1, year: 2003, name: "Abduvohidov Mirabbosbek" },
  { id: 2, year: 1996, name: "Abduvohidov YAxyobek" },
  { id: 3, year: 1998, name: "Abduvohidov Mirjalol" },
  { id: 4, year: 2003, name: "TUrgunpolatov javohir" },
  { id: 5, year: 2000, name: "Shavkatmirziyoyev Abdulahad" },
  { id: 6, year: 2003, name: "Toshpolatov Toshmat" },
  { id: 7, year: 2005, name: "Rejaboyev Rahmatillo" },
  { id: 8, year: 1999, name: "Ulugov Ulugbek" },
];
///crud

/////update qilish

const updateUSer = (data) => {
  let res = students.map((value) =>
    value.id === data.id ? { ...value } : value
  );
  students = res;
};

updateUSer({ id: 2, type: "Name", value: "shakarjon" });

console.log(students);

/////////////////////add qoshish bunda///////////////
// const addUser = (user) => {
//   students = [...students, { id: students.length + 1, ...user }];
//   students.push(user); //push qilish
// };
// addUser({ name: "webbrain", year: 2019 });
// console.log(students);

///////////////////////
/////////////////////////

// const sortByYear = () => {
//   let res = students.sort((a, b) => a.year - b.year); ///agar a va bni almashtirsak teskari tartibda chiqaradi
//   students = res;
// };

// const sortByAlphabet = () => {
//   let res = students.sort((a, b) => a.name.localeCompare(b.name)); ///alfabit taribda chiqarish
//   students = res;
// };

// const deleteUser = (id) => {
//   let res = students.filter((value) => value.id !== id);
//   students = res;
// };

// deleteUser(6);
// console.log(students);
// deleteUser();

// sortByAlphabet();
// sortByYear();
