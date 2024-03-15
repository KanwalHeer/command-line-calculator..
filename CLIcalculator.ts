import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type:"number",
        message: "Enter your first Number"
    },
    {
        name: "secondNumber",
        type:"number",
        message: "Enter your second Number"
    },
    {
        name: "operator",
        type:"list",
        message: "choose your operator",
        choices: ["+","-","*","/"]
    }
])

if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber)
} else if(answer.operator === "-"){
    console.log(answer.firstNumber - answer.secondNumber)
} else if(answer.operator === "*"){
    console.log(answer.firstNumber * answer.secondNumber)
} else if(answer.operator === "/"){
    console.log(answer.firstNumber / answer.secondNumber)
}else{
    console.log("Enter Valid Operator Please")
}