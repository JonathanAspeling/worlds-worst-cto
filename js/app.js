/**
 * CTO Leadership Self-Assessment Application
 * A brutally honest assessment of technology leadership under pressure
 * Created by Andrew Baker (https://andrewbaker.ninja)
 */

// Assessment data structure
const assessmentData = [
  {
    number: 1,
    question: "A Major Production Outage Happens at 02:00",
    context: "Engineers are already working on it. Your first instinct is to:",
    options: {
      A: {
        text: "Take command of coordination so decisions are fast and consistent",
        score: "yellow",
        attractive: "Decisive leadership feels like responsibility",
        creates: "Can create hero dependency and slow teams over time"
      },
      B: {
        text: "Stabilise stakeholders early so the business stays calm and aligned",
        score: "red",
        attractive: "Stakeholder calm is valuable and executives reward it",
        creates: "Optimises for optics first, reality can be delayed"
      },
      C: {
        text: "Ask for impact, current mitigation, and what help the team needs, then get out of the way",
        score: "green",
        attractive: "Impact and enablement keeps experts effective",
        creates: "Faster recovery and better learning loops"
      },
      D: {
        text: "Jump into the technical detail where you can add leverage immediately",
        score: "yellow",
        attractive: "Hands on support can add real leverage",
        creates: "Risks becoming a bottleneck or source of noise"
      }
    }
  },
  {
    number: 2,
    question: "An Engineer Pushes Back on Your Deadline",
    context: "They say the timeline is unrealistic. You respond with:",
    options: {
      A: {
        text: "Keep the date but ask the team to propose explicit tradeoffs to protect quality",
        score: "yellow",
        attractive: "Keeps the date while sounding pragmatic",
        creates: "Tradeoffs can be silently paid via quality if not explicit"
      },
      B: {
        text: "Keep the date to preserve confidence, then work on increasing capacity or reducing friction",
        score: "red",
        attractive: "Preserves confidence and avoids re negotiating",
        creates: "Turns planning into certainty theatre and burns teams"
      },
      C: {
        text: "Re open assumptions together, quantify risk, and reset the plan transparently",
        score: "green",
        attractive: "Makes assumptions and risk visible early",
        creates: "Trust and more credible delivery"
      },
      D: {
        text: "Ask for options and let the team choose the best path so ownership stays with them",
        score: "yellow",
        attractive: "Ownership is motivating and scalable",
        creates: "Can dump accountability if constraints are fixed"
      }
    }
  },
  {
    number: 3,
    question: "A Project Misses Its Delivery Date",
    context: "Your immediate conclusion is:",
    options: {
      A: {
        text: "Execution needs tightening, so you will introduce clearer routines and stronger follow through",
        score: "yellow",
        attractive: "Discipline is a clean lever to pull",
        creates: "Process sprawl if root causes are structural"
      },
      B: {
        text: "Signalling failed, so you will improve reporting so leadership is never surprised again",
        score: "red",
        attractive: "No surprises is rewarded culturally",
        creates: "Reality gets filtered until it explodes"
      },
      C: {
        text: "The system failed, so you will examine scope, dependencies, architecture, and incentives",
        score: "green",
        attractive: "Systems thinking matches most real failures",
        creates: "Structural improvement and fewer repeats"
      },
      D: {
        text: "Sequencing failed, so you will revisit the plan to create a more credible delivery path",
        score: "yellow",
        attractive: "Planning quality does matter",
        creates: "Can become planning theatre if constraints stay unchanged"
      }
    }
  },
  {
    number: 4,
    question: "How Do You View Architecture?",
    context: "Which best matches your belief?",
    options: {
      A: {
        text: "Architecture is guardrails that keep teams safe and aligned at speed",
        score: "yellow",
        attractive: "Guardrails feel responsible and scalable",
        creates: "Can drift into paperwork if not grounded in reality"
      },
      B: {
        text: "Architecture is clarity: decisions recorded so people stop debating the same things",
        score: "red",
        attractive: "Clarity and standardisation feel efficient",
        creates: "Freezes evolution and favours defensibility over fitness"
      },
      C: {
        text: "Architecture is the constraint system that determines how cheaply you can change",
        score: "green",
        attractive: "Links architecture directly to cost of change",
        creates: "Real leverage and safer speed"
      },
      D: {
        text: "Architecture is enablement: it should remove friction and increase throughput",
        score: "yellow",
        attractive: "Enablement is the right intent",
        creates: "Fails if architects are not deeply technical"
      }
    }
  },
  {
    number: 5,
    question: "A Team Wants to Pivot Mid Stream",
    context: "New information invalidates the original approach. You say:",
    options: {
      A: {
        text: "Pivot if the learning is real, but time box it and control blast radius",
        score: "yellow",
        attractive: "Controls churn and protects delivery",
        creates: "Can preserve sunk cost bias"
      },
      B: {
        text: "Pivot carefully because confidence matters, and churn can destroy momentum",
        score: "red",
        attractive: "Momentum and confidence are genuinely valuable",
        creates: "Overweights optics and ships the wrong thing on time"
      },
      C: {
        text: "Pivot early if staying the course is more expensive than switching",
        score: "green",
        attractive: "Minimises total cost by switching early",
        creates: "Adaptation and better outcomes"
      },
      D: {
        text: "Pivot only with a crisp alternative and a clear risk reduction story",
        score: "yellow",
        attractive: "Forces clarity and reduces random pivots",
        creates: "Can suppress weak but important signals"
      }
    }
  },
  {
    number: 6,
    question: "How Do You Measure Engineering Performance?",
    context: "Your most trusted signals are:",
    options: {
      A: {
        text: "Predictable delivery plus stable operations, because reliability is a feature",
        score: "yellow",
        attractive: "Predictability and stability are visible",
        creates: "Can reward activity over outcomes"
      },
      B: {
        text: "Stakeholder confidence, because alignment reduces thrash and rework",
        score: "red",
        attractive: "Confidence reduces thrash short term",
        creates: "Encourages green reporting and gaming"
      },
      C: {
        text: "Lead time, failure rate, recovery time, and client outcomes",
        score: "green",
        attractive: "Measures flow and outcomes objectively",
        creates: "Sustainable delivery and reliability"
      },
      D: {
        text: "A balanced view: delivery, quality, people health, and operational maturity",
        score: "yellow",
        attractive: "Balance sounds mature",
        creates: "Often dilutes signal and becomes subjective"
      }
    }
  },
  {
    number: 7,
    question: "A Senior Engineer Disagrees With You Publicly",
    context: "In a meeting they challenge your decision. You:",
    options: {
      A: {
        text: "Welcome it, but structure the debate so it stays constructive and time boxed",
        score: "green",
        attractive: "Keeps dissent but prevents chaos",
        creates: "Healthy debate culture"
      },
      B: {
        text: "Acknowledge it and move it offline so the group stays aligned and productive",
        score: "red",
        attractive: "Prevents confusion and meeting derailment",
        creates: "Teaches people not to surface truth"
      },
      C: {
        text: "Explore it openly if it improves the decision and teaches the room",
        score: "green",
        attractive: "Builds learning and better decisions",
        creates: "Psychological safety and stronger reasoning"
      },
      D: {
        text: "Ask for a clear alternative, evidence, and a decision recommendation",
        score: "yellow",
        attractive: "Demands rigour and clarity",
        creates: "Can intimidate less senior voices"
      }
    }
  },
  {
    number: 8,
    question: "Planning Means What to You?",
    context: "When you hear planning you think:",
    options: {
      A: {
        text: "Commitments with explicit tradeoffs so delivery is credible",
        score: "yellow",
        attractive: "Commitments make organisations move",
        creates: "Can lock in fantasy if feedback loops are weak"
      },
      B: {
        text: "A narrative that keeps stakeholders confident and reduces churn",
        score: "red",
        attractive: "Confidence creates momentum",
        creates: "Turns plans into performative certainty"
      },
      C: {
        text: "Direction, constraints, and fast feedback loops that allow adaptation",
        score: "green",
        attractive: "Feedback loops create accuracy",
        creates: "Real alignment and adaptation"
      },
      D: {
        text: "A tool to reduce chaos while preserving optionality",
        score: "yellow",
        attractive: "Reduces chaos without over committing",
        creates: "Can become non committal if overused"
      }
    }
  },
  {
    number: 9,
    question: "A System Is Known to Be Fragile",
    context: "It works, but only if nobody touches it. You choose to:",
    options: {
      A: {
        text: "Stabilise it with targeted fixes while keeping delivery moving",
        score: "yellow",
        attractive: "Keeps delivery moving while improving stability",
        creates: "Can become whack a mole without a strategy"
      },
      B: {
        text: "Reduce the surface area of change to keep risk contained",
        score: "red",
        attractive: "Containment feels prudent",
        creates: "Hides risk and increases blast radius later"
      },
      C: {
        text: "Invest in removing fragility because it compounds and taxes every change",
        score: "green",
        attractive: "Pays down the fragility tax",
        creates: "Lower incident rate and faster change"
      },
      D: {
        text: "Contain it, ring fence it, and build a replacement plan",
        score: "yellow",
        attractive: "Replacement feels decisive",
        creates: "Risky if replacement becomes a multi year mirage"
      }
    }
  },
  {
    number: 10,
    question: "How Much Management Do You Want to Hire?",
    context: "As the organisation grows, your instinct is to:",
    options: {
      A: {
        text: "Add leaders only where coordination genuinely increases throughput",
        score: "green",
        attractive: "Management only where it adds leverage",
        creates: "Healthy scale"
      },
      B: {
        text: "Add management capacity so engineers can focus and stakeholders are handled",
        score: "red",
        attractive: "Protects engineers and satisfies stakeholders",
        creates: "Buffers dysfunction instead of fixing it"
      },
      C: {
        text: "Keep it flatter and scale through platforms, clarity, and better interfaces",
        score: "yellow",
        attractive: "Flat orgs are fast",
        creates: "Needs strong systems and senior teams"
      },
      D: {
        text: "Blend strong technical leads with a small, high leverage management layer",
        score: "green",
        attractive: "Balanced, high leverage structure",
        creates: "Scales well when execution is strong"
      }
    }
  },
  {
    number: 11,
    question: "Which Reports Do You Value Most?",
    context: "You feel safest when you see:",
    options: {
      A: {
        text: "Delivery and stability metrics with leading indicators",
        score: "yellow",
        attractive: "Metrics feel objective and safe",
        creates: "Can become metric theatre"
      },
      B: {
        text: "Executive summaries that are clear, confident, and action oriented",
        score: "red",
        attractive: "Executive clarity is genuinely useful",
        creates: "Encourages filtering and optics management"
      },
      C: {
        text: "Trend lines tied to outcomes, explained plainly",
        score: "green",
        attractive: "Trends reveal truth early",
        creates: "Better decisions with less panic"
      },
      D: {
        text: "A small set of metrics teams trust and do not game",
        score: "green",
        attractive: "Trusted metrics reduce gaming",
        creates: "Honest, high signal conversations"
      }
    }
  },
  {
    number: 12,
    question: "How Do You View Engineers?",
    context: "Pick the closest description.",
    options: {
      A: {
        text: "Skilled professionals who need clarity, constraints, and autonomy",
        score: "green",
        attractive: "Autonomy with constraints scales",
        creates: "Strong ownership"
      },
      B: {
        text: "Partners in execution who need protection from churn and noise",
        score: "yellow",
        attractive: "Protecting focus helps throughput",
        creates: "Can hide underlying churn causes"
      },
      C: {
        text: "Problem solvers who need context, trust, and feedback",
        score: "green",
        attractive: "Context unlocks better decisions",
        creates: "High quality problem solving"
      },
      D: {
        text: "Craftspeople who need high standards and space to do quality work",
        score: "yellow",
        attractive: "Standards matter for quality",
        creates: "Can drift into perfectionism"
      }
    }
  },
  {
    number: 13,
    question: "What Is the Ideal Career Path for an Engineer?",
    context: "In your organisation, growth means:",
    options: {
      A: {
        text: "Two paths: management for some, deep technical impact for others",
        score: "green",
        attractive: "Respects different strengths",
        creates: "Retains top technical talent"
      },
      B: {
        text: "Broader influence across stakeholders and business outcomes",
        score: "yellow",
        attractive: "Influence across business can be powerful",
        creates: "Risks valuing politics over craft"
      },
      C: {
        text: "Technical mastery that scales impact without forced management",
        score: "green",
        attractive: "Technical mastery stays rewarded",
        creates: "Durable engineering excellence"
      },
      D: {
        text: "A clear ladder where impact, scope, mentoring, and judgement define seniority",
        score: "green",
        attractive: "Clarity reduces ambiguity",
        creates: "Strong mentoring and judgement culture"
      }
    }
  },
  {
    number: 14,
    question: "A Team Asks for Time to Pay Down Technical Debt",
    context: "Your reaction is:",
    options: {
      A: {
        text: "Support it if it is tied to reliability, speed, or risk reduction",
        score: "yellow",
        attractive: "Ties debt to outcomes",
        creates: "Often underfunded unless protected"
      },
      B: {
        text: "Support it if it can be planned without disrupting delivery commitments",
        score: "red",
        attractive: "Protects commitments and optics",
        creates: "Debt accumulates invisibly"
      },
      C: {
        text: "Support it because debt compounds and removes future options",
        score: "green",
        attractive: "Recognises compounding cost",
        creates: "Lower fragility and faster delivery later"
      },
      D: {
        text: "Support it with guardrails and measurable outcomes so it stays bounded",
        score: "yellow",
        attractive: "Guardrails prevent abuse",
        creates: "Can cap the work into irrelevance"
      }
    }
  },
  {
    number: 15,
    question: "Client Centricity Shows Up When?",
    context: "Client focus matters most when:",
    options: {
      A: {
        text: "Tradeoffs are made, because priorities become real",
        score: "green",
        attractive: "Tradeoffs reveal true priorities",
        creates: "Real client focus"
      },
      B: {
        text: "Stakeholder stories are written, because narratives drive investment",
        score: "yellow",
        attractive: "Stories influence investment",
        creates: "Risks becoming marketing led"
      },
      C: {
        text: "Engineers can explain client impact without being prompted",
        score: "green",
        attractive: "Engineers internalise impact",
        creates: "Culture, not performance"
      },
      D: {
        text: "Roadmaps are shaped by behaviour, pain, and retention",
        score: "green",
        attractive: "Behaviour is the truth",
        creates: "Better product decisions"
      }
    }
  },
  {
    number: 16,
    question: "A New Tool or Platform Is Proposed",
    context: "You decide based on:",
    options: {
      A: {
        text: "Strategic fit and total cost of ownership over time",
        score: "yellow",
        attractive: "Strategy and TCO are real",
        creates: "Can miss operability pitfalls"
      },
      B: {
        text: "Defensibility and alignment with standards so governance friction is low",
        score: "red",
        attractive: "Governance alignment reduces friction",
        creates: "Defensibility over fitness"
      },
      C: {
        text: "Operability, durability, and the ability to change safely at speed",
        score: "green",
        attractive: "Operability decides long term pain",
        creates: "Fewer outages and safer speed"
      },
      D: {
        text: "Team capability and long term maintainability, not the demo",
        score: "yellow",
        attractive: "Maintainability matters",
        creates: "Can underweight platform primitives"
      }
    }
  },
  {
    number: 17,
    question: "Cost Pressure Hits the Organisation",
    context: "Your instinctive response is to:",
    options: {
      A: {
        text: "Remove waste first, then protect investments that buy durability",
        score: "green",
        attractive: "Cuts waste, protects capability",
        creates: "Strong long term position"
      },
      B: {
        text: "Introduce clear cost controls so spend is disciplined and visible",
        score: "red",
        attractive: "Discipline is rewarded upward",
        creates: "Cost grids that remove options"
      },
      C: {
        text: "Separate cosmetic savings from structural cost reduction",
        score: "green",
        attractive: "Distinguishes real savings from theatre",
        creates: "Structural cost reduction"
      },
      D: {
        text: "Shift spend toward automation and platforms that reduce run costs",
        score: "yellow",
        attractive: "Automation reduces run cost",
        creates: "Needs careful sequencing"
      }
    }
  },
  {
    number: 18,
    question: "Outsourcing and Vendors",
    context: "Which best matches your stance?",
    options: {
      A: {
        text: "Outsource non core execution, keep accountability and architecture internal",
        score: "green",
        attractive: "Focus internal teams on what matters",
        creates: "Clear accountability"
      },
      B: {
        text: "Use vendors to scale quickly and reduce delivery risk, with strong oversight",
        score: "red",
        attractive: "Feels like risk reduction",
        creates: "Capability erosion and vendor dependency"
      },
      C: {
        text: "Outsource execution but keep primitives, recovery, and design authority in house",
        score: "green",
        attractive: "Outsources labour not thinking",
        creates: "Resilience and adaptability"
      },
      D: {
        text: "Delegate build and run, and focus on outcomes, governance, and oversight",
        score: "yellow",
        attractive: "Oversight feels like scale",
        creates: "Contract management replacing engineering if overused"
      }
    }
  },
  {
    number: 19,
    question: '"Tried and Tested" Technology Leadership',
    context: "When you use this phrase, you mean:",
    options: {
      A: {
        text: "Proven patterns reduce risk and free attention for real problems",
        score: "green",
        attractive: "Proven patterns reduce risk",
        creates: "Good conservatism"
      },
      B: {
        text: "Familiar approaches reduce friction and keep stakeholders comfortable",
        score: "red",
        attractive: "Familiarity keeps stakeholders calm",
        creates: "Comfort leadership and stagnation"
      },
      C: {
        text: "Known tradeoffs are chosen consciously with eyes open",
        score: "green",
        attractive: "Conscious tradeoffs are power",
        creates: "Better long term decisions"
      },
      D: {
        text: "Boring technology is stable, scalable, and easier to operate",
        score: "green",
        attractive: "Boring tech is operable",
        creates: "Durable platforms when paired with modern practices"
      }
    }
  },
  {
    number: 20,
    question: "Upwards Management",
    context: "A senior executive wants certainty you cannot honestly provide yet. You:",
    options: {
      A: {
        text: "Provide ranges and scenarios, and explain what will reduce uncertainty next",
        score: "green",
        attractive: "Ranges respect uncertainty",
        creates: "Trust and alignment"
      },
      B: {
        text: "Provide a confident narrative to keep momentum, then refine details underneath",
        score: "red",
        attractive: "Confidence preserves momentum",
        creates: "Certainty theatre and truth decay"
      },
      C: {
        text: "Provide the truth plainly, including risk and what is unknown",
        score: "green",
        attractive: "Plain truth builds credibility",
        creates: "Fewer public explosions"
      },
      D: {
        text: "Provide a short answer now, then follow up once validated",
        score: "yellow",
        attractive: "Speed matters",
        creates: "Risky if the follow up never arrives"
      }
    }
  }
];

