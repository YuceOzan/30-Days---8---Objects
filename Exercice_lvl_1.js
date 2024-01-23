
// 1. CREATE EMPTY OBJECT

const dog = {};

// 2. PRINT OBJECT

console.log(dog);

// 3. ADD: NAME, LEGS, COLOR, AGE, BARK

dog.nameOfDog = "Ares";
dog.legs = 4;
dog.color = "black & brown";
dog.age = 11;
dog.bark = function () {
    return "woof woof";
};

// 4. GET: NAME, LEGS, COLOR, AGE, BARK

console.log("Name:", dog.nameOfDog);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// 5. SET NEW PROPERTIES: BREED, GETDOGINFO

dog.breed = "Rottweiler";
dog.getDogInfo = function () {
    return `His name was ${this.nameOfDog}, he was a regular ${this.breed} with ${this.legs} legs.\nHe was pretty old, he was ${this.age}. He was ${this.color} and to communicate he used to make the sound ${this.bark()}.`
};

// 6. PRINT DOG INFO

console.log(dog.getDogInfo());
