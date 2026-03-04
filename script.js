// Fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Animación barras de progreso
const bars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight){
            bar.style.width = bar.dataset.progress;
        }
    });
});