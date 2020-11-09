# JScheatsheet

# TIPE DATA

- NUMBER: (15 digit)

  1. Angka tanpa desimal: 10, 123456, 3000
  2. Angka desimal: 3.14, 0.5, 100.00
  3. Eksponen: 123e5 // 12300000, 123e-5 // 0.00123
  4. Bilangan negatif: -0.134, -2, -100.00
  5. Bilangan oktal (Basis 8)
  6. Bilangan Hexadesimal (Basis 16)
  7. Bilangan Spesial: -Infinity, NaN

- OPERATOR

  1. Unary (membutuhkan 1 operand)
     a. typeof
     number, string, boolean
  2. Binary (membutuhkan 2 operand)
     a. aritmatika: +, -, _, /, % (modulus)
     Operator Precedence: Kurung, Kali, Bagi, Tambah, Kurang.
     b. penugasan (assignment): =, +=, -=, _=, /=, %=
     c. perbandingan (comparison): ==, !=, ===, !==, >, >=, <, <=
     d. logika: &&, ||, !
     e. string: concatination +
  3. Ternary (membutuhkan 3 operand)
     a. kondisional
     (kondisi) ? benar : salah
     (x % 2 == 0) ? "genap" : "ganjil"

- String Escape Character
  - \0 = null
  - \' = '
  - \" = "
  - \\ = \
  - \n = new line
  - \t = tab
  - \b backspace
  - \uXXXX = Unicode

# VARIABLE

- Deklarasi: mendaftarkan variabel ke dalam lingkup yg sesuai.
- Inisialisasi: menyediakan memori untuk variabel.
- Penugasan: menetapkan nilai yg spesifik ke dalam variabel.

  Syarat variabel:

  - tanpa spasi.
  - camelCase.
  - tidak diawali dgn angka.
  - tidak menggunakan keyword & reserved word.
  - variable scope: local & global.

- VAR, LET & CONST

# REFACTORING: Sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya.

    Alasan:

    -   Readability
    -   DRY, dont repeat yourself
    -   Testability
    -   Performance
    -   Maintainability

- Popup box function:

  - alert
  - prompt
  - confirm

# CONTROL FLOW

- Pengulangan (LOOP)

  1.  while
      a. while(kondisi) {aksi};
      b. nilai awal
      while(kondisi terminasi) {
      aksi;
      increment/decrement;
      }
  2.  for
      for(nilai awal; kondisi terminasi; increment/ decrement) {
      aksi;
      }
  3.  for in
  4.  for of
  5.  do while

- Pengkondisian (SELECTION)

  1. if else
     if (kondisi) {
     aksi 1;
     } else {
     aksi 2;
     }
  2. else if
     if (kondisi 1) {
     aksi 1;
     } else if (kondisi 2) {
     aksi 2;
     } else if (kondisi n) {
     aksi n;
     } else {
     aksi default;
     }
  3. switch
     switch (ekspresi) {
     case "nilai 1":
     aksi 1;
     [break;]
     case "nilai 2":
     aksi 2;
     [break;]
     case "nilai n":
     aksi n;
     [break;]
     default:
     aksi default
     [break;]
     }

# FUNCTION

- Built-in Function

  1. alert();
  2. confirm();
  3. prompt();
  4. split();
  5. slice();
  6. dll

- User-defined Function
  keyword namaFunction (parameter/argument \*opsional) {
  function body;
  return value; \*opsional
  }
  console.log(namaFunction(argument));

  1. function declaration

  - function identifier (ParameterList opt) {function body}
  - Lebih fleksibel
  - Mudah dipahami pemula
    contoh:
    function jumlahDuaBilangan (a, b) {
    let total;
    total = a + b;
    return total;
    }

  2. function expression

  - Harus didefinisikan terlebih dahulu sebelum dipanggil
  - Lebih powerful (Closure, argumen u/ function lain, IIFE)
    function identifier opt (ParameterList opt) {function body}
    contoh:
    let jumlahDuaBilangan = function (a, b) {
    let total;
    total = a + b;
    return total;
    }

# SCOPE

- Global / Window Scope
  let a = 1;
  console.log(a);
- Function Scope
  function tes() {
  let b = 2;
  }
  tes();
  console.log(b);
- Block Scope
  function tes() {
  let c = 3;
  console.log(c);
  }
  tes();

# RECURSION: Sebuah fungsi yang memanggil dirinya sendiri.

Implementasi:

- Menggantikan looping
- Deret Fibonacci
- Pencarian & penelusuran struktur data list & tree
  contoh:
  function faktorial(n) {
  if (n === 0) return 1;
  return n \* faktorial(n -1);
  }

# STRUKTUR DATA

- ARRAY: Kumpulan elemen-elemen (value / variable) yg tiap elemen memiliki index.
  Fungsi Array:

  - Mempermudah pengelolaan nilai / value / data
  - Manajemen memori
    contoh: let hari = ["senin", "selasa", "rabu", 1 ];

  Array Manipulation

  - Jumlah elemen: length
  - Menggabungkan: join
  - Menambah & Menghapus:
    di akhir: push, pop
    di awal: unshift, shift
  - menyambung dan memotong:
    1. splice
       namaArray.splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
    2. slice
       let arrayBaru = namaArray.slice (indexAwal, akhir);
  - looping:
    1. tidak dlm bentuk array: forEach
       namaArray.forEach(function (parameter) {
       aksi;
       })
    2. dlm bentuk array: map
       namaArray.map(function (parameter) {
       aksi;
       })
  - mengurutkan array: sort
    namaArray.sort();
  - mencari elemen array:
    1. satu nilai: find
       let arrayBaru = namaArray.find (function (parameter) {
       return;
       })
    2. banyak nilai: filter
       let arrayBaru = namaArray.filter (function (parameter) {
       return;
       })

