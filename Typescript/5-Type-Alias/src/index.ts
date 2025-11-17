/**
 *      TYPE ALIAS
 * Type Alias adalah cara memberi NAMA baru pada tipe
 * agar lebih mudah dibaca, lebih rapi, dan bisa dipakai ulang.
 *
 * Contoh:
 * type UserID = number;
 * 
 * Bisa digunakan untuk membentuk tipe objek yang kompleks.
 */

type UserID = number;
type Username = string;

type User = {
    id: UserID;
    name: Username;
    isAdmin: boolean;
};

const user1: User = {
    id: 1,
    name: "Fadil",
    isAdmin: true
};

console.log(user1);
