/* Scam Shield PWA - Interactive lessons with realistic scam mockups */

const lessons = {
  phone: {
    title: "Phone Scams",
    accent: "teal",
    steps: [
      {
        type: "mock-call",
        text: "Unknown numbers and automated calls.",
        sub: "If you do not recognize the number, you do not have to answer. Many scam calls are automated recordings."
      },
      {
        type: "icon",
        icon: "🚫",
        anim: "",
        text: "You can let it go to voicemail.",
        sub: "Scammers often leave urgent-sounding messages. Even the voicemail can be completely fake."
      },
      {
        type: "mock-voicemail",
        text: "A typical fake voicemail might say:",
        sub: "Real government agencies and banks rarely leave messages demanding immediate payment."
      },
      {
        type: "icon",
        icon: "😰",
        anim: "shake",
        text: "They create fear and urgency.",
        sub: "Threats of arrest, lawsuits, or cancelled benefits are classic scam tactics."
      },
      {
        type: "mock-payment",
        text: "They ask for gift cards, crypto, or wire transfers.",
        sub: "No real agency or company asks you to pay this way."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "What to do: Do not answer unknown numbers.",
        sub: "If it might be important, hang up (or ignore) and call back using a number you already trust — from a bill, statement, or the company’s official website. Never call a number that came in the scam call, text, or voicemail."
      }
    ]
  },
  texts: {
    title: "Fake Text Messages",
    accent: "coral",
    steps: [
      {
        type: "mock-sms-package",
        text: "Package delivery texts are very common.",
        sub: "Scammers pretend to be USPS, UPS, FedEx, or Amazon and ask you to click a link or pay a small fee."
      },
      {
        type: "mock-sms-bank",
        text: "Fake bank or account alerts.",
        sub: "They claim there was a suspicious login or that your account will be locked unless you “verify” via a link."
      },
      {
        type: "mock-sms-toll",
        text: "Unpaid toll or traffic fee texts.",
        sub: "These claim you owe a highway toll or ticket and must pay online immediately to avoid penalties."
      },
      {
        type: "icon",
        icon: "⚠️",
        anim: "",
        text: "Red flags in any text:",
        sub: "Unexpected message • Asks you to click a link • Urgency or threats • Asks for payment or personal information."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "What to do: Do not click the link.",
        sub: "Delete the text. If you think it might be real, open the official app or type the company’s website yourself. Never use the link — and never call a phone number that appears in the text."
      }
    ]
  },
  emails: {
    title: "Fake Emails",
    accent: "blue",
    steps: [
      {
        type: "mock-email",
        text: "A message that looks almost real.",
        sub: "Scammers copy logos and use addresses that are close to the real one (like paypa1.com instead of paypal.com)."
      },
      {
        type: "icon",
        icon: "🔗",
        anim: "shake",
        text: "The goal is to get you to click.",
        sub: "Links lead to fake websites that steal passwords, bank details, or personal information."
      },
      {
        type: "icon",
        icon: "⚠️",
        anim: "",
        text: "Common email red flags:",
        sub: "Unexpected “account problem” • Generic greeting • Urgency • Odd sender address • Request to click and log in."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "What to do: Do not click.",
        sub: "Open your browser and type the official website address yourself, or use the company’s official app."
      },
      {
        type: "icon",
        icon: "✅",
        anim: "",
        text: "When in doubt, call the company — the real way.",
        sub: "Look up the official number yourself (bill, statement, or the company’s real website). Never call a phone number that appears in a suspicious email or text — those numbers belong to the scammers."
      }
    ]
  },
  toll: {
    title: "Toll & Traffic Fee Scams",
    accent: "orange",
    steps: [
      {
        type: "mock-sms-toll",
        text: "“You have an unpaid toll.”",
        sub: "These texts (and sometimes calls) claim you owe a highway or bridge toll and must pay online right away."
      },
      {
        type: "icon",
        icon: "🚗",
        anim: "",
        text: "Why it works: many people use toll roads.",
        sub: "The message often includes a plausible amount and a short deadline to create panic."
      },
      {
        type: "icon",
        icon: "🔗",
        anim: "shake",
        text: "The link is the trap.",
        sub: "It goes to a fake website that collects card numbers or personal information. Real toll agencies do not usually text random payment links."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "What to do: Ignore the text or call.",
        sub: "If you actually use a toll road, log in to the official toll authority website or app yourself, or call the number printed on your own toll account statements — not any number in the text message."
      },
      {
        type: "icon",
        icon: "✅",
        anim: "",
        text: "Remember:",
        sub: "Unsolicited texts about unpaid tolls, parking tickets, or traffic fines with a payment link are almost always scams."
      }
    ]
  },
  family: {
    title: "Family Emergency Scams",
    accent: "orange",
    steps: [
      {
        type: "mock-text",
        text: "A late-night text or call from “your grandchild.”",
        sub: "Scammers create urgency and beg you not to tell other family members."
      },
      {
        type: "icon",
        icon: "🔊",
        anim: "shake",
        text: "Sometimes they use AI to clone a voice.",
        sub: "A few seconds of old video or voicemail can make a fake voice that sounds almost real."
      },
      {
        type: "icon",
        icon: "🤫",
        anim: "",
        text: "They demand secrecy and speed.",
        sub: "“Don’t tell anyone. Wire the money or buy gift cards right now.”"
      },
      {
        type: "icon",
        icon: "🔑",
        anim: "gentleFloat",
        text: "Protect yourself with a family code word.",
        sub: "Agree on a secret word only real family knows. If the caller can’t say it — hang up."
      },
      {
        type: "icon",
        icon: "✅",
        anim: "",
        text: "Call another relative first.",
        sub: "Use a number you already have. Confirm your loved one is safe before sending any money."
      }
    ]
  },
  tech: {
    title: "Tech Support Scams",
    accent: "blue",
    steps: [
      {
        type: "mock-popup",
        text: "A scary warning fills your screen.",
        sub: "These pop-ups are designed to panic you into calling a fake support number."
      },
      {
        type: "icon",
        icon: "☎️",
        anim: "shake",
        text: "You call the number. They sound helpful.",
        sub: "They ask for remote access to “fix” the problem and may ask for payment."
      },
      {
        type: "icon",
        icon: "🚫",
        anim: "",
        text: "Real companies never send these pop-ups.",
        sub: "Microsoft, Apple, and your internet provider do not cold-call you about viruses."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "What to do: Close the window or restart.",
        sub: "Do not call the number on the screen. Do not give anyone remote control of your computer."
      },
      {
        type: "icon",
        icon: "✅",
        anim: "",
        text: "If worried, take the device to a trusted local shop.",
        sub: "Or ask a family member for help. Never pay or share passwords with strangers who contact you first."
      }
    ]
  },
  romance: {
    title: "Romance & Online Friend Scams",
    accent: "purple",
    steps: [
      {
        type: "mock-chat",
        text: "Someone online seems perfect.",
        sub: "They message often, share photos, talk about feelings… and eventually ask for money."
      },
      {
        type: "icon",
        icon: "✈️",
        anim: "",
        text: "Common stories: stuck overseas, medical emergency, investment opportunity.",
        sub: "They may claim they love you but “just need help this one time.”"
      },
      {
        type: "icon",
        icon: "💰",
        anim: "shake",
        text: "They never meet in person and always need more money.",
        sub: "Any request for gift cards, crypto, or wire transfers from someone you only know online is a huge red flag."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "Protect yourself: Never send money to someone you have not met in real life.",
        sub: "Talk to a trusted friend or family member about the relationship before any money is involved."
      },
      {
        type: "icon",
        icon: "✅",
        anim: "",
        text: "If it feels too good to be true — it usually is.",
        sub: "Real relationships do not start with financial emergencies."
      }
    ]
  },
  prize: {
    title: "Prize & Lottery Scams",
    accent: "gold",
    steps: [
      {
        type: "mock-prize",
        text: "“Congratulations! You have won a big prize!”",
        sub: "You never entered any contest. To claim it you must pay taxes or fees first."
      },
      {
        type: "icon",
        icon: "🚫",
        anim: "shake",
        text: "Real lotteries never ask you to pay to collect winnings.",
        sub: "Especially not by gift card, wire, or cryptocurrency."
      },
      {
        type: "icon",
        icon: "🛡️",
        anim: "gentleFloat",
        text: "What to do: Ignore and delete.",
        sub: "Do not call the number. Do not send any money. Legitimate prizes do not work this way."
      },
      {
        type: "icon",
        icon: "✅",
        anim: "",
        text: "Remember the golden rule:",
        sub: "If you have to pay money to receive money — it is almost always a scam."
      }
    ]
  }
};

