
function wakeDog(dogName, dogBreed) {
  let actionString = `Wake ${dogName} the ${dogBreed}`;
  console.log(actionString);
  return actionString;
}

function leashDog(dogName, dogBreed) {
  let actionString = `Leash ${dogName} the ${dogBreed}`;
  console.log(actionString);
  return actionString;
}

function walkToPark(dogName, dogBreed) {
  let actionString = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(actionString);
  return actionString;
}

function throwFrisbee(dogName, dogBreed) {
  let actionString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(actionString);
  return actionString;
}

function walkHome(dogName, dogBreed) {
  let actionString = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(actionString);
  return actionString;
}

function unleashDog(dogName, dogBreed) {
  let actionString = `Unleash ${dogName} the ${dogBreed}`;
  console.log(actionString);
  return actionString;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let exerciseArrayOfStrings = [];
  for (let i = 0; i < routine.length; i ++) {
    let exerciseString = routine[i](dogName, dogBreed);
    exerciseArrayOfStrings.push(exerciseString);
  }
  return exerciseArrayOfStrings;
}