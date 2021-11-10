class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  bark() {
    console.log("Au-au");
  }
  getSumamry() {
    console.log(
      `O cachorro ${this.name} possui ${this.age} anos e é um ${this.breed}"`
    );
  }
}

const Zeus = new Dog("Zeus", 14, "Dobermann");
const Molly = new Dog("Molly", 6, "Dálmata");

Molly.bark();
Molly.getSumamry();
Zeus.bark();
Zeus.getSumamry();
