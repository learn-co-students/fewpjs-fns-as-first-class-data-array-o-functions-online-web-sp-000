function wakeDog(dogName, breed){
    let returnString = `Wake ${dogName} the ${breed}`;
    console.log(returnString);
    return returnString;
}

function leashDog(dogName, breed){
    let returnString = `Leash ${dogName} the ${breed}`;
    console.log(returnString);
    return returnString;
}

function walkToPark(dogName, breed){
    let returnString = `Walk to the park with ${dogName} the ${breed}`;
    console.log(returnString);
    return returnString;
}

function throwFrisbee(dogName, breed){
    let returnString = `Throw the frisbee for ${dogName} the ${breed}`;
    console.log(returnString);
    return returnString;
}

function walkHome(dogName, breed){
    let returnString = `Walk home with ${dogName} the ${breed}`;
    console.log(returnString);
    return returnString;
}

function unleashDog(dogName, breed){
    let returnString = `Unleash ${dogName} the ${breed}`;
    console.log(returnString);
    return returnString;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, breed){
   return routine.map(f => f(dogName, breed))
}
