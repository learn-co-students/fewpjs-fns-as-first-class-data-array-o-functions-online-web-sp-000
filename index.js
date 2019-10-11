const wakeDog = function(dogName, dogBreed) {
  const returnString = `Wake ${dogName} the ${dogBreed}`;
  console.log(returnString);
  return returnString;
}

const leashDog = function(dogName, dogBreed) {
  const returnString = `Leash ${dogName} the ${dogBreed}`;
  console.log(returnString);
  return returnString;
}

const walkToPark = function(dogName, dogBreed) {
  const returnString = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(returnString);
  return returnString;
}

const throwFrisbee = function(dogName, dogBreed) {
  const returnString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(returnString);
  return returnString;
}

const walkHome = function(dogName, dogBreed) {
  const returnString = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(returnString);
  return returnString;
}

const unleashDog = function(dogName, dogBreed) {
  const returnString = `Unleash ${dogName} the ${dogBreed}`;
  console.log(returnString);
  return returnString;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

const exerciseDog = function(dogName, dogBreed) {
  const returnArray = [];
  for (let i = 0; i < routine.length; i++) {
    returnArray.push(routine[i](dogName, dogBreed));
  }
  return returnArray;
}
