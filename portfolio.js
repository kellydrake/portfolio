// toggle hamburger menu icon
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-list li a");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu(){
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

function closeMenu(){
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}


//Click event to scroll to top button
function scrollToTop(){
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}
