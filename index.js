function wakeDog(dogName, dogBreed) {
   let phrase = `Wake ${dogName} the ${dogBreed}`
   console.log(phrase)
   return phrase
}

function leashDog(dogName, dogBreed) {
   let phrase = `Leash ${dogName} the ${dogBreed}`
   console.log(phrase)
   return phrase
}

function walkToPark(dogName, dogBreed) {
   let phrase = `Walk to the park with ${dogName} the ${dogBreed}`
   console.log(phrase)
   return phrase
}

function throwFrisbee(dogName, dogBreed) {
   let phrase = `Throw the frisbee for ${dogName} the ${dogBreed}`
   console.log(phrase)
   return phrase
}

function walkHome(dogName, dogBreed) {
   let phrase = `Walk home with ${dogName} the ${dogBreed}`
   console.log(phrase)
   return phrase
}

function unleashDog(dogName, dogBreed) {
   let phrase = `Unleash ${dogName} the ${dogBreed}`
   console.log(phrase)
   return phrase
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
   let dogReturns = []
   for (let i = 0; i < routine.length; i++) {
      const dogFunction = routine[i];
      dogReturns.push(dogFunction(dogName, dogBreed))
   }
   return dogReturns
}
