function wakeDog(dogName, dogBreed)
{
  var out = `Wake ${dogName} the ${dogBreed}`;
  return out
}
function leashDog(dogName, dogBreed)
{
  var out = `Leash ${dogName} the ${dogBreed}`
  return out

}
function walkToPark(dogName, dogBreed)
{
  var out = `Walk to the park with ${dogName} the ${dogBreed}`
  return out

}
function throwFrisbee(dogName, dogBreed)
{
  var out = `Throw the frisbee for ${dogName} the ${dogBreed}`
  return out

}
function walkHome(dogName, dogBreed)
{
  var out = `Walk home with ${dogName} the ${dogBreed}`
  return out

}
function unleashDog(dogName, dogBreed)
{
  var out = `Unleash ${dogName} the ${dogBreed}`
  return out
}
var routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]
function exerciseDog(dogName, dogBreed)
{
  var out = []
  for(let i=0; i<routine.length; i++)
  {
    console.log("test")
    console.log(routine[i](dogName, dogBreed))
    out.push(routine[i](dogName, dogBreed))
  }
  console.log(out)
  return out
}
