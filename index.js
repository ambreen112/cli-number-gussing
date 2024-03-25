#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Pleace guess a number between 1 to 6:",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
