// return("Wake Byron the poodle");
function wakeDog(dogName, dogBreed) {
  return(`Wake ${dogName} the ${dogBreed}`);
}
// leashDog
// return("Leash Byron the poodle");
function leashDog(dogName, dogBreed) {
  return(`Leash ${dogName} the ${dogBreed}`);
}
// walkToPark
// return("Walk to the park with Byron the poodle");
function walkToPark(dogName, dogBreed) {
  return(`Walk to the park with ${dogName} the ${dogBreed}`);
}
// throwFrisbee
// return("Throw the frisbee for Byron the poodle");
function throwFrisbee(dogName, dogBreed) {
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
// walkHome
// return("Walk home with Byron the poodle");
function walkHome(dogName, dogBreed) {
  return(`Walk home with ${dogName} the ${dogBreed}`);
}
// unleashDog
// return("Unleash Byron the poodle");
function unleashDog(dogName, dogBreed) {
  return(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [
wakeDog,
leashDog,
walkToPark,
throwFrisbee,
walkHome,
unleashDog
];

//console.log(routine.length);
function exerciseDog(dogName, dogBreed){
	let array0 = [];
	for (let i=0; i<routine.length; i++){
		array0.push(routine[i](dogName, dogBreed));
	}
	return array0;
}
exerciseDog(dogName, dogBreed);

