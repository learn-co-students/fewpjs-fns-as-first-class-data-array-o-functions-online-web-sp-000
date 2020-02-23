let wakeDog = function (dogName, dogBreed) {
    let stg = `Wake ${dogName} the ${dogBreed}`
    console.log(stg);
    return stg;
}

let leashDog = function (dogName, dogBreed) {
    let stg = `Leash ${dogName} the ${dogBreed}`
    console.log(stg);
    return stg;
}

let walkToPark = function (dogName, dogBreed) {
    let stg = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(stg);
    return stg;
}

let throwFrisbee = function (dogName, dogBreed) {
    let stg = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(stg);
    return stg;
}

let walkHome = function (dogName, dogBreed) {
    let stg = `Walk home with ${dogName} the ${dogBreed}`
    console.log(stg);
    return stg;
}

let unleashDog = function (dogName, dogBreed) {
    let stg = `Unleash ${dogName} the ${dogBreed}`
    console.log(stg);
    return stg;
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    let arr = []
    routine.forEach(function(fn){
        arr.push(fn(dogName, dogBreed));
    });
    return arr;
}
