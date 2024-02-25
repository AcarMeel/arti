const mobileMenu = document.getElementById('app-mobile-menu');

const openMenu = () => {
    if (mobileMenu) {
        mobileMenu.classList.add('is-active');
    }
}

const closeMenu = () => {
    if (mobileMenu) {
        mobileMenu.classList.remove('is-active');
    }
}