function wakeDog(dogName, breed) {
    let output = `Wake ${dogName} the ${breed}`; 
    console.log(output);
    return output
}
function leashDog(dogName, breed) {
    let output = `Leash ${dogName} the ${breed}`; 
    console.log(output);
    return output
}
function walkToPark(dogName, breed) {
    let output = `Walk to the park with ${dogName} the ${breed}`; 
    console.log(output);
    return output
}
function throwFrisbee(dogName, breed) {
    let output = `Throw the frisbee for ${dogName} the ${breed}`; 
    console.log(output);
    return output
}
function walkHome(dogName, breed) {
    let output = `Walk home with ${dogName} the ${breed}`; 
    console.log(output);
    return output
}
function unleashDog(dogName, breed) {
    let output = `Unleash ${dogName} the ${breed}`; 
    console.log(output);
    return output
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    let results = [];
    for (let i = 0; i < routine.length; i++) {
        results.push(routine[i](dogName, dogBreed));
    }
    return results
}