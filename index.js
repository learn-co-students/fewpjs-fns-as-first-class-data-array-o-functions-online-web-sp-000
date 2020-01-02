function wakeDog()
{
    const a = "Xerox";
    const b = "Border Collie";
    return `Wake ${a} the ${b}`;
}

function leashDog()
{
    const a = "Boo Radley";
    const b = "Pibble";
    return `Leash ${a} the ${b}`;
}

function walkToPark()
{
    const a = "Bunny";
    const b = "Labrador";
    return `Walk to the park with ${a} the ${b}`;
}

function throwFrisbee()
{
    const a = "Mary J. Blige";
    const b = "Papillon";
    return `Throw the frisbee for ${a} the ${b}`;
}

function walkHome()
{
    const a = "Santa Paws";
    const b = "Husky";
    return `Walk home with ${a} the ${b}`;
}

function unleashDog()
{
    const a = "Lauren";
    const b = "Golden Retriever";
    return `Unleash ${a} the ${b}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
 // if we write wakeDog() we will be calling the function, so just put wakeDog, etc.

function exerciseDog(dogName, dogBreed)
{

    for (let i = 0; i < routine.length ; i++)
    {
        routine[i](dogName, dogBreed);
    }

}