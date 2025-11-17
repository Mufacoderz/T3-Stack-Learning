// GENERICS
// Membuat tipe yang fleksibel & reusable

// ---- Generic Function ----
function wrapValue<T>(value: T) {
    return {
        data: value
    };
}

console.log("Generic String:", wrapValue("Hello"));
console.log("Generic Number:", wrapValue(123));


// ---- Generic Interface ----
interface ApiResponse<T> {
    status: number;
    data: T;
}

// response berisi string
const response1: ApiResponse<string> = {
    status: 200,
    data: "OK"
};

// response berisi object
const response2: ApiResponse<{ id: number; name: string }> = {
    status: 200,
    data: { id: 1, name: "Fadil" }
};

console.log("Generic Interface:", response1, response2);
