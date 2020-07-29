const wakeDog = function (dogName, dogBreed) {
    let activity = `Wake ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity
    
  }

  const leashDog = function (dogName, dogBreed) {
    let activity = `Leash ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity
  }
  
  const walkToPark = function (dogName, dogBreed) {
    let activity = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity
  }

  const throwFrisbee = function (dogName, dogBreed) {
    let activity = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity
  }

  const walkHome = function (dogName, dogBreed) {
    let activity = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity
  }

  const unleashDog = function (dogName, dogBreed) {
    let activity = `Unleash ${dogName} the ${dogBreed}`;
    console.log(activity);
    return activity
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed) {
    const result = []
    for (let i=0; i < routine.length; i++) {
        result.push(routine[i](dogName, dogBreed))
    }
    return result
  }