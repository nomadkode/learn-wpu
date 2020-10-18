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

/*
 * element.getAttribute() = mengetahui isi attribute.
 * element.setAttribute() = menambahkan attribute.
 * element.removeAttribute() = menghapus attribute.
 */
const anChor = document.querySelector("section#a a");
anChor.setAttribute("id", "link");
anChor.getAttribute("href");
