function wakeDog(dogName, dogBreed) {
    let dog_action = `Wake ${dogName} the ${dogBreed}`;
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return dog_action;
  }

  function leashDog(dogName, dogBreed) {
    let dog_action = `Leash ${dogName} the ${dogBreed}`;
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return dog_action;
  }

  function walkToPark(dogName, dogBreed) {
    let dog_action = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return dog_action;
  }

  function throwFrisbee(dogName, dogBreed) {
    let dog_action = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return dog_action;
  }

  function walkHome(dogName, dogBreed) {
    let dog_action = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return dog_action;
  }


  function unleashDog(dogName, dogBreed) {
    let dog_action = `Unleash ${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return dog_action;
  }

  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


  function exerciseDog(dogName, dogBreed){
    let routine_result = [];  
    for (let i=0; i < routine.length; i++){
      let start_routine = routine[i](dogName, dogBreed);
      routine_result.push(start_routine);
      }
      return routine_result;
  }