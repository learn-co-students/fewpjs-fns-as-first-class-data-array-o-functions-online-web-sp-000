
let wakeDog = function(dogName="a", dogBreed="b")
{console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`}

let leashDog = function(dogName="a", dogBreed="b")
 {console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`}

let walkToPark = function(dogName="a", dogBreed="b")
{console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`}

let throwFrisbee = function(dogName="a", dogBreed="b")
{console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`}

let walkHome = function(dogName="a", dogBreed="b")
{console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`}

let unleashDog = function(dogName="a", dogBreed="b")
 {console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed))
}
