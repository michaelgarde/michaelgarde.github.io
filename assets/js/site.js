// Global JavaScript for Michael Garde's Digital Playground

// Easter egg counter
let eggsFound = parseInt(localStorage.getItem('eggsFound') || '0');

// Konami Code detection
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Arrow keys + B, A

// Click counter
let clickCount = parseInt(localStorage.getItem('totalClicks') || '0');

// Initialize site
document.addEventListener('DOMContentLoaded', function() {
    initializeSite();
    setupEasterEggs();
    updateEggCounter();
    createParticles();
});

function initializeSite() {
    console.log('🎪 Welcome to the Digital Playground! 🎪');
    
    // Add some random fun facts to the console
    const funFacts = [
        "Did you know? The first computer bug was an actual bug!",
        "Fun fact: The word 'algorithm' comes from the name of a Persian mathematician",
        "Random fact: The first computer mouse was made of wood",
        "Interesting: The first computer programmer was a woman named Ada Lovelace",
        "Cool fact: The first computer weighed 27 tons!",
        "Fun fact: The first computer game was created in 1958",
        "Random fact: The first computer virus was created in 1986",
        "Interesting: The first computer had 18,000 vacuum tubes"
    ];
    
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    console.log(`💡 ${randomFact}`);
    
    // Add easter egg to console
    console.log('%c🎪 Looking for secrets? Try the Konami Code! 🎪', 'color: #ff6b6b; font-size: 14px; font-weight: bold;');
}

function setupEasterEggs() {
    // Konami Code detection
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length) {
            let match = true;
            for (let i = 0; i < konamiSequence.length; i++) {
                if (konamiCode[i] !== konamiSequence[i]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                activateKonamiCode();
            }
        }
    });
    
    // Click counter
    document.addEventListener('click', function(e) {
        clickCount++;
        localStorage.setItem('totalClicks', clickCount);
        
        // Check for click milestones
        if (clickCount === 100) {
            showMilestoneMessage('🎉 100 CLICKS! You found an easter egg! 🎉');
            incrementEggCounter();
        } else if (clickCount === 500) {
            showMilestoneMessage('🔥 500 CLICKS! You\'re on fire! 🔥');
        } else if (clickCount === 1000) {
            showMilestoneMessage('💎 1000 CLICKS! Diamond hands! 💎');
        }
        
        // Create click effect
        createClickEffect(e);
    });
    
    // Secret key combinations
    document.addEventListener('keydown', function(e) {
        // Ctrl + Shift + C for cookie clicker mode
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            activateCookieClickerMode();
        }
        
        // Ctrl + Shift + R for rainbow mode
        if (e.ctrlKey && e.shiftKey && e.key === 'R') {
            activateRainbowMode();
        }
        
        // Ctrl + Shift + M for matrix mode
        if (e.ctrlKey && e.shiftKey && e.key === 'M') {
            activateMatrixMode();
        }
    });
}

function activateKonamiCode() {
    console.log('🎮 Konami Code activated! 🎮');
    
    // Change background
    document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24)';
    document.body.style.animation = 'rainbow 2s infinite';
    
    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Show celebration
    showMilestoneMessage('🎉 KONAMI CODE ACTIVATED! 🎉');
    
    // Increment egg counter
    incrementEggCounter();
}

function activateCookieClickerMode() {
    console.log('🍪 Cookie Clicker mode activated! 🍪');
    
    // Add cookie clicker elements
    const cookie = document.createElement('div');
    cookie.innerHTML = '🍪';
    cookie.style.position = 'fixed';
    cookie.style.top = '20px';
    cookie.style.right = '20px';
    cookie.style.fontSize = '50px';
    cookie.style.cursor = 'pointer';
    cookie.style.zIndex = '1000';
    cookie.style.animation = 'bounce 1s infinite';
    
    let cookieCount = 0;
    cookie.addEventListener('click', function() {
        cookieCount++;
        showMilestoneMessage(`🍪 Cookie #${cookieCount} clicked! 🍪`);
        
        // Create cookie particles
        for (let i = 0; i < 5; i++) {
            createCookieParticle();
        }
    });
    
    document.body.appendChild(cookie);
    showMilestoneMessage('🍪 Cookie Clicker mode activated! Click the cookie! 🍪');
}

