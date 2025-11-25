import { tambah, PI, type Circle } from "./math.js";//ambl interface pake type // pake .js walaupun .ts

console.log("Tambah:", tambah(5, 7));
console.log("PI:", PI);

const lingkaran: Circle = {
    radius: 10
};

console.log("Lingkaran:", lingkaran);