- OBJECT: Kumpulan elemen (value/ variable) yg tiap elemen memiliki property.
  - Object Literal: Tidak efektif untuk object yg banyak.
    let namaObject = {
    property1 : value1,
    property2 : value2,
    method1 : function1  
     }
  - Function Declaration Object
    function namaObject (param1, param2) {
    deklarasi object = {};
    object.property1 = param1;
    object.property2 = param2;
    return object;
    }
    deklarasi objectBaru = namaObject(value1, value2);
  - Object Constructor Function
    function NamaObject (param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
    }
    deklarasi objectBaru = new NamaObject (value1, value2);
    this adalah object global scope.
  - object.create()
    function namaObject (param1, param2) {
    deklarasi object = Object.create{};
    object.property1 = param1;
    object.property2 = param2;
    return object;
    }
    deklarasi objectBaru = namaObject (value1, value2);
  - Prototypal Inheritance
    function NamaObject (param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
    }
    NamaObject.prototype.method1 = function1;
    NamaObject.prototype.method2 = function2;
    NamaObject.prototype.method3 = function3;
  - Prototype in Class Version
    class NamaKelas {
    constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
    }
    method1;
    method2;
    method3;
    }

# CONTEXT

1.  Creation Phase pada global scope
    nama var = undefined
    nama function = fn() yaitu fungsinya itu sendiri.
    - Hoisting
      window = global object
      this = window
2.  Execution Phase
    function membuat local execution context

# CLOSURES

- merupakan kombinasi antara function dan lexical scope di dalam function tsb.
- sebuah function ketika memiliki akses ke parent scope, meskipun parent scope nya sudah selesai dieksekusi.

# DOM (Document Object Model): Representasi elemen HTML pada dokumen menjadi sebuah object. Tersimpan ke dalam DOM Tree.

Manfaat DOM:

- Sebagai antarmuka pemrograman berbasis objek yg merepresentasikan dokumen web.
- DOM membuat seluruh komponen dari halaman web dapat diakses & dimanipulasi.
- Komponen : Elemen html, atribut, text, dll.
- DOM Tree
  1. NodeList: Kumpulan yg berisi node apapun.
  2. HTMLCollection: Kumpulan yg berisi node elemen html dan bersifat live.
- Hierarki:

  - Root Node (Document): Node yg menjadi sumber dr semua node lain di dlm DOM.
  - Parent Node: Node yg berada satu tingkat diatas node lain.
    cth: body adalah parent dr h1, p, div & a.
  - Child Node: Node yg berada satu tingkat dibawah node lain.
    cth: h1 adalah child dr body.

- Tipe tipe node/ simpul:

  1. element
  2. attribute
  3. text
  4. cdata section
  5. entity reference
  6. entity
  7. processing instruction
  8. comment
  9. document
  10. document type
  11. document fragment
  12. notation

- DOM Selection

  - Seperti memakai element pada HTML:
    1. getElementById() = menghasilkan element.
    2. getElementsByTagName() = menghasilkan HTMLCollection.
    3. getElementsByClassName() = menghasilkan HTMLCollection.
  - Seperti memakai selector pada CSS:
    1. querySelector() = menghasilkan element.
    2. querySelectorAll() = menghasilkan NodeList.

- DOM Manipulation

  - Element Manipulation
    1. element.innerHTML = mengubah isi dr element yg diseleksi.
    2. element.style.<property> = mengubah style dr elemen yg diseleksi.
    3. element.getAttribute() = mengetahui isi attribute.
    4. element.setAttribute() = menambahkan attribute.
    5. element.removeAttribute() = menghapus attribute.
    6. element.classList:
       - add() = menambahkan kelas.
       - remove() = menghapus kelas.
       - toggle() = menambahkan kelas jika belum ada, menghapus jika sudah ada.
       - item() = mengecek kelas dgn index.
       - contains() = mengecek kelas yg dimaksud.
       - replace() = mengganti kelas.
  - Node Manipulation
    1. document.createElement()
    2. document.createTextNode()
    3. node.appendChild()
    4. node.insertBefore()
    5. parentNode.removeChild()
    6. parentNode.replaceChild()

- DOM Event
  - Event Handler = Hanya bisa dijalankan perintah terakhir.
    1. Inline HTML attribute
    2. Element Method
       on<event>
  - addEventListener() = Dapat dijalankan berkali-kali.
- DOM Traversal

  - parentNode = hasilnya node.
  - parentElement = hasilnya element.
  - nextSibling = hasilnya node.
  - nextElementSibling = hasilnya element.
  - previousSibling = hasilnya node.
  - previousElementSibling = hasilnya element.

- Prevent Default

  - Untuk mencegah aksi default, menggunakan method: event.preventDefault();

- Event Bubbling
  - Ketika event dijalankan akan menjalankan event pada parent sebelum ke child. Menggunakan event.stopPropagate();
