// 1. Fetch and inject the Navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = data;
        }
    });

// 2. Fetch and inject the Contact Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = data;
        }
    });