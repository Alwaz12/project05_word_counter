#! /usr/bin/env node

//Import the inquirer
import inquirer from "inquirer";
// Decleare a constant answer
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to coount the word: "
    }
]);
const words = answer.sentence.trim().split(" ");
//Print the array[]
console.log(words)
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`)


