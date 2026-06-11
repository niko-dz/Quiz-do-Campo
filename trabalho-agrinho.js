// ==============================
// BANCO DE PERGUNTAS
// ==============================
const questions = [
  // MEIO AMBIENTE
  {
    category: "🌿 Meio Ambiente",
    categoryKey: "Meio Ambiente",
    text: "O que é o efeito estufa?",
    options: [
      "Um fenômeno que resfria a Terra",
      "A retenção de calor na atmosfera por gases como CO₂",
      "Um tipo de plantio em estufas",
      "Uma doença das plantas"
    ],
    correct: 1,
    explanation: "O efeito estufa é o aquecimento da Terra causado pela retenção de calor por gases como CO₂ e metano."
  },
  {
    category: "🌿 Meio Ambiente",
    categoryKey: "Meio Ambiente",
    text: "Qual atividade humana mais contribui para o desmatamento no Brasil?",
    options: [
      "Turismo ecológico",
      "Pesca artesanal",
      "Expansão da agropecuária e extração ilegal de madeira",
      "Construção de escolas"
    ],
    correct: 2,
    explanation: "A expansão agropecuária e a extração ilegal de madeira são as principais causas do desmatamento no Brasil."
  },
  {
    category: "🌿 Meio Ambiente",
    categoryKey: "Meio Ambiente",
    text: "O que são áreas de preservação permanente (APPs)?",
    options: [
      "Áreas destinadas a construção de indústrias",
      "Zonas de proteção da vegetação nativa em locais como margens de rios",
      "Terrenos para plantio de transgênicos",
      "Reservas de minérios"
    ],
    correct: 1,
    explanation: "As APPs protegem a vegetação nativa em locais sensíveis como margens de rios, topos de morros e encostas."
  },
  // AGRICULTURA
  {
    category: "🌾 Agricultura",
    categoryKey: "Agricultura",
    text: "O que é agricultura orgânica?",
    options: [
      "Agricultura que usa muito agrotóxico",
      "Cultivo sem uso de agrotóxicos e fertilizantes químicos sintéticos",
      "Plantação feita em ambiente urbano",
      "Produção de biocombustíveis"
    ],
    correct: 1,
    explanation: "A agricultura orgânica produz alimentos sem agrotóxicos e fertilizantes químicos, respeitando o equilíbrio natural."
  },
  {
    category: "🌾 Agricultura",
    categoryKey: "Agricultura",
    text: "Qual é a função do solo saudável na agricultura?",
    options: [
      "Suporte físico apenas para as plantas",
      "Fornecer nutrientes, água e abrigar microrganismos essenciais para o crescimento das plantas",
      "Reter poluentes do ar",
      "Substituir a fotossíntese"
    ],
    correct: 1,
    explanation: "O solo saudável fornece nutrientes, armazena água e abriga microrganismos que sustentam a vida das plantas."
  },
  {
    category: "🌾 Agricultura",
    categoryKey: "Agricultura",
    text: "O que é rotação de culturas?",
    options: [
      "Girar o trator em círculos no campo",
      "Alternar diferentes tipos de plantas na mesma área ao longo do tempo",
      "Plantar em terrenos inclinados",
      "Usar sementes de diferentes cores"
    ],
    correct: 1,
    explanation: "A rotação de culturas alterna espécies vegetais na mesma área, melhorando a saúde do solo e reduzindo pragas."
  },
  // RECICLAGEM
  {
    category: "♻️ Reciclagem",
    categoryKey: "Reciclagem",
    text: "Qual a cor da lixeira correta para descartar papel?",
    options: ["Verde", "Vermelho", "Azul", "Amarelo"],
    correct: 2,
    explanation: "No Brasil, a lixeira azul é destinada ao papel, seguindo o padrão de coleta seletiva."
  },
  {
    category: "♻️ Reciclagem",
    categoryKey: "Reciclagem",
    text: "O que é compostagem?",
    options: [
      "Queima de lixo ao ar livre",
      "Transformação de resíduos orgânicos em adubo natural",
      "Reciclagem de plásticos",
      "Enterrar o lixo no campo"
    ],
    correct: 1,
    explanation: "A compostagem transforma restos de alimentos e folhas em adubo orgânico rico em nutrientes."
  },
  {
    category: "♻️ Reciclagem",
    categoryKey: "Reciclagem",
    text: "Quanto tempo aproximadamente uma garrafa plástica leva para se decompor na natureza?",
    options: ["2 anos", "10 anos", "Até 400 anos", "50 dias"],
    correct: 2,
    explanation: "Garrafas plásticas podem levar até 400 anos para se decompor completamente na natureza."
  },
  // ÁGUA
  {
    category: "💧 Economia de Água",
    categoryKey: "Água",
    text: "Qual porcentagem de toda a água da Terra é doce e disponível para consumo?",
    options: ["50%", "20%", "Menos de 3%", "10%"],
    correct: 2,
    explanation: "Apenas cerca de 2,5% da água da Terra é doce, e grande parte está em geleiras — menos de 1% está facilmente acessível."
  },
  {
    category: "💧 Economia de Água",
    categoryKey: "Água",
    text: "O que é irrigação por gotejamento?",
    options: [
      "Jogar água em grande quantidade nas plantações",
      "Método que libera água diretamente na raiz da planta, economizando água",
      "Irrigar somente quando chove",
      "Usar aspersores em alta pressão"
    ],
    correct: 1,
    explanation: "A irrigação por gotejamento é altamente eficiente, entregando água diretamente às raízes e reduzindo desperdício em até 50%."
  },
  {
    category: "💧 Economia de Água",
    categoryKey: "Água",
    text: "Qual prática ajuda a conservar a água no campo?",
    options: [
      "Deixar torneiras abertas durante a irrigação",
      "Captação de água da chuva com cisternas",
      "Desmatar às margens dos rios",
      "Irrigar durante o sol forte do meio-dia"
    ],
    correct: 1,
    explanation: "Cisternas coletam e armazenam água da chuva, essencial para regiões semiáridas e para reduzir o consumo."
  },
  // ANIMAIS DO CAMPO
  {
    category: "🐄 Animais do Campo",
    categoryKey: "Animais",
    text: "Qual inseto é fundamental para a polinização das plantas e produção de alimentos?",
    options: ["Mosquito", "Abelha", "Besouro", "Formiga"],
    correct: 1,
    explanation: "As abelhas são os principais polinizadores, essenciais para a reprodução de cerca de 70% das plantas cultivadas para alimentação."
  },
  {
    category: "🐄 Animais do Campo",
    categoryKey: "Animais",
    text: "O que é bem-estar animal na pecuária?",
    options: [
      "Deixar os animais sem alimentação para economizar",
      "Garantir condições adequadas de saúde, espaço, alimentação e ausência de sofrimento",
      "Prender os animais em gaiolas pequenas",
      "Usar os animais apenas para trabalho pesado"
    ],
    correct: 1,
    explanation: "O bem-estar animal garante que os animais criados no campo vivam com saúde, conforto e sem sofrimento desnecessário."
  },
  {
    category: "🐄 Animais do Campo",
    categoryKey: "Animais",
    text: "Qual é o papel das minhocas para a saúde do solo?",
    options: [
      "Elas prejudicam as raízes das plantas",
      "Aeração e fertilização natural do solo, melhorando sua estrutura",
      "Consomem nutrientes sem devolver nada",
      "Apenas decoram o solo"
    ],
    correct: 1,
    explanation: "As minhocas aeraram o solo, melhoram sua estrutura e transformam matéria orgânica em húmus, fertilizando a terra naturalmente."
  }
];

