# Project Brief

## Project Specification: Interactive CTO Leadership Self-Assessment

### Overview
Convert the static CTO Leadership Self-Assessment content into an interactive web application that guides users through a 20-question assessment and provides detailed feedback on their leadership tendencies.

### User Flow

#### 1. Landing Page (Initial State)
When the site is first accessed or refreshed, display:

**Header:**
- Title: "The CTO Leadership Self-Assessment"
- Subtitle: "A brutally honest assessment of technology leadership under pressure"

**Main Content:**
- The full explainer text (the three paragraphs starting with "This is a self assessment...")
- **How You Will Be Scored** section with the three colored indicators:
  - <span style="font-size: 1.3em;">🟢</span> **Durable leadership** – builds long term capability, speed, and resilience
  - <span style="font-size: 1.3em;">🟡</span> **Context dependent** – reasonable sometimes, dangerous as a default
  - <span style="font-size: 1.3em;">🔴</span> **Fragile leadership** – optimises for optics, control, and personal safety

**Call to Action:**
- Prominent "Start Assessment" button (centered, primary styling)

**Footer/Attribution:**
- "Assessment created by [Andrew Baker](https://andrewbaker.ninja)"
- Link to original article: https://andrewbaker.ninja/2026/02/04/cosmo-self-assessment-are-you-the-worlds-worst-technology-leader/

#### 2. Question Flow
When "Start Assessment" is clicked:

**Behavior:**
- Landing page content fades out
- First question fades in to replace it

**Question Display:**
- Show progress indicator: "Question X of 20"
- Display the question text prominently
- Show all four options (A, B, C, D) as selectable buttons or cards
- Each option should be clearly clickable/tappable

**Interaction:**
- When user selects an option (A, B, C, or D):
  - Record the selection
  - Current question fades out
  - Next question fades in
  - No "Next" button needed - selection automatically advances

**Data Tracking:**
- Store each answer: question number + selected option (A/B/C/D)
- Maintain this data throughout the session

#### 3. Results Page
After the final (20th) question is answered:

**Score Summary:**
- Display overall results: count and percentage of 🟢, 🟡, and 🔴 answers
- Show the relevant interpretation based on which category has the most answers:
  - Mostly 🟢: "You are building a durable technology organisation..."
  - Mostly 🟡: "You have good instincts but pressure pushes you toward convenience..."
  - Mostly 🔴: "You optimise for optics, comfort, and personal safety..."
- Include the final statement: "The most dangerous leaders are not incompetent. They are reassuring."

**Detailed Breakdown:**
- For each of the 20 questions, display:
  - Question number and text
  - All four options (A, B, C, D)
  - **Highlight the user's selected option** (different background color, border, or visual indicator)
  - Show the score indicator (🟢/🟡/🔴) for each option
  - Display the explanation columns: "Why it is attractive" and "What it tends to create"

**Actions:**
- "Retake Assessment" button to restart
- Social sharing options (optional enhancement)

### Technical Requirements

**Data Structure:**
- Questions: Array of 20 question objects containing:
  - Question number
  - Question text
  - Four options (A, B, C, D) with text
  - Scoring data for each option (color, attractiveness, outcome)

**State Management:**
- Current question index
- User's answers (array of selections)
- View state (landing, question, results)

**Styling:**
- Clean, professional design
- Responsive layout (mobile-friendly)
- Smooth transitions between states
- Clear visual hierarchy
- Accessible color contrast
- Styled buttons/cards for option selection

**UX Considerations:**
- Smooth fade transitions (300-500ms recommended)
- Progress indication so users know how far along they are
- No accidental back navigation (or handle gracefully)
- Clear visual feedback on selection
- Scrollable results section if content is long

### Content Source
All question text, options, scoring, and explanations are provided in the sections below this specification.

---

## The CTO Leadership Self-Assessment