const quizQuestions = [
  {
    q: "You get a call from a number you do not recognize. What is the safest first step?",
    icon: "icons/lesson-phone.png",
    visual: "call",
    options: [
      "Answer and see what they want",
      "Let it go to voicemail or ignore it; if needed, call back only using a number from a bill or official website — never from the call itself",
      "Call the number back immediately from the missed-call list"
    ],
    correct: 1,
    feedback: "Correct. You do not have to answer unknown numbers. Many scams start with automated calls or fake caller ID."
  },
  {
    q: "A text says you have an unpaid highway toll and must click a link to pay within 24 hours. What should you do?",
    icon: "icons/lesson-toll.png",
    visual: "toll",
    options: [
      "Click the link and pay so you avoid a larger fine",
      "Ignore the text. If needed, check your official toll account yourself",
      "Reply with your license plate number so they can look it up"
    ],
    correct: 1,
    feedback: "Right. Unsolicited toll or ticket texts with payment links are almost always scams."
  },
  {
    q: "Someone calls saying they are from Social Security and your benefits will stop unless you pay a fee with gift cards. What should you do?",
    icon: "icons/tip-gift.svg",
    visual: "gift",
    options: [
      "Buy the gift cards and give the codes over the phone",
      "Hang up and call Social Security using the number on ssa.gov",
      "Give them your Social Security number so they can “fix” it"
    ],
    correct: 1,
    feedback: "Correct! Government agencies never demand gift cards. Always hang up and call the official number yourself (from ssa.gov or your statement) — never a number the caller gave you."
  },
  {
    q: "A text says your package is delayed and asks you to click a link to pay a $2.99 fee. What is safest?",
    icon: "icons/lesson-text.png",
    visual: "package",
    options: [
      "Click the link and pay quickly so the package arrives",
      "Ignore the text and check the official tracking site or app yourself",
      "Reply with your address so they can reschedule delivery"
    ],
    correct: 1,
    feedback: "Right! Never click links in unexpected messages. Go directly to the official website or app."
  },
  {
    q: "Your “grandchild” calls crying, says they are in trouble, and begs you not to tell anyone. What should you do first?",
    icon: "icons/lesson-family.png",
    visual: "family",
    options: [
      "Wire the money right away to help them",
      "Ask for the family code word or call another relative to verify",
      "Keep it secret as requested so you don’t worry the family"
    ],
    correct: 1,
    feedback: "Yes! Scammers use fear and secrecy. A family code word or a quick call to another relative stops most of these scams."
  }
];

