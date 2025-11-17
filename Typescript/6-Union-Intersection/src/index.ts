// UNION & INTERSECTION TYPES
// Union = salah satu tipe
// Intersection = gabungan beberapa tipe

// ---- Union ----
// value boleh number ATAU string
let kode: number | string = 123;
kode = "ABC123";

console.log("Union:", kode);


// ---- Intersection ----
// Menggabungkan 2 tipe menjadi 1
type User = {
    name: string;
}

type Admin = {
    role: string;
}

type SuperAdmin = User & Admin;

const superman: SuperAdmin = {
    name: "Fadil",
    role: "Administrator",
};

console.log("Intersection:", superman);
