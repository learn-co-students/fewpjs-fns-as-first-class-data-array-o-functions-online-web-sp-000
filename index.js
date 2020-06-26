let wakeDog = function(name, breed) {
    console.log(`Wake ${name} the ${breed}`);
    return `Wake ${name} the ${breed}`
}

let leashDog = function(name, breed) {
    console.log(`Leash ${name} the ${breed}`);
    return `Leash ${name} the ${breed}`
}

let walkToPark = function(name, breed) {
    console.log(`Walk to the park with ${name} the ${breed}`);
    return `Walk to the park with ${name} the ${breed}`
}

let throwFrisbee = function(name, breed) {
    console.log(`Throw the frisbee for ${name} the ${breed}`);
    return `Throw the frisbee for ${name} the ${breed}`
}

let walkHome = function(name, breed) {
    console.log(`Walk home with ${name} the ${breed}`);
    return `Walk home with ${name} the ${breed}`
}

let unleashDog = function(name, breed) {
    console.log(`Unleash ${name} the ${breed}`);
    return `Unleash ${name} the ${breed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}