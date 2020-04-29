//console.log("Wake Byron the poodle");
//console.log("Leash Byron the poodle");
//console.log("Walk to the park with Byron the poodle");
//console.log("Throw the frisbee for Byron the poodle");
//console.log("Walk home with Byron the poodle");
//console.log("Unleash Byron the poodle");

function wakeDog(dogName, dogBreed) {
  let message = `Wake ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function leashDog(dogName, dogBreed) {
  let message = `Leash ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function walkToPark(dogName, dogBreed) {
  let message = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function throwFrisbee(dogName, dogBreed) {
  let message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function walkHome(dogName, dogBreed) {
  let message = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function unleashDog(dogName, dogBreed) {
  let message = `Unleash ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
let final_array = []
for (let i=0; i < routine.length; i++){
    let each_routine = routine[i](dogName, dogBreed);
    final_array.push(each_routine);
}
  return final_array
}
