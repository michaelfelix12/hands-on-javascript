const merah = 'Berhenti'
const kuning = 'Hati-hati'
const hijau = 'Jalan'

function Merah(){
    setTimeout(() => {
        console.log(merah)
    }, 1000)
}

function Hijau(error, output){
    if (error){
        console.log(error)
    }
    else{
        console.log(output)
    }
}

function Kuning(callback){
    setTimeout(() => {
        callback(kuning, null)
    }, 2000)
    setTimeout(() => {
        callback(null, hijau)
    }, 3000)
}

Merah()
Kuning(Hijau)