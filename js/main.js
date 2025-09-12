// Importar Bootstrap JavaScript
import 'bootstrap';

// Scripts personalizados para el sitio
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling para anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });

  // Filtros de productos
  const filterButtons = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('[data-category]');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('btn-success', 'active'));
        filterButtons.forEach(btn => btn.classList.add('btn-outline-success'));
        this.classList.remove('btn-outline-success');
        this.classList.add('btn-success', 'active');
        
        // Filter products or recipes
        productCards.forEach(card => {
          const categories = card.getAttribute('data-category') ? 
            card.getAttribute('data-category').split(' ') : [];
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Formulario de contacto
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulación de envío
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
          form.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }

});