// =======================================================
// 1. TYPE NARROWING
// =======================================================
// Type narrowing = mengecilkan tipe union agar aman digunakan.
// TS otomatis mengenali tipe lewat typeof / if check.
function printValue(val: string | number | string[]) {
    if (typeof val === "string") {
        console.log("String:", val.toUpperCase());
    } else if (typeof val === "number") {
        console.log("Number:", val.toFixed(2));
    } else {
        console.log("Array:", val.join(", "));
    }
}



// =======================================================
// 2. CUSTOM TYPE GUARD
// =======================================================
// Custom type guard = function yg memastikan tipe tertentu.
// Formatnya: function isX(obj): obj is X
type User = { name: string };
type Admin = { name: string; role: "admin" };

function isAdmin(person: User | Admin): person is Admin {
    return (person as Admin).role === "admin";
}

function checkUser(u: User | Admin) {
    if (isAdmin(u)) {
        console.log("Admin:", u.name);
    } else {
        console.log("User:", u.name);
    }
}



// =======================================================
// 3. KEYOF + INDEX ACCESS TYPE
// =======================================================
// keyof = mengambil semua nama property dari suatu object.
// Index Access Type = mengambil tipe dari 1 property object.
type Product = {
    id: number;
    name: string;
    price: number;
};

// Generic function: key harus salah satu property product
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const item: Product = { id: 1, name: "Laptop", price: 15000000 };
console.log("Product name:", getProperty(item, "name"));



// =======================================================
// 4. MAPPED TYPES
// =======================================================
// Mapped Types = membuat tipe baru dengan memodifikasi tipe lama.
// Contoh: membuat semua property jadi optional.
type MakeOptional<T> = {
    [K in keyof T]?: T[K];
};

type OptionalProduct = MakeOptional<Product>;



// =======================================================
// 5. LITERAL TYPES
// =======================================================
// Literal type = value yg hanya boleh salah satu dari isi tertentu.
type Direction = "left" | "right" | "up" | "down";
let move: Direction = "left"; // hanya boleh 4 value itu



// =======================================================
// 6. DISCRIMINATED UNION
// =======================================================
// Teknik untuk membuat union yang punya "penanda tipe" (type field).
type Shape =
    | { type: "circle"; radius: number }
    | { type: "square"; size: number };

// pengecekan mudah karena ada field "type"
function area(shape: Shape) {
    if (shape.type === "circle") return Math.PI * shape.radius ** 2;
    return shape.size * shape.size;
}



// =======================================================
// 7. NEVER + EXHAUSTIVE CHECKING
// =======================================================
// never = tipe yg mustahil terjadi.
// Berguna memastikan semua "case" union sudah ditangani.
function handleShape(shape: Shape) {
    switch (shape.type) {
        case "circle":
            return "Circle area: " + area(shape);
        case "square":
            return "Square area: " + area(shape);
        default:
            // TS akan error jika ada union yg belum ditangani
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}
