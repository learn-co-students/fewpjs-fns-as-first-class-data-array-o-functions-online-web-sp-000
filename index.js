function wakeDog(dogName, dogBreed) {
  const walkDogString = `Wake ${dogName} the ${dogBreed}`
  console.log(walkDogString);
  return walkDogString
}

function leashDog(dogName, dogBreed) {
  const leashDogString = `Leash ${dogName} the ${dogBreed}`
  console.log(leashDogString);
  return leashDogString
}

function walkToPark(dogName, dogBreed) {
  const walkToParkString = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(walkToParkString);
  return walkToParkString
}

function throwFrisbee(dogName, dogBreed) {
  const throwFrisbeeString = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(throwFrisbeeString);
  return throwFrisbeeString
}

function walkHome(dogName, dogBreed) {
  const walkHomeString = `Walk home with ${dogName} the ${dogBreed}`
  console.log(walkHomeString);
  return walkHomeString
}

function unleashDog(dogName, dogBreed) {
  const unleashDogString = `Unleash ${dogName} the ${dogBreed}`
  console.log(unleashDogString);
  return unleashDogString
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  let exerciseArray = []
  for (let i = 0; i < routine.length; i++){
    exerciseArray.push(routine[i](dogName, dogBreed))
  }
  return exerciseArray
}
