function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
    // return s;
}

function leashDog(dogName, dogBreed) {
    let s = `Leash ${dogName} the ${dogBreed}`;
    return s;
}

function walkToPark(dogName, dogBreed) {
    let s = `Walk to the park with ${dogName} the ${dogBreed}`;
    return s;
}

function throwFrisbee(dogName, dogBreed) {
    let s = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return s;
}

function walkHome(dogName, dogBreed) {
    let s = `Walk home with ${dogName} the ${dogBreed}`;
    return s;
}

function unleashDog(dogName, dogBreed) {
    let s = `Unleash ${dogName} the ${dogBreed}`;
    return s;
}

let routine = [
    wakeDog, 
    leashDog, 
    walkToPark, 
    throwFrisbee, 
    walkHome, 
    unleashDog
];

function exerciseDog(dogName, dogBreed) {
    let listActivity = [];
    for (let i = 0; i < routine.length; i++) {
        listActivity.push(routine[i](dogName,dogBreed));
      }
    return listActivity;
}


