function wakeDog(dogName, dogBreed){
    const name = dogName
    const breed = dogBreed
    const msg = (`Wake ${name} the ${breed}`);
    console.log()
    return msg
}
function leashDog(dogName, dogBreed){
    const name = dogName
    const breed = dogBreed
    const msg = (`Leash ${name} the ${breed}`);
    console.log(msg)
    return msg
}
function walkToPark(dogName, dogBreed){
    const name = dogName
    const breed = dogBreed
    const msg = (`Walk to the park with ${name} the ${breed}`);
    console.log(msg)
    return msg
}
function throwFrisbee(dogName, dogBreed){
    const name = dogName
    const breed = dogBreed
    const msg = `Throw the frisbee for ${name} the ${breed}`;
    console.log(msg)
    return msg
}
function walkHome(dogName, dogBreed){
    const name = dogName
    const breed = dogBreed
    const msg = (`Walk home with ${name} the ${breed}`);
    console.log(msg)
    return msg
}
function unleashDog(dogName, dogBreed){
    const name = dogName
    const breed = dogBreed
    const msg = (`Unleash ${name} the ${breed}`);
    console.log(msg)
    return msg
}

const routine = [wakeDog(name, breed), leashDog(name, breed), walkToPark(name, breed), throwFrisbee(name, breed), walkHome(name, breed), unleashDog(name, breed)];
