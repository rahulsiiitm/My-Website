let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let i4 = document.getElementById('i4');
let i5 = document.getElementById('i5');
let i6 = document.getElementById('i6');
let i7 = document.getElementById('i7');
let i8 = document.getElementById('i8');
let i9 = document.getElementById('i9');
let i10 = document.getElementById('i10');
let i11 = document.getElementById('i11');


window.addEventListener('scroll',() => {
    let value= window.scrollY;

    i2.style.left = value*0.5 + 'px';
    i3.style.left = value*0.8 + 'px';
    i5.style.left = value*0.5 + 'px';
    i6.style.left = value*-1.5 + 'px';
    i4.style.top = value*-0.3 + 'px';
    i7.style.left = value*-0.3 + 'px';
    i8.style.left = value*-0.5 + 'px';
    
})


let listTab = document.querySelectorAll('.tab');
const marquee = document.getElementById('marquee');
let robo = document.getElementById('robo');
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