// Application state
const appState = {
  currentQuestionIndex: 0,
  userAnswers: [], // Array of {questionNumber, selectedOption}
  view: 'landing' // 'landing', 'question', 'results'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  // Set up event listeners
  document.getElementById('start-btn').addEventListener('click', startAssessment);
  document.getElementById('retake-btn').addEventListener('click', retakeAssessment);

  // Show landing view
  showView('landing');
}

function startAssessment() {
  // Reset state
  appState.currentQuestionIndex = 0;
  appState.userAnswers = [];
  appState.view = 'question';

  // Show first question
  showView('question');
  displayQuestion(0);
}

function retakeAssessment() {
  startAssessment();
}

function showView(viewName) {
  const views = ['landing', 'question', 'results'];

  views.forEach(view => {
    const element = document.getElementById(`${view}-view`);
    if (view === viewName) {
      element.classList.remove('hidden');
      // Trigger fade in animation
      setTimeout(() => element.classList.add('visible'), 10);
    } else {
      element.classList.add('hidden');
      element.classList.remove('visible');
    }
  });

  appState.view = viewName;
}

function displayQuestion(index) {
  const question = assessmentData[index];

  // Scroll to top of page IMMEDIATELY to ensure question is visible
  // Use instant scrolling (not smooth) so user sees question right away
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Also scroll the document element for better mobile compatibility
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Update progress
  document.getElementById('current-question').textContent = question.number;
  document.getElementById('total-questions').textContent = assessmentData.length;

  // Update question text
  const questionTitle = document.getElementById('question-title');
  questionTitle.innerHTML = `${question.question}<br><span class="question-context">${question.context}</span>`;

  // Create option buttons
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach(optionKey => {
    const option = question.options[optionKey];
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.setAttribute('data-option', optionKey);
    button.innerHTML = `<span class="option-letter">${optionKey}</span><span class="option-text">${option.text}</span>`;

    button.addEventListener('click', () => selectOption(optionKey));

    optionsContainer.appendChild(button);
  });
}

