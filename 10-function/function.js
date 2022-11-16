//function adalah kumpulan perintah yang dimasukan ke dalam suatu block dan kita beri nama
//aturan penamaan function sama seperti variable, ditulis dalam Camel Case
//dalam Js dia tidak perlu menentukan tipe data apa yang akan di return, namun di Typescript akan ada ketentuannya
//sebuah function juga bisa di hoisting
//untuk menghilangkan sifat hoisting bisa menggunakan variable let dan const
//function declaration
function sayHello(nama) { //parameter
    console.log(`Hello my name is ${nama}`)
}
sayHello('John') //argument

function sayHello2(nama2) {
    return `Hello ${nama2}` //mengembalikan nilai dan menghentikan eksekusi program
}
console.log(sayHello('john'))

function sumNum(num1, num2) {
    const total = num1 + num2
    return total
}
console.log(sumNum('10,20'))

function printNama(nama) {
    return `Nama saya ${nama}`
}
console.log(printNama('Dimas'))

//menempatkan function dalam variable, berhubungan dengan hoisting nanti
const tampungFunction = printNama('Dimas')
console.log(tampungFunction)

//function as expression
const sayHello3 = function (nama) {
    console.log(`Hello my name is ${nama}`)
}
sayHello3('Dimas') //nama variable menjadi nama function

//exercise
//easy mode
function areaOfRectangle(l, t) {
    console.log(l * t)
}
areaOfRectangle(5, 10)

function areaOfCircle(phi, r) {
    console.log(phi * r * r)
}
areaOfCircle(3.14, 10, 10)

//medium mode
function areaOfRectangle2(l, t) {
    return l * t
}
console.log(areaOfRectangle2(5, 5))

function areaOfCircle2(phi, r) {
    return phi * r * r
}
console.log(areaOfCircle2(3.14, 5, 5 ))

//hard mode
const rectangleArea = function(l, t) {
    return l * t
}
console.log(rectangleArea(2, 2))

//function yang langsung dipanggil (instant invoke function)
const sayHello4 = function (nama) {
    return `Hello ${nama}`
}('Dimas tidak pake h')
console.log(sayHello4); //harus pakai titik koma kalau mau eksekusi cara lain seperti dibawah

//cara lain 
(function luasPersegi(p, l) {
    console.log(p*l)
})(10, 9)

//function tidak bisa di hoisting ketika di assign dalam sebuah const atau let
const bilangHello = function (nama) {
    return `Hello ${nama}`
}
console.log(bilangHello('Rini'))

//karna fungsi return akan menghentikan eksekusi function, maka setelah condition yang berisi return, tidak perlu "else"
function sayMyName(name) {
    if (name == 'Haisenberg') {
        return `You are ${name}`
    }
        return `You are not Heisenberg`
}
console.log(sayMyName('Jessy'))

//default argument
//default value digunakan untuk mengisi value parameter yang sudah dibuat namun tidak dipakai 
//sehingga value yang dimiliki tidak undifine atau null
function sayYourName(name = 'Dimas') { //kalau tidak ada argument maka akan me return default value
    return `You are ${name}`
}
console.log(sayYourName('Rini'))

//optional argument
function namaApalagi(name) {
    name = name || 'Dimas'
    return `Your name is ${name}`
}
console.log(namaApalagi())

//function di dalam function
//function bisa dilempar sebagagi argumen di dalam function
//ini juga adalah salah satu contoh sederhana callback
function reffSing() {
    console.log('dum des')
}

function sing(add) {
    console.log('AAAAAAA')
    console.log('IIIIIII')
    add()
    console.log('UUUUUUU')
    console.log('EEEEEEE')
}
sing(reffSing) //function reffSing tidak perlu tutup kurung karena dia di assign sbg argumen
console.log('-----------------------------')
sing(()=>console.log('dum des das')) //function sebagai argumen namun di declare langsung saat dipanggil

//arrow function
//yang berbeda adalah penulisannya
//contoh 1
let myFunction = (a, b) => a * b;
console.log(myFunction(1, 2))

//contoh 2
const printName = (name) => {
    console.log(`print name: ${name}`)
}
printName('Dimas')

//contoh 3
const printName2 = name => `print name: ${name}`
console.log(printName2('Michael'))

//lexical scope
let a = 5 //global variable (bisa digunakan dalam block manapun)
function printA() {
    let b = 10 //local variable (hanya bisa dipakai dalam block ini)
    console.log(`a: ${a}`)
}
printA()
//console.log(b) //tidak terpanggil

function printC() {
    console.log('C')

    const printD = () => {
        console.log('test')
    }
    printD()
}
printC()

//this
console.log(this)

// const obj = {
//     nama: 'Michael',
//     testThis: () => {
//         console.log(`test: ${this.nama}`)
//     }
// }

// function printName3(name, func) {
//     if (typeof func === 'function') {
//         name = func.call(this, name)
//     }
//     return name
// }
// console.log(printNama('dimas', function (name) {
//     console.log('test')
// }))

function toUpperCase(text) {
    return text.toUpperCase()
}
let name = 'Rini'
const obj = {
    name: 'Dimas',
    func: function() {
        console.log(this.name)
    }
}
obj.func()