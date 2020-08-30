const slideNav = () => {
    const menu = document.querySelector('.menu');
    const scroll = document.querySelector('.navbar.col-md-12');

    menu.addEventListener('click', () => {
        scroll.classList.toggle('active');
        menu.classList.toggle('toggle');
    });
}

slideNav();