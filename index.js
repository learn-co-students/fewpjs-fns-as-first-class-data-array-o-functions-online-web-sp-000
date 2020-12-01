function wakeDog (dogName, dogBreed) {
  let sent = `Wake ${dogName} the ${dogBreed}`;
  console.log(sent);
  return sent
}

function leashDog (dogName, dogBreed) {
  let sent = `Leash ${dogName} the ${dogBreed}`;
  console.log(sent);
  return sent
}

function walkToPark (dogName, dogBreed) {
  let sent = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(sent);
  return sent
}

function throwFrisbee (dogName, dogBreed) {
  let sent = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(sent);
  return sent
}

function walkHome (dogName, dogBreed) {
  let sent = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(sent);
  return sent
}

function unleashDog (dogName, dogBreed) {
  let sent = `Unleash ${dogName} the ${dogBreed}`;
  console.log(sent);
  return sent
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog (dog, breed) {
  return routine.map(fn => fn(dog, breed))
}

console.log(exerciseDog)
