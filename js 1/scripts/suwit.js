let tanya = true;
while (tanya) {
    // todo menangkap pilihan player
    let play = prompt("pilih : gajah, semut, orang");

    // todo menangkap pilihan komputer
    // * menggenerate  bilangan random
    let com = Math.random();

    if (com < 0.34) {
        com = "gajah";
    } else if (com >= 0.34 && com < 0.67) {
        com = "orang";
    } else {
        com = "semut";
    }

    // todo menentukan rules
    let hasil = "";
    if (play == com) {
        hasil = "SERI!";
    } else if (play == "gajah") {
        hasil = com == "orang" ? "MENANG!" : "KALAH!";
    } else if (play == "orang") {
        hasil = com == "gajah" ? "KALAH!" : "MENANG!";
    } else if (play == "semut") {
        hasil = com == "orang" ? "KALAH" : "MENANG";
    } else {
        hasil = "memasukkan pilihan yang salah!";
    }

    // todo tampilan hasilnya
    alert(
        `kamu memilih : ${play} dan komputer memilih : ${com} \n maka hasilnya : kamu ${hasil}`
    );

    tanya = confirm("Lagi?");
}

alert("terima kasih sudah bermain!");
