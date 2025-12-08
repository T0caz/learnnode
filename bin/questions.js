import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "number",
        name: "age",
        message: "What is your age?",
    },
    {
        type: "confirm",
        name: "confirmUser",
        message: "Do you confirm this information?",
        default: true,
    },
    {
        type: "list",
        name: "favoriteColor",
        message: "Choose your favorite color:",
        choices: ["Red", "Green", "Blue", "Yellow"],
    },
    {
        type: "rawlist",
        name: "pet",
        message: "Choose a pet:",
        choices: ["Dog", "Cat", "Hamster"],
    },
    {
        type: "checkbox",
        name: "hobbies",
        message: "Select your hobbies:",
        choices: ["Coding", "Gaming", "Sports", "Reading"],
    },
    {
        type: "password",
        name: "password",
        message: "Enter a secret password:",
        mask: "*",
    },
    {
        type: "editor",
        name: "bio",
        message: "Write a short bio in the editor:",
    },
]);

console.log("\n--- OUTPUT ---");
console.log(answers);
