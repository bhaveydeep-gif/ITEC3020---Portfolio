function loadComponent(selector, filePath, onLoaded) {      //Takes 3 inputs: selector, filepath, onLoaded
 fetch(filePath)
 .then(response => {            //Using arrow function
 if (!response.ok) throw new Error("Could not load " + filePath);       //custom error message
 return response.text();
 })
 .then(html => {
 document.querySelector(selector).innerHTML = html;

 if (onLoaded) onLoaded();
 })
 .catch(error => console.error(error));
}

//For mobile hamburger menu
function setupNavToggle() {
 const toggle = document.getElementById("nav-toggle");
 const menu = document.getElementById("nav-menu");
 if (!toggle || !menu) return;

 toggle.addEventListener("click", function () { // Open or close the menu when the hamburger button is clicked
 const isOpen = menu.classList.toggle("open");
 toggle.setAttribute("aria-expanded", isOpen);
 });

 // Close the mobile menu whenever a nav link is clicked
 menu.querySelectorAll("a").forEach(function (link) {
 link.addEventListener("click", function () {
 menu.classList.remove("open");
 toggle.setAttribute("aria-expanded", "false");
 });
 });

 // Close the mobile menu if the viewport grows back to desktop size
 window.addEventListener("resize", function () {
 if (window.innerWidth > 900) {
 menu.classList.remove("open");
 toggle.setAttribute("aria-expanded", "false");
 }
 });
}

//Automatically adding active class
const currentpage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(function(link) {
 if (link.getAttribute("href") === currentpage) {
  link.classList.add("active");  //all the nav links becomes active when we vist that page
 }
}); 

document.addEventListener("DOMContentLoaded", function () {
 loadComponent("#header-placeholder", "components/header.html", function() {
    setupNavToggle()        //houses hamburger function
    setupThemeToggle()      //houses the theme function
    });
 loadComponent("#footer-placeholder", "components/footer.html");        //loads the footer which has no interactive function
    });
