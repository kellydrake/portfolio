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


//fade-in top animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




