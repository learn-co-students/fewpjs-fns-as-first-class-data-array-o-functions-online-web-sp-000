let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function wakeDog(dogName, dogBreed) {
    let text = `Wake ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function leashDog(dogName, dogBreed) {
    let text = `Leash ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function walkToPark(dogName, dogBreed) {
    let text = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function throwFrisbee(dogName, dogBreed) {
    let text = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function walkHome(dogName, dogBreed) {
    let text = `Walk home with ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function unleashDog(dogName, dogBreed) {
    let text = `Unleash ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function exerciseDog(dogName, dogBreed) {
    let results = [];
    for (let i = 0; i < routine.length; i++) {
        results.push(routine[i](dogName, dogBreed))
    }
    return results
}

