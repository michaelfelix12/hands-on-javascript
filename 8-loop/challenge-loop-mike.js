const number = 5
let ganjil = []
let genap = []
let resultGanjil = 0
let resultGenap = 0

for (let i = 0; i < number; i++) {
    if (i % 2 != 0) {
        ganjil.push(i)
        console.log(i)
        resultGanjil += i
    }
}
console.log('ganjil: '+ ganjil.join("+") +'='+ resultGanjil); //.join digunakan untuk menampilkan isi array kedalam String
                                                              //dengan menggunakan pemisah yang ditentukan

for (let j = 2; j < number; j++) {
    if (j % 2 == 0) {
        genap.push(j)
        console.log(j)
        resultGenap += j
        continue
    }
}
console.log('genap: '+ genap.join("+") +'='+ resultGenap);
