# JScheatsheet

/ TIPE DATA

-   NUMBER: (15 digit)
    a. Angka tanpa desimal
    10, 123456, 3000
    b. Angka desimal
    3.14, 0.5, 100.00
    c. Eksponen
    123e5 // 12300000
    123e-5 // 0.00123
    d. Bilangan negatif  
     -0.134, -2, -100.00
    e. Bilangan oktal (Basis 8)
    f. Bilangan Hexadesimal (Basis 16)
    g. Bilangan Spesial
    Infinity, -Infinity, NaN

-   OPERATOR
    a. Unary (membutuhkan 1 operand) 1. typeof
    number, string, boolean
    b. Binary (membutuhkan 2 operand) 1. aritmatika
    +, -, \*, /, % (modulus)
              Operator Precedence: Kurung, Kali, Bagi, Tambah, Kurang.
          2. penugasan (assignment)
              =, +=, -=, *=, /=, %=
          3. perbandingan (comparison)
              ==, !=, ===, !==, >, >=, <, <=
          4. logika
              &&, ||, !
          5. string
              concatination +
    c. Ternary (membutuhkan 3 operand) 1. kondisional
    (kondisi) ? benar : salah
    (x % 2 == 0) ? "genap" : "ganjil"

String Escape Character - \0 = null - \' = ' - \" = " - \\ = \
 - \n = new line - \t = tab - \b backspace - \uXXXX = Unicode

VARIABLE - Deklarasi: mendaftarkan variabel ke dalam lingkup yg sesuai. - Inisialisasi: menyediakan memori untuk variabel. - Penugasan: menetapkan nilai yg spesifik ke dalam variabel.

    Syarat variabel:
    - tanpa spasi.
    - camelCase.
    - tidak diawali dgn angka.
    - tidak menggunakan keyword & reserved word.
    - variable scope: local & global.

REFACTORING
Sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya.
Alasan: - Readability - DRY, dont repeat yourself - Testability - Performance - Maintainability

Popup box function: - alert - prompt - confirm

CONTROL FLOW - Pengulangan (LOOP) 1. while
a. while(kondisi) {aksi};
b. nilai awal
while(kondisi terminasi) {
aksi;
increment/decrement;
} 2. for
for(nilai awal; kondisi terminasi; increment/ decrement) {
aksi;
} 3. for in 4. for of 5. do while

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

FUNCTION - Built-in Function
alert();
confirm();
prompt();
split();
slice();
dll

    - User-defined Function
        keyword namaFunction (parameter/argument *opsional) {
            function body;

            return value; *opsional
        }
        console.log(namaFunction(argument));

        a. function declaration
            - function identifier (ParameterList opt) {function body}
            - Lebih fleksibel
            - Mudah dipahami pemula
            contoh:
            function jumlahDuaBilangan (a, b) {
                let total;
                total = a + b;
                return total;
            }

        b. function expression
            function identifier opt (ParameterList opt) {function body}
            - Harus didefinisikan terlebih dahulu sebelum dipanggil
            - Lebih powerful (Closure, argumen u/ function lain, IIFE)
            contoh:
            let jumlahDuaBilangan = function (a, b) {
                let total;
                total = a + b;
                return total;
            }

SCOPE - Global / Window Scope
let a = 1;
console.log(a); - Local / Functional Scope
function tes() {
let b = 2;
console.log(b);
}
tes(); - Block Scope

RECURSION
Sebuah fungsi yang memanggil dirinya sendiri.
Implementasi: - Menggantikan looping - Deret Fibonacci - Pencarian & penelusuran struktur data list & tree
contoh:
function faktorial(n) {
if (n === 0) return 1;
return n \* faktorial(n -1);
}

/ STRUKTUR DATA

-   ARRAY
    Kumpulan elemen-elemen (value / variable) yg tiap elemen memiliki index.
    Fungsi Array:

    -   Mempermudah pengelolaan nilai / value / data
    -   Manajemen memori
        let hari = ["senin", "selasa", "rabu", 1 ];

    Array Manipulation

    -   Jumlah elemen: length
    -   Menggabungkan: join
    -   Menambah & Menghapus:
        di akhir: push, pop
        di awal: unshift, shift
    -   menyambung dan memotong:
        a. splice
        namaArray.splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
        b. slice
        let arrayBaru = namaArray.slice (indexAwal, akhir);
    -   looping:
        a. tidak dlm bentuk array: forEach
        namaArray.forEach(function (parameter) {
        aksi;
        })
        b. dlm bentuk array: map
        namaArray.map(function (parameter) {
        aksi;
        })
    -   mengurutkan array:
        a. sort
        namaArray.sort();
    -   mencari elemen array:
        a. satu nilai: find
        let arrayBaru = namaArray.find (function (parameter) {
        return;
        })
        b. banyak nilai: filter
        let arrayBaru = namaArray.filter (function (parameter) {
        return;
        })

-   OBJECT
    Kumpulan elemen (value/ variable) yg tiap elemen memiliki key.
    a. Object Literal
    let namaObject = {
    key1 : value1,
    key2 : value2  
     }
    b. Function declaration Object
    function namaObject (key) {
    deklarasi object = {};
    object.key1 = key1;
    object.key2 = key2;
    return object;
    }
    deklarasi objectBaru = namaObject(value1, value2);
    c. Object Constructor
    function NamaObject (key) {
    this.key1 = key1;
    this.key2 = key2;
    }
    deklarasi objectBaru = new NamaObject (value1, value2);
    this adalah object global scope.
    d. object.create

/ DOM (Document Object Model)
Representasi elemen HTML pada dokumen menjadi sebuah object. Tersimpan ke dalam DOM Tree.
Manfaat DOM: 1. Sebagai antarmuka pemrograman berbasis objek yg merepresentasikan dokumen web. 2. DOM membuat seluruh komponen dari halaman web dapat diakses & dimanipulasi. 3. Komponen : Elemen html, atribut, text, dll. - DOM Tree
NodeList: Kumpulan yg berisi node apapun.
HTMLCollection: Kumpulan yg berisi node elemen html dan bersifat live.
Hierarki: - Root Node (Document)
Node yg menjadi sumber dr semua node lain di dlm DOM. - Parent Node
Node yg berada satu tingkat diatas node lain.
cth: body adalah parent dr h1, p, div & a. - Child Node
Node yg berada satu tingkat dibawah node lain.
cth: h1 adalah child dr body.

        tipe tipe node/ simpul:
        a. element
        b. attribute
        c. text
        d. cdata section
        e. entity reference
        f. entity
        g. processing instruction
        h. comment
        i. document
        j. document type
        k. document fragment
        l. notation

    - DOM Selection
        - Seperti memakai element pada HTML:
            1. getElementById() = menghasilkan element.
            2. getElementsByTagName() = menghasilkan HTMLCollection.
            3. getElementsByClassName() = menghasilkan HTMLCollection.
        - Seperti memakai selector pada CSS:
            4. querySelector() = menghasilkan element.
            5. querySelectorAll() = menghasilkan NodeList.

    - DOM Manipulation
        - Element Manipulation
            1. element.innerHTML = mengubah isi dr element yg diseleksi.
            2. element.style.<property> = mengubah style dr elemen yg diseleksi.
            3. element.setAttribute() = memanipulasi attribute yg melekat dr element yg diseleksi.
            4. element.classList = memanipulasi kelas.

        - Node Manipulation
    - DOM Traversal
    - Event Handling
