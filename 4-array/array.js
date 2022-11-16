const array = [1,2,3,4,5,6,7,8,9,10]
const stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const objectArray = [
    {
        nama : 'budi'
    }
]

//delete stringArray[stringArray.length.length - 1]
// stringArray.pop()

stringArray.shift()

//stringArray[stringArray.length] = 'k'
//stringArray.push("z")
//stringArray.unshift("z")
//stringArray.slice(0, 3)
//stringArray.splice(1, 3, "z")

console.log(stringArray);

for (let i=0; i<stringArray.length; i++) {
    console.log(stringArray[i]);
}