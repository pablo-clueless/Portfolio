//Hamburger menu
const menuBtn      = document.querySelector('.menu-btn');
const menu         = document.querySelector('.menu-box');
const menuNav      = document.querySelector('.menu-nav');
const navItems     = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}


//Skew Scrolling effect
const containers = document.querySelectorAll('.container');
const hero = document.querySelector('.hero');

let currentPos = window.pageYOffset;

function update(){
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.15;

    containers.forEach(container => container.style.transform = `skewY(${speed}deg)`);

    currentPos = newPos;

    requestAnimationFrame(update);
}

update();