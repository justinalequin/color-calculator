const prompt = require('prompt-sync')();

const userInputOne = prompt('Hello! Would you like to construct [1] or deconstruct [2] a color? ');
const numberUserInputOne = Number(userInputOne);

// User input one abouve. Select construct or desconstruct.


if (numberUserInputOne === 1) {
    console.log("Construct");


    const userInputTwoCon = prompt("Please select one color. [1] Red [2] Yellow [3] Blue ");
    const userInputTwoTwoCon = prompt("Please select one color. [1] Red [2] Yellow [3] Blue ");
    const numberUserInputTwoCon = Number(userInputTwoCon);
    const numberUserInputTwoTwoCon = Number(userInputTwoTwoCon);


    if ((numberUserInputTwoCon === 1 && numberUserInputTwoTwoCon === 3) ||
        (numberUserInputTwoCon === 3 && numberUserInputTwoTwoCon === 1)) {
        console.log("Red + Blue = Purple ");
    }
    if ((numberUserInputTwoCon === 1 && numberUserInputTwoTwoCon === 2) ||
        (numberUserInputTwoCon === 1 && numberUserInputTwoTwoCon === 2)) {
        console.log("Red + Yellow = Orange ");
    }
    if ((numberUserInputTwoCon === 2 && numberUserInputTwoTwoCon === 3) ||
        (numberUserInputTwoCon === 3 && numberUserInputTwoTwoCon === 2)) {
        console.log("Red + Yellow = Orange ");
    }
}



if (numberUserInputOne === 2) {
    console.log("Deconstruct");


const userInputTwoDec = prompt("Please select a single color. [1] Purple [2] Orange [3] Green ");
const numberUserInputTwoDec = Number(userInputTwoDec);

if (numberUserInputTwoDec === 1) {
    console.log("Purple = Red + Blue ");
} else if (numberUserInputTwoDec === 2) {
    console.log(" Orange = Red + Yellow ");
} else if (numberUserInputTwoDec === 3) {
    console.log("Green = Blue + Yellow  ");
} else {
    console.log("Error. Invalid Selection. ")
}
}