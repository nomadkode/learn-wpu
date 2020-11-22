/** Better Comments
 * * is important
 * ! is alert
 * TODO is what you can do.
 * ? is questioning
 */
let uniCode = '\u00A9';
uniCode = '\u00AE';
uniCode = '\u00B1';
console.log(uniCode);

let x; // * deklarasi & inisialisasi
x = 20; // * penugasan

// * Popup Box
const nama = prompt('masukkan nama:');
alert(`Halo ${nama}`);
const tes = confirm('kamu yakin?');
if (tes === true) {
  alert('user menekan OK!');
} else {
  alert('user menekan CANCEL!');
}

// * Looping
// * while
let ulang = true;
while (ulang) {
  console.log('hello world');
  ulang = confirm('lagi?');
}

let nilaiAwal = 1;
while (nilaiAwal <= 10) {
  console.log(`hello world ${nilaiAwal} x`);
  nilaiAwal++;
}

// * for
for (let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
  console.log(`hello world ${nilaiAwal} x`);
}

// * Selection
// * if
let angka = 3;
if (angka <= 5) {
  console.log(`${angka} kurang dari 5`);
}

// * if else
let angka = 5;
if (angka % 2 == 0) {
  console.log(`${angka} adalah bilangan GENAP`);
} else {
  console.log(`${angka} adalah bilangan GANJIL`);
}

// * else if
let angka = 5;
if (angka % 2 === 0) {
  console.log(`${angka} adalah bilangan GENAP`);
} else if (angka % 2 === 1) {
  console.log(`${angka} adalah bilangan GANJIL`);
} else {
  console.log('Yang anda masukkan bukan angka!');
}

// * switch
let angka = 1;
switch (angka) {
  case 1:
    console.log('Anda memasukkan angka 1');
    break;
  case 2:
    console.log('Anda memasukkan angka 2');
    break;
  case 3:
    console.log('Anda memasukkan angka 3');
    break;
  default:
    console.log('Angka yang anda masukkan salah!');
    break;
}

let item = 'nasi';
switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    console.log('Makanan / Minuman SEHAT!');
    break;
  case 'hamburger':
  case 'softdrink':
    console.log('Makanan / Minuman TIDAK SEHAT!');
    break;
  default:
    console.log('Anda memasukkan Makanan / Minuman yang salah!');
    break;
}

// * Nesting Loop & Selection
// ! Segitiga
let str = '';
for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= i; j++) {
    str += '*';
  }
  str += '\n';
}
console.log(str);

// ! Segitiga Terbalik
let stri = '';
for (let i = 10; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    stri += '*';
  }
  stri += '\n';
}
console.log(stri);

// * Function
function jumlahVolumeDuaKubus(a, b) {
  let volumeA = a * a * a;
  let volumeB = b * b * b;
  let sum = volumeA + volumeB;
  return sum;
}
console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(15, 4));

// * Parameter & Argument
function tambah(a, b) /* Parameter */ {
  return a + b;
}

function kali(a, b) /* Parameter */ {
  return a * b;
}
let hasil = kali(tambah(1, 2), tambah(3, 4)); /* argument */
console.log(hasil);

//* function & pseudo variable arguments
function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
let coba = tambah(1, 2, 3, 4);
console.log(coba);

//* Scope
let a = 1; // Global Scope

function tes() {
  let b = 2; // Function Scope
  console.log(b);
  console.log(a);
}
tes();

//* Recursion
function angka(n) {
  if (n === 0) return; // Base Case
  console.log(n);
  angka(n - 1);
}
angka(10);

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
console.log(faktorial(5));

//* Array
let binatang = [];
binatang = ['kucing', 'sapi', 'monyet', 'panda', 'koala', 'kelinci'];
console.log(binatang[3]);
console.log(typeof binatang);
console.log(binatang.length);

let myArray = ['bakso', binatang, 1, 2, false, [4, 5, 6]];
console.log(myArray[1]);
console.log(typeof myArray);
console.log(myArray.length);
console.log(myArray[5][1]);
console.log(myArray[1][2]);

//* push pop shift unshift
let arr = ['rama', 'diyan'];
for (let i = 0; i < arr.length; i++) {
  console.log(`Mahasiswa ke ${i} : ${arr[i]}`);
}
arr.push('ramset', 'setram');
arr.pop();
arr.unshift('yanse', 'setia', 'awan');
arr.shift();
console.log(arr.length);
console.log(arr.join(' - '));

//* slice & splice
let arr = ['rama', 'diyan', 'awan', 'ramset'];
arr.splice(2, 1, 'setia', 'wan');
console.log(arr.join(' - '));

