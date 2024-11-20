document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navItems = document.querySelector('nav ul');

    nav.addEventListener('click', function(event) {
        // Prevent the default action if the target is a link
        if (event.target.tagName === 'A') {
            return;
        }
        navItems.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});