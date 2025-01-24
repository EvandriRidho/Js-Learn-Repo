// array untuk menyimpan product dalam object
let products = [];

const addProduct = (nama, harga, qty) => {
    // validasi 
    if (typeof nama != 'string' || typeof harga != 'number' || typeof qty != 'number') {
        console.log("Format data tidak sesuai")
        return;
    }
    // membuat object
    const newProduct = { nama, harga, qty }
    // memasukan object yang dibuat ke products
    products.push(newProduct)
    console.log(`${nama} Berhasil dibuat`)
}

addProduct("laptop", 1000, 1)
addProduct("Hp", 500, 1)

const deletedProduct = (nama) => {
    // untuk mengecek nama berdasarkan index
    const index = products.findIndex(product => product.nama === nama)
    // jika tidak ada
    if (index === -1) {
        console.log("Data tidak ditemukkan")
        return;
    }

    // menghapus index
    products.splice(index, 1)
    console.log(`${nama} Berhasil dihapus!`)
}

deletedProduct("Hp")

const displayedProduct = () => {
    // mengecek panjang array
    if (products.length === 0) {
        console.log("Product tidak ada")
        return;
    }
    console.log("List Product")
    // looping 
    products.forEach(product => {
        console.log(`${product.nama} - harga : ${product.harga} - qty : ${product.qty}`)
    })
}

const calculatedProduct = () => {
    const total = products.reduce((acc, product) => acc + (product.harga * product.qty), 0)
    console.log(`Harga total : ${total}`)
}

const updatedProduct = (nama, newHarga, newQty) => {
    const index = products.findIndex(product => product.nama === nama)
    if (index === -1) {
        console.log("Data tidak ditemukkan")
        return;
    }

    if (typeof newHarga === 'number') {
        products[index].harga = newHarga
    }

    if (typeof newQty === 'number') {
        products[index].qty = newQty
    }

    console.log("Data Berhasil di update")
}

updatedProduct("laptop", 2000, 2)
calculatedProduct()
displayedProduct()