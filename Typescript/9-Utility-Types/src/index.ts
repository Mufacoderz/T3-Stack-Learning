// UTILITY TYPES
// Fitur penting untuk transformasi object

interface User {
    id: number;
    name: string;
    age?: number;
}


// ---- Partial<T> ----
// Semua property jadi optional
const updateUser: Partial<User> = {
    name: "Fadil"
};


// ---- Required<T> ----
// Semua property jadi wajib
const fullUser: Required<User> = {
    id: 1,
    name: "Fadil",
    age: 20
};


// ---- Pick<T, Keys> ----
// Hanya ambil property tertentu
const pickedUser: Pick<User, "id" | "name"> = {
    id: 1,
    name: "Fadil"
};


// ---- Omit<T, Keys> ----
// Menghapus property tertentu
const userWithoutAge: Omit<User, "age"> = {
    id: 1,
    name: "Fadil"
};

console.log(updateUser, fullUser, pickedUser, userWithoutAge);
