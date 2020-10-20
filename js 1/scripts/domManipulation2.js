//* DOM Manipulation
//* Node Manipulation

//* Membuat element baru
const parBaru = document.createElement("p");

//* Membuat isi element baru
const teksBaru = document.createTextNode("paragraf Baru");

//* Merangkai element & isi
parBaru.appendChild(teksBaru);

//* Menyimpan element baru ke html
const sectionA = document.querySelector("#a");
sectionA.appendChild(parBaru);

//* Menyimpan ke html menggunakan insert before
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

const ulBaru = document.querySelector("section#b ul");
const li2 = ulBaru.querySelector("li:nth-child(2)");

ulBaru.insertBefore(liBaru, li2);

//* Menghapus element html
//* menggunakan variable sectionA diatas
const link = document.querySelector("section#a a");
sectionA.removeChild(link);

//* Mengganti element html
const sectionB = document.querySelector("section#b");
const par4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksh2Baru = document.createTextNode("Judul Baru!");

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, par4);

//* penanda element baru
parBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
