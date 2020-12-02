//* Event Handler
// const clos = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// clos.addEventListener("click", function () {
//     card.style.display = "none";
// });

//* DOM Traversal
// const clos = document.querySelectorAll(".close");

// for (let i = 0; i < clos.length; i++) {
//     clos[i].addEventListener("click", function (e) {
//         clos[i].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//     });
// }
// clos.forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//     card.addEventListener("click", function (e) {

//     });
// });

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    if (e.target.className == "close") {
        e.target.parentElement.style.display = "none";
        e.preventDefault();
    }
});
