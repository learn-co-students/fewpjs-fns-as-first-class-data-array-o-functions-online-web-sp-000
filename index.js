function wakeDog(dogName, dogBreed) {
    const returnString = `Wake ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function leashDog(dogName, dogBreed) {  
    const returnString = `Leash ${dogName} the ${dogBreed}`
    console.log(returnString);
    return returnString;
}

function walkToPark(dogName, dogBreed) {
    const returnString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function throwFrisbee(dogName, dogBreed) {
    const returnString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function walkHome(dogName, dogBreed) {
    const returnString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function unleashDog(dogName, dogBreed) {
    const returnString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let valuesArray = [];
    for (let i = 0; i < routine.length; i++) {
        const iterationFunction = routine[i]
        const valueReturned = iterationFunction(dogName, dogBreed);
        valuesArray.push(valueReturned);
    }
    return valuesArray;
}