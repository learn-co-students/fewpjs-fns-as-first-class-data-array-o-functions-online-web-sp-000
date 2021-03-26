function wakeDog(dogName, dogBreed) {
  const statement = `Wake ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement
};

function leashDog(dogName, dogBreed) {
  const statement = `Leash ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement
};

function walkToPark(dogName, dogBreed) {
  const statement = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement
};

function throwFrisbee(dogName, dogBreed) {
  const statement = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement
};

function walkHome(dogName, dogBreed) {
  const statement = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement
};

function unleashDog(dogName, dogBreed) {
  const statement = `Unleash ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement
};

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const writtenRoutine = [];

  let routine = [wakeDog(dogName, dogBreed), leashDog(dogName, dogBreed), walkToPark(dogName, dogBreed), throwFrisbee(dogName, dogBreed), walkHome(dogName, dogBreed), unleashDog(dogName, dogBreed)];

  for (let i = 0; i < routine.length; i++) {
    let process;
    process = routine[i];
    writtenRoutine.push(process);
  };

  return writtenRoutine
};
