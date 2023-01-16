// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        
    }
    return gifts
}

wrapGifts(gifts)



function writeCards(names, eventName) {
    const nameList = Array.from(names)
    const nameList2 = []
    for(let i = 0; i < nameList.length; i++) {
        nameList2.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        
    }
    return nameList2
}

console.log(writeCards(["Charlie", "Samip","Ali"], "graduation"))

function countDown(number) {
    let x = number
    while(x > -1) {
        console.log(x--)
    }
    return x
}
console.log(countDown(12))