function activateRainbowMode() {
    console.log('🌈 Rainbow mode activated! 🌈');
    
    // Add rainbow effect to all text
    const allText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    allText.forEach(element => {
        element.classList.add('rainbow-text');
    });
    
    showMilestoneMessage('🌈 Rainbow mode activated! 🌈');
}

function activateMatrixMode() {
    console.log('💚 Matrix mode activated! 💚');
    
    // Change color scheme to Matrix green
    document.body.style.background = '#000';
    document.body.style.color = '#00ff00';
    
    // Add Matrix rain effect
    createMatrixRain();
    
    showMilestoneMessage('💚 Matrix mode activated! 💚');
}

function createClickEffect(e) {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.left = (e.clientX - 10) + 'px';
    effect.style.top = (e.clientY - 10) + 'px';
    effect.style.width = '20px';
    effect.style.height = '20px';
    effect.style.borderRadius = '50%';
    effect.style.background = 'radial-gradient(circle, #ff6b6b, transparent)';
    effect.style.pointerEvents = 'none';
    effect.style.animation = 'click-ripple 0.6s ease-out forwards';
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 600);
}

function createCookieParticle() {
    const particle = document.createElement('div');
    particle.innerHTML = '🍪';
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    particle.style.fontSize = '20px';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'cookie-fall 3s linear forwards';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

function createMatrixRain() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    setInterval(() => {
        const char = document.createElement('div');
        char.style.position = 'fixed';
        char.style.left = Math.random() * 100 + 'vw';
        char.style.top = '-20px';
        char.style.color = '#00ff00';
        char.style.fontSize = '16px';
        char.style.fontFamily = 'monospace';
        char.style.animation = 'matrix-fall 3s linear forwards';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.pointerEvents = 'none';
        
        document.body.appendChild(char);
        
        setTimeout(() => {
            if (char.parentNode) {
                char.remove();
            }
        }, 3000);
    }, 100);
}

function createParticles() {
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.5;
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 6000);
    }, 1000);
}

function showMilestoneMessage(message) {
    const milestone = document.createElement('div');
    milestone.style.position = 'fixed';
    milestone.style.top = '50%';
    milestone.style.left = '50%';
    milestone.style.transform = 'translate(-50%, -50%)';
    milestone.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
    milestone.style.color = 'white';
    milestone.style.padding = '20px 40px';
    milestone.style.borderRadius = '25px';
    milestone.style.fontSize = '18px';
    milestone.style.fontWeight = 'bold';
    milestone.style.zIndex = '10000';
    milestone.style.animation = 'milestone-pop 2s ease-out forwards';
    milestone.textContent = message;
    
    document.body.appendChild(milestone);
    
    setTimeout(() => {
        if (milestone.parentNode) {
            milestone.remove();
        }
    }, 2000);
}

function incrementEggCounter() {
    eggsFound++;
    localStorage.setItem('eggsFound', eggsFound);
    updateEggCounter();
}

function updateEggCounter() {
    const counter = document.getElementById('egg-counter');
    if (counter) {
        counter.textContent = eggsFound;
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes click-ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
    
    @keyframes milestone-pop {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes cookie-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes matrix-fall {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
    
    .rainbow-text {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #6c5ce7, #ff6b6b);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: rainbow-shift 3s ease-in-out infinite;
    }
    
    @keyframes rainbow-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(style);

// Export functions for use in other scripts
window.DigitalPlayground = {
    incrementEggCounter,
    showMilestoneMessage,
    activateKonamiCode,
    activateCookieClickerMode,
    activateRainbowMode,
    activateMatrixMode
};