// ==============================
// ESTADO DO JOGO
// ==============================
let state = {
  currentQ: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
  timer: null,
  timeLeft: 20,
  categoryResults: {}
};

const CAT_COLORS = {
  "Meio Ambiente": "#2d7a4f",
  "Agricultura":   "#f5c842",
  "Reciclagem":    "#4caf7d",
  "Água":          "#3a9edb",
  "Animais":       "#f07d2a"
};

// ==============================
// HELPERS
// ==============================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.add('active');
  // Re-trigger animation
  el.style.animation = 'none';
  requestAnimationFrame(() => { el.style.animation = ''; });
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ==============================
// INTRO
// ==============================
function showIntro() {
  showScreen('screenIntro');
}

// ==============================
// START QUIZ
// ==============================
function startQuiz() {
  state = {
    currentQ: 0, score: 0, correct: 0, wrong: 0,
    streak: 0, maxStreak: 0, answered: false,
    timer: null, timeLeft: 20, categoryResults: {}
  };
  // Initialize category stats
  const cats = ["Meio Ambiente","Agricultura","Reciclagem","Água","Animais"];
  cats.forEach(c => { state.categoryResults[c] = { correct: 0, total: 0 }; });
  questions.forEach(q => { if (state.categoryResults[q.categoryKey]) state.categoryResults[q.categoryKey].total++; });

  showScreen('screenQuiz');
  renderQuestion();
}

