// * Angkot 1

let angkot = 1;
while (angkot <= 10) {
  console.log(`Angkot No. ${angkot} beroperasi dengan baik.`);
  angkot++;
}

// * Angkot 2

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
}

// * Angkot 3

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
  }
}

// * Angkot 4 & 5

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log(`Angkot No. ${noAngkot} sedang lembur.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
  }
}

// * Angkot 6

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log(`Angkot No. ${noAngkot} sedang lembur.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
  }
}
