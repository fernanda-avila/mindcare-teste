import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicialize o AOS
AOS.init();

// Função para alterar a cor de fundo da seção quando ela entra na visualização
document.addEventListener('aos:in', ({ detail }) => {
    const section = detail.el;
    const classes = section.classList;
    
    if (classes.contains('section-blue')) {
        document.body.style.backgroundColor = '#e0f7fa';
    } else if (classes.contains('section-green')) {
        document.body.style.backgroundColor = '#e8f5e9';
    } else if (classes.contains('section-yellow')) {
        document.body.style.backgroundColor = '#fffde7';
    } else if (classes.contains('section-red')) {
        document.body.style.backgroundColor = '#ffebee';
    }
});

// swiper


const swiper = new Swiper('.swiper-container', {
  // Configurações do Swiper
  loop: true, // loop dos slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
