const wakeDog = function wakeDog(dogName, dogBreed) {
    const wakeString = `Wake ${dogName} the ${dogBreed}` 
    console.log(wakeString);
    return wakeString;
}

const leashDog = function leashDog(dogName, dogBreed) {
    const leashString = `Leash ${dogName} the ${dogBreed}`
    console.log(leashString);
    return leashString;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
    const walkToParkString = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walkToParkString);
    return walkToParkString;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    const throwFrisbeeString = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throwFrisbeeString);
    return throwFrisbeeString;
}

const walkHome = function walkHome(dogName, dogBreed) {
    const walkHomeString = `Walk home with ${dogName} the ${dogBreed}`
    console.log(walkHomeString);
    return walkHomeString;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
    const unleashDogString = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleashDogString);
    return unleashDogString;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog] 

function exerciseDog(dogName, dogBreed) {
    const messages = [];

    for (let i = 0; i < routine.length; i++) {
        const action = routine[i](dogName, dogBreed)
        messages.push(action)
    }
    return messages;
}