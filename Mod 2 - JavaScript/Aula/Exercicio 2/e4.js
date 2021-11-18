const people = [
  {
    name: "Angelina Jolie",
    age: 80,
    weight: 55,
    height: 1.79,
  },
  {
    name: "Eric Jones",
    age: 28,
    weight: 100,
    height: 1.6,
  },
  {
    name: "Paris Hilton",
    age: 34,
    weight: 79,
    height: 1.65,
  },
  {
    name: "Kayne West",
    age: 26,
    weight: 83,
    height: 1.83,
  },
  {
    name: "Bob Ziroll",
    age: 90,
    weight: 60,
    height: 1.65,
  },
];

//calbacks
const addingBMI = (obj) => (obj.bmi = obj.weight / obj.height ** obj.height);
const classifyingBMI = (obj) => {
  if (obj.bmi > 25 || obj.bmi < 18.5)
    obj.classification = "fora da faixa Normal";
  else {
    obj.classification = "Normal";
  }
};
//maps implementation
people.map(addingBMI);
people.map(classifyingBMI);
console.log(people);
