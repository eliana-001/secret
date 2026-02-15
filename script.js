// Elementos
const envelope = document.getElementById('envelope');
const cartaView = document.getElementById('carta-view');
const mensajeView = document.getElementById('mensaje-view');
const razonesView = document.getElementById('razones-view');
const carruselView = document.getElementById('carrusel-view');
const abrazoView = document.getElementById('abrazo-view');
const btnRazones = document.getElementById('btn-razones');
const btnCarrusel = document.getElementById('btn-carrusel');
const btnHug = document.getElementById('btn-hug');
const btnRestart = document.getElementById('btn-restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = document.querySelectorAll('.carousel-img');
const heartsContainer = document.getElementById('hearts');
const whispersContainer = document.getElementById('whispers');
const starsContainer = document.getElementById('stars');
const cloudsContainer = document.getElementById('clouds');
const musicToggle = document.getElementById('music-toggle');
const musicModal = document.getElementById('music-modal');
const secretModal = document.getElementById('secret-modal');
const secretStar = document.getElementById('secret-star');
const btnBack = document.getElementById('btn-back');
const closeModal = document.getElementById('close-modal');
const bgMusic = document.getElementById('bg-music');
const vinyl = document.getElementById('vinyl');
const heartBtn = document.getElementById('heart-btn');
const razonText = document.getElementById('razon-text');
const razonCount = document.getElementById('razon-count');
const carouselHeartsContainer = document.getElementById('carousel-hearts');
const letterTitle = document.getElementById('letter-title');
const easterEgg = document.getElementById('easter-egg');
const daysBubble = document.getElementById('days-bubble');
const daysTooltip = document.getElementById('days-tooltip');
const emojiIcons = document.querySelectorAll('.emoji-icon');
const polaroids = document.querySelectorAll('.polaroid');

let currentIndex = 0;
let razonIndex = 0;
let titleClicks = 0;
let iconClicks = 0;

const razones = [
    "Porque nunca me dejaste cuando me sentí sola",
    "Porque antes que mi amor, fuiste mi mejor amigo y mi compañía",
    "Porque contigo no me siento acompañada… me siento en casa",
    "Porque secaste mis lágrimas y me entiendes como nadie más",
    "Porque eres simplemente tú, y eso siempre es suficiente",
    "Porque, a pesar de todo, sigues eligiéndome",
    "Porque me das el tiempo que nadie antes me dio",
    "Porque nos elegimos incluso cuando no fue fácil",
    "Porque la distancia no nos venció, y aun así encontramos la manera de estar juntos",
    "Porque tu cariño tiene esa sensación cálida que calma todo",
    "Porque la calidez de tu piel contra la mía se siente como hogar",
    "Porque tus abrazos de oso arreglan cualquier día",
    "Porque te elegí como mi familia, no solo como mi amor",
    "Porque contigo el mundo pesa menos"
];

// Crear estrellas
function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Crear nubes
function createClouds() {
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.width = (Math.random() * 100 + 80) + 'px';
        cloud.style.height = (Math.random() * 40 + 30) + 'px';
        cloud.style.top = Math.random() * 100 + '%';
        cloud.style.animationDelay = Math.random() * 10 + 's';
        cloud.style.animationDuration = (Math.random() * 10 + 15) + 's';
        cloudsContainer.appendChild(cloud);
    }
}

// Crear corazones flotantes
function createHeart() {
    const heart = document.createElement('i');
    heart.classList.add('heart', 'bi');
    const icons = ['bi-heart-fill', 'bi-heart', 'bi-suit-heart-fill'];
    heart.classList.add(icons[Math.floor(Math.random() * icons.length)]);
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);
createStars();
createClouds();

// Susurros flotantes
const whispers = [
    "mi lugar seguro",
    "mi persona favorita",
    "mi paz",
    "mi hogar",
    "mi todo",
    "mi felicidad"
];

function createWhisper() {
    const whisper = document.createElement('div');
    whisper.classList.add('whisper');
    whisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];
    whisper.style.left = Math.random() * 80 + 10 + '%';
    whisper.style.top = Math.random() * 80 + 10 + '%';
    whispersContainer.appendChild(whisper);
    setTimeout(() => whisper.remove(), 8000);
}

setInterval(createWhisper, Math.random() * 10000 + 20000);

// Música
musicToggle.addEventListener('click', () => {
    musicModal.classList.add('active');
    if (bgMusic.paused) {
        bgMusic.play();
        vinyl.classList.add('spinning');
        musicToggle.classList.add('playing');
    }
});

closeModal.addEventListener('click', () => {
    musicModal.classList.remove('active');
});

musicModal.addEventListener('click', (e) => {
    if (e.target === musicModal) {
        musicModal.classList.remove('active');
    }
});

// Mensaje secreto
secretStar.addEventListener('click', () => {
    secretModal.classList.add('active');
    
    // Estrellas brillan más
    document.querySelectorAll('.star').forEach(star => {
        star.classList.add('bright');
    });
});

