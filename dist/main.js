const menuBtn   = document.querySelector('.hamburger');
const menuItems = document.querySelectorAll('.ham') ;
const burger    = document.querySelector('.fa-hamburger');

showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu){
        menuItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuItems.forEach(item => item.classList.remove('show'));
        
        showMenu = false;
    }
}