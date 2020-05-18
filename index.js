function wakeDog(dogName, dogBreed) {
  return "Wake " + dogName + " the " + dogBreed;
  thisArray.push("Wake " + dogName + " the " + dogBreed);
}

function leashDog(dogName, dogBreed) {
  //'Leash Boo Radley the Pibble'
  return "Leash " + dogName + " the " + dogBreed;
  thisArray.push("Leash " + dogName + " the " + dogBreed);
}

function walkToPark(dogName, dogBreed) {
  //'Walk to the park with Bunny the Labrador'
  return "Walk to the park with " + dogName + " the " + dogBreed;
  thisArray.push("Walk to the park with " + dogName + " the " + dogBreed);
}

function throwFrisbee(dogName, dogBreed) {
  //'Throw the frisbee for Mary J. Blige the Papillon'
  return "Throw the frisbee for " + dogName + " the " + dogBreed;
  thisArray.push("Throw the frisbee for " + dogName + " the " + dogBreed);
}

function walkHome(dogName, dogBreed) {
  //'Walk home with Santa Paws the Husky'
  return "Walk home with " + dogName + " the " + dogBreed;
  thisArray.push("Walk home with " + dogName + " the " + dogBreed);
}

function unleashDog(dogName, dogBreed) {
  //'Unleash Lauren the Golden Retriever'
  return "Unleash " + dogName + " the " + dogBreed;
  thisArray.push("Unleash " + dogName + " the " + dogBreed);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  routine = routine.map((activity) => {
		return activity(dogName, dogBreed)
		}
	)
	return routine
}
