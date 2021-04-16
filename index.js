let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const messages = [];
    for (let i = 0; i < routine.length; i++) {
    const activity = routine[i](dogName, dogBreed)
    messages.push(activity)
}
return messages
}

function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
}
const walkResult = wakeDog(dogName, dogBreed);
console.log(walkResult)

function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
}
const leashResult = leashDog(dogName, dogBreed);
console.log(leashResult)

function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}
const parkResult = walkToPark(dogName, dogBreed);
console.log(parkResult)

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
const frisbeeResult = throwFrisbee(dogName, dogBreed);
console.log(frisbeeResult)

function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
}
const homeResult = walkHome(dogName, dogBreed);
console.log(homeResult)

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
}
const unleashResult = unleashDog(dogName, dogBreed);
console.log(unleashResult)


