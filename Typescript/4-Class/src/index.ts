// 1. Class dasar

class Mobil {
    merk: string;
    warna: string;

    constructor(merk: string, warna: string) {
        this.merk = merk;
        this.warna = warna;
    }

    info() {
        return `Mobil ${this.merk} berwarna ${this.warna}`;
    }
}

const avanza = new Mobil("Toyota Avanza", "Hitam");
console.log(avanza.info());


// 2. Class dengan access modifier (public, private, protected)

class BankAccount {
    public nama: string;     // bisa diakses dari mana saja
    private saldo: number;   // hanya di dalam class
    protected pin: number;   // bisa di class turunan

    constructor(nama: string, saldo: number, pin: number) {
        this.nama = nama;
        this.saldo = saldo;
        this.pin = pin;
    }

    cekSaldo() {
        return `Saldo ${this.nama}: ${this.saldo}`;
    }
}

const akun1 = new BankAccount("Fadil", 1000000, 1234);
console.log(akun1.cekSaldo());
// akun1.saldo // ❌ Error: private
// akun1.pin   // ❌ Error: protected


// 3. Class Inheritance (Pewarisan)

class Hewan {
    nama: string;

    constructor(nama: string) {
        this.nama = nama;
    }

    suara() {
        return "Suara hewan...";
    }
}

class Anjing extends Hewan {
    suara() {
        return "Guk Guk!";
    }
}

const dog = new Anjing("Milo");
console.log(dog.nama, dog.suara());


// 4. Getter dan Setter

class User {
    private _username: string;

    constructor(username: string) {
        this._username = username;
    }

    get username() {
        return this._username.toUpperCase();
    }

    set username(value: string) {
        if (value.length < 3) {
            console.log("Username minimal 3 karakter");
            return;
        }
        this._username = value;
    }
}

const u = new User("fadil");
console.log(u.username); // FADIL

u.username = "mu";
u.username = "mufa";
console.log(u.username);


// 5. Static Property dan Static Method

class MathHelper {
    static PI = 3.14;

    static kelilingLingkaran(r: number) {
        return 2 * this.PI * r;
    }
}

console.log("PI:", MathHelper.PI);
console.log("Keliling:", MathHelper.kelilingLingkaran(10));


// 6. Abstract Class (tidak bisa di-instantiate)

abstract class Shape {
    abstract luas(): number; // wajib diimplementasi di class turunan
}

class Persegi extends Shape {
    sisi: number;

    constructor(sisi: number) {
        super();
        this.sisi = sisi;
    }

    luas() {
        return this.sisi * this.sisi;
    }
}

const kotak = new Persegi(5);
console.log("Luas persegi:", kotak.luas());
