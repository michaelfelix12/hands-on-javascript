//bukan penggunaan callback yang tepat
const merah = 'Berhenti'
const kuning = 'Hati-hati'
const hijau = 'Jalan'

function Merah() {
    console.log(merah)
}

function Hijau() {
    console.log(hijau)
}

function Kuning(Hijau){
    setTimeout( () => {
        callback()
    }, 1000)
    console.log(kuning)
}
Merah()
Kuning(hijau)