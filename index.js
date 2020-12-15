function wakeDog(dogName, dogBreed) {

  let string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
  return string

}

function leashDog(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`
  console.log(string)
  return string}

function walkToPark(dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(string)
  return string}

function throwFrisbee(dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function walkHome(dogName, dogBreed) {
  let string = `Walk home with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function unleashDog(dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  let dogArray = []
  for (let i = 0; i < routine.length; i++) {
    const dogFunction = routine[i];
    dogArray.push(dogFunction(dogName, dogBreed))
  }
  return dogArray
}

//Iterate over the routine Array
//Call each function in the array and
//pass the dogName and dogBreed received by exerciseDog() to the function as they are called
//capture the result of each function's call
//return an Array of all those functions' return values