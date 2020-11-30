function wakeDog(dogName = "Byron", dogBreed = "Puggle") {
    const string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;   
}
function leashDog(dogName = "Byron", dogBreed = "Puggle") {
    const string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;   
}
function walkToPark(dogName = "Byron", dogBreed = "Puggle") {
    const string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;   
}

function throwFrisbee(dogName = "Byron", dogBreed = "Puggle") {
    const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;   
}
function walkHome(dogName = "Byron", dogBreed = "Puggle") {
    const string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;   
}

function unleashDog(dogName = "Byron", dogBreed = "Puggle") {
    const string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;   
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    return routine.map(task => task(dogName, dogBreed));
}