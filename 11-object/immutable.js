//Mutable vs Immutable
//1. Mutable
const car = {
    name: 'Toyota',
}
car.color = 'Red'
// car.name = 'Honda'
// console.log(car)

const car2 = car
const car3 = Object.assign({}, car)
const car4 = {...car} //spread operator
car.name = 'Mazda'
car.engine = 'V6'
console.log('car2', car2)
console.log('car', car)
console.log('car3', car3)
console.log('car4', car4)

//menghapus properti object
delete car.name
console.log('car', car)

//object didalam object lain
const bike = {
    name: 'Yamaha',
    color: 'Red',
    dimension: {
        width: 100,
        height: 200
    },
    getInfo() {
        console.log('test')
    }
}

//spread operator
const bike2 = {...bike, dimension: {...bike.dimension}}
bike.dimension.width = 300
bike.name = 'Vixion'
console.log('bike2', bike2)

//destructuring
//merupakan fitur java es6, membantu mengolah nilai dari array maupun object, digunakan untuk mengekstrak properti
//dalam object menjadi variable independen
// const {name, color, dimension: {width, height}} = bike
// console.log(dimension)
// getInfo()
// console.log(height)

//rest parameter
//digunakan untuk mengambil sisa properti dalam object saat destrukturisasi
// let {name, color, ...rest} = bike
// console.log('rest', rest)

//memberi nama pada properti2 yang sudah dipisahkan dari objectnya
let {name: nama, color: warna, ...sisa} = bike
console.log('rest', sisa)

//immutable array
const arr = [1,2,3,4,5,6,7,8,9]
const arr2 = arr //pass by reference
arr[0] = 10

console.log(arr) 
console.log(arr2)

//array.from()
const arr3 = Array.from(arr) //pass by value
arr[0] = 20
console.log(arr)
console.log(arr2)
console.log(arr3) 

const arr4 = [...arr] //pass by value
console.log(arr4)

//built in function array
//forEach
let newArr = [] //perlu array karena kalau langsung return kluarnya undifine
let fe = arr.forEach((e) => {
    newArr.push(e)
})
console.log('forEach', newArr)

//map
//lebih sering dipakai dalam real project
let m = arr.map((e) => {
    return e
})
console.log('map', m)

//filter
let f = arr.filter((e) => {
    return e > 3 //hanya akan menampilkan index element yang bernilai lebih dari 3
})
console.log('filter', f)

//find
let find = arr.find((e) => {
    return e > 3 //hanya akan menampilkan 1 index element yang dicari (yang didapat pertama)
})
console.log('find', find)

//findIndex
let findIndex = arr.findIndex((e) => {
    return e > 20 //akan return indexx -1 karena tidak ada di dlm array
})
console.log('findIndex', findIndex)

//destrukturisasi array
const [a, b, c, ...rest] = arr
console.log(a,b,c,rest)

const kendaraan = ['mobil', 'motor', 'sepeda', 'kereta', 'bus']
const [satu,dua,tiga,empat,lima] = kendaraan
function tampilkanKendaraan() {
    console.log(satu,dua,tiga,empat,lima)
}
tampilkanKendaraan()
// let indexFind = kendaraan.findIndex((e))