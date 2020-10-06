
function wakeDog(dogName, dogBreed) {
  let myString = `Wake ${dogName} the ${dogBreed}`
  console.log(myString);
  return myString
}

function leashDog(dogName, dogBreed) {
  let myString = `Leash ${dogName} the ${dogBreed}`
  console.log(myString);
  return myString
}

function walkToPark(dogName, dogBreed) {
  let myString = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(myString);
  return myString
}

function throwFrisbee(dogName, dogBreed) {
  let myString = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(myString);
  return myString
}

function walkHome(dogName, dogBreed) {
  let myString = `Walk home with ${dogName} the ${dogBreed}`
  console.log(myString);
  return myString
}

function unleashDog(dogName, dogBreed) {
  let myString = `Unleash ${dogName} the ${dogBreed}`
  console.log(myString);
  return myString
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed){
  let myReturn = []
  for (let i = 0; i < routine.length; i++){
    myReturn.push(routine[i](dogName, dogBreed))
  }
  return myReturn
}