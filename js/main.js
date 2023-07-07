// Seleccionar elementos del DOM
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav');

// Abrir el menú de navegación
abrir.addEventListener('click', () => {
  nav.classList.add('visible');
});

// Cerrar el menú de navegación
cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
});

const navLinks = document.querySelectorAll('.nav-list li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove("visible");
    navLinks.forEach(link => link.parentElement.classList.remove('active'));
    link.parentElement.classList.add('active');
  });
});