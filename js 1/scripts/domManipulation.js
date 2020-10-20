//* DOM Manipulation
//* element.innerHTML
const judulAn = document.querySelector("#judul");
judulAn.innerHTML = "Ramadiyan Setiawan";

const paragraf1 = document.querySelector(".p1");
paragraf1.innerHTML = "Hello 1";

//* element.style.<property>
const h1 = document.querySelector("#judul");
h1.style.color = "red";
h1.style.backgroundColor = "blue";

//* element.getAttribute()
const anChor = document.querySelector("section#a a");
anChor.getAttribute("href");
anChor.setAttribute("id", "link");
anChor.removeAttribute("href");

//* element.classList
const par2 = document.querySelector(".p2");
par2.classList.add("label");
par2.classList.remove("label");
par2.classList.toggle("biru-muda");
par2.classList.item(1);
par2.classList.contains("p2");
par2.classList.replace("p2", "p4");
