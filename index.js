function wakeDog(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

// function that runs the array o' functions
// calls into the independent functions
function exerciseDog(dogName, dogBreed) {
  for (let i = 0; i < routine.length; i++) {
    routine[i] = routine[i](dogName, dogBreed);
  };
  return routine  
  
  // Alternate solution:
  // return routine.map(function(fn) {
  //   return fn(dogName, dogBreed);
  // });
}