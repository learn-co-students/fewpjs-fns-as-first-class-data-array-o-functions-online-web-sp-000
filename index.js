
function wakeDog(dogName, dogBreed) {
    let says = `Wake ${dogName} the ${dogBreed}`;
    console.log(says);
    return says
}

function leashDog(dogName, dogBreed) {
    let says = `Leash ${dogName} the ${dogBreed}`;
    console.log(says);
    return says;
}

function walkToPark(dogName, dogBreed) {
    let says = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(says);
    return says;
}

function throwFrisbee(dogName, dogBreed) {
    let says = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(says);
    return says;
}

function walkHome(dogName, dogBreed) {
    let says = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(says);
    return says;

}

function unleashDog(dogName, dogBreed) {
    let says = `Unleash ${dogName} the ${dogBreed}`;
    console.log(says);
    return says;
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    let newArray =[];
   for(let i = 0; i < routine.length; i++ ) {
        newArray.push(routine[i](dogName, dogBreed));
    }
    return newArray
}
