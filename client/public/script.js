//Déplacement du soleil/lune
var myDate = new Date();
var hours = myDate.getHours();

let root = document.documentElement;

root.style.setProperty("--pourcentage", (hours*100)/12 + "%");

//Déplacement du ciel
/*if (5 <= hours && hours < 9) // 5-9 lever de soleil
{
document.body.className = 'lever';
}
else if (9 <= hours && hours < 18) // 9-18 jour
{
document.body.className = 'jour';
}
else if (18 <= hours && hours < 19) // 18-19 coucher de soleil
{
document.body.className = 'coucher';
}
else if (22 <= hours || hours < 5) // 22-5 nuit
{
document.body.className = 'nuit';
}*/

//Gestion du nav
const navSlide = () => {
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll('.nav-links li');
const toggle = document.querySelector('.toggle');
const etoiles = document.querySelector('#stars');

burger.addEventListener('click', () => {
   nav.classList.toggle('nav-active');
});

navLinks.forEach((link, index) => {
   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +2}s`;
});

toggle.addEventListener('click', () => {
   toggle.classList.toggle('night');
   document.body.classList.toggle('nuit');
}); 
}

navSlide();