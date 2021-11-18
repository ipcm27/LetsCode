const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

//calback
const isMember = (x) => x.member == true;

const onlyMembers = people.filter(isMember);
console.log(onlyMembers);
