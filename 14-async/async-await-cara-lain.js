// Fondation
const orderCoffee = (coffeeName, cbError, cbSuccess) => {
    console.log("Sedang membuat pesanan, silahkan tunggu...");
    setTimeout(() => {
        if(coffeeName === 'Teh') {
            cbError(`Kami tidak menjual ${coffeeName}`);
        } else {
            cbSuccess(`Pesanan untuk ${coffeeName} kamu sudah jadi`);
        }
    }, 5000)
}

const myOrderAsyncAwait = order => { //kalau parameter nya cuma 1, gaperlu pakai tanda kurung
    return new Promise((resolve, reject) => {
        orderCoffee(order, reject, resolve)
    });
}

const listOrderCoffe = async () =>  {
    try {
        const kopiTarik = await myOrderAsyncAwait('Kopi Tarik');
        const kopiABC = await myOrderAsyncAwait('Kopi ABC');
        const kopiSusuKambing = await myOrderAsyncAwait('Kopi Susu Kambing');
        console.log(kopiTarik);
        console.log(kopiABC);
        console.log(kopiSusuKambing);
        const teh = await myOrderAsyncAwait('Teh')
        console.log(teh);
    } catch (error) {
        console.log(error);
    }
}

listOrderCoffe();