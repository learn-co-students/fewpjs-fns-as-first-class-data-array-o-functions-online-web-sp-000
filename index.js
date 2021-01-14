function wakeDog(name, breed){
    let thing = `Wake ${name} the ${breed}` 
console.log(thing);
return thing;
}

function leashDog(name, breed){
    let thing = `Leash ${name} the ${breed}` 
console.log(thing);
return thing;
}

function walkToPark(name, breed){
    let thing = `Walk to the park with ${name} the ${breed}` 
console.log(thing);
return thing;
}

function throwFrisbee(name, breed){
    let thing = `Throw the frisbee for ${name} the ${breed}` 
console.log(thing);
return thing;
}

function walkHome(name, breed){
    let thing = `Walk home with ${name} the ${breed}` 
console.log(thing);
return thing;
}

function unleashDog(name, breed){
    let thing = `Unleash ${name} the ${breed}` 
console.log(thing);
return thing;
}

let routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog( dogName, dogBreed){
    let ary = [];
for(let x = 0; x < routine.length; x++){
    ary.push(routine[x]( dogName, dogBreed ));
}
return ary
}