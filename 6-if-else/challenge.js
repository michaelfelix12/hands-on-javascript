function heroCheck(nama,peran) {
    peran.toLowerCase()
    if (!nama && !peran) {
        return 'Nama dan peran harus diisi'
    } else if (!nama) {
        return 'Nama harus diisi'
    }
}