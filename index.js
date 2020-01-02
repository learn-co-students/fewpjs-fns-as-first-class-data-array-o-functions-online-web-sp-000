// function wakeDog(arg1, arg2)
// {
//     const a = arg1;
//     const b = arg2;
//     return `Wake ${a} the ${b}`;
// }

function wakeDog(arg1, arg2)
{
    return `Wake ${arg1} the ${arg2}`;
}

function leashDog(arg1, arg2)
{
    return `Leash ${arg1} the ${arg2}`;
}

function walkToPark(arg1, arg2)
{
    return `Walk to the park with ${arg1} the ${arg2}`;
}

function throwFrisbee(arg1, arg2)
{
    return `Throw the frisbee for ${arg1} the ${arg2}`;
}

function walkHome(arg1, arg2)
{
    return `Walk home with ${arg1} the ${arg2}`;
}

function unleashDog(arg1, arg2)
{
    return `Unleash ${arg1} the ${arg2}`;
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