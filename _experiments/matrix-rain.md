---
layout: default
title: "Matrix Rain Generator"
date: 2024-01-15
---

<style>
body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
    color: #00ff00;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.experiment-container {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.8);
    padding: 30px;
    border-radius: 15px;
    border: 2px solid #00ff00;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
}

.experiment-header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 10px;
    color: white;
}

.experiment-content {
    line-height: 1.6;
}

.experiment-footer {
    margin-top: 30px;
    text-align: center;
    padding: 20px;
    border-top: 1px solid #00ff00;
}

.back-link {
    display: inline-block;
    padding: 10px 20px;
    background: #00ff00;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.back-link:hover {
    background: #00cc00;
    transform: scale(1.05);
}

/* Matrix rain effect */
.matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.1;
}

.matrix-char {
    position: absolute;
    color: #00ff00;
    font-size: 14px;
    animation: matrix-fall 3s linear infinite;
}

@keyframes matrix-fall {
    0% { transform: translateY(-100vh); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}
</style>

<div class="matrix-bg" id="matrix-bg"></div>

<div class="experiment-container">
    <div class="experiment-header">
        <h1>🧪 Matrix Rain Generator</h1>
        <p>Experiment #001</p>
    </div>
    
    <div class="experiment-content">
        <h2>🧪 Matrix Rain Generator</h2>

        Welcome to Experiment #001! This is where we explore the fascinating world of digital rain effects, inspired by the iconic Matrix movies.

        <h3>🎯 The Experiment</h3>

        This page demonstrates a Matrix-style rain effect using pure JavaScript and CSS. The characters fall from the top of the screen, creating that classic "digital rain" aesthetic that we all know and love.

        <h3>🔬 How It Works</h3>

        The effect is created by:
        1. **Character Generation**: Random characters (including Japanese katakana) are generated
        2. **Animation**: CSS animations make them fall from top to bottom
        3. **Randomization**: Each character has random positioning and timing
        4. **Cleanup**: Characters are removed after animation completes

        <h3>🎮 Interactive Demo</h3>

        <div style="text-align: center; margin: 2em 0;">
          <button onclick="toggleMatrix()" id="matrix-toggle" style="padding: 15px 30px; font-size: 18px; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 25px; color: black; cursor: pointer; font-weight: bold;">
            🎬 Start Matrix Rain
          </button>
        </div>

        <div id="matrix-demo" style="position: relative; height: 300px; background: #000; border: 2px solid #00ff00; border-radius: 10px; overflow: hidden; margin: 2em 0;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #00ff00; font-size: 18px; z-index: 10;">
            Click the button above to start the Matrix rain effect!
          </div>
        </div>

        <h3>💻 The Code</h3>

        Here's the core JavaScript that powers this effect:

        <pre><code>function createMatrixRain() {
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  
  setInterval(() => {
    const char = document.createElement('div');
    char.className = 'matrix-char';
    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.left = Math.random() * 100 + 'vw';
    char.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(char);
    
    setTimeout(() => char.remove(), 4000);
  }, 100);
}</code></pre>

        <h3>🎨 Customization Options</h3>

        You can customize the Matrix rain by:
        - **Changing characters**: Modify the character set
        - **Adjusting speed**: Change the interval timing
        - **Color variations**: Use different green shades
        - **Size effects**: Vary character sizes

        <h3>🧠 The Science Behind It</h3>

        This effect demonstrates several programming concepts:
        - **DOM manipulation**: Creating and removing elements dynamically
        - **CSS animations**: Using keyframes for smooth movement
        - **Randomization**: Generating random values for variety
        - **Memory management**: Cleaning up elements to prevent memory leaks

        <h3>🎪 What's Next?</h3>

        Future experiments might include:
        - 3D Matrix effects
        - Interactive character trails
        - Sound effects
        - Color cycling effects
        - Particle systems

        <hr>

        <p><em>This experiment was created with pure chaos and a love for all things digital. Remember: "There is no spoon." 🥄</em></p>
    </div>
    
    <div class="experiment-footer">
        <a href="/" class="back-link">🏠 Back to the Playground</a>
    </div>
</div>

<script>
let matrixActive = false;
let matrixInterval;

function toggleMatrix() {
  const button = document.getElementById('matrix-toggle');
  const demo = document.getElementById('matrix-demo');
  
  if (!matrixActive) {
    // Start matrix rain
    matrixActive = true;
    button.textContent = '⏹️ Stop Matrix Rain';
    button.style.background = 'linear-gradient(45deg, #ff6b6b, #ff4757)';
    
    // Clear demo area
    demo.innerHTML = '';
    
    // Start matrix effect
    matrixInterval = setInterval(() => {
      const char = document.createElement('div');
      char.style.position = 'absolute';
      char.style.left = Math.random() * 100 + '%';
      char.style.top = '-20px';
      char.style.color = '#00ff00';
      char.style.fontSize = '16px';
      char.style.fontFamily = 'monospace';
      char.style.animation = `matrix-fall ${Math.random() * 2 + 2}s linear forwards`;
      char.textContent = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'[Math.floor(Math.random() * 50)];
      
      demo.appendChild(char);
      
      setTimeout(() => {
        if (char.parentNode) {
          char.remove();
        }
      }, 4000);
    }, 100);
    
  } else {
    // Stop matrix rain
    matrixActive = false;
    button.textContent = '🎬 Start Matrix Rain';
    button.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
    
    clearInterval(matrixInterval);
    demo.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #00ff00; font-size: 18px;">Matrix rain stopped. Click to restart!</div>';
  }
}

// Matrix rain effect for background
function createMatrixRain() {
  const matrixBg = document.getElementById('matrix-bg');
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  
  setInterval(() => {
    const char = document.createElement('div');
    char.className = 'matrix-char';
    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.left = Math.random() * 100 + 'vw';
    char.style.animationDuration = (Math.random() * 2 + 2) + 's';
    matrixBg.appendChild(char);
    
    setTimeout(() => {
      char.remove();
    }, 4000);
  }, 100);
}

// Add CSS for matrix animation
const style = document.createElement('style');
style.textContent = `
  @keyframes matrix-fall {
    to {
      transform: translateY(320px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize
createMatrixRain();
</script>
