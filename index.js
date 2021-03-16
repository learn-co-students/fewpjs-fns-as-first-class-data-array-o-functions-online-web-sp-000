function wakeDog(dogName, dogBreed) {
    let out_str = `Wake ${dogName} the ${dogBreed}`
    console.log(out_str);
    return out_str
}
function leashDog(dogName, dogBreed) {
    let out_str = `Leash ${dogName} the ${dogBreed}`
    console.log(out_str);
    return out_str
}
function walkToPark(dogName, dogBreed) {
    let out_str = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(out_str);
    return out_str
}
function throwFrisbee(dogName, dogBreed) {
    let out_str = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(out_str);
    return out_str
}
function walkHome(dogName, dogBreed) {
    let out_str = `Walk home with ${dogName} the ${dogBreed}`
    console.log(out_str);
    return out_str
}
function unleashDog(dogName, dogBreed) {
    let out_str = `Unleash ${dogName} the ${dogBreed}`
    console.log(out_str);
    return out_str
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let exercise_arr = []
    for (let i = 0; i<routine.length; i++) {
        let curr_out = routine[i](dogName, dogBreed)
        exercise_arr.push(curr_out)
    }
    return exercise_arr
}