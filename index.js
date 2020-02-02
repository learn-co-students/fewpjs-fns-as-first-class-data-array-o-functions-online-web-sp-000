function wakeDog(name, breed) {
    let sentence = `Wake ${name} the ${breed}`
    console.log(sentence)
    return sentence
}

function leashDog(name, breed) {
    let sentence = `Leash ${name} the ${breed}`
    console.log(sentence)
    return sentence
}

function walkToPark(name, breed) {
    let sentence = `Walk to the park with ${name} the ${breed}`
    console.log(sentence)
    return sentence
}

function walkHome(name, breed) {
    let sentence = `Walk home with ${name} the ${breed}`
    console.log(sentence)
    return sentence
}

function throwFrisbee(name, breed) {
    let sentence = `Throw the frisbee for ${name} the ${breed}`
    console.log(sentence)
    return sentence
}

function unleashDog(name, breed) {
    let sentence = `Unleash ${name} the ${breed}`
    console.log(sentence)
    return sentence
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let array = []
    for (let i = 0; i < routine.length; i++) {
        let full = routine[i](dogName, dogBreed)
        full
        array.push(full)
    }
    return array
}