// Navigation
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  const btn = document.querySelector(`nav button[data-section="${id}"]`);
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

// Lesson player
let currentLesson = null;
let currentStep = 0;

function openLesson(key) {
  currentLesson = lessons[key];
  currentStep = 0;
  document.getElementById('lesson-title').textContent = currentLesson.title;
  const stage = document.querySelector('.stage');
  stage.className = 'stage accent-' + (currentLesson.accent || 'teal');
  renderStep();
  showSection('lesson');
}

function getMockupHTML(type) {
  switch (type) {
    case 'mock-call':
      return `
        <div class="mock phone-call">
          <div class="mock-status">Carrier &nbsp; 10:42 AM &nbsp; 100%</div>
          <div class="mock-call-label">Incoming Call</div>
          <div class="mock-caller">Unknown</div>
          <div class="mock-number">+1 (800) 555-0199</div>
          <div class="mock-call-btns">
            <span class="call-decline">Decline</span>
            <span class="call-accept">Accept</span>
          </div>
          <div class="mock-badge">SCAM RISK</div>
        </div>`;
    case 'mock-voicemail':
      return `
        <div class="mock voicemail">
          <div class="vm-title">📧 Voicemail</div>
          <div class="vm-from">From: 1-800-829-1040 &nbsp;•&nbsp; “IRS”</div>
          <div class="vm-body">
            “This is an urgent message from the IRS. There is a lawsuit pending against you for unpaid taxes. Call this number immediately to avoid arrest…”
          </div>
          <div class="mock-badge">FAKE</div>
        </div>`;
    case 'mock-text':
      return `
        <div class="mock phone-text">
          <div class="mock-status">Messages &nbsp; 11:58 PM</div>
          <div class="bubble them">Grandma it’s me. I was in a bad car accident. I’m in jail and need bail money right away. Please don’t tell Mom or Dad yet.</div>
          <div class="bubble them">Can you wire $2,800 or buy iTunes gift cards? I need it before morning. Please hurry.</div>
          <div class="bubble you">Is this really you? What’s our family code word?</div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-sms-package':
      return `
        <div class="mock phone-text">
          <div class="mock-status">Messages &nbsp; Today 9:14 AM</div>
          <div class="bubble them">USPS: Your package is held at the post office. Pay a $2.99 redelivery fee to release it: bit.ly/usps-fee99</div>
          <div class="bubble them">Failure to pay within 24 hrs will return the package to sender.</div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-sms-bank':
      return `
        <div class="mock phone-text">
          <div class="mock-status">Messages &nbsp; Today 2:03 PM</div>
          <div class="bubble them">ALERT: We detected a sign-in to your bank account from a new device. If this wasn’t you, verify now: secure-bank-login.com/verify</div>
          <div class="bubble them">Your account will be locked in 1 hour if you do not confirm.</div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-sms-toll':
      return `
        <div class="mock phone-text">
          <div class="mock-status">Messages &nbsp; Today 8:41 AM</div>
          <div class="bubble them">E-ZPass / Toll Notice: You have an unpaid toll of $4.75. Pay within 48 hours to avoid a $75 penalty: toll-pay-now.com/invoice</div>
          <div class="bubble them">Plate on file. Failure to pay may result in registration hold.</div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-popup':
      return `
        <div class="mock popup-warn">
          <div class="popup-title">⚠️ SYSTEM WARNING</div>
          <div class="popup-body">
            <p><strong>Critical Virus Detected</strong></p>
            <p>Your computer has been infected with spyware. All files and banking data are at risk.</p>
            <p>Call Microsoft Support immediately:</p>
            <p class="popup-number">1-888-555-0199</p>
            <p class="popup-small">Do not shut down your computer.</p>
          </div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-email':
      return `
        <div class="mock email">
          <div class="email-bar">Inbox &nbsp;•&nbsp; Important</div>
          <div class="email-from"><strong>From:</strong> security@paypa1-secure.com</div>
          <div class="email-subj"><strong>Subject:</strong> Urgent: Unusual sign-in attempt</div>
          <div class="email-body">
            <p>Dear Customer,</p>
            <p>We noticed a sign-in from a new device. Your account will be locked in 24 hours unless you verify now.</p>
            <div class="email-btn">Verify My Account →</div>
            <p class="email-note">This link is only valid for a short time.</p>
          </div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-chat':
      return `
        <div class="mock chat">
          <div class="chat-header">Alex M. &nbsp;•&nbsp; Online</div>
          <div class="bubble them">I’ve really enjoyed talking with you these past weeks ❤️</div>
          <div class="bubble them">I’m stuck overseas for work and my card was cancelled. Could you help with a temporary transfer? I’ll pay you back as soon as I’m home.</div>
          <div class="bubble them">Just $900 in gift cards or crypto would be enough for now.</div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-prize':
      return `
        <div class="mock email prize">
          <div class="email-bar">🎉 Prize Notification</div>
          <div class="email-from"><strong>From:</strong> claims@national-lottery-awards.com</div>
          <div class="email-subj"><strong>Subject:</strong> CONGRATULATIONS – You have won $750,000!</div>
          <div class="email-body">
            <p>You have been selected as a winner in our random draw.</p>
            <p>To claim your prize, pay the processing & tax fee of $485 via gift cards or wire transfer within 48 hours.</p>
            <div class="email-btn">Claim My Prize Now</div>
          </div>
          <div class="mock-badge">SCAM</div>
        </div>`;
    case 'mock-payment':
      return `
        <div class="mock payment-ask">
          <div class="pay-title">They will ask you to pay with:</div>
          <div class="pay-items">
            <div class="pay-item">🎁 Gift Cards</div>
            <div class="pay-item">₿ Cryptocurrency</div>
            <div class="pay-item">💸 Wire Transfer</div>
          </div>
          <div class="pay-note">Real agencies and companies almost never request these methods.</div>
          <div class="mock-badge">RED FLAG</div>
        </div>`;
    default:
      return '';
  }
}

function renderStep() {
  const step = currentLesson.steps[currentStep];
  const stage = document.querySelector('.stage');
  const ill = document.getElementById('stage-ill');
  const textEl = document.getElementById('stage-text');
  const subEl = document.getElementById('stage-sub');
  const mockContainer = document.getElementById('stage-mock');

  ill.className = 'stage-illustration';
  ill.style.display = 'none';
  mockContainer.innerHTML = '';
  mockContainer.style.display = 'none';

  if (step.type && step.type.startsWith('mock-')) {
    mockContainer.innerHTML = getMockupHTML(step.type);
    mockContainer.style.display = 'block';
    ill.style.display = 'none';
  } else {
    ill.style.display = 'block';
    ill.textContent = step.icon || '🛡️';
    ill.className = 'stage-illustration ' + (step.anim || '');
  }

  textEl.textContent = step.text || '';
  subEl.textContent = step.sub || '';

  const dots = document.getElementById('progress-dots');
  dots.innerHTML = '';
  currentLesson.steps.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === currentStep ? ' active' : '');
    dots.appendChild(d);
  });

  document.getElementById('btn-prev').disabled = currentStep === 0;
  document.getElementById('btn-next').textContent =
    currentStep === currentLesson.steps.length - 1 ? 'Finish ✓' : 'Next →';
}

function nextStep() {
  if (currentStep < currentLesson.steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    showSection('scams');
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

// Quiz
let quizIndex = 0;
let quizScore = 0;

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  showSection('quiz');
  renderQuestion();
}

function getQuizVisualHTML(type) {
  if (type === 'call') {
    return `<div class="quiz-mock phone-call"><div class="mock-status">Carrier · 10:42 AM</div><div class="mock-call-label">Incoming Call</div><div class="mock-caller">Unknown</div><div class="mock-number">+1 (800) 555-0199</div><div class="mock-call-btns"><span class="call-decline">Decline</span><span class="call-accept">Accept</span></div><div class="mock-badge">SCAM RISK</div></div>`;
  }
  if (type === 'toll') {
    return `<div class="quiz-mock phone-text"><div class="mock-status">Messages · Today</div><div class="bubble them">Toll Notice: Unpaid toll $4.75. Pay now to avoid $75 penalty: toll-pay-now.com</div><div class="mock-badge">SCAM</div></div>`;
  }
  if (type === 'gift') {
    return `<div class="quiz-mock payment-ask"><div class="pay-title">They asked for payment with:</div><div class="pay-items"><div class="pay-item">🎁 Gift Cards</div></div><div class="pay-note">Government agencies never request gift cards.</div><div class="mock-badge">RED FLAG</div></div>`;
  }
  if (type === 'package') {
    return `<div class="quiz-mock phone-text"><div class="mock-status">Messages · Today</div><div class="bubble them">USPS: Package held. Pay $2.99 redelivery fee: bit.ly/usps-fee99</div><div class="mock-badge">SCAM</div></div>`;
  }
  if (type === 'family') {
    return `<div class="quiz-mock phone-text"><div class="mock-status">Messages · 11:58 PM</div><div class="bubble them">Grandma it’s me. I’m in trouble and need bail money. Don’t tell Mom or Dad.</div><div class="mock-badge">SCAM</div></div>`;
  }
  return '';
}

function renderQuestion() {
  const q = quizQuestions[quizIndex];
  document.getElementById('quiz-progress').textContent =
    `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('quiz-question').textContent = q.q;
  const vis = document.getElementById('quiz-visual');
  if (vis) {
    let html = '';
    if (q.icon) {
      html += `<img class="quiz-icon" src="${q.icon}" alt="">`;
    }
    if (q.visual) {
      html += getQuizVisualHTML(q.visual);
    }
    vis.innerHTML = html;
  }
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    opts.appendChild(btn);
  });
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('quiz-next-btn').classList.add('hidden');
}

