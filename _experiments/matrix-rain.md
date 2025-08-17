---
layout: experiment
title: "Matrix Rain Generator"
experiment_number: 001
date: 2024-01-15
---

# 🧪 Matrix Rain Generator

Welcome to Experiment #001! This is where we explore the fascinating world of digital rain effects, inspired by the iconic Matrix movies.

## 🎯 The Experiment

This page demonstrates a Matrix-style rain effect using pure JavaScript and CSS. The characters fall from the top of the screen, creating that classic "digital rain" aesthetic that we all know and love.

## 🔬 How It Works

The effect is created by:
1. **Character Generation**: Random characters (including Japanese katakana) are generated
2. **Animation**: CSS animations make them fall from top to bottom
3. **Randomization**: Each character has random positioning and timing
4. **Cleanup**: Characters are removed after animation completes

## 🎮 Interactive Demo

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

## 💻 The Code

Here's the core JavaScript that powers this effect:

```javascript
function createMatrixRain() {
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
}
```

## 🎨 Customization Options

You can customize the Matrix rain by:
- **Changing characters**: Modify the character set
- **Adjusting speed**: Change the interval timing
- **Color variations**: Use different green shades
- **Size effects**: Vary character sizes

## 🧠 The Science Behind It

This effect demonstrates several programming concepts:
- **DOM manipulation**: Creating and removing elements dynamically
- **CSS animations**: Using keyframes for smooth movement
- **Randomization**: Generating random values for variety
- **Memory management**: Cleaning up elements to prevent memory leaks

## 🎪 What's Next?

Future experiments might include:
- 3D Matrix effects
- Interactive character trails
- Sound effects
- Color cycling effects
- Particle systems

---

*This experiment was created with pure chaos and a love for all things digital. Remember: "There is no spoon." 🥄*

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
</script>
