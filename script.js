// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll("#nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});


// ===============================
// SIMPLE SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});