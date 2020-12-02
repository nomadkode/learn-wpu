//* Tombol Ubah Warna
const tUbahWarna = document.querySelector("#tombol");
tUbahWarna.addEventListener("click", function () {
    // document.body.style.backgroundColor = "black";
    // document.body.setAttribute("class", "biru-muda");
    document.body.classList.toggle("biru-muda");
});

//* Tombol Acak Warna
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//* Slider Warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
    const er = sMerah.value;
    const ge = sHijau.value;
    const be = sBiru.value;
    document.body.style.backgroundColor =
        "rgb(" + er + ", " + ge + "," + be + ")";
});

sHijau.addEventListener("input", function () {
    const er = sMerah.value;
    const ge = sHijau.value;
    const be = sBiru.value;
    document.body.style.backgroundColor =
        "rgb(" + er + ", " + ge + "," + be + ")";
});

sBiru.addEventListener("input", function () {
    const er = sMerah.value;
    const ge = sHijau.value;
    const be = sBiru.value;
    document.body.style.backgroundColor =
        "rgb(" + er + ", " + ge + "," + be + ")";
});

//* Mouse Warna
document.body.addEventListener("mousemove", function (event) {
    const xPosisi = Math.round((event.clientX / window.innerWidth) * 255);
    const yPosisi = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor =
        "rgb(" + xPosisi + "," + yPosisi + ", 100)";
});
