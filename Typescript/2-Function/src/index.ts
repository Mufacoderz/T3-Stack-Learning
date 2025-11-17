// 1. Function sederhana
function sapa() {
    return "Halo dunia!"
}

console.log(sapa())


// 2. Function dengan parameter
function greet(nama: string) {
    return `Halo, ${nama}`
}

console.log(greet("Fadil"))


// 3. Function dengan return number
function tambah(a: number, b: number) {
    return a + b
}

console.log(tambah(5, 3))


// 4. Optional Parameter (pakai `?`)
function salam(nama: string, title?:string) {
    if (title) {
        return `Halo ${title} ${nama}`
    }
    return `Halo ${nama}`
}

console.log(salam("Fadil"))//title pke tnda tanya jdi gkwajib
console.log(salam("Fadil", "Mr."))


// 5. Arrow Function
const kali = (a:number, b:number) => a * b

console.log(kali(4, 2))


// 6. Default Parameter
function buatUser(nama:string, role = "user") {
    return `${nama} sebagai ${role}`
}

console.log(buatUser("Fadil"))           // role default
console.log(buatUser("Admin", "admin")) // custom role
