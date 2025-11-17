
// STRING
let username: string = "Fadil";
let greeting: string = `Halo, ${username}!`;
console.log(greeting);

// NUMBER
let age: number = 20;
let pi: number = 3.14159;
console.log("Umur:", age, "| Nilai PI:", pi);

//  BOOLEAN
let isStudent: boolean = true;
console.log("Apakah mahasiswa?", isStudent);

//  ARRAY
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apel", "pisang", "mangga"];
console.log("Angka:", numbers);
console.log("Buah:", fruits);

// TUPLE
let person: [string, number, boolean] = ["Fadil", 20, true];
console.log("Tuple:", person);

//ENUM
enum Role {
    Admin,
    User,
    Guest,
}
let myRole: Role = Role.Admin;
console.log("Role:", Role[myRole]);

// ANY (hindari kalau bisa)
let randomValue: any = "Bebas";
randomValue = 123;
console.log("Any:", randomValue);

// UNKNOWN (lebih aman dari any)
let value: unknown = "Halo Dunia";
if (typeof value === "string") {
    console.log("Panjang string:", value.length);
}

//VOID (fungsi tanpa return)
function sayHello(): void {
    console.log("Hello dari fungsi void!");
}
sayHello();

//NULL & UNDEFINED
let kosong: null = null;
let belumAda: undefined = undefined;
console.log("Null:", kosong, "| Undefined:", belumAda);

//  OBJECT
let user: { name: string; age: number } = {
    name: "Fadil",
    age: 20,
};
console.log("User:", user);

//UNION TYPE
let id: string | number;
id = 123;
console.log("ID:", id);
id = "A123";
console.log("ID:", id);

// TYPE ALIAS
type Point = { x: number; y: number };
let koordinat: Point = { x: 10, y: 20 };
console.log("Koordinat:", koordinat);

// LITERAL TYPE
let arah: "kiri" | "kanan" | "atas" | "bawah";
arah = "atas";
console.log("Arah:", arah);

// FUNCTION TYPE
function tambah(a: number, b: number): number {
    return a + b;
}
console.log("Hasil tambah:", tambah(3, 4));

// OPTIONAL PROPERTY
type Produk = { nama: string; harga: number; diskon?: number };
let barang: Produk = { nama: "Keyboard", harga: 300000 };
console.log("Produk:", barang);

//TYPE INFERENCE
let bahasa = "TypeScript"; // otomatis string
// bahasa = 123 ❌ error
console.log("Inferred:", bahasa);

// NEVER (fungsi tidak kembali)
function error(msg: string): never {
    throw new Error(msg);
}
// ⚠️ jangan dipanggil, hanya contoh tipe never
// error("Terjadi kesalahan!");

// ======================================
// ✅ Semua tipe data dasar TS selesai!
// ======================================
