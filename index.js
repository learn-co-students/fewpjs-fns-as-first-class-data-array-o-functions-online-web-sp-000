
const doDog = ( verb, name, breed ) => {
  let activity = `${verb} ${name} the ${breed}`
  console.log( activity )
  return activity
}

const wakeDog = ( name, breed ) =>
  doDog( 'Wake', name, breed )

const leashDog = ( name, breed ) =>
  doDog( 'Leash', name, breed )

const walkToPark = ( name, breed ) =>
  doDog( 'Walk to the park with', name, breed )

const throwFrisbee = ( name, breed ) =>
  doDog( 'Throw the frisbee for', name, breed )

const walkHome = ( name, breed ) =>
  doDog( 'Walk home with', name, breed )

const unleashDog = ( name, breed ) =>
  doDog( 'Unleash', name, breed )

const routine =
  [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = ( name, breed ) =>
  routine.map( task => task( name, breed ))
