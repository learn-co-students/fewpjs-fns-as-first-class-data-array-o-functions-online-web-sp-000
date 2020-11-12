function wakeDog(dogName, dogBreed) {
    let stuff = (`Wake ${dogName} the ${dogBreed}`);
    console.log(stuff);
    return stuff;
}

function leashDog(dogName, dogBreed) {
    let stuff = (`Leash ${dogName} the ${dogBreed}`);
    console.log(stuff);
    return stuff;
}

function walkToPark(dogName, dogBreed) {
    let stuff = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(stuff);
    return stuff;
}

function throwFrisbee(dogName, dogBreed) {
    let stuff = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(stuff);
    return stuff;
}

function walkHome(dogName, dogBreed) {
    let stuff = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(stuff);
    return stuff;
}

function unleashDog(dogName, dogBreed) {
    let stuff = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(stuff);
    return stuff;
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(v => v(dogName, dogBreed))
}