btnBack.addEventListener('click', () => {
    secretModal.classList.remove('active');
    
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('bright');
    });
    
    // Lluvia de estrellitas
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('i');
            star.classList.add('bi', 'bi-star-fill');
            star.style.position = 'fixed';
            star.style.color = 'var(--primary)';
            star.style.fontSize = '1rem';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = '-20px';
            star.style.pointerEvents = 'none';
            star.style.zIndex = '9999';
            star.style.animation = 'starFall 2s ease-out forwards';
            document.body.appendChild(star);
            setTimeout(() => star.remove(), 2000);
        }, i * 100);
    }
});

// Easter egg en iconos
emojiIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        iconClicks++;
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'spin 0.5s ease';
        }, 10);
        
        if (iconClicks === 10) {
            // Explosión de corazones
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const heart = document.createElement('i');
                    heart.classList.add('bi', 'bi-heart-fill');
                    heart.style.position = 'fixed';
                    heart.style.color = ['var(--primary)', 'var(--secondary)', '#ff69b4'][Math.floor(Math.random() * 3)];
                    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.top = Math.random() * 100 + '%';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '9999';
                    heart.style.animation = 'popOut 1.5s ease-out forwards';
                    document.body.appendChild(heart);
                    setTimeout(() => heart.remove(), 1500);
                }, i * 50);
            }
            iconClicks = 0;
        }
    });
});

// Botón reiniciar
btnRestart.addEventListener('click', () => {
    abrazoView.classList.remove('active');
    cartaView.classList.add('active');
    envelope.classList.remove('open');
    razonIndex = 0;
    razonCount.textContent = '0';
    razonText.textContent = 'Haz clic en el corazón';
    currentIndex = 0;
    showImage(0);
    carouselHeartsContainer.innerHTML = '';
});

// Abrir sobre
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    
    // Crear corazones que saltan
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('i');
            heart.classList.add('bi', 'bi-heart-fill');
            heart.style.position = 'absolute';
            heart.style.color = 'var(--primary)';
            heart.style.fontSize = '2rem';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.animation = 'popHeart 1s ease-out forwards';
            heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            cartaView.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }, i * 100);
    }
    
    setTimeout(() => {
        cartaView.classList.remove('active');
        mensajeView.classList.add('active');
    }, 1200);
});

// Ir a razones
btnRazones.addEventListener('click', () => {
    mensajeView.classList.remove('active');
    razonesView.classList.add('active');
});

// Mostrar razones con confeti
heartBtn.addEventListener('click', () => {
    if (razonIndex < razones.length) {
        razonText.textContent = razones[razonIndex];
        razonIndex++;
        razonCount.textContent = razonIndex;
        
        // Confeti de corazones
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const confetti = document.createElement('i');
                confetti.classList.add('bi', 'bi-heart-fill');
                confetti.style.position = 'fixed';
                confetti.style.color = ['var(--primary)', 'var(--secondary)', '#ff69b4'][Math.floor(Math.random() * 3)];
                confetti.style.fontSize = '1.5rem';
                confetti.style.left = heartBtn.getBoundingClientRect().left + 50 + 'px';
                confetti.style.top = heartBtn.getBoundingClientRect().top + 50 + 'px';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                const angle = (Math.PI * 2 * i) / 8;
                const velocity = 100;
                confetti.style.animation = `confettiFly 1s ease-out forwards`;
                confetti.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
                confetti.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 1000);
            }, i * 50);
        }
    } else {
        razonText.textContent = "¡Has descubierto todas las razones! Te amo infinitamente más 💜";
    }
});

// Añadir animación de confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFly {
        to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
    @keyframes popHeart {
        to {
            transform: translate(-50%, -150%) scale(2);
            opacity: 0;
        }
    }
    @keyframes starFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @keyframes popOut {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Easter egg en título
letterTitle.addEventListener('click', () => {
    titleClicks++;
    if (titleClicks === 5) {
        letterTitle.style.animation = 'shake 0.5s';
        easterEgg.classList.add('show');
        setTimeout(() => {
            easterEgg.classList.remove('show');
            titleClicks = 0;
        }, 2000);
    }
});

// Ir a carrusel
btnCarrusel.addEventListener('click', () => {
    razonesView.classList.remove('active');
    carruselView.classList.add('active');
    calculateDays();
    showPolaroid(0);
});

// Polaroids
function showPolaroid(index) {
    polaroids.forEach((p, i) => {
        p.classList.remove('active');
        if (i === index) {
            p.classList.add('active');
        }
    });
}

polaroids.forEach((polaroid, index) => {
    polaroid.addEventListener('click', () => {
        const nextIndex = (index + 1) % polaroids.length;
        polaroid.classList.remove('active');
        setTimeout(() => showPolaroid(nextIndex), 300);
    });
});

// Tooltip de días
daysBubble.addEventListener('click', () => {
    daysTooltip.classList.add('show');
    setTimeout(() => {
        daysTooltip.classList.remove('show');
    }, 3000);
});

// Vista abrazo
btnHug.addEventListener('click', () => {
    carruselView.classList.remove('active');
    abrazoView.classList.add('active');
});

// Calcular días juntos (CAMBIA ESTA FECHA)
function calculateDays() {
    const startDate = new Date('2024-01-01'); // CAMBIA ESTA FECHA
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('days-count').textContent = diffDays;
}
