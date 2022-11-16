function pesanMinuman(pesanan, kirimPesan) {
    console.log(`menunggu pesanan, ${pesanan} sedang diproses`)
    setTimeout(() => {
        if (pesanan == 'teh') {
            kirimPesan(`Pesanan ${pesanan} tidak tersedia`)
        } else {
            kirimPesan(null, `Pesanan ${pesanan} sudah siap`)
        }
    }, 3000)
}

function minumKopi(reject, resolve) {
    return (error, pesanan) => {
        if(error) {
            reject(`Kecewa, ${error}`)
        } else {
            resolve(`Senang, ${pesanan}`)
        }
    }  
}

function pesanMinumanAsync(pesanan) {
    return new Promise((resolve, reject) => {
        pesanMinuman(pesanan, minumKopi(reject, resolve))
    })
}

async function oderMinuman() {
    try {
    const order = await pesanMinumanAsync('kopi')
    console.log(order)
    } catch (error) {
        console.log(error)
    }
}

// pesanMinumanAsync(`teh`)
// .then(pesanan => console.log(pesanan))
// .catch(error => console.log(error))

oderMinuman()