This is a self assessment. It is not balanced. It is not gentle. It is not here to validate your operating model, your org chart, or the deck you use to reassure executives. It exists to surface how you actually think about technology leadership when pressure arrives and incentives collide with reality.

Answer honestly. Not as the leader you describe in interviews. As the leader you become when systems fail, timelines slip, engineers disagree, and someone senior wants a simple answer to a complex problem.

This is written like a Cosmopolitan quiz for people who run technology at scale. Every option is phrased to sound reasonable, responsible, and professionally defensible. That is the point. The wrong answers are rarely stupid. They are seductive.

### How to Score Yourself
<span style="font-size: 1.3em;">🟢</span> **Durable leadership** – builds long term capability, speed, and resilience
<span style="font-size: 1.3em;">🟡</span> **Context dependent** – reasonable sometimes, dangerous as a default
<span style="font-size: 1.3em;">🔴</span> **Fragile leadership** – optimises for optics, control, and personal safety

After answering all questions, count how many <span style="font-size: 1.3em;">🟢</span>, <span style="font-size: 1.3em;">🟡</span>, and <span style="font-size: 1.3em;">🔴</span> answers you selected. Then read the interpretation at the end.

### Questions

#### 1. A Major Production Outage Happens at 02:00
Engineers are already working on it. Your first instinct is to:

A. Take command of coordination so decisions are fast and consistent
B. Stabilise stakeholders early so the business stays calm and aligned
C. Ask for impact, current mitigation, and what help the team needs, then get out of the way
D. Jump into the technical detail where you can add leverage immediately

#### 2. An Engineer Pushes Back on Your Deadline
They say the timeline is unrealistic. You respond with:

A. Keep the date but ask the team to propose explicit tradeoffs to protect quality
B. Keep the date to preserve confidence, then work on increasing capacity or reducing friction
C. Re open assumptions together, quantify risk, and reset the plan transparently
D. Ask for options and let the team choose the best path so ownership stays with them

#### 3. A Project Misses Its Delivery Date
Your immediate conclusion is:

A. Execution needs tightening, so you will introduce clearer routines and stronger follow through
B. Signalling failed, so you will improve reporting so leadership is never surprised again
C. The system failed, so you will examine scope, dependencies, architecture, and incentives
D. Sequencing failed, so you will revisit the plan to create a more credible delivery path

#### 4. How Do You View Architecture?
Which best matches your belief?

A. Architecture is guardrails that keep teams safe and aligned at speed
B. Architecture is clarity: decisions recorded so people stop debating the same things
C. Architecture is the constraint system that determines how cheaply you can change
D. Architecture is enablement: it should remove friction and increase throughput

#### 5. A Team Wants to Pivot Mid Stream
New information invalidates the original approach. You say:

A. Pivot if the learning is real, but time box it and control blast radius
B. Pivot carefully because confidence matters, and churn can destroy momentum
C. Pivot early if staying the course is more expensive than switching
D. Pivot only with a crisp alternative and a clear risk reduction story

#### 6. How Do You Measure Engineering Performance?
Your most trusted signals are:

A. Predictable delivery plus stable operations, because reliability is a feature
B. Stakeholder confidence, because alignment reduces thrash and rework
C. Lead time, failure rate, recovery time, and client outcomes
D. A balanced view: delivery, quality, people health, and operational maturity

#### 7. A Senior Engineer Disagrees With You Publicly
In a meeting they challenge your decision. You:

A. Welcome it, but structure the debate so it stays constructive and time boxed
B. Acknowledge it and move it offline so the group stays aligned and productive
C. Explore it openly if it improves the decision and teaches the room
D. Ask for a clear alternative, evidence, and a decision recommendation

#### 8. Planning Means What to You?
When you hear planning you think:

A. Commitments with explicit tradeoffs so delivery is credible
B. A narrative that keeps stakeholders confident and reduces churn
C. Direction, constraints, and fast feedback loops that allow adaptation
D. A tool to reduce chaos while preserving optionality

