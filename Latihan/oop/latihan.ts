abstract class Kendaraan {
    nama: string
    private kecepatan: number

    constructor(nama: string, kecepatan: number) {
        this.nama = nama
        this.kecepatan = kecepatan
    }

    abstract tampikanInfo(): string

    get getKecepatan(): number {
        return this.kecepatan
    }

    set setKecepatan(kecepatan: number) {
        if (kecepatan > 200) {
            console.log('Kecepatan melebihi batas')
        } else {
            this.kecepatan = kecepatan
        }
    }
}

class Mobil extends Kendaraan {
    constructor(nama: string, kecepatan: number) {
        super(nama, kecepatan)
    }
    tampikanInfo(): string {
        return `${this.nama} berjalan dengan kecepatan ${this.getKecepatan}`
    }
}

class Motor extends Kendaraan {
    constructor(nama: string, kecepatan: number) {
        super(nama, kecepatan)
    }
    tampikanInfo(): string {
        return `${this.nama} berjalan dengan kecepatan ${this.getKecepatan}`
    }
}

class Sepeda extends Kendaraan {
    constructor(nama: string, kecepatan: number) {
        super(nama, kecepatan)
    }
    tampikanInfo(): string {
        return `${this.nama} berjalan dengan kecepatan ${this.getKecepatan}`
    }
}

function cetakInfoKendaraan(kendaraan: Kendaraan) {
    console.log(kendaraan.tampikanInfo())
}

const daftarKendaraan: Kendaraan[] = [
    new Motor("Yamaha", 150),
    new Mobil("Toyota", 180),
    new Sepeda("Polygon", 30),
];

for (const kendaraan of daftarKendaraan) {
    cetakInfoKendaraan(kendaraan);
}