function selectOption(optionKey) {
  const currentQuestion = assessmentData[appState.currentQuestionIndex];

  // Record the answer
  appState.userAnswers.push({
    questionNumber: currentQuestion.number,
    selectedOption: optionKey
  });

  // Move to next question or show results
  if (appState.currentQuestionIndex < assessmentData.length - 1) {
    // Fade out current question
    const questionView = document.getElementById('question-view');
    questionView.classList.add('fade-out');

    setTimeout(() => {
      appState.currentQuestionIndex++;
      displayQuestion(appState.currentQuestionIndex);
      questionView.classList.remove('fade-out');
    }, 300);
  } else {
    // Assessment complete - show results
    setTimeout(() => {
      showResults();
    }, 300);
  }
}

function showResults() {
  // Scroll to top when showing results
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Calculate scores
  const scores = {
    green: 0,
    yellow: 0,
    red: 0
  };

  appState.userAnswers.forEach(answer => {
    const question = assessmentData.find(q => q.number === answer.questionNumber);
    const selectedOption = question.options[answer.selectedOption];
    scores[selectedOption.score]++;
  });

  // Display score summary
  const scoreSummary = document.getElementById('score-summary');
  scoreSummary.innerHTML = `
    <div class="score-cards">
      <div class="score-card green">
        <div class="score-icon">🟢</div>
        <div class="score-count">${scores.green}</div>
        <div class="score-percentage">${Math.round((scores.green / 20) * 100)}%</div>
        <div class="score-label">Durable Leadership</div>
      </div>
      <div class="score-card yellow">
        <div class="score-icon">🟡</div>
        <div class="score-count">${scores.yellow}</div>
        <div class="score-percentage">${Math.round((scores.yellow / 20) * 100)}%</div>
        <div class="score-label">Context Dependent</div>
      </div>
      <div class="score-card red">
        <div class="score-icon">🔴</div>
        <div class="score-count">${scores.red}</div>
        <div class="score-percentage">${Math.round((scores.red / 20) * 100)}%</div>
        <div class="score-label">Fragile Leadership</div>
      </div>
    </div>
  `;

  // Determine interpretation
  const maxScore = Math.max(scores.green, scores.yellow, scores.red);
  let interpretation = '';

  if (scores.green === maxScore) {
    interpretation = '<p><strong>Mostly 🟢</strong> means you are building a durable technology organisation. You can delegate without losing ownership, use vendors without outsourcing thinking, and manage up without lying.</p>';
  } else if (scores.yellow === maxScore) {
    interpretation = '<p><strong>Mostly 🟡</strong> means you have good instincts but pressure pushes you toward convenience. Under stress, your worst defaults will dominate unless you consciously correct them.</p>';
  } else {
    interpretation = '<p><strong>Mostly 🔴</strong> means you optimise for optics, comfort, and personal safety. You are likely an upwards management leader. Your organisation will look calm right until it fails loudly.</p>';
  }

  interpretation += '<p class="final-statement"><strong>The most dangerous leaders are not incompetent. They are reassuring.</strong></p>';

  document.getElementById('interpretation').innerHTML = interpretation;

  // Display detailed breakdown
  displayDetailedBreakdown();

  // Show results view
  showView('results');
}

