// ## Soal 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5
// code:
let pattern = "";
for (let i = 0; i <= input; i++) {
    for (let j = 0; j < i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);

//hasilnya
//*
//**
//***
//****
//*****
