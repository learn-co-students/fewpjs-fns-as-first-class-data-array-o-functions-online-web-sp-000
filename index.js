function wakeDog(dog, breed) {
  const str = `Wake ${dog} the ${breed}`;
  console.log(str);
  return str;
}

function leashDog(dog, breed) {
  const str = `Leash ${dog} the ${breed}`;
  console.log(str);
  return str;
}

function walkToPark(dog, breed) {
  const str = `Walk to the park with ${dog} the ${breed}`;
  console.log(str);
  return str;
}

function throwFrisbee(dog, breed) {
  const str = `Throw the frisbee for ${dog} the ${breed}`;
  console.log(str);
  return str;
}

function walkHome(dog, breed) {
  const str = `Walk home with ${dog} the ${breed}`;
  console.log(str);
  return str;
}

function unleashDog(dog, breed) {
  const str = `Unleash ${dog} the ${breed}`;
  console.log(str);
  return str;
}

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

function exerciseDog(dogName, dogBreed) {
  let routineMessages = [];
  for (let i = 0; i < routine.length; i++) {
    routineMessages.push(routine[i](dogName, dogBreed));
  }
  return routineMessages;
}
