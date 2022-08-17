// Iteration 1: Names and Input

let hacker1
let hacker2

hacker1 = "anastasia"
hacker2 = "adam"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let expectedOutput = ""

for (let i=0; i<hacker1.length; i++){
    // expectedOutput = expectedOutput + hacker1[i].toUpperCase() + " "
    if (i + 1 !== hacker1.length){
        expectedOutput = expectedOutput + hacker1[i].toUpperCase() + " "
    } else {
        expectedOutput += hacker1[i].toUpperCase()
    }
}
console.log(expectedOutput)
console.log(expectedOutput.length)

let reverseName = ""

for (let i = hacker2.length; i>0; i--){
    reverseName += hacker2[i-1]
}
console.log(reverseName)
