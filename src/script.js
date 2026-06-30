document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Lucide Icons
    lucide.createIcons();

    // Lógica del Header (Efecto Glassmorphism on scroll)
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const navLinks = document.querySelectorAll('#navbar nav a');
    const contactLinks = document.querySelectorAll('#navbar .md\\:flex.items-center > a'); // Iconos y botones tel/email

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-header');
            navbar.classList.remove('py-6');
            navbar.classList.add('py-4');
            
            // Si el fondo del hero es oscuro, los links eran blancos. 
            // Como pusimos los links oscuros por defecto, lo dejamos así si no afecta, 
            // pero podemos ajustar colores basados en scroll si fuera necesario.
        } else {
            navbar.classList.remove('glass-header');
            navbar.classList.add('py-6');
            navbar.classList.remove('py-4');
        }
    });

    // Reveal animations on scroll usando Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Porcentaje del elemento visible antes de animar
        rootMargin: "0px 0px -50px 0px" // Margen inferior
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Solo anima una vez
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // Inicializar carruseles de propiedades
    const initCarousels = () => {
        document.querySelectorAll('.property-carousel').forEach(carousel => {
            const track = carousel.querySelector('.carousel-track');
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            const dots = carousel.querySelectorAll('.carousel-dot');
            if (!track) return;
            
            let currentIndex = 0;
            const total = track.children.length;

            const update = () => {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                dots.forEach((dot, i) => {
                    dot.classList.toggle('bg-white', i === currentIndex);
                    dot.classList.toggle('bg-white/50', i !== currentIndex);
                });
            };

            if (prevBtn) prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : total - 1;
                update();
            });

            if (nextBtn) nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                currentIndex = (currentIndex < total - 1) ? currentIndex + 1 : 0;
                update();
            });
            
            dots.forEach((dot, i) => {
                dot.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentIndex = i;
                    update();
                });
            });
        });
    };
    initCarousels();
});
