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

//3.1 Print all the characters of the driver's name, separated by a space and in capitals 

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
// console.log(expectedOutput.length)

//3.2 Print all the characters of the navigator's name, in reverse order

let reverseName = ""

for (let i = hacker2.length; i>0; i--){
    reverseName += hacker2[i-1]
}
console.log(reverseName)

//3.3  Lexicographic order 

let driver="yan"
let navigator="greg"

if (driver.localeCompare(navigator) === -1){
    console.log("The driver's name goes first.")
} else if (driver.localeCompare(navigator) === 1){
    console.log("Yo, the navigator goes first definitely.")
} else if (driver.localeCompare(navigator) === 0){
    console.log("What?! You both have the same name?")
}

//Bonus 1

let loremIpsum=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus facilisis, tempor ante ac, molestie augue. Proin vitae eros vitae sem ultrices pretium. Phasellus dui dui, fermentum tempor fringilla ut, tincidunt tristique magna. Nullam turpis augue, feugiat eu dapibus ut, rutrum eget felis. Aliquam ligula augue, ullamcorper vel neque non, fringilla finibus dui. Fusce lacinia condimentum ante, sit amet volutpat velit fermentum non. In hac habitasse platea dictumst. Integer interdum pretium ligula, vel sagittis nisi placerat a. Sed lacinia malesuada ex, in condimentum libero posuere sed. In non felis vel enim vehicula lobortis nec quis ante.
Duis blandit maximus massa. Quisque enim erat, tincidunt sed aliquet quis, euismod ac urna. Fusce tempus nulla ac justo ullamcorper congue. Donec in purus pharetra felis semper fermentum. Vivamus et ante non lorem finibus bibendum id id magna. Vivamus a purus eleifend, faucibus ante at, molestie risus. Maecenas ac libero faucibus, aliquet ante ac, rhoncus dui. Morbi semper tellus dolor, nec egestas ex consectetur nec. Morbi pharetra magna in ligula faucibus finibus. Cras varius nulla ut dapibus tempor. Donec ullamcorper orci non pellentesque efficitur. Integer condimentum neque eu mauris maximus, id hendrerit orci cursus. Sed dignissim imperdiet justo. Ut iaculis libero justo, eget cursus mi hendrerit iaculis.
Vestibulum semper congue venenatis. Praesent massa quam, pellentesque placerat faucibus et, pulvinar feugiat nulla. Etiam faucibus augue eget purus dapibus, ac fermentum ante euismod. Duis varius risus nec laoreet congue. In a leo at felis tempor consequat. Mauris erat est, aliquet sit amet blandit ac, suscipit a felis. Praesent eget varius arcu. Aliquam condimentum magna non metus ornare, eget consequat risus scelerisque.`

console.log(loremIpsum.split(" "))
console.log(loremIpsum.split(" ").length)

//Count occurences

let wordsInString = loremIpsum.split(" ")
let word = "et"

let count = 0;
for (counter=0; counter<wordsInString.length; counter++) {
    
    if (wordsInString[counter] == word) {
            count++
            
    }
}
console.log(count)

//Bonus 2

// let phraseToCheck = ""
   



