



let menu = document.querySelector('.header__menu-mobile')
let navbar = document.querySelector('.navbar__list')
function imgSlider(anything){
    document.querySelector('.hero__img').src=anything
}

menu.onclick=() => {
    menu.classList.toggle('header__menu-icon')
    navbar.classList.toggle('active')

}   
window.onscroll = () => {
    menu.classList.remove('header__menu-icon')
    navbar.classList.remove('active')
}