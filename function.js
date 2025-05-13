let listTab = document.querySelectorAll('.tab');
const marquee = document.getElementById('marquee');
let robo = document.getElementById('robot');
let txt = document.getElementById('txt');


document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.querySelector(".main-content");

    // Simulate loading delay (e.g., 2 seconds)
    setTimeout(() => {
        preloader.classList.add("hidden"); // Fade out preloader
        mainContent.classList.add("show"); // Fade in main content
    }, 10); // Adjust the delay as needed (in milliseconds)

    // Function to toggle the menu for small screens (hamburger menu)
    window.toggleMenu = function () {
        const nav = document.getElementById("navbar");
        nav.classList.toggle("show");
    };
});

window.addEventListener('scroll', (event) => {
    let top = window.scrollY; // Get current scroll position

    listTab.forEach(tab => {
        // Use offsetTop to get the element's distance from the top
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    robo.style.right = top*0.5 + 'px';
    txt.style.marginLeft = top*0.5 + 'px';
});


function toggleOverlay(container) {
    // Toggle the 'active' class on the clicked container
    container.classList.toggle("active");
}