#! /usr/bin/env node
import inquirer from "inquirer";
const randomAnswer = Math.floor(Math.random() * 10 + 2);
console.log("My Number Guessing game");
const answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Please guess a number between 1-20? :",
    },
]);
if (answer.guessedNumber === randomAnswer) {
    console.log("Congratulation! Yoe guess a right answer :)");
}
else if (answer.guessedNumber > 20) {
    console.log("Number is invalid!!!");
}
else {
    console.log("you guess a wrong number :( ");
}
