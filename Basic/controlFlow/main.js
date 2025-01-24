// Soal 1 
hari = "minggu"
if (hari == "senin" || hari == "selasa" || hari == "rabu" || hari == "kamis" || hari == "jumat") {
    console.log("Bekerja")
} else {

    console.log("Libur")
}

// Soal 2
n = 1
while (n <= 50) {
    if (n % 2 == 0) {
        console.log(n)
    }
    n++
}

// Soal 3
let summNumber = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        summNumber += i;
    }
}

console.log(summNumber);

// Soal 4
let kalkulator = (angka1, angka2, operator) => {
    switch (operator) {
        case "+":
            console.log(angka1 + angka2);
            break;
        case "-":
            console.log(angka1 - angka2);
            break;
        case "*":
            console.log(angka1 * angka2);
            break;
        case "/":
            if (angka2 == 0) {
                console.log("Error! Pembagi tidak boleh 0")
            } else {
                console.log(angka1 / angka2);
            }
            break;
        default:
            console.log("Error! Operator tidak dikenali")
            break;
    }
}
kalkulator(5, 1, "/")

// Soal 5
const height = 5;
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}