// ==============================
// RENDER QUESTION
// ==============================
function renderQuestion() {
  const q = questions[state.currentQ];
  state.answered = false;
  state.timeLeft = 20;

  // Progress
  const pct = (state.currentQ / questions.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `Pergunta ${state.currentQ + 1} de ${questions.length}`;
  document.getElementById('progressScore').textContent = `⭐ ${state.score} pts`;
  document.getElementById('qCategory').textContent = q.category;
  document.getElementById('qNumber').textContent = `${state.currentQ + 1}/${questions.length}`;
  document.getElementById('questionText').textContent = q.text;

  // Hide feedback
  const fb = document.getElementById('feedbackPopup');
  fb.className = 'feedback-popup';
  fb.textContent = '';

  // Render options
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectOption(i);
    grid.appendChild(btn);
  });

  startTimer();
}

// ==============================
// TIMER
// ==============================
function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = 20;
  updateTimerUI();
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      if (!state.answered) timeOut();
    }
  }, 1000);
}

function updateTimerUI() {
  const el = document.getElementById('qTimer');
  el.innerHTML = `⏱️ ${state.timeLeft}`;
  if (state.timeLeft <= 5) el.classList.add('warning');
  else el.classList.remove('warning');
}

function timeOut() {
  state.answered = true;
  state.wrong++;
  state.streak = 0;
  const q = questions[state.currentQ];
  // Mark correct answer
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
  });
  showFeedback(false, `⏰ Tempo esgotado! A resposta era: ${q.options[q.correct]}`, q.explanation);
  setTimeout(nextQuestion, 2800);
}

// ==============================
// SELECT OPTION
// ==============================
function selectOption(index) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);

  const q = questions[state.currentQ];
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  if (index === q.correct) {
    btns[index].classList.add('correct');
    const bonus = state.timeLeft > 10 ? 15 : 10;
    state.score += bonus;
    state.correct++;
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    state.categoryResults[q.categoryKey].correct++;
    const comboText = state.streak >= 3 ? ` 🔥 Combo x${state.streak}!` : '';
    showFeedback(true, `✅ Correto! +${bonus} pontos${comboText}`, q.explanation);
    spawnStars(btns[index]);
  } else {
    btns[index].classList.add('wrong');
    btns[q.correct].classList.add('correct');
    state.wrong++;
    state.streak = 0;
    showFeedback(false, `❌ Incorreto! A resposta era: ${q.options[q.correct]}`, q.explanation);
  }

  document.getElementById('progressScore').textContent = `⭐ ${state.score} pts`;
  setTimeout(nextQuestion, 2800);
}

function showFeedback(isCorrect, msg, explanation) {
  const fb = document.getElementById('feedbackPopup');
  fb.className = 'feedback-popup show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.innerHTML = `<span>${msg}</span><span style="font-size:12px;opacity:0.8;display:block;margin-top:4px">${explanation}</span>`;
}

