// function minumKopi(error, output) {
//     if (error) {
//         console.log(`Kecewa, ${error}`)
//     } else {
//         console.log(`Terima kasih, ${output} rasanya enak`)
//     }
// }

// function pesanKopi(pesanan, kirimPesan) {
//     console.log(`Pesanan saya adalah ${pesanan}`)
//     setTimeout(() => {
//         if (pesanan === 'teh') {
//             kirimPesan(`Pesanan ${pesanan} tidak tersedia`)
//         } else {
//         const hasil = `kopi ${pesanan}`
//         kirimPesan(null, hasil)
//         }
//     },1000)
// }

// let pesan = ['latte', 'teh', 'americano']
// // pesanKopi('teh', minumKopi)
// pesanKopi(pesan[0], (error, pesanan) => {
//     minumKopi(error, pesanan)
//     pesanKopi(pesan[1], (error, pesanan) => {
//         minumKopi(error, pesanan)
//         pesanKopi(pesan[2], (error, pesanan) => {
//             minumKopi(error, pesanan)
//         })
//     })
// })

//Coffee Shop pakai Promise
const stock = {
    bijiKopi: 100,
    air: 100,
}

function pesanKopi(pesanan) {
    console.log(`Pesanan saya adalah ${pesanan}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pesanan === 'teh') {
                    reject(`pesanan ${pesanan} tidak tersedia`)
            } else {
                const hasil = `Kopi ${pesanan} sedang diproses`
                resolve(hasil)
            }
        }, 1000)
    })
}

function cekStock() {
    console.log(`cek stock ....`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock.bijiKopi > 0 && stock.air > 0) {
                resolve('stock kopi tersedia')
            } else {
                reject('stock kopi tidak tersedia')
            }
        }, 1000)
    })
}

function seduhKopi(pesanan) {
    console.log(`memasukan ${pesanan} kedalam mesin`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (`Kopi ${pesanan} sudah siap`)
        }, 1000)
    })
}

function memanaskanAir() {
    console.log('air sedang dipanaskan')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('memanaskan air')
        }, 2000)
    })
}

function menggilingKopi() {
    console.log('kopi sedang digiling')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('kopi sudah selesai di giling')
        }, 2000)
    })      
}

function pesanMinuman(pesanan) {
    pesanKopi(pesanan)
    .then(result => {
        console.log(result)
        return cekStock()
    })
    .then(result => {
        console.log(result)
        return Promise.all([memanaskanAir(), menggilingKopi()])
    })
    .then(result => {
        console.log(result)
        return seduhKopi(pesanan)
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('selesai')
    })
}

pesanMinuman('latte')