let arr2 = arr.slice(2, 4);
console.log(arr2.join(' - '));

//* forEach
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
angka.forEach(function (e) {
  console.log(e);
});

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ['rama', 'diyan', 'setia', 'awan'];
nama.forEach(function (nama, angka) {
  console.log(`Mahasiswa ke-${angka + 1} adalah: ${nama}.`);
});

//* map
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let arrAngka = angka.map(function (e) {
  return e * 2;
});
console.log(arrAngka.join(' - '));

//* sort
let angka = [1, 3, 9, 2, 6, 5, 8, 0, 4, 7];
angka.sort();
console.log(angka.join(' , '));

//* find
let angka = [1, 3, 9, 2, 6, 5, 8, 0, 4, 7];
let arrAngka = angka.find(function (x) {
  return x > 5;
});
console.log(arrAngka);

//* filter
let angka = [1, 3, 9, 2, 6, 5, 8, 0, 4, 7];
let arrAngka = angka.filter(function (y) {
  return y > 5;
});
console.log(arrAngka.join(' , '));

//* Object Literal
//* contoh 1
let mahasiswa = {
  namaDepan: 'rama',
  namaBelakang: 'setia',
  umur: 26,
  alamat: {
    jalan: 'Jl. abc No. 42',
    kota: 'Jakarta Barat',
    provinsi: 'Jakarta',
  },
  ipSemester: [2.9, 3.1, 3.25, 2.88, 3.04],
  ipKumulatif: function () {
    let total = 0;
    let ips = this.ipSemester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};
console.log(mahasiswa.ipSemester[2]);
console.log(mahasiswa.ipKumulatif());

//* Contoh 2
let mhs = {
  nama: 'Rama',
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  },
};
console.log(mhs.makan(2));
console.log(mhs.energi);

//* Function declaration Object
//* Contoh 1
function buatMahasiswa(namaDepan, namaBelakang, umur, alamat) {
  let mahasiswa = {};
  mahasiswa.Namadepan = namaDepan;
  mahasiswa.namaBelakang = namaBelakang;
  mahasiswa.umur = umur;
  mahasiswa.alamat = alamat;
  return mahasiswa;
}
let mahasiswa1 = buatMahasiswa('rama', 'setia', '26', 'jl. kincir 3');
console.log(mahasiswa1);

//* Contoh 2
const methodMhs = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mhs = {};
  mhs.nama = nama;
  mhs.energi = energi;
  mhs.makan = methodMhs.makan;
  mhs.main = methodMhs.main;
  mhs.tidur = methodMhs.tidur;
  return mhs;
}

let rama = Mahasiswa('Ramadyan', 10);
console.log(rama.makan(3));
console.log(rama.main(5));
console.log(rama.tidur(5));
console.log(rama);

//* Object Constructor Function (new)
//* Contoh 1
function Mahasiswa(namaDepan, namaBelakang, umur, alamat) {
  this.namaDepan = namaDepan;
  this.namaBelakang = namaBelakang;
  this.umur = umur;
  this.alamat = alamat;
}
let mahasiswa2 = new Mahasiswa('diyan', 'setia', '20', 'jl. kincir 1');
console.log(mahasiswa2);

//* Contoh 2
const methodMhs = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = methodMhs.makan;
  this.main = methodMhs.main;
  this.tidur = methodMhs.tidur;
}

let rama = new Mahasiswa('Ramadyan', 10);
console.log(rama.makan(3));
console.log(rama.main(5));
console.log(rama.tidur(5));
console.log(rama);

//* Object.create()
const methodMhs = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mhs = Object.create(methodMhs);
  mhs.nama = nama;
  mhs.energi = energi;
  return mhs;
}

let rama = Mahasiswa('Ramadyan', 10);
console.log(rama.makan(3));
console.log(rama.main(5));
console.log(rama.tidur(5));
console.log(rama);

//* Prototype
function Mahasiswa(nama, energi) {
  // let this = Object.create(Mahasiswa.prototype); dibelakang layar
  this.nama = nama;
  this.energi = energi;
  // return this; dibelakang layar
}
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};

let rama = new Mahasiswa('Ramadyan', 10);
console.log(rama.makan(3));
console.log(rama.main(5));
console.log(rama.tidur(5));
console.log(rama.energi);

//* Class Version
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }
  tidur(jam) {
    this.energi += jam;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}
let rama = new Mahasiswa('Ramadyan', 10);
console.log(rama.makan(3));
console.log(rama.main(5));
console.log(rama.tidur(5));
console.log(rama.energi);