// ==============================
// NEXT QUESTION
// ==============================
function nextQuestion() {
  state.currentQ++;
  if (state.currentQ >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ==============================
// RESULTS
// ==============================
function showResults() {
  showScreen('screenResult');
  const total = questions.length * 15;
  const pct = state.score / total;

  // Trophy & Title
  let trophy, title, msg;
  if (pct >= 0.9) {
    trophy = '🏆'; title = 'Campeão da Sustentabilidade!';
    msg = 'Incrível! Você domina os conhecimentos sobre o campo e meio ambiente. Continue assim!';
    launchConfetti();
  } else if (pct >= 0.7) {
    trophy = '🥈'; title = 'Excelente resultado!';
    msg = 'Muito bem! Você tem ótimo conhecimento sobre sustentabilidade. Quase lá para o topo!';
  } else if (pct >= 0.5) {
    trophy = '🥉'; title = 'Bom trabalho!';
    msg = 'Você passou mais da metade! Continue estudando sobre o campo e meio ambiente.';
  } else {
    trophy = '🌱'; title = 'Continue aprendendo!';
    msg = 'Não desanime! O campo tem muito a ensinar. Tente novamente e melhore seu resultado!';
  }

  document.getElementById('resultTrophy').textContent = trophy;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultMsg').textContent = msg;

  // Animate score
  const scoreEl = document.getElementById('resultScoreNum');
  document.getElementById('resultScoreTotal').textContent = `de ${total}`;
  let current = 0;
  const increment = state.score / 40;
  const interval = setInterval(() => {
    current = Math.min(current + increment, state.score);
    scoreEl.textContent = Math.round(current);
    if (current >= state.score) clearInterval(interval);
  }, 30);

  // Conic gradient for score circle
  const circle = document.getElementById('scoreCircle');
  const deg = Math.round(pct * 360);
  circle.style.background = `conic-gradient(${pct >= 0.7 ? 'var(--verde-claro)' : pct >= 0.5 ? 'var(--amarelo)' : 'var(--laranja)'} 0deg ${deg}deg, #e8e8e8 ${deg}deg 360deg)`;

  document.getElementById('statCorrect').textContent = state.correct;
  document.getElementById('statWrong').textContent = state.wrong;
  document.getElementById('statStreak').textContent = state.maxStreak;

  // Category bars
  const barsDiv = document.getElementById('categoryBars');
  barsDiv.innerHTML = '<div style="font-weight:800;color:var(--verde-escuro);margin-bottom:12px;font-size:14px">📊 Desempenho por Categoria</div>';
  Object.entries(state.categoryResults).forEach(([cat, res]) => {
    if (res.total === 0) return;
    const p = res.total > 0 ? Math.round((res.correct / res.total) * 100) : 0;
    const color = CAT_COLORS[cat] || 'var(--verde-claro)';
    const row = document.createElement('div');
    row.className = 'result-bar-row';
    row.innerHTML = `
      <span class="result-bar-label">${cat}</span>
      <div class="result-bar-outer">
        <div class="result-bar-fill" style="width:0%;background:${color}" data-width="${p}%"></div>
      </div>
      <span style="font-size:13px;font-weight:700;color:${color};min-width:38px;text-align:right">${res.correct}/${res.total}</span>
    `;
    barsDiv.appendChild(row);
  });
  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll('.result-bar-fill').forEach(el => {
      el.style.width = el.dataset.width;
    });
  }, 200);
}

// ==============================
// RESTART
// ==============================
function restartQuiz() {
  document.getElementById('confettiContainer').innerHTML = '';
  startQuiz();
}

// ==============================
// EFFECTS
// ==============================
function spawnStars(btn) {
  const rect = btn.getBoundingClientRect();
  const appRect = document.body.getBoundingClientRect();
  for (let i = 0; i < 6; i++) {
    const star = document.createElement('div');
    star.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width/2 - appRect.left}px;
      top: ${rect.top + rect.height/2}px;
      font-size: ${14 + Math.random()*12}px;
      pointer-events: none;
      z-index: 999;
      animation: starFly 0.8s ease-out forwards;
      transform-origin: center;
    `;
    star.textContent = ['⭐','✨','💫'][Math.floor(Math.random()*3)];
    const dx = (Math.random()-0.5)*120;
    const dy = -(30 + Math.random()*80);
    star.style.setProperty('--dx', dx + 'px');
    star.style.setProperty('--dy', dy + 'px');
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 900);
  }
}

// Star fly keyframe injected once
(function(){
  const s = document.createElement('style');
  s.textContent = `@keyframes starFly {
    from { opacity:1; transform: translate(0,0) scale(1); }
    to   { opacity:0; transform: translate(var(--dx),var(--dy)) scale(0.3); }
  }`;
  document.head.appendChild(s);
})();

function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#f5c842','#4caf7d','#f07d2a','#87ceeb','#e74c3c','#9b59b6','#2ecc71'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = 2 + Math.random() * 3;
    const size = 6 + Math.random() * 10;
    piece.style.cssText = `
      left: ${left}%;
      background: ${color};
      width: ${size}px;
      height: ${size * 1.4}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    container.appendChild(piece);
  }
  setTimeout(() => { container.innerHTML = ''; }, 8000);
}

// ==============================
// FLOATING PARTICLES
// ==============================
(function createParticles() {
  const scene = document.querySelector('.bg-scene');
  const colors = ['#a8e6c3','#f5c842','#87ceeb','#f07d2a','#4caf7d'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 4 + Math.random() * 8;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      bottom: ${40 + Math.random() * 30}%;
      width: ${size}px; height: ${size}px;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration: ${3 + Math.random() * 5}s;
      animation-delay: ${Math.random() * 6}s;
    `;
    scene.appendChild(p);
  }
})();
