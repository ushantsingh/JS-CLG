// ===== QUIZ DATA =====
const quizData = [
  {
    question: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tabular Markup Language",
      "Home Tool Markup Language"
    ],
    correct: 0,
    points: 10
  },
  {
    question: "CSS stands for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Syntax",
      "Cascading Style Sheets",
      "Colorful Style System"
    ],
    correct: 2,
    points: 10
  },
  {
    question: "JavaScript mein variable declare karne ke liye kaunsa keyword use hota hai?",
    options: [
      "var, let, const",
      "int, float, string",
      "define, set, create",
      "variable, value, store"
    ],
    correct: 0,
    points: 10
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
      "<link>",
      "<href>",
      "<a>",
      "<url>"
    ],
    correct: 2,
    points: 10
  },
  {
    question: "React ek _____ library hai.",
    options: [
      "Backend JavaScript",
      "Frontend JavaScript",
      "Database Management",
      "Server-side Python"
    ],
    correct: 1,
    points: 10
  }
];

// ===== STATE =====
let currentQ = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let timerInterval = null;
let timeLeft = 15;
let answered = false;

// ===== HELPERS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const target = document.getElementById(id);
  target.style.display = 'flex';
  // Trigger reflow for animation
  void target.offsetWidth;
  target.classList.add('active');
}

function updateProgressBar() {
  const pct = ((currentQ) / quizData.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
}

// ===== TIMER =====
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  document.getElementById('timer-display').textContent =
    `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  const badge = document.getElementById('timer-badge');
  if (timeLeft <= 10) {
    badge.classList.add('urgent');
  } else {
    badge.classList.remove('urgent');
  }
}

function handleTimeout() {
  if (answered) return;
  answered = true;
  skippedCount++;

  // Show the correct answer
  const options = document.querySelectorAll('.option-btn');
  const correctIndex = quizData[currentQ].correct;
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) btn.classList.add('correct');
  });

  showFeedback('timeout', `⏰ Time's up! The answer was: ${quizData[currentQ].options[correctIndex]}`);
  document.getElementById('next-btn').disabled = false;
}

// ===== FEEDBACK =====
function showFeedback(type, message) {
  const el = document.getElementById('feedback-msg');
  el.className = 'feedback-msg show-' + type;
  el.textContent = message;
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = quizData[currentQ];
  answered = false;

  document.getElementById('question-text').textContent = q.question;
  document.getElementById('question-counter').textContent =
    `Question ${currentQ + 1} of ${quizData.length}`;

  // Reset feedback
  const feedbackEl = document.getElementById('feedback-msg');
  feedbackEl.className = 'feedback-msg';
  feedbackEl.textContent = '';

  // Reset next button
  document.getElementById('next-btn').disabled = true;

  // Render options
  const container = document.getElementById('options-container');
  container.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `option-${i}`;

    const letterSpan = document.createElement('span');
    letterSpan.className = 'option-letter';
    letterSpan.textContent = letters[i];

    const textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.textContent = opt;  // textContent treats HTML tags as plain text

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.addEventListener('click', () => selectAnswer(i));
    container.appendChild(btn);
  });

  updateProgressBar();
  startTimer();
}

// ===== SELECT ANSWER =====
function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const correctIndex = quizData[currentQ].correct;
  const options = document.querySelectorAll('.option-btn');

  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) btn.classList.add('correct');
  });

  if (selectedIndex === correctIndex) {
    options[selectedIndex].classList.add('selected', 'correct');
    score += quizData[currentQ].points;
    correctCount++;

    // Animate score
    const scoreEl = document.getElementById('score-display');
    scoreEl.textContent = score;
    scoreEl.classList.remove('bump');
    void scoreEl.offsetWidth;
    scoreEl.classList.add('bump');

    showFeedback('correct', '✅ Sahi jawab! +' + quizData[currentQ].points + ' points');
  } else {
    options[selectedIndex].classList.add('selected', 'wrong');
    wrongCount++;
    showFeedback('wrong', '❌ Galat jawab! Better luck next time.');
  }

  document.getElementById('next-btn').disabled = false;
}

// ===== NEXT QUESTION =====
function nextQuestion() {
  currentQ++;

  if (currentQ >= quizData.length) {
    showResults();
    return;
  }

  // Animate card out & in
  const card = document.querySelector('#quiz-screen .card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'screenFadeIn 0.4s ease forwards';

  renderQuestion();
}

// ===== START QUIZ =====
function startQuiz() {
  currentQ = 0;
  score = 0;
  correctCount = 0;
  wrongCount = 0;
  skippedCount = 0;

  document.getElementById('score-display').textContent = '0';

  showScreen('quiz-screen');
  renderQuestion();
}

// ===== SHOW RESULTS =====
function showResults() {
  clearInterval(timerInterval);
  updateProgressBar();

  // Fill progress bar to 100%
  document.getElementById('progress-bar').style.width = '100%';

  const total = quizData.length * 10;
  const pct = score / total;

  // Emoji & title based on score
  let emoji, title, subtitle;
  if (pct >= 0.8) {
    emoji = '🏆'; title = 'Excellent!'; subtitle = "You're a quiz master! Absolutely brilliant!";
  } else if (pct >= 0.6) {
    emoji = '🌟'; title = 'Great Job!'; subtitle = "You did really well! Keep it up!";
  } else if (pct >= 0.4) {
    emoji = '👍'; title = 'Not Bad!'; subtitle = "Good attempt! Practice more and you'll ace it.";
  } else {
    emoji = '💪'; title = 'Keep Trying!'; subtitle = "Don't give up! Practice makes perfect.";
  }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-subtitle').textContent = subtitle;
  document.getElementById('final-score').textContent = score;
  document.getElementById('final-total').textContent = '/' + total;
  document.getElementById('correct-count').textContent = correctCount;
  document.getElementById('wrong-count').textContent = wrongCount;
  document.getElementById('skipped-count').textContent = skippedCount;

  showScreen('result-screen');

  // Animate score ring
  setTimeout(() => {
    const circumference = 2 * Math.PI * 54; // 339.3
    const offset = circumference - (pct * circumference);
    const ringProgress = document.getElementById('ring-progress');
    ringProgress.style.strokeDashoffset = offset;
  }, 100);
}

// ===== RESTART =====
function restartQuiz() {
  showScreen('start-screen');
}

// ===== INIT =====
// Inject SVG gradient for ring
const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
svgDefs.innerHTML = `
  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#6366f1"/>
    <stop offset="100%" stop-color="#ec4899"/>
  </linearGradient>
`;
document.querySelector('.ring-svg')?.prepend(svgDefs);

showScreen('start-screen');
