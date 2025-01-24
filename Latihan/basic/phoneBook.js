let kontak = []

const createKontak = (nama, noTelp, email) => {
    if (typeof nama != 'string' || typeof noTelp != 'string' || typeof email != 'string') {
        console.log(`Format data salah!`)
        return;
    }

    const isExist = kontak.find(kontak => kontak.nama === nama)
    if (isExist) {
        console.log("Kontak dengan nama tersebut sudah ada")
        return
    }

    const newKontak = { nama, noTelp, email }
    kontak.push(newKontak)
    console.log("Data Berhasil dibuat!")
}

createKontak("Isan", "081245678", "isan@gmail")
createKontak("Dito", "081256732", "dito@gmail")
createKontak("Arya", "081215695", "arya@gmail")

const deletedKontak = (nama) => {
    const index = kontak.findIndex(kontak => kontak.nama === nama)
    if (index === -1) {
        console.log("Data tidak ditemukkan!")
        return;
    }

    kontak.splice(index, 1)
    console.log("Data berhasil dihapus!")
}

deletedKontak("Isan")

const readKontak = () => {
    if (kontak.length === 0) {
        console.log("Data tidak ditemukkan!")
        return;
    }

    console.log("=== List Kontak ===")
    kontak.forEach(kontak => {
        console.log(`${kontak.nama} - no telp : ${kontak.noTelp} - email : ${kontak.email}`)
    })
}

const updatedKontak = (nama, newEmail) => {
    const index = kontak.findIndex(kontak => kontak.nama == nama)
    if (index === -1) {
        console.log("Data tidak ditemukkan!")
        return;
    }

    if (typeof newEmail === 'string') {
        kontak[index].email = newEmail
    }

    console.log("Data Berhasil di update!")
}
updatedKontak("Arya", "rawi@gmail")
createKontak("Arya", "1234", "arya@gmail")
readKontak()