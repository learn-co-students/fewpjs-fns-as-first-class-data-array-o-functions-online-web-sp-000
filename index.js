function wakeDog(dogName, dogBreed) {
    let s = `Wake ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
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

function routine(dogName, dogBreed) {
    wakeDog(dogName, dogBreed);
    leashDog(dogName, dogBreed);
    walkToPark(dogName, dogBreed);
    throwFrisbee(dogName, dogBreed);
    walkHome(dogName, dogBreed);
    unleashDog(dogName, dogBreed);
}