#### 9. A System Is Known to Be Fragile
It works, but only if nobody touches it. You choose to:

A. Stabilise it with targeted fixes while keeping delivery moving
B. Reduce the surface area of change to keep risk contained
C. Invest in removing fragility because it compounds and taxes every change
D. Contain it, ring fence it, and build a replacement plan

#### 10. How Much Management Do You Want to Hire?
As the organisation grows, your instinct is to:

A. Add leaders only where coordination genuinely increases throughput
B. Add management capacity so engineers can focus and stakeholders are handled
C. Keep it flatter and scale through platforms, clarity, and better interfaces
D. Blend strong technical leads with a small, high leverage management layer

#### 11. Which Reports Do You Value Most?
You feel safest when you see:

A. Delivery and stability metrics with leading indicators
B. Executive summaries that are clear, confident, and action oriented
C. Trend lines tied to outcomes, explained plainly
D. A small set of metrics teams trust and do not game

#### 12. How Do You View Engineers?
Pick the closest description.

A. Skilled professionals who need clarity, constraints, and autonomy
B. Partners in execution who need protection from churn and noise
C. Problem solvers who need context, trust, and feedback
D. Craftspeople who need high standards and space to do quality work

#### 13. What Is the Ideal Career Path for an Engineer?
In your organisation, growth means:

A. Two paths: management for some, deep technical impact for others
B. Broader influence across stakeholders and business outcomes
C. Technical mastery that scales impact without forced management
D. A clear ladder where impact, scope, mentoring, and judgement define seniority

#### 14. A Team Asks for Time to Pay Down Technical Debt
Your reaction is:

A. Support it if it is tied to reliability, speed, or risk reduction
B. Support it if it can be planned without disrupting delivery commitments
C. Support it because debt compounds and removes future options
D. Support it with guardrails and measurable outcomes so it stays bounded

#### 15. Client Centricity Shows Up When?
Client focus matters most when:

A. Tradeoffs are made, because priorities become real
B. Stakeholder stories are written, because narratives drive investment
C. Engineers can explain client impact without being prompted
D. Roadmaps are shaped by behaviour, pain, and retention

#### 16. A New Tool or Platform Is Proposed
You decide based on:

A. Strategic fit and total cost of ownership over time
B. Defensibility and alignment with standards so governance friction is low
C. Operability, durability, and the ability to change safely at speed
D. Team capability and long term maintainability, not the demo

#### 17. Cost Pressure Hits the Organisation
Your instinctive response is to:

A. Remove waste first, then protect investments that buy durability
B. Introduce clear cost controls so spend is disciplined and visible
C. Separate cosmetic savings from structural cost reduction
D. Shift spend toward automation and platforms that reduce run costs

#### 18. Outsourcing and Vendors
Which best matches your stance?

A. Outsource non core execution, keep accountability and architecture internal
B. Use vendors to scale quickly and reduce delivery risk, with strong oversight
C. Outsource execution but keep primitives, recovery, and design authority in house
D. Delegate build and run, and focus on outcomes, governance, and oversight

#### 19. "Tried and Tested" Technology Leadership
When you use this phrase, you mean:

A. Proven patterns reduce risk and free attention for real problems
B. Familiar approaches reduce friction and keep stakeholders comfortable
C. Known tradeoffs are chosen consciously with eyes open
D. Boring technology is stable, scalable, and easier to operate

#### 20. Upwards Management
A senior executive wants certainty you cannot honestly provide yet. You:

A. Provide ranges and scenarios, and explain what will reduce uncertainty next
B. Provide a confident narrative to keep momentum, then refine details underneath
C. Provide the truth plainly, including risk and what is unknown
D. Provide a short answer now, then follow up once validated

---

### Answer Key With Explanations
Each option is scored with colored circles, and the explanation focuses on what that option optimises for over time.

