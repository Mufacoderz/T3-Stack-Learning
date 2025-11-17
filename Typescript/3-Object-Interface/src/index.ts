// 1. Object dasar

// TypeScript otomatis mengenali struktur object (type inference)
const user = {
    nama: "Fadil",
    umur: 20,
    aktif: true,
};

// user.umur = "dua puluh"; // ❌ Error: harus number

console.log("User:", user);


// 2. Object dengan tipe manual (explicit typing)

const buku: {
    judul: string;
    tahun: number;
    penulis: string;
} = {
    judul: "Belajar TypeScript",
    tahun: 2024,
    penulis: "Mufa",
};

console.log("Buku:", buku);


// 3. Function yang menerima object

function printUser(info: { nama: string; umur: number }) {
    return `Nama: ${info.nama}, Umur: ${info.umur}`;
}

console.log(printUser({ nama: "Fadil", umur: 21 }));


// 4. Interface untuk membuat tipe object

interface Product {
    id: number;
    nama: string;
    harga: number;
}

const laptop: Product = {
    id: 1,
    nama: "ASUS ROG",
    harga: 20000000,
};

console.log("Product:", laptop);


// 5. Interface dengan optional property

interface UserProfile {
    username: string;
    bio?: string; // optional → boleh ada, boleh tidak
}

const profil1: UserProfile = {
    username: "mufadevx",
};

const profil2: UserProfile = {
    username: "fadil",
    bio: "Pelajar & Programmer",
};

console.log("Profile 1:", profil1);
console.log("Profile 2:", profil2);


// 6. Interface dengan readonly

interface Config {
    readonly apiKey: string; // tidak bisa diganti
    appName: string;
}

const config: Config = {
    apiKey: "123-456",
    appName: "MyApp",
};

// config.apiKey = "baru"; // ❌ Error: readonly

console.log("Config:", config);


// 7. Interface inheritance (turunan interface)

interface Animal {
    nama: string;
    umur: number;
}

interface Cat extends Animal {
    warna: string;
}

const kucing: Cat = {
    nama: "Milo",
    umur: 2,
    warna: "Putih",
};

console.log("Cat:", kucing);


// 8. Array of object

const daftarProduk: Product[] = [
    { id: 1, nama: "HP", harga: 1500000 },
    { id: 2, nama: "Keyboard", harga: 500000 },
    { id: 3, nama: "Mouse", harga: 200000 },
];

console.log("Daftar Produk:", daftarProduk);
