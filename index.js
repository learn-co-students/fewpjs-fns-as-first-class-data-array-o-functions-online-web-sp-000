function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`; // To avoid repetition within the function, I created a 'var' named 'string' and set it equal to the message.
    console.log(string);
    return string;
}

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
} 

function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
] // Note: I had to use 'const' to define the array.

function exerciseDog(dogName, dogBreed) {
    return routine.map(task => task(dogName, dogBreed))
}

// Breakdown of the last function:
// 1. We use the 'map' command to iterate over our 'routine' array, modifying each element and returning a new array.
// 2. With map, we have a callback, in this case 'task', to represent the functions we are iterating over.
// 3. This 'task' accepts our 2 arguments from the exerciseDog function, and applies those inputs to each function in the 'routine' array.
// 4. Finally, we 'return' the results of this action.