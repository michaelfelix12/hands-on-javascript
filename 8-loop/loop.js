//counted loop -> for loop, for each, repeat
//uncounted loop -> while, do while

//for loop
// for (let i = 0; i < 100; i++) {
//     console.log('Saya akan berjanji tidak akan bolos')
// }

// let count = 5
// for (let i = 0; i < count; i++) {
//     console.log(`${i} Saya akan berjanji tidak akan bolos`)
// }

// const count = 20
// for (let i = 1; i < count; i++) {
//     if (i % 2 == 0) {
//         continue //untuk men-skip output ketika kondisi ini terpenuhi
//     }
//     if (i > 16) {
//         break
//     }
//     console.log(i)
// }

const arr = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j']
let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
}
console.log(newArr)

//manupulasi sebuah string
// let str = 'ayam'
// let temp = []

// for (let i = 0; i < str.length; i++) {
//     if (i == 1) {
//         temp.push('b')
//         continue
//     }
//     temp.push(str[i])
// }
// console.log(temp)

// let result = ''
// for (let i = 0; i < temp.length; i++) {
//     result += temp[i]
// }
// console.log(result)

//nested loop
let temp=''
for (let i = 0; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
        temp += j + ' '
    }
    temp += '\n'
}
console.log(temp)

//brute force
let angka1 = 2
let angka2 = 3
let angka3 = 0
let result = []

for (let i = 0; i < 10; i++) {
    if (angka1 == i)
    result.push(angka1)
    for (let j = 0; j < 10; j++) {
        if (angka2 == j) {
            result.push(angka2)
            for (let k = 0; k < 10; k++) {
                if (angka3 == k) {
                    result.push(angka3)
                }
            }
        }
    }
}
console.log(result)

//while dan do while
//while (condition) {} -> selama masih true maka akan dijalankan
let counter = 0

while (counter < 5) {
    console.log(counter);
    counter++
}

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
let i = 0;
let result2 = ''
while(arr2[i]) { //di dalam while adalah boolean, jadi selama ada yang bisa di execute d
    result2 += arr2[i] + '\n' // result2 = result + animals[i]
    i++ //digunakan agar looping nya berhenti
}
console.log(result2);

//do while
let counter2 = 0
do {
    console.log(counter2);
    counter2++
} while (counter2 < 5)

let counter3 = 5
do {
    console.log(counter3);
    counter3++
} while (counter3 < 5)