#### 1. A Major Production Outage Happens at 02:00

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Decisive leadership feels like responsibility | Can create hero dependency and slow teams over time |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Stakeholder calm is valuable and executives reward it | Optimises for optics first, reality can be delayed |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Impact and enablement keeps experts effective | Faster recovery and better learning loops |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Hands on support can add real leverage | Risks becoming a bottleneck or source of noise |

#### 2. An Engineer Pushes Back on Your Deadline

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Keeps the date while sounding pragmatic | Tradeoffs can be silently paid via quality if not explicit |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Preserves confidence and avoids re negotiating | Turns planning into certainty theatre and burns teams |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Makes assumptions and risk visible early | Trust and more credible delivery |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Ownership is motivating and scalable | Can dump accountability if constraints are fixed |

#### 3. A Project Misses Its Delivery Date

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Discipline is a clean lever to pull | Process sprawl if root causes are structural |
| **B** | <span style="font-size: 1.5em;">🔴</span> | No surprises is rewarded culturally | Reality gets filtered until it explodes |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Systems thinking matches most real failures | Structural improvement and fewer repeats |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Planning quality does matter | Can become planning theatre if constraints stay unchanged |

#### 4. How Do You View Architecture?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Guardrails feel responsible and scalable | Can drift into paperwork if not grounded in reality |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Clarity and standardisation feel efficient | Freezes evolution and favours defensibility over fitness |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Links architecture directly to cost of change | Real leverage and safer speed |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Enablement is the right intent | Fails if architects are not deeply technical |

#### 5. A Team Wants to Pivot Mid Stream

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Controls churn and protects delivery | Can preserve sunk cost bias |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Momentum and confidence are genuinely valuable | Overweights optics and ships the wrong thing on time |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Minimises total cost by switching early | Adaptation and better outcomes |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Forces clarity and reduces random pivots | Can suppress weak but important signals |

#### 6. How Do You Measure Engineering Performance?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Predictability and stability are visible | Can reward activity over outcomes |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Confidence reduces thrash short term | Encourages green reporting and gaming |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Measures flow and outcomes objectively | Sustainable delivery and reliability |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Balance sounds mature | Often dilutes signal and becomes subjective |

#### 7. A Senior Engineer Disagrees With You Publicly

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Keeps dissent but prevents chaos | Healthy debate culture |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Prevents confusion and meeting derailment | Teaches people not to surface truth |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Builds learning and better decisions | Psychological safety and stronger reasoning |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Demands rigour and clarity | Can intimidate less senior voices |

#### 8. Planning Means What to You?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Commitments make organisations move | Can lock in fantasy if feedback loops are weak |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Confidence creates momentum | Turns plans into performative certainty |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Feedback loops create accuracy | Real alignment and adaptation |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Reduces chaos without over committing | Can become non committal if overused |

#### 9. A System Is Known to Be Fragile

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Keeps delivery moving while improving stability | Can become whack a mole without a strategy |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Containment feels prudent | Hides risk and increases blast radius later |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Pays down the fragility tax | Lower incident rate and faster change |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Replacement feels decisive | Risky if replacement becomes a multi year mirage |

#### 10. How Much Management Do You Want to Hire?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Management only where it adds leverage | Healthy scale |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Protects engineers and satisfies stakeholders | Buffers dysfunction instead of fixing it |
| **C** | <span style="font-size: 1.5em;">🟡</span> | Flat orgs are fast | Needs strong systems and senior teams |
| **D** | <span style="font-size: 1.5em;">🟢</span> | Balanced, high leverage structure | Scales well when execution is strong |

#### 11. Which Reports Do You Value Most?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Metrics feel objective and safe | Can become metric theatre |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Executive clarity is genuinely useful | Encourages filtering and optics management |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Trends reveal truth early | Better decisions with less panic |
| **D** | <span style="font-size: 1.5em;">🟢</span> | Trusted metrics reduce gaming | Honest, high signal conversations |

