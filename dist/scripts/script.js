const toggle = document.querySelector('.toggle__menu');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__nav__links');
const dl = document.querySelector('.header__dropdown__dl');
const banButtRight = document.querySelector('.banner__downloads__button__right');
const banDrop = document.querySelector('.banner__dropdown');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    header.classList.toggle('open');
    menu.classList.toggle('open');
    dl.classList.toggle('open');
});

banButtRight.addEventListener('click', () => {
    banButtRight.classList.toggle('open');
    banDrop.classList.toggle('open');
})

banButtRight.addEventListener('blur', () => {
    banButtRight.classList.remove('open');
    banDrop.classList.remove('open');
})

// kaya di na tayo naggawa ng const na window dahil meron na tayo ng 'window' na proxy ng browser
window.addEventListener("scroll", () => { // makinig sa kada scroll ng browser
    console.log(window.scrollY); // isulat sa console gamit ang function log ang kada scroll
    if (window.scrollY >= 20) { // pagpumatak ng 20px and above ang page sa browser lagyan ng active class ang header
        header.classList.add("active");
    } else { // else tanggalin ang active class ng header
        header.classList.remove("active");
    }
});

const searchInput = document.querySelector(".search__input")
const searchIcon = document.querySelector(".search__icon")

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchIcon.click();
    }
});

// function search() {
//     window.open("https://www.geeksforgeeks.org");
// }
        
// var slider = tns({
//     container: ".slider__wrapper",
//     items: 1,
//     slideBy: 1,
//     autoplay: false,
//     controlsText: [
//         '<i class="fa-solid fa-chevron-left text-[20px] text-gray hover:text-dark"></i>',
//         '<i class="fa-solid fa-chevron-right text-[20px] text-gray hover:text-dark"></i>',
//     ],
//     nav: false,
// });