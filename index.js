// ## Create the Array o' Functions
//
// Continue writing _"generalized"_ functions for
//
// * `wakeDog`
// * `leashDog`
// * `walkToPark`
// * `throwFrisbee`
// * `walkHome`
// * `unleashDog`

// function sayHello() {
//    return function() {
//       console.log("Hello!");
//    }
// }
//


function wakeDog(dogName, dogBreed) {
  return(`Wake ${dogName} the ${dogBreed}`)
};

function leashDog(dogName, dogBreed) {
  return(`Leash ${dogName} the ${dogBreed}`)
}

function walkToPark(dogName, dogBreed) {
  return(`Walk to the park with ${dogName} the ${dogBreed}`)
}

function throwFrisbee(dogName, dogBreed) {
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`)
}

function walkHome(dogName, dogBreed) {
  return(`Walk home with ${dogName} the ${dogBreed}`)
}

function unleashDog(dogName, dogBreed) {
  return(`Unleash ${dogName} the ${dogBreed}`)
}


let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,  unleashDog]

// array1.forEach(element => console.log(element));

function exerciseDog(dogName, dogBreed){
  let new_array = []

   routine.forEach(action => new_array.push(action(dogName,dogBreed))
 )
 return (new_array)

}




// ## Create the Array o' Functions
//
// Next, create our "Array o' Functions!" Create a variable called `routine`. This
// variable will be an `Array` all of the functions we've just defined.
//
// ## Create a Function to Process the Array o' Functions
//
// Lastly, create the function called `exerciseDog` that will take in two
// arguments:
//
// * `dogName`
// * `dogBreed`
//
// The function's implementation should
//
// * Iterate over the `routine` `Array`
// * Call each function in the array and
// * pass the `dogName` and `dogBreed` received by `exerciseDog()` to the function as they are _called_
// * capture the result of each function's call
// * return an `Array` of all those functions' return values
//


// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");
// ```