#### 12. How Do You View Engineers?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Autonomy with constraints scales | Strong ownership |
| **B** | <span style="font-size: 1.5em;">🟡</span> | Protecting focus helps throughput | Can hide underlying churn causes |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Context unlocks better decisions | High quality problem solving |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Standards matter for quality | Can drift into perfectionism |

#### 13. Ideal Career Path for an Engineer

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Respects different strengths | Retains top technical talent |
| **B** | <span style="font-size: 1.5em;">🟡</span> | Influence across business can be powerful | Risks valuing politics over craft |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Technical mastery stays rewarded | Durable engineering excellence |
| **D** | <span style="font-size: 1.5em;">🟢</span> | Clarity reduces ambiguity | Strong mentoring and judgement culture |

#### 14. A Team Asks for Time to Pay Down Technical Debt

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Ties debt to outcomes | Often underfunded unless protected |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Protects commitments and optics | Debt accumulates invisibly |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Recognises compounding cost | Lower fragility and faster delivery later |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Guardrails prevent abuse | Can cap the work into irrelevance |

#### 15. Client Centricity Shows Up When?

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Tradeoffs reveal true priorities | Real client focus |
| **B** | <span style="font-size: 1.5em;">🟡</span> | Stories influence investment | Risks becoming marketing led |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Engineers internalise impact | Culture, not performance |
| **D** | <span style="font-size: 1.5em;">🟢</span> | Behaviour is the truth | Better product decisions |

#### 16. A New Tool or Platform Is Proposed

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟡</span> | Strategy and TCO are real | Can miss operability pitfalls |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Governance alignment reduces friction | Defensibility over fitness |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Operability decides long term pain | Fewer outages and safer speed |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Maintainability matters | Can underweight platform primitives |

#### 17. Cost Pressure Hits the Organisation

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Cuts waste, protects capability | Strong long term position |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Discipline is rewarded upward | Cost grids that remove options |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Distinguishes real savings from theatre | Structural cost reduction |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Automation reduces run cost | Needs careful sequencing |

#### 18. Outsourcing and Vendors

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Focus internal teams on what matters | Clear accountability |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Feels like risk reduction | Capability erosion and vendor dependency |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Outsources labour not thinking | Resilience and adaptability |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Oversight feels like scale | Contract management replacing engineering if overused |

#### 19. Tried and Tested Technology Leadership

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Proven patterns reduce risk | Good conservatism |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Familiarity keeps stakeholders calm | Comfort leadership and stagnation |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Conscious tradeoffs are power | Better long term decisions |
| **D** | <span style="font-size: 1.5em;">🟢</span> | Boring tech is operable | Durable platforms when paired with modern practices |

#### 20. Upwards Management

| Option | Score | Why it is attractive | What it tends to create |
|--------|-------|---------------------|------------------------|
| **A** | <span style="font-size: 1.5em;">🟢</span> | Ranges respect uncertainty | Trust and alignment |
| **B** | <span style="font-size: 1.5em;">🔴</span> | Confidence preserves momentum | Certainty theatre and truth decay |
| **C** | <span style="font-size: 1.5em;">🟢</span> | Plain truth builds credibility | Fewer public explosions |
| **D** | <span style="font-size: 1.5em;">🟡</span> | Speed matters | Risky if the follow up never arrives |

---

### Interpretation

**Mostly <span style="font-size: 1.3em;">🟢</span>** means you are building a durable technology organisation. You can delegate without losing ownership, use vendors without outsourcing thinking, and manage up without lying.

**Mostly <span style="font-size: 1.3em;">🟡</span>** means you have good instincts but pressure pushes you toward convenience. Under stress, your worst defaults will dominate unless you consciously correct them.

**Mostly <span style="font-size: 1.3em;">🔴</span>** means you optimise for optics, comfort, and personal safety. You are likely an upwards management leader. Your organisation will look calm right until it fails loudly.

**The most dangerous leaders are not incompetent. They are reassuring.**
