let name = "";
let food = "";
let transport = "";
let animal = "";

function getUserInfo() {
  while (!name) {
    name = prompt("What is your name?");
  }
  console.log("User's name is: " + name);
  while (!food) {
    food = prompt("What is your favourite food?");
  }
  console.log("User's favourite food is: " + food);
  while (!transport) {
    transport = prompt("What is your favourite method of transport?");
  }
  console.log("User's preferred method of transport is: " + transport);
  while (!animal) {
    animal = prompt("What is your favourite animal?");
  }
  console.log("User's favourite animal is: " + animal);
}

getUserInfo();

alert(
  "Welcome, " +
    name +
    "! " +
    food +
    " is yummy, I agree and " +
    transport +
    " is a fine way to get around. " +
    "Aw, " +
    animal +
    "s are so cute!"
);
