let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

function PrintDeveloper() {
  const developers = arr.filter(per => per.profession === 'developer');
  console.log('Developers:');
  console.log(developers);
}

function addData() {
  const id = parseInt(prompt("Enter ID"));
  const name = prompt("Enter Name");
  const age = parseInt(prompt("Enter Age"));
  const profession = prompt("Enter Profession");
  const salary = parseFloat(prompt("Enter salary"));

  const data = { "id": id, "name": name, "age": age, "profession": profession, "salary": salary };
  arr.push(data);
}

function removeAdmin() {
  const data = arr.filter(per => per.profession !== 'admin');
  console.log('Admins:');
  console.log(data);
}


function concatenateArray() {
  let dummyArray = [
    { id: 70, name: 'john', age: 18, profession: 'developer', salary: 1000 },
    { id: 80, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 90, name: 'karen', age: 19, profession: 'admin', salary: 900 },
  ];

  const concatenetedArray = arr.concat(dummyArray);

  console.log('Concatenated Array:');
  console.log(concatenetedArray);

}

function averageAge() {
  const sumOfAges = arr.reduce((total, person) => total + person.age, 0);
  const average = sumOfAges / arr.length;
  console.log('Average Age:', average);
}

function checkAgeAbove25() {
  const isAbove25 = arr.some(person => person.age > 25);
  if (isAbove25) {
    console.log('There is at least one person above the age of 25.');
  } else {
    console.log('There is no person above the age of 25.');
  }
}

function uniqueProfessions() {
  const uniqueProfessionsSet = new Set();
  arr.forEach(person => uniqueProfessionsSet.add(person.profession));
  const uniqueProfessionsArray = [...uniqueProfessionsSet];
  console.log('Unique Professions:', uniqueProfessionsArray);
}

function sortByAge()
 {
  arr.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age (Ascending):', arr);
}

function updateJohnsProfession() {
  const johnIndex = arr.findIndex(person => person.name === 'john');
  if (johnIndex !== -1) {
    arr[johnIndex].profession = 'manager';
    console.log("'John's profession updated to 'manager'.");
  } else {
    console.log('Person with name "john" not found.');
  }
}

function getTotalProfessions() {
  const developers = arr.filter(person => person.profession === 'developer');
  const admins = arr.filter(person => person.profession === 'admin');
  console.log('Total Developers:', developers.length);
  console.log('Total Admins:', admins.length);
}


