const wakeDog = (dogName='Byron', dogBreed='poodle') => {
  console.log(`Wake ${dogName} the ${dogBreed}`)
  return `Wake ${dogName} the ${dogBreed}`
}

const leashDog = (dogName='Byron', dogBreed='poodle') => {
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return `Leash ${dogName} the ${dogBreed}`
}

const walkToPark = (dogName='Byron', dogBreed='poodle') => {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

const throwFrisbee = (dogName='Byron', dogBreed='poodle') => {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

const walkHome = (dogName='Byron', dogBreed='poodle') => {
  console.log(`Walk home with ${dogName} the ${dogBreed}`)
  return `Walk home with ${dogName} the ${dogBreed}`
}

const unleashDog = (dogName='byron', dogBreed='poodle') => {
  console.log(`Unleash ${dogName} the ${dogBreed}`)
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(r => r(dogName, dogBreed))
}
