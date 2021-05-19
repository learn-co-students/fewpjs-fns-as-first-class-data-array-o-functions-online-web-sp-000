function wakeDog(name, breed) {
    return `Wake ${dogName(name, breed)}`
}

function leashDog(name, breed) {
    return `Leash ${dogName(name, breed)}`
}

function walkToPark(name, breed) {
    return `Walk to the park with ${dogName(name, breed)}`
}

function throwFrisbee(name, breed) {
    return `Throw the frisbee for ${dogName(name, breed)}`
}

function walkHome(name, breed) {
    return `Walk home with ${dogName(name, breed)}`
}

function unleashDog(name, breed) {
    return `Unleash ${dogName(name, breed)}`
}

function dogName(name, breed) {
    return `${name} the ${breed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed) {
    let arr = []

    for (let i = 0; i < routine.length; i++) {
        let str = routine[i](name, breed)
        arr.push(str)
    }

    return arr
}