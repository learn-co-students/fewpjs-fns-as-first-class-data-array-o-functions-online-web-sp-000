function wakeDog(dogName, dogBreed) {
   console.log(`Wake ${dogName} the ${dogBreed}`);
   return `Wake ${dogName} the ${dogBreed}`
  }
  
function leashDog(dogName, dogBreed){
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}
    
function walkToPark(dogName, dogBreed){
    console.log(`Walk ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed){
    console.log(`Throw the frisbee to ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName,dogBreed){
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed){
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome,unleashDog] 

function exerciseDog(dogName,dogBreed){
    var new_array = []

    for (const value of routine) {
        new_array.push(value(dogName,dogBreed));
      }
    return new_array 
}