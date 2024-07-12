document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('navmenu');
    const openIcon = document.getElementById('open-icon');
    const closeIcon = document.getElementById('close-icon');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        openIcon.style.display = navMenu.classList.contains('active') ? 'none' : 'block';
        closeIcon.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
    });

    const navLinks = document.querySelectorAll('.navmenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        });
    });

    window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});

