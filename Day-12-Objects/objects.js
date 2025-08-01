console.log('Day 12 - JavaScript Objects');

let user = {
    name: "Rishindra", //if no special character present, JS will coerce the key to string
    age: 20,
    "is admin" : true
};

console.log(user.name); //"Rishindra"
console.log(user.age); //20

user.isUnderAge = false;

console.log(user); // name, age, isUnderAge

console.log(user["is admin"]); //To retreive value from special charactered key

user["game lover"] = true; //adding special character key to object

user.age = 21; //cahnging value of a key

//delete user.isUnderAge; //deleting a key-value pair
console.log(user);

const someKey = "age"; //someKey is dynamically populated - assigned at runtime. No hardcoding

// console.log(user.someKey) -> wrong syntax as js assumes user has property called someKey

console.log(user[someKey]); // similar method that is used to access special charactered property

let car = prompt("Which is your favourite car ? : ") 
let number = prompt("How many " + car + " cars do you want ? : ")

let favCars = {
    [car] : number //not hardcoded key but dynamically taken from user or variable
};

console.log(favCars);

// Constructor Function

function Car (name, model) { //parameters (not arguments)
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1"); //arguments
const audiCar = new Car("AUDI", "A8");
console.log((bmwCar)); //also specifies what kind of object it is because of the constructor
console.log(audiCar)