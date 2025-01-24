abstract class Karyawan {
    public nama: string;
    public id: number;
    public gaji: number;

    constructor(nama: string, id: number, gaji: number) {
        this.nama = nama;
        this.id = id;
        this.gaji = gaji
    }

    abstract hitungGaji(): number;
    abstract cetakInformasi(): string
}

class Staff extends Karyawan {
    posisi: string
    constructor(nama: string, id: number, gaji: number, posisi: string) {
        super(nama, id, gaji);
        this.posisi = posisi
    }

    hitungGaji(): number {
        return this.gaji;
    }
    cetakInformasi(): string {
        return `Nama: ${this.nama}\n ID: ${this.id}\n posisi: ${this.posisi}\n gaji: ${this.hitungGaji()}`
    }
}

class Manager extends Karyawan {
    posisi: string
    constructor(nama: string, id: number, gaji: number, posisi: string) {
        super(nama, id, gaji);
        this.posisi = posisi
    }

    hitungGaji(): number {
        return this.gaji + 500000;
    }
    cetakInformasi(): string {
        return `Nama: ${this.nama}\n ID: ${this.id}\n posisi: ${this.posisi}\n gaji: ${this.hitungGaji()}`
    }
}

class Direktur extends Karyawan {
    posisi: string
    constructor(nama: string, id: number, gaji: number, posisi: string) {
        super(nama, id, gaji);
        this.posisi = posisi
    }

    hitungGaji(): number {
        return this.gaji + 1000000;
    }
    cetakInformasi(): string {
        return `Nama: ${this.nama}\n ID: ${this.id}\n posisi: ${this.posisi}\n gaji: ${this.hitungGaji()}`
    }
}

const staff = new Staff('John Doe', 1, 500000, 'Staff');
console.log(staff.cetakInformasi());
const manager = new Manager('Jane Doe', 2, 1000000, 'Manager');
console.log(manager.cetakInformasi());
const direktur = new Direktur('Bob Doe', 3, 2000000, 'Direktur');
console.log(direktur.cetakInformasi());