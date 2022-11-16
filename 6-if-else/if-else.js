//conditional if else
//di dalam if itu sudah bernilai true sehingga tidak perlu menulis "== true" dalam blok if
let penentu = 1
if (penentu === 1) {
    console.log('satu')
} else if (penentu === 2) { //ketika salah satu conditional di level tertentu sudah benar, 
                            //maka akan stop di level tsb dan yang dibawahnya diabaikan.
    console.log('dua')
} 
else {
    console.log('bukan satu')
}

/*
Tipe data yang memiliki nilai falsy:
undefined
null
Nan
0
""
false 
*/

const falsy = ''
const truthy = 'hello'

if (falsy) {
    console.log('test')
}

const falsy2 = ''
const truthy2 = -1

if (truthy2) {
    console.log('test')
}

//nested conditional
let nilaiPraktikum = 80
let nilaiUjian = 70

if (nilaiPraktikum >= 80) {
    console.log('selamat, anda lulus praktikum')
    if (nilaiPraktikum >= 80) {
        console.log('A')
    }
}

let nilaiKelipatan = 12;

if (nilaiKelipatan % 3 === 0) {
    console.log('kelipatan 3')
} else if (nilaiKelipatan % 4 === 0) {
    console.log('kelipatan 4')
} else {
    console.log('bukan kelipatan 3 dan bukan kelipatan 4')
}

let nilaiEksponen = undefined

if (!nilaiEksponen) {
    console.log('nilaiEksponen')
} else {
    console.log('bukan kelipatan 3')
}

//conditional using Tenary operation
nilaiKelipatan % 3 === 0 ? console.log('kelipatan 3') : console.log('bukan kelipatan 3')

//lebih dari 2 kondisi
nilaiKelipatan % 3 === 0 ? console.log('kelipatan 3') : nilaiKelipatan % 4 === 0 ? console.log('kelipatan 4') : console.log('bukan kelipatan 3 dan 4')

let a = 1
let b = 2
let c = 4

if (a == 1 || b == 2 || c == 3) {
    console.log('true')
} else {
    console.log('false')
}