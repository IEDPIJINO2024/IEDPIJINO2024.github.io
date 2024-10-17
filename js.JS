document.addEventListener('DOMContentLoaded', (event) => {
  let menuToggle = document.querySelector('.menu-toggle');
  let menuPrincipal = document.getElementById('menu-principal');
  let slides = document.querySelectorAll('.mySlides');
  let dots = document.querySelectorAll('.dot');
  let slideIndex = 0;

  menuToggle.addEventListener('click', () => {
      menuPrincipal.classList.toggle('nav-open');
  });

  function showSlides(n) {
      let i;
      if (n >= slides.length) {
          slideIndex = 0;
      }
      if (n < 0) {
          slideIndex = slides.length - 1;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex].style.display = 'block';
      dots[slideIndex].className += ' active';
  }

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
  document.querySelector('.next').addEventListener('click', () => plusSlides(1));
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => currentSlide(index));
  });

  showSlides(slideIndex);

  // Ensure links work correctly
  let navLinks = document.querySelectorAll('#menu-principal a');
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          let target = link.getAttribute('href');
          if (target && target !== '#' && !target.startsWith('javascript:')) {
              // Allow the default action (navigation)
              return;
          }
          event.preventDefault(); // Prevent the default action if it's not a valid link
      });
  });
});


// Función para el desplazamiento suave
function scrollToMod1() {
  var mod1Div = document.querySelector('.mod1');
  mod1Div.scrollIntoView({
      behavior: 'smooth' // hace el desplazamiento suave
  });
}

// Agrega un event listener al enlace
document.getElementById('linkMod1').addEventListener('click', function(e) {
  e.preventDefault(); // evita el comportamiento predeterminado del enlace
  scrollToMod1(); // llama a la función para desplazarse al div
});
