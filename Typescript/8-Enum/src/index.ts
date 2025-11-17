// ENUM
// Digunakan untuk membuat kumpulan nilai tetap
// Bisa untuk status, role, level, dsb.

// ---- Numeric Enum ----
enum Role {
    ADMIN,        // 0
    USER,         // 1
    GUEST         // 2
}

console.log("Enum numeric:", Role.ADMIN);     // 0
console.log("Enum by index:", Role[1]);       // "USER"


// ---- String Enum ----
enum Status {
    ACTIVE = "active",
    PENDING = "pending",
    BANNED = "banned"
}

console.log("Enum string:", Status.ACTIVE);
