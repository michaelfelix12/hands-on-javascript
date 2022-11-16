//oop adalah paradigma pemrogramman
//object adalah data yang ingin dibuat
//sedangkan class adalah blueprint yang digunakan sebagai template untuk membuat object
//object, array, adalah tipe data non primitif
//pada tipe data string kita tidak bisa mengubah nilai dari salah satu index nya, namun kalau object bisa
//function di javascript adalah sebuah object

//passing by reference => object, array (non-primitive)
const obj = {
    name: 'Dimas',
    umur: 20,
    tampilNama: function() {
        console.log(this.nama)
    },
    tampilUmur: function() {
        console.log(this.umur)
    }
}
obj.hobi = 'makan'

console.log(obj)

const obj2 = {}
obj2.hobi = 'badminton'
console.log(obj2)

//pasing by value
let a = 'Dimas'
console.log(a)
a='Bulan'
console.log(a)

//pasing by value reference and passing bby reference
let name = 'Dimas'
let name2 = name

console.log(name)
console.log(name2)

name = 'Bulan'

console.log(name)
console.log(name2)

let arr = [1, 2, 3, 4, 5]
let arr2 = arr

console.log(arr)
console.log(arr2)

arr[0] = 10

console.log(arr)
console.log(arr2)

//menambahkan properti dalam object kosong
const obj3 = {}
obj3.name = 'Michael'

//object memiliki object lain ataupun method didalamnya
const student = {
    id: 1,
    nameStd: 'Michael',
    age: 22,
    address: {
        city: 'Depok',
        district: 'Sukamaju',
        street: 'Jl. Raya Jakarta-Bogor'
    },
    // getInfo() {
    //     console.log(`Nama saya ${this.nameMike}, umur saya ${this.age} tahun, alamat saya`)
    // }
}
function getInfo() { 
    console.log(`Nama saya ${this.nameStd}, umur saya ${this.age} dan saya tinggal di ${this.address.city}`)
}
// getInfo(12)

// getInfo.apply(student)
// getInfo.call(student)
// getInfo.call(student, student.address)
getInfo.apply(student, [student.address])

const student2 = Object.create(student)
const student3 = {}

student3.__proto__ = student; //proto itu sama dengan Object.create, namun lebih modern
student3.name = 'Rini'
student2.name = 'Bulan'
student2.id = 2



//cara sebuah object mengambil properti dari object lain
// const student2 = Object.create(student)
// student2.nameStd = 'Milia'
// student2.id = 2
// student.getInfo()
// student2.getInfo()

//mengambil keys sebuah object
console.log(Object.keys(student))
//mengambil values sebuah object
console.log(Object.values(student))

//contoh error
// getInfoGlobal(); {
//     console.log(`nama saya ${this.name}, umur saya ${this.age} tahun, alamat saya di ${address}`)
// }

//bedanya adalah kalau bind perlu di assign ke sebuah variable
//bisa mengirimkan argumen dan bisa variadict ataupun array seperti call() dan apply()
const info = getInfo.bind(student)
info()

getInfo.bind(student)()

getInfo.bind(student)(student.address)
getInfo.bind(student)([student.address])