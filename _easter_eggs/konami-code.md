---
layout: default
title: "Konami Code Secret"
date: 2024-01-15
---

<style>
body {
    font-family: 'Georgia', serif;
    background: radial-gradient(circle, #1a1a2e, #16213e, #0f3460);
    color: #ffd700;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    overflow-x: hidden;
}

.egg-container {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    padding: 30px;
    border-radius: 20px;
    border: 3px solid #ffd700;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
    position: relative;
}

.egg-header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    border-radius: 15px;
    color: white;
    position: relative;
    overflow: hidden;
}

.egg-header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.egg-content {
    line-height: 1.8;
    position: relative;
    z-index: 1;
}

.egg-footer {
    margin-top: 30px;
    text-align: center;
    padding: 20px;
    border-top: 2px solid #ffd700;
}

.back-link {
    display: inline-block;
    padding: 12px 24px;
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    color: #000;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.back-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
}

/* Floating particles */
.particle {
    position: fixed;
    width: 4px;
    height: 4px;
    background: #ffd700;
    border-radius: 50%;
    pointer-events: none;
    animation: float 6s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
    }
}

/* Glowing text effect */
.glow-text {
    text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
    animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
    from { text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700; }
    to { text-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700; }
}
</style>

<div class="egg-container">
    <div class="egg-header">
        <h1 class="glow-text">🥚 Konami Code Secret</h1>
        <p>Easter Egg #001</p>
        <p><em>You found a secret!</em></p>
    </div>
    
    <div class="egg-content">
        <h2>🥚 Konami Code Secret</h2>

        Congratulations! You've discovered Easter Egg #001 by entering the legendary Konami Code! 🎮

        <h3>🎯 What You Just Did</h3>

        You entered: **↑ ↑ ↓ ↓ ← → ← → B A**

        This is the famous Konami Code that was first introduced in the 1986 game *Gradius* for the NES. It's one of the most well-known cheat codes in gaming history!

        <h3>🎪 The Secret Revealed</h3>

        <pre>    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║  🎮 YOU'VE UNLOCKED THE SECRET MODE! 🎮                    ║
    ║                                                              ║
    ║  Welcome to the hidden realm of digital secrets!            ║
    ║  You are now among the elite who know the ancient ways.     ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝</pre>

        <h3>🧠 The Science Behind the Code</h3>

        The Konami Code works by:
        1. **Event Listening**: JavaScript listens for keyboard events
        2. **Pattern Matching**: It tracks the sequence of key presses
        3. **Activation**: When the correct sequence is detected, magic happens!
        4. **Persistence**: The code can be entered anywhere on the site

        <h3>🎨 What Happens Next</h3>

        Now that you've unlocked this easter egg:
        - The site might behave differently
        - Hidden features might be revealed
        - Special animations might appear
        - You've earned bragging rights!

        <h3>🎪 Fun Facts About the Konami Code</h3>

        - **First Appearance**: Gradius (1986) for NES
        - **Most Famous Use**: Contra (1987) - gave you 30 lives!
        - **Cultural Impact**: Featured in movies, TV shows, and countless games
        - **Variations**: Many games have their own versions of the code
        - **Legacy**: Still used in modern games as an homage

        <h3>🎮 Try These Other Secret Codes</h3>

        While you're here, try these other famous cheat codes:
        - **IDDQD**: God mode (from Doom)
        - **IDKFA**: All weapons and keys (from Doom)
        - **ABACABB**: Blood code (from Mortal Kombat)
        - **Up, C, Down, C, Left, C, Right, C**: Sonic's debug mode

        <h3>🎪 The Code in Action</h3>

        <div style="text-align: center; margin: 2em 0;">
          <div id="konami-display" style="background: #000; color: #00ff00; padding: 20px; border-radius: 10px; font-family: monospace; font-size: 18px; min-height: 100px; display: flex; align-items: center; justify-content: center;">
            🎮 Konami Code Activated! 🎮
          </div>
        </div>

        <h3>🎯 Hidden Features</h3>

        Now that you've unlocked this easter egg, you might notice:
        - **Color Changes**: The site might have different colors
        - **Sound Effects**: Hidden audio might play
        - **Animations**: Special effects might appear
        - **Content**: Hidden pages or sections might be revealed

        <h3>🎪 The Legend Continues</h3>

        The Konami Code is more than just a cheat code - it's a symbol of gaming culture and the joy of discovering secrets. It represents the thrill of exploration and the satisfaction of uncovering hidden knowledge.

        <hr>

        <p><em>"The best secrets are the ones that make you smile when you find them." - Unknown Game Developer</em></p>
    </div>
    
    <div class="egg-footer">
        <a href="/" class="back-link">🏠 Back to the Playground</a>
    </div>
</div>

<script>
// Konami Code detection
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Arrow keys + B, A

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
      // Konami code activated!
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
      const display = document.getElementById('konami-display');
      if (display) {
        display.innerHTML = '🎉 KONAMI CODE ACTIVATED! 🎉<br>🌈 RAINBOW MODE ENGAGED! 🌈';
        display.style.animation = 'rainbow 1s infinite';
      }
    }
  }
});

// Create floating particles
function createParticles() {
  setInterval(() => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 6000);
  }, 300);
}

// Initialize
createParticles();
</script>