function selectAnswer(i) {
  const q = quizQuestions[quizIndex];
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((btn, idx) => {
    btn.onclick = null;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('wrong');
  });
  if (i === q.correct) quizScore++;
  const fb = document.getElementById('quiz-feedback');
  fb.textContent = q.feedback;
  fb.classList.add('show');
  if (i === q.correct) {
    fb.style.background = 'var(--success-soft)';
    fb.style.borderLeft = '6px solid var(--success)';
  } else {
    fb.style.background = 'var(--accent-soft)';
    fb.style.borderLeft = '6px solid var(--accent)';
  }
  document.getElementById('quiz-next-btn').classList.remove('hidden');
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-progress').textContent = 'Quiz Complete';
  document.getElementById('quiz-question').textContent =
    `You got ${quizScore} out of ${quizQuestions.length} correct!`;
  document.getElementById('quiz-options').innerHTML = '';
  const fb = document.getElementById('quiz-feedback');
  fb.classList.add('show');
  if (quizScore === quizQuestions.length) {
    fb.textContent = 'Excellent! You are well prepared to spot common scams.';
    fb.style.background = 'var(--success-soft)';
  } else if (quizScore >= 3) {
    fb.textContent = 'Good job! Review the lessons for the ones you missed.';
    fb.style.background = 'var(--success-soft)';
  } else {
    fb.textContent = 'Keep practicing. Go back to the lessons and try the quiz again.';
    fb.style.background = '#fff3e0';
  }
  document.getElementById('quiz-next-btn').classList.add('hidden');
  const restart = document.createElement('button');
  restart.className = 'btn btn-large mt-1';
  restart.textContent = 'Try Quiz Again';
  restart.onclick = startQuiz;
  document.getElementById('quiz-options').appendChild(restart);
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').classList.add('show');
});

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('install-banner').classList.remove('show');
    });
  }
}

function dismissInstall() {
  document.getElementById('install-banner').classList.remove('show');
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered', reg.scope))
      .catch(err => console.log('SW registration failed', err));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});