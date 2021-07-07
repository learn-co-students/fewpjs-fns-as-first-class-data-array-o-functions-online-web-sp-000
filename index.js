function wakeDog(dogName, dogBreed){
    let messageDog = `Wake ${dogName} the ${dogBreed}`;
    console.log(messageDog);
    return messageDog;
}

function leashDog(dogName, dogBreed){

    let messageDog =`Leash ${dogName} the ${dogBreed}`;
    console.log(messageDog);
    return messageDog;
}
 
function walkToPark(dogName,dogBreed){
    let messageDog =`Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(messageDog);
    return messageDog;
}

function throwFrisbee(dogName,dogBreed){
    let messageDog = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(messageDog);
    return messageDog;
}
function walkHome(dogName, dogBreed){
    let message = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(message)
    return message;
}
function unleashDog(dogName, dogBreed){
    let message =`Unleash ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
}
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee,walkHome,unleashDog]



function exerciseDog (dogName, dogBreed){
return routine.map(fn => fn(dogName,dogBreed))

}





// function exerciseDog(dogName, dogBreed){
//     for (let i = 0 ; i > routine.length; i++){
//         console.log (routine[i])
//         array2.push(exerciseDog)
//     }
//     return array2;
// }