function displayDetailedBreakdown() {
  const container = document.getElementById('breakdown-container');
  container.innerHTML = '';

  assessmentData.forEach((question, index) => {
    const userAnswer = appState.userAnswers.find(a => a.questionNumber === question.number);
    const selectedOption = userAnswer.selectedOption;

    const questionDiv = document.createElement('div');
    questionDiv.className = 'breakdown-question';
    questionDiv.setAttribute('data-question-id', question.number);

    // Build the selected option HTML
    const selectedOptionData = question.options[selectedOption];
    const selectedScoreEmoji = selectedOptionData.score === 'green' ? '🟢' : (selectedOptionData.score === 'yellow' ? '🟡' : '🔴');

    let selectedOptionHTML = `
      <div class="breakdown-option selected">
        <div class="breakdown-option-header">
          <span class="breakdown-option-letter">${selectedOption}</span>
          <span class="breakdown-score">${selectedScoreEmoji}</span>
          <span class="your-answer-badge">Your Answer</span>
        </div>
        <div class="breakdown-option-text">${selectedOptionData.text}</div>
        <div class="breakdown-option-details">
          <div class="breakdown-detail">
            <strong>Why it is attractive:</strong> ${selectedOptionData.attractive}
          </div>
          <div class="breakdown-detail">
            <strong>What it tends to create:</strong> ${selectedOptionData.creates}
          </div>
        </div>
      </div>
    `;

    // Build the other options HTML (initially hidden)
    let otherOptionsHTML = '';
    ['A', 'B', 'C', 'D'].forEach(optionKey => {
      if (optionKey === selectedOption) return; // Skip the selected option

      const option = question.options[optionKey];
      const scoreEmoji = option.score === 'green' ? '🟢' : (option.score === 'yellow' ? '🟡' : '🔴');

      otherOptionsHTML += `
        <div class="breakdown-option">
          <div class="breakdown-option-header">
            <span class="breakdown-option-letter">${optionKey}</span>
            <span class="breakdown-score">${scoreEmoji}</span>
          </div>
          <div class="breakdown-option-text">${option.text}</div>
          <div class="breakdown-option-details">
            <div class="breakdown-detail">
              <strong>Why it is attractive:</strong> ${option.attractive}
            </div>
            <div class="breakdown-detail">
              <strong>What it tends to create:</strong> ${option.creates}
            </div>
          </div>
        </div>
      `;
    });

    questionDiv.innerHTML = `
      <h3 class="breakdown-question-title">${question.number}. ${question.question}</h3>
      <p class="breakdown-question-context">${question.context}</p>
      <div class="breakdown-options">
        ${selectedOptionHTML}
      </div>
      <div class="breakdown-other-options hidden">
        ${otherOptionsHTML}
      </div>
      <button class="toggle-options-btn" data-question-id="${question.number}">
        <span class="toggle-text">Show all options</span>
        <span class="toggle-icon">▼</span>
      </button>
    `;

    container.appendChild(questionDiv);
  });

  // Add event listeners to all toggle buttons
  const toggleButtons = container.querySelectorAll('.toggle-options-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', toggleQuestionOptions);
  });
}

function toggleQuestionOptions(event) {
  const button = event.currentTarget;
  const questionId = button.getAttribute('data-question-id');
  const questionDiv = document.querySelector(`.breakdown-question[data-question-id="${questionId}"]`);
  const otherOptions = questionDiv.querySelector('.breakdown-other-options');
  const toggleText = button.querySelector('.toggle-text');
  const toggleIcon = button.querySelector('.toggle-icon');

  if (otherOptions.classList.contains('hidden')) {
    // Expand - show other options
    otherOptions.classList.remove('hidden');
    toggleText.textContent = 'Hide other options';
    toggleIcon.textContent = '▲';
  } else {
    // Collapse - hide other options
    otherOptions.classList.add('hidden');
    toggleText.textContent = 'Show all options';
    toggleIcon.textContent = '▼';
  }
}
