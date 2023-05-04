// Agregar interactividad a la navegación
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);

        section.scrollIntoView({ behavior: "smooth" });
    });
});

const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const close = document.getElementsByClassName('close')[0];

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    });

    if (response.ok) {
        form.reset();
        popup.style.display = 'block';
    }
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});


