function wakeDog(dogName, dogBreed) {
   let wakeDogStr = `Wake ${dogName} the ${dogBreed}`;
   console.log(wakeDogStr);
   return wakeDogStr
}

function leashDog(dogName, dogBreed) {
   let leashDogStr = `Leash ${dogName} the ${dogBreed}`;
   console.log(leashDogStr)
   return leashDogStr
}

function walkToPark(dogName, dogBreed) {
   let walkToParkStr = `Walk to the park with ${dogName} the ${dogBreed}`;
   console.log(walkToParkStr)
   return walkToParkStr
}

function throwFrisbee(dogName, dogBreed) {
   let throwFrisbeeStr = `Throw the frisbee for ${dogName} the ${dogBreed}`;
   console.log(throwFrisbeeStr)
   return throwFrisbeeStr
}

function walkHome(dogName, dogBreed) {
   let walkHomeStr = `Walk home with ${dogName} the ${dogBreed}`;
   console.log(walkHomeStr)
   return walkHomeStr
}

function unleashDog(dogName, dogBreed) {
   let unleashDogStr = `Unleash ${dogName} the ${dogBreed}`;
   console.log(unleashDogStr)
   return unleashDogStr
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dog, breed) {
   return routine.map(fn => fn(dog, breed))
 }