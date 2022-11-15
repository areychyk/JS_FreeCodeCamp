//task_1

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//  if (strokes === 1) return names[0];

//   else if ((strokes - par) <= -2) return names[1];

//   else if ((strokes - par) === -1) return names[2];

//   else if (strokes === par) return names[3];

//   else if ((strokes - par) === 1) return names[4];

//   else if ((strokes - par) === 2) return names[5];

//   else return names[6];

//   // Only change code above this line
// }

// golfScore(5, 4);

//____________________________________________

// task 2_____________


// // Setup
// const testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
  
//   // Only change code below this line
//   const entreeValue = testObj['an entree'];   // Change this line
//   const drinkValue = testObj['the drink'];    // Change this line

//------------------------------------------

// // Setup
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
//   const playerNumber = 16;  // Change this line
//   const player = testObj[playerNumber];   // Change this line

//---------------------------------------------

// // Setup
// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
  
//   myDog.name = "Happy Coder";
//   // Only change code below this line

//------------------------------------

// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
  
//   myDog.bark = "gav-gav";

//----------------------------------


// Setup
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
//   delete myDog.tails;
  
  // Only change code below this line

//------------------------------



//task 3__________________________________

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if(obj.hasOwnProperty(checkProp)){
//     return obj[checkProp];
//   }else{
//     return "Not Found";}
  
//   // Only change code above this line
// }
  

//--------------------------------------

// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CS",
//       "8T",
//       "LP" ],
//     "gold": true
//   },
//   // Add record here
//   {
//     "artist": "Bob",
//     "title": "Hello",
//     "release_year": 1950,
//     "formats": [
//       "CS",
//       "8T"
//     ]
//   }
// ];