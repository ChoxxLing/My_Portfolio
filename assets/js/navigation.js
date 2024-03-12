// Add active class to navigation links when clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add active class to navigation links when scrolled to their respective sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href').slice(1) === id) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }
    });
});


// Add smooth scrolling behavior to anchor links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    }); 
});