//* Closures
//* Lexical Scope
function init() {
  let nama = 'Rama'; // local variable
  function tampilNama() {
    /* inner function (closure) */
    console.log(nama); // akses ke parent  / lexical scope
  }
  tampilNama();
}
init();

//* Function Factory
//* Contoh 1
function init() {
  return function (nama) {
    /*anonymous function */
    console.log(nama);
  };
}
let panggilNama = init();
panggilNama('Rama');
panggilNama('Dyan');

//* Contoh 2
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama} selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}
let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('Rama');
selamatMalam('Dyan');

//* Contoh 3
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());

//* Arrow Function
//* Contoh 1
const haloDunia = () => 'Hello World';
console.log(haloDunia());

//* Contoh 2 function expression vs arrow function
// const tampilNama = function (nama, waktu) {
//   return `selamat ${waktu}, ${nama}.`;
// };
const tampilNama = (nama, waktu) => `selamat ${waktu}, ${nama}`;
console.log(tampilNama('Rama', 'Pagi'));

//* Contoh 3
let maha = ['Rama', 'Dyan', 'Setia', 'Awan'];
let jumlahHuruf = maha.map((nama) => nama.length);
console.log(jumlahHuruf);

//* Contoh 4
let jumlahHurufnya = maha.map((nama) => ({
  nama,
  jmlHuruf: nama.length,
}));
console.table(jumlahHurufnya);

//* This Arrow Function
//* Contoh 1
const Mahasiswa = function () {
  this.nama = 'Rama';
  this.umur = 20;
  this.sayHello = () => {
    console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };

  setInterval(() => {
    console.log(this.umur++);
  }, 500);
};
const ramadyan = new Mahasiswa();

//* Contoh 2 arrow function pada DOM
const box = document.querySelector('box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

//* Higher Order Function
//* Contoh 1
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count++;
}
console.log(total);

//* Contoh 2
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
function repeatLog(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
repeatLog(1);
repeatLog(10);
repeatLog(100);

//* Contoh 3
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// For
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);
console.log(angka);
//* Filter
const newAngka1 = angka.filter((a) => a >= 3);
console.log(newAngka1);

//* Map
const newAngka2 = angka.map((a) => a * 2);
console.log(newAngka2);

//* Reduce
const newAngka3 = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue //* , nilaiAwal opt
);
console.log(newAngka3);

//* Method Chaining
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, curr) => acc + curr);
console.log(hasil);

//* Template Literal

//* HTML Fragments
//* Contoh 1
const mhs = {
  nama: 'Rama',
  umur: 20,
  nrp: '12345678',
  email: 'ramset@gmail.com',
};
const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp>${mhs.nrp}</span>
</div>`;
console.log(el);

//* Contoh 2 Looping
const mhs = [
  {
    nama: 'Rama',
    email: 'rama@ramset.co.id',
  },
  {
    nama: 'Diyan',
    email: 'diyan@ramset.co.id',
  },
  {
    nama: 'Setia',
    email: 'setia@ramset.co.id',
  },
];
const el = `<div class="mhs">
  ${mhs
    .map(
      (m) => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
  </ul>`
    )
    .join('')}
</div>`;
// console.log(el);
document.body.innerHTML = el;

//* Contoh 3 Conditional
const lagu = {
  judul: 'Kau Adalah',
  penyanyi: 'Isyana Sarasvati',
  feat: 'Rayi Putra',
};
const el = `<div class="lagu">
  <ul>
  <li>${lagu.penyanyi}</li>
  <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
  </ul>
</div>`;
// console.log(el);
document.body.innerHTML = el;

//* Contoh 4 Nested
const mhs = {
  nama: 'Rama',
  semester: 5,
  mataKuliah: ['RPL', 'TKJ', 'IT', 'Web'],
};
function cetakMataKuliah(mataKuliah) {
  return `
  <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join('')}
  </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester: ${mhs.semester}</span>
  <h4>Mata Kuliah</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
// console.log(el);
document.body.innerHTML = el;

//* Expression Interpolation
//* Contoh 1
let a = 10;
let b = 15;
console.log(
  `Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah: ${a + b}, bukan ${
    2 * a + b
  }.`
);
//* Contoh 2
const x = 10;
console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

//* Tagged Template
//* Contoh 1
const nama = 'Rama';
const umur = 20;
function coba(strings, ...values) {
  // let result = '';
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`;
  // });
  // return result;
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ''}`,
    ''
  );
}
const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);
document.body.innerHTML = str;

//* Contoh 2
const nama = 'Rama';
const umur = 20;
const email = 'rama@ramset.co.id';
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class="hl">${values[i] || ''}</span>`,
    ''
  );
}
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;
// console.log(str);
document.body.innerHTML = str;
