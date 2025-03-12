const readline = require('readline-sync');
let testApp = "This is a Test!"
console.log(testApp)

let quesOne = readline.question("What character is the 6th index point?")
console.log(testApp[6] + " is the correct answer!")