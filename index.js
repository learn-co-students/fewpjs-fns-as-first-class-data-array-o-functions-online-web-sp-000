function wakeDog(dogName, dogBreed) {
    const message = `Wake ${dogName} the ${dogBreed}`; 
    console.log(message); 
    return message; 
}

function leashDog(dogName, dogBreed) {
    const message = `Leash ${dogName} the ${dogBreed}`; 
    console.log(message); 
    return message; 
}

function walkToPark(dogName, dogBreed) {
    const message = `Walk to the park with ${dogName} the ${dogBreed}`; 
    console.log(message); 
    return message; 
}

function throwFrisbee(dogName, dogBreed) {
    const message = `Throw the frisbee for ${dogName} the ${dogBreed}`; 
    console.log(message); 
    return message; 
}

function walkHome(dogName, dogBreed) {
    const message = `Walk home with ${dogName} the ${dogBreed}`; 
    console.log(message); 
    return message; 
}

function unleashDog(dogName, dogBreed) {
    const message = `Unleash ${dogName} the ${dogBreed}`; 
    console.log(message); 
    return message; 
}

// const dogName = 'Byron';
// const dogBreed = 'poodle'; 
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
function exerciseDog(dogName, dogBreed) {
    const tasks = []; 
    for (let i = 0; i < routine.length; i++) {
        let task = routine[i](dogName, dogBreed);
        tasks.push(task); 
    }
    return tasks; 
}

// alternate method of niceness 
function exerciseDog2(dogName, dogBreed) {
    return routine.map(fxn => fxn(dogName, dogBreed)); 
}