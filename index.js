function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function walkToPark (dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function throwFrisbee (dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function walkHome (dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function unleashDog (dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
// An array of functions does not need the ()


function exerciseDog (dogName, dogBreed) {
    // OLD AND BUSTED/ LONG WAY 
    let exercise = [];
    // Create an empty array
    
    routine.forEach(function(f) {
        // f = each function 
        exercise.push(f(dogName, dogBreed));
        // f(args must be written out)
    });

    return exercise;
    // Return the array of return values
}

// NEW HOTNESS / SHORT WAY
// return routine.map(f => f(dogName, dogBreed));