var myString='string saya' //bisa di re-declare, bisa di re-assign, bisa di hoisting, function scope
let myLetString='string saya' //block scope, tidak bisa di re-declare, bisa di re-assign, tidak bisa hoisting
const myConstString='string saya' //block scope, value nya tetap, tidak bisa di re-assign, tidak bisa di re-declare, tidak bisa di hoisting

console.log(myString);
console.log(myLetString);
console.log(myConstString);

var myString='string saya var redeclared'
console.log(myString);

myString='string saya re assign'

//contoh hoisting
a=10;
var a;
console.log(a)

var nomor=10;
function myFunction() {
    var nomor=20;
    console.log(nomor);
    return nomor
}

myFunction();

console.log(nomor);

//contoh let
let varlet='String saya let'
console.log(varlet);

varlet=15
console.log(varlet);

a=10;
let a;
console.log(a) //error karna let tidak bisa hoisting

let i=2
for (let i=0; i<10; i++) {
    console.log(i)//1-9
}
console.log(i) //2

let nilai=100
function ubahNila() {
    let nilai=50
    console.log(nilai);
}
ubahNilai() //nilai = 50


console.log(nilai) //nilai = 100

//const angka=9
//angka=10 //error

console.log(angka)

//contoh error
// b=8
// const b
// console.log(b)

const angka=2;

function ubahAngka() {
    const angka=3;
    console.log(angka)
}

function ubahAngka2() {
    const angka=4
    console.log(angka)
}

ubahAngka2()
ubahAngka()

console.log(angka);