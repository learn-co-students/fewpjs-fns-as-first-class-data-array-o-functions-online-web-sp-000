function wakeDog(dogName, dogBreed) {
  let activity = `Wake ${dogName} the ${dogBreed}`;
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return activity;
}
function leashDog(dogName, dogBreed) {
  let activity = `Leash ${dogName} the ${dogBreed}`;
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return activity;
}
function walkToPark(dogName, dogBreed) {
  let activity = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return activity;
}
function throwFrisbee(dogName, dogBreed) {
  let activity = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return activity;
}
function walkHome(dogName, dogBreed) {
  let activity = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return activity;
}
function unleashDog(dogName, dogBreed) {
  let activity = `Unleash ${dogName} the ${dogBreed}`;
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return activity;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let array = [];
  for (let i = 0; i < routine.length; i++) {
    array.push(routine[i](dogName, dogBreed));
  }
  return array;
}
