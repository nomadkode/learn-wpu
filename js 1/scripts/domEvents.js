//* Event Handler
const par3 = document.querySelector(".p3");

par3.onclick = function () {
    par3.style.backgroundColor = "lightblue";
    par3.style.color = "red";
};

//* addEventListener
const par4 = document.querySelector(".p4");
par4.addEventListener("click", function () {
    const ulBaru = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const teksLiBaru = document.createTextNode("item baru");
    liBaru.appendChild(teksLiBaru);
    ulBaru.appendChild(liBaru);
});
