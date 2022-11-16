const str = 'Hello World'
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str[0])
console.log(str.split(''))

const str2 = 'Hello'
const str3 = 'World'
console.log(substring(6, 10))
const strGab = str.concat('',str2)
const strGab2 = str + ' ' + str2
const strGab3 = `${str} ${str}`

console.log(strGab)

str[3] = 'a' //karena string immutable jadi isi dari str tidak bisa diubah begitu saja
             //berbeda dengan array yang sifatnya mutable sehingga isinya bisa diubah
console.log(str)
