---
layout: experiment
title: "Speed Typing Challenge"
experiment_number: 002
date: 2024-01-15
---

# 🧪 Speed Typing Challenge

Welcome to Experiment #002! This is a wacky typing game where you'll test your keyboard skills against some of the most ridiculous sentences ever written.

## 🎯 The Challenge

Type the displayed text as fast as you can! But beware - these aren't your ordinary typing exercises. We've got some seriously weird sentences that will make you question reality itself.

## 🎮 The Game

<div style="text-align: center; margin: 2em 0;">
  <button onclick="startGame()" id="game-button" style="padding: 15px 30px; font-size: 18px; background: linear-gradient(45deg, #667eea, #764ba2); border: none; border-radius: 25px; color: white; cursor: pointer; font-weight: bold;">
    🚀 Start Typing Challenge
  </button>
</div>

<div id="game-container" style="background: #2c3e50; padding: 30px; border-radius: 15px; margin: 2em 0; display: none;">
  <div style="text-align: center; margin-bottom: 20px;">
    <h3 style="color: #ecf0f1;">Time: <span id="timer">60</span>s | Score: <span id="score">0</span> | WPM: <span id="wpm">0</span></h3>
  </div>
  
  <div id="target-text" style="background: #34495e; padding: 20px; border-radius: 10px; margin: 20px 0; font-size: 18px; line-height: 1.6; color: #bdc3c7; min-height: 100px;">
    Click "Start Typing Challenge" to begin!
  </div>
  
  <textarea id="input-field" style="width: 100%; height: 100px; padding: 15px; font-size: 16px; border: 2px solid #3498db; border-radius: 10px; background: #ecf0f1; resize: none;" placeholder="Start typing here..." disabled></textarea>
  
  <div style="text-align: center; margin-top: 20px;">
    <button onclick="resetGame()" style="padding: 10px 20px; background: #e74c3c; border: none; border-radius: 5px; color: white; cursor: pointer;">
      🔄 Reset Game
    </button>
  </div>
</div>

<div id="results" style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); padding: 30px; border-radius: 15px; margin: 2em 0; display: none; text-align: center; color: white;">
  <h2>🎉 Game Complete! 🎉</h2>
  <div id="final-stats" style="font-size: 18px; margin: 20px 0;"></div>
  <button onclick="startGame()" style="padding: 15px 30px; background: white; color: #333; border: none; border-radius: 25px; cursor: pointer; font-weight: bold;">
    🎮 Play Again
  </button>
</div>

## 🎪 The Wacky Sentences

Our typing challenges feature some of the most bizarre sentences ever conceived:

- "The quantum cat is simultaneously debugging and being debugged while wearing a tuxedo made of pure mathematics."
- "My code is like a box of chocolates - you never know what you're gonna get, but it's probably a null pointer exception."
- "The algorithm danced the cha-cha with the data structure while the compiler watched in mild amusement."
- "In a parallel universe, this sentence is being typed by a robot who dreams of electric sheep."
- "The bug was so elusive that it started leaving breadcrumbs for other bugs to follow."

## 🏆 Scoring System

- **Words Per Minute (WPM)**: Calculated based on your typing speed
- **Accuracy**: Percentage of correctly typed characters
- **Bonus Points**: Extra points for perfect sentences
- **Time Bonus**: Faster completion = more points

## 🧠 The Science Behind Typing

Typing speed is influenced by:
- **Muscle Memory**: Your fingers remember common patterns
- **Cognitive Load**: How much you're thinking about the content
- **Visual Processing**: How quickly you can read and process text
- **Motor Skills**: Your finger coordination and dexterity

## 🎯 Tips for Success

1. **Don't look at your keyboard** - Trust your muscle memory
2. **Focus on accuracy first** - Speed will come naturally
3. **Take deep breaths** - Stay relaxed and focused
4. **Practice regularly** - Consistency is key
5. **Have fun** - It's just a game, after all!

---

*"The quick brown fox jumps over the lazy dog, but the lazy dog is actually a quantum superposition of all possible dogs." - Schrödinger's Typing Manual*

<script>
let gameActive = false;
let timeLeft = 60;
let score = 0;
let wordsTyped = 0;
let gameTimer;
let currentSentence = '';

const wackySentences = [
  "The quantum cat is simultaneously debugging and being debugged while wearing a tuxedo made of pure mathematics.",
  "My code is like a box of chocolates - you never know what you're gonna get, but it's probably a null pointer exception.",
  "The algorithm danced the cha-cha with the data structure while the compiler watched in mild amusement.",
  "In a parallel universe, this sentence is being typed by a robot who dreams of electric sheep.",
  "The bug was so elusive that it started leaving breadcrumbs for other bugs to follow.",
  "The database administrator went to the bar and ordered a NULL pointer on the rocks.",
  "The function was so recursive that it forgot why it was calling itself in the first place.",
  "The variable declared itself independent and refused to be assigned any values.",
  "The server had an existential crisis and questioned whether it was really serving or just being served.",
  "The API endpoint went on vacation and forgot to leave a forwarding address."
];

function startGame() {
  gameActive = true;
  timeLeft = 60;
  score = 0;
  wordsTyped = 0;
  
  document.getElementById('game-button').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('results').style.display = 'none';
  
  currentSentence = wackySentences[Math.floor(Math.random() * wackySentences.length)];
  document.getElementById('target-text').textContent = currentSentence;
  
  const inputField = document.getElementById('input-field');
  inputField.value = '';
  inputField.disabled = false;
  inputField.focus();
  
  // Start timer
  gameTimer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
  
  // Listen for input
  inputField.addEventListener('input', checkInput);
}

function checkInput() {
  const inputField = document.getElementById('input-field');
  const targetText = document.getElementById('target-text');
  const input = inputField.value;
  
  // Calculate words typed
  wordsTyped = input.split(' ').length;
  document.getElementById('wpm').textContent = Math.round((wordsTyped / (60 - timeLeft)) * 60);
  
  // Check accuracy
  let correct = 0;
  for (let i = 0; i < input.length && i < currentSentence.length; i++) {
    if (input[i] === currentSentence[i]) {
      correct++;
    }
  }
  
  const accuracy = input.length > 0 ? (correct / input.length) * 100 : 0;
  score = Math.round((wordsTyped * 10) + (accuracy * 2));
  document.getElementById('score').textContent = score;
  
  // Check if sentence is complete
  if (input === currentSentence) {
    score += 50; // Bonus for perfect completion
    document.getElementById('score').textContent = score;
    setTimeout(() => {
      if (gameActive) {
        currentSentence = wackySentences[Math.floor(Math.random() * wackySentences.length)];
        targetText.textContent = currentSentence;
        inputField.value = '';
      }
    }, 1000);
  }
}

function endGame() {
  gameActive = false;
  clearInterval(gameTimer);
  
  document.getElementById('game-container').style.display = 'none';
  document.getElementById('game-button').style.display = 'inline-block';
  document.getElementById('game-button').textContent = '🎮 Play Again';
  
  const finalWPM = Math.round((wordsTyped / 60) * 60);
  const finalStats = `
    <p><strong>Final Score:</strong> ${score} points</p>
    <p><strong>Words Per Minute:</strong> ${finalWPM} WPM</p>
    <p><strong>Words Typed:</strong> ${wordsTyped} words</p>
    <p><strong>Time Used:</strong> ${60 - timeLeft} seconds</p>
  `;
  
  document.getElementById('final-stats').innerHTML = finalStats;
  document.getElementById('results').style.display = 'block';
}

function resetGame() {
  if (gameActive) {
    clearInterval(gameTimer);
  }
  startGame();
}
</script>
