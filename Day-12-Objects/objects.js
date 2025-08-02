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

console.log(bmwCar instanceof Car);

const person = new Object();
person.name = "Asutosh";
person.age = 20;
console.log(person);

function createUser(name, age) { // everytime a new object is returned
    return {
        name,  //Object shorthand used because no key pair value formed but returned as key-value pair
        age,
        greet() {
            console.log(this.name);
        },
        message : function() {
            console.log(`${this.name} is idiot`);
        }

        /* This code will produce the same result if the parameters are used as keys
        name : name, 
        age : age
        */
    }
}

const user1 = createUser("Rishi", 20);
const user2 = createUser("Adharsh", 20);
user1.message();
console.log((user1, user2));

//start from 31:51 Nested Objects

let profile = {
    name: "Rishindra",
    college: "VIT-AP",
    message: function() {
        console.log(`{this.name} studies at ${this.college}`);
    },
    address: {
        city: "Raipur",
        pin: 492001,
        state: "Chhattisgarh",
        country: "India",
        greeting: function() {
            console.log(`Welcome to ${this.country}`);
        }
    },
    //salary: 5000
    salary: undefined // although property exists it will still go to !profile.salary
};

console.log(profile.address.pin);
profile.address.greeting();

console.log(profile.salary); //undefined

console.log("salary" in profile);

if (!profile.salary) { //not undefined is true
    console.log("the salary property does not exist");
}

for (let key in profile) {
    console.log(key);
    console.log(profile[key]);
}

console.log(Object.keys(profile));

let fruit = {name: "Mango"}; //XA01 -> address where fruit's value is stored
let anotherFruit = {name: "Mango"}; //YB01 -> address where anotherFruit's value is stored

console.log(fruit == anotherFruit);  // false
console.log(fruit === anotherFruit); // false

fruit = anotherFruit;

console.log(fruit == anotherFruit);  // true
console.log(fruit === anotherFruit); // true

// static methods

const target = {p:1, a:2}; //override will happen because of same variable
const source = {a:3, b:5};

const returnedObj = Object.assign(target, source);
console.log(returnedObj);