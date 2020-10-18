let penumpang = [];

let tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong:
    if (penumpang.length == 0) {
        // Tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dr function
        return penumpang;
    } else {
        // Telusuri seluruh kursi dr awal
        for (let i = 0; i < penumpang.length; i++) {
            // Jika ada kursi kosong:
            if (penumpang[i] == undefined) {
                // Tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // Kembalikan isi array & keluar dr function
                return penumpang;
            }
            // Jika sudah ada nama yg sama:
            else if (penumpang[i] == namaPenumpang) {
                // Tampilkan pesan kesalahan
                console.log(`${namaPenumpang} sudah ada di dalam angkot.`);
                // Kembalikan isi array & keluar dr function
                return penumpang;
            }
            // Jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // Kembalikan isi array & keluar dr function
                return penumpang;
            }
        }
    }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // Tampilkan pesan bahwa angkot kosong, dan
        // Tidak mungkin ada penumpang turun
        console.log("Angkot masih kosong.");
        // Kembalikan isi array & keluar dr
        return penumpang;
    } else {
        // Telusuri seluruh kursi dr awal
        for (let i = 0; i < penumpang.length; i++) {
            // Jika nama penumpang sesuai:
            if (penumpang[i] == namaPenumpang) {
                // Hapus penumpang dgn mengubah namanya,
                // Menjadi undefined
                penumpang[i] = undefined;
                // Kembalikan isi array & keluar dr function
                return penumpang;
            }
            // Jika tidak ada nama yg sesuai
            else if (i == penumpang.length - 1) {
                // Tampilkan pesan kesalahannya
                console.log(`${namaPenumpang} tidak ada di dalam angkot.`);
                // Kembalikan isi array & keluar dr function
                return penumpang;
            }
        }
    }
};
