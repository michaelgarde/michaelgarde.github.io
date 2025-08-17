---
layout: default
title: "Welcome to the Digital Playground 🎪"
---

<link rel="stylesheet" href="/assets/css/custom.css">
<script src="/assets/js/site.js"></script>

# 🎪 Warning [Cursor](cursor.com)-only generated content 🎪

```
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║  🎭 WELCOME TO THE GREATEST SHOW ON THE INTERNET! 🎭        ║
    ║                                                              ║
    ║  You've just entered a realm where code meets chaos,        ║
    ║  where logic dances with lunacy, and where every            ║
    ║  click might lead to something unexpected!                  ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
```

## 🎯 What's This All About?

This isn't your typical developer portfolio. Oh no! This is a **digital carnival** where I showcase my experiments, share my coding adventures, and occasionally lose my mind in the best possible way.

### 🎨 What You'll Find Here:

- **🧪 Experiments**: Wild coding experiments that may or may not work
- **🥚 Easter Eggs**: Hidden surprises scattered throughout the site
- **📚 Blog Posts**: When I remember to write them
- **🎪 Random Stuff**: Because why not?

---

## 🚀 Latest Adventures

Check out my latest blog posts and experiments!

---

## 🎭 Interactive Fun Zone

<div style="text-align: center; margin: 2em 0;">
  <button onclick="triggerConfetti()" style="padding: 15px 30px; font-size: 18px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border: none; border-radius: 25px; color: white; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
    🎉 Click for Confetti! 🎉
  </button>
</div>

<div id="confetti-container" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1000;"></div>

---

## 🎪 Current Mood

<div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 15px; color: white; text-align: center; margin: 2em 0;">
  <h3>🎵 Currently Vibing To:</h3>
  <p id="current-song">Loading musical genius...</p>
  <p><em>Updated every time I remember to change it</em></p>
</div>

---

## 🥚 Easter Egg Counter

<div style="background: #2c3e50; color: white; padding: 20px; border-radius: 15px; text-align: center; margin: 2em 0;">
  <h3>🥚 Easter Eggs Found: <span id="egg-counter">0</span> / 42</h3>
  <p><small>Keep exploring to find them all!</small></p>
</div>

---

## 🎪 Random Quote Generator

<div style="background: #34495e; color: white; padding: 20px; border-radius: 15px; text-align: center; margin: 2em 0;">
  <blockquote id="random-quote" style="font-style: italic; font-size: 1.2em;">
    "Loading wisdom..."
  </blockquote>
  <button onclick="newQuote()" style="margin-top: 10px; padding: 10px 20px; background: #e74c3c; border: none; border-radius: 5px; color: white; cursor: pointer;">
    🎲 New Quote
  </button>
</div>

---

## 🎭 Connect With The Madness

<div style="display: flex; justify-content: center; gap: 20px; margin: 2em 0;">
  <a href="https://github.com/michaelgarde" style="text-decoration: none; padding: 10px 20px; background: #333; color: white; border-radius: 5px;">
    🐙 GitHub
  </a>
  <a href="mailto:michael@mgarde.dk" style="text-decoration: none; padding: 10px 20px; background: #e74c3c; color: white; border-radius: 5px;">
    📧 Email
  </a>
  <a href="/experiments" style="text-decoration: none; padding: 10px 20px; background: #3498db; color: white; border-radius: 5px;">
    🧪 Experiments
  </a>
</div>

---

<script>
// Confetti function
function triggerConfetti() {
  const container = document.getElementById('confetti-container');
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)];
    confetti.style.borderRadius = '50%';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    container.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Random quotes
const quotes = [
  "Code is like humor. When you have to explain it, it's bad.",
  "The best error message is the one that never shows up.",
  "I'm not lazy, I'm just conserving energy for important tasks.",
  "Debugging is like being a detective in a crime movie where you're also the murderer.",
  "The only way to learn a new programming language is by writing programs in it.",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "The most damaging phrase in the language is 'We've always done it this way!'",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit."
];

function newQuote() {
  const quoteElement = document.getElementById('random-quote');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = `"${randomQuote}"`;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  newQuote();
  document.getElementById('current-song').textContent = "🎵 Currently: 'Code in the Machine' by The Debuggers 🎵";
});

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
</script>
