let angka = 11

// if
console.log("\nIf")
if (angka > 0) {
    pesan = angka + " adalah bilangan positif"
}
console.log(pesan)

// else
console.log("\nElse")
angka = -14
if (angka > 0) {
    pesan = angka + " adalah bilangan positif"
} else {
    pesan = angka + " adalah bilangan negatif"
}
console.log(pesan)

// else if
console.log("\nElse If")
let jam = 15

if (jam < 12) {
    pesan = "Selamat Pagi";
} else if (jam < 18) {
    pesan = "Selamat Siang";
} else {
    pesan = "Selamat Sore";
}
console.log(pesan)

// nested if
console.log("\nNested If")
let bilangan = 0

if (bilangan >= 0) {
    if (bilangan == 0) {
        pesan = bilangan + " merupakan angka nol"
    } else {
        pesan = bilangan + " merupakan angka positif"
    }
} else {
    pesna = bilangan + " merupakan angka negatif"
}
console.log(pesan)

// switch case
console.log("\nSwitch Case")
switch (new Date().getDay()) {
    case 0:
        hari = "Minggu";
        break;
    case 1:
        hari = "Senin";
        break;
    case 2:
        hari = "Selasa";
        break;
    case 3:
        hari = "Rabu";
        break;
    case 4:
        hari = "Kamis";
        break;
    case 5:
        hari = "Jum'at";
        break;
    case 6:
        hari = "Sabtu";
}
console.log("Hari ini adalah hari " + hari)

// for loop
console.log("\nFor Loop")
for (i = 1; i <= 10; i++) {
    console.log("i = " + i)
}

// while loop
console.log("\nWhile Loop")
j = 1
while (j <= 10) {
    console.log("j = " + j)
    j++
}

// do while loop
console.log("\nDo While Loop")
k = 1
do {
    console.log("k = " + k)
    k++
} while (k <= 10)

// function
console.log("\nFunction")

function tambah(a, b) {
    return a + b
}

console.log(tambah(8, 11))