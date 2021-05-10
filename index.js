function wakeDog(name, breed) {
    let phrase = `Wake ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}

function leashDog(name, breed) {
    let phrase = `Leash ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}

function walkToPark(name, breed) {
    let phrase = `Walk to the park with ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}

function throwFrisbee(name, breed) {
    let phrase = `Throw the frisbee for ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}

function walkHome(name, breed) {
    let phrase = `Walk home with ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}

function unleashDog(name, breed) {
    let phrase = `Unleash ${name} the ${breed}`;
    console.log(phrase);
    return phrase;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed) {
    let result = [];
    for (let i = 0; i < routine.length; i++) {
        result.push(routine[i](name, breed));
    }
    return result;
}


