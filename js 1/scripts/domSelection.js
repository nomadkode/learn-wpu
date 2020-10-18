//* DOM Selection
//* document.getElementById()
const judulAn = document.getElementById("judul");
judulAn.style.color = "red";
judulAn.style.backgroundColor = "blue";
judulAn.innerHTML = "Ramadyan Setiawan";

//* document.getElementsByTagName()
const paragraf = document.getElementsByTagName("p");
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = "yellow";
}

const head1 = document.getElementsByTagName("h1")[0];
head1.style.fontSize = "50px";

//* document.getElementsByClassName()
const paragraf1 = document.getElementsByClassName("p1")[0];
paragraf1.style.color = "blue";
paragraf1.innerHTML = "Tarik sis semongkooo";

//* document.querySelector()
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2");
li2.style.backgroundColor = "orange";

const instagram = document.querySelector("section#a a");
instagram.innerHTML = "Instagram Ramadiyan Setiawan";

//* document.querySelectorAll()
const line = document.querySelectorAll("li");
for (let j = 0; j < line.length; j++) {
    line[j].style.color = "aqua";
}
