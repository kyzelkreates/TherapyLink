/*─────────────────────────────────────────────────────────────
  FOUR PAWS TRAINING & ENRICHMENT ACADEMY
  fp-courses.js — Extended Course Library (Courses 2–9)
  Loads after inline scripts — appends to window.FP_COURSE.modules
─────────────────────────────────────────────────────────────*/
(function(){
'use strict';
if(!window.FP_COURSE){window.FP_COURSE={modules:[]};}
/* ─── /app/fp-courses-c2c3c5.js ─── */
/* ═══════════════════════════════════════════════════════════
   COURSE 2 — ADULT DOG TRANSFORMATION PROGRAM
   Module IDs: c2_m1 – c2_m5
═══════════════════════════════════════════════════════════ */
var COURSE_2_MODULES = [
  {
    id:'c2_m1',n:1,emoji:'🐕',courseId:'adult-transformation',courseName:'Adult Dog Transformation',
    name:'Understanding Your Adult Dog',
    desc:'Decode what drives your adult dog — motivation, breed instincts and body language.',
    lessons:[
      {id:'c2_m1_l1',name:'Reading Canine Body Language',desc:'Understand what your dog is telling you in every moment.',xp:70,tip:'Your dog communicates constantly — learning to listen transforms your relationship overnight.',
       content:`<h3>The Language Your Dog Already Speaks</h3><p>Dogs communicate through body language — posture, ear position, tail carriage, facial expression and movement. Most behavioural problems stem from owners missing or misreading these signals.</p><h4>Relaxed & Happy Signals</h4><ul><li><strong>Soft body:</strong> loose, wiggly movement</li><li><strong>Relaxed ears:</strong> held naturally</li><li><strong>Low, sweeping tail:</strong> broad wag involving the whole hindquarter</li><li><strong>Soft eyes:</strong> relaxed blinking, no hard stare</li><li><strong>Play bow:</strong> front end down, back end up</li></ul><h4>Stress & Calming Signals</h4><ul><li><strong>Yawning out of context:</strong> stress indicator</li><li><strong>Lip licking:</strong> mild anxiety</li><li><strong>Turning away / sniffing suddenly:</strong> displacement behaviour</li><li><strong>Whale eye:</strong> showing whites — uncomfortable</li><li><strong>Stiff body:</strong> high stress</li></ul><h4>Owner Homework</h4><p>For 7 days, observe your dog for 5 minutes twice daily with no interaction. Keep a tally of relaxed vs stress signals. This baseline tells you where your dog is emotionally right now.</p><div class="lesson-quiz" data-lesson="c2_m1_l1"><h4>Knowledge Check</h4><p>Your dog yawns several times while you are training. What does this most likely indicate?</p><div class="quiz-options"><button class="qo" data-correct="false">They are tired and need sleep</button><button class="qo" data-correct="true">They are experiencing mild stress and communicating discomfort</button><button class="qo" data-correct="false">They are bored and need harder exercises</button></div></div>`},
      {id:'c2_m1_l2',name:'Understanding Motivation',desc:'Discover what truly drives your individual dog.',xp:70,tip:'The right motivator makes every lesson effortless — the wrong one makes every lesson a battle.',
       content:`<h3>What Makes Your Dog Tick?</h3><p>Not all dogs are motivated by the same things. Finding your dog's top motivators is the single most powerful thing you can do to accelerate learning.</p><h4>The Motivator Hierarchy</h4><ul><li><strong>Food:</strong> High-value = real meat, cheese. Low-value = dry kibble.</li><li><strong>Play & Toys:</strong> Tug, fetch, squeaky toys.</li><li><strong>Social Reward:</strong> Praise, stroking, calm attention.</li><li><strong>Environmental Access:</strong> Sniffing, swimming, running.</li><li><strong>Freedom:</strong> Being let off lead, allowed to investigate.</li></ul><h4>The Motivator Test</h4><ol><li>Lay out 5 items: chicken, kibble, a tug toy, a ball, and your hand for stroking.</li><li>Present each for 5 seconds then remove it.</li><li>Watch which your dog pursues most actively.</li><li>Rank them — this is your working motivator hierarchy.</li></ol><h4>Owner Homework</h4><p>Use your top-ranked motivator exclusively in your next three training sessions. Notice any difference in engagement and willingness to work.</p><div class="lesson-quiz" data-lesson="c2_m1_l2"><h4>Knowledge Check</h4><p>The Premack Principle means:</p><div class="quiz-options"><button class="qo" data-correct="false">Always use food as a reward because it is most reliable</button><button class="qo" data-correct="true">Use a behaviour the dog already wants to perform as the reward for a behaviour you need</button><button class="qo" data-correct="false">Reward every behaviour equally</button></div></div>`},
      {id:'c2_m1_l3',name:'Breed Traits and Behaviour',desc:'Understand how your dog\'s breed heritage shapes their instincts and learning style.',xp:70,tip:'Working with breed instincts instead of against them makes every training goal ten times easier.',
       content:`<h3>Genetics Shape Behaviour</h3><p>Every breed was developed for a specific purpose — and those instincts don't disappear just because your dog lives in a house.</p><h4>Breed Group Tendencies</h4><ul><li><strong>Herding breeds:</strong> High focus, need a job, sensitive to movement. Excel at precision work.</li><li><strong>Gundogs:</strong> Built to work with humans, food-motivated, can be distracted by scent.</li><li><strong>Terriers:</strong> High prey drive, tenacious, independent. Respond to short, high-energy sessions.</li><li><strong>Working breeds:</strong> Independent, high environmental orientation. Need enrichment and purpose.</li><li><strong>Sighthounds:</strong> Explosive prey drive, sensitive temperament. Respond to calm, low-pressure training.</li></ul><h4>Owner Homework</h4><p>Research the two or three most likely breed components in your dog. Write down: (1) the original job, (2) the primary instinct required, (3) how that instinct shows up in daily behaviour. Then identify one way to channel it constructively.</p><div class="lesson-quiz" data-lesson="c2_m1_l3"><h4>Knowledge Check</h4><p>Why is it important to understand your dog's breed heritage?</p><div class="quiz-options"><button class="qo" data-correct="false">Purebred dogs are always easier to train than mixed breeds</button><button class="qo" data-correct="true">Breed instincts directly influence motivation, learning style and behavioural tendencies</button><button class="qo" data-correct="false">Breed determines exactly which commands a dog can learn</button></div></div>`},
      {id:'c2_m1_l4',name:'Creating Success Through Management',desc:'Learn how smart environmental management prevents mistakes before training has to fix them.',xp:80,tip:'Management isn\'t giving up — it\'s being smart enough to stop rehearsing the wrong behaviour.',
       content:`<h3>Management Is Training</h3><p>Every time your dog rehearses an unwanted behaviour, that behaviour becomes more likely. Management is the art of controlling the environment so your dog rehearses success.</p><h4>Core Management Tools</h4><ul><li><strong>Baby gates & pens:</strong> Restrict access to problem areas.</li><li><strong>Long lines:</strong> Allow freedom while maintaining safety.</li><li><strong>Crate training:</strong> A safe, positive space — not a punishment.</li><li><strong>Lead & harness:</strong> On-lead in environments where good choices aren't yet possible.</li></ul><h4>Owner Homework</h4><p>Walk through your home and list every situation in the past two weeks where your dog rehearsed an unwanted behaviour. For each, identify: (1) a management tool that would have prevented it, (2) the training goal that will eventually eliminate the need for management.</p><div class="lesson-quiz" data-lesson="c2_m1_l4"><h4>Knowledge Check</h4><p>What is the primary purpose of environmental management?</p><div class="quiz-options"><button class="qo" data-correct="false">To permanently solve behaviour problems without training</button><button class="qo" data-correct="true">To prevent rehearsal of unwanted behaviours while training builds the desired ones</button><button class="qo" data-correct="false">To punish the dog by restricting their freedom</button></div></div>`}
    ]
  },
  {
    id:'c2_m2',n:2,emoji:'🎯',courseId:'adult-transformation',courseName:'Adult Dog Transformation',
    name:'Advanced Obedience',
    desc:'Build rock-solid, real-world obedience that holds under distraction, distance and duration.',
    lessons:[
      {id:'c2_m2_l1',name:'Reliable Recall',desc:'Build a recall so strong it works anywhere, anytime.',xp:90,tip:'Recall is a life skill. Never use it for anything your dog dislikes — protect it absolutely.',
       content:`<h3>The Gold Standard</h3><p>A reliable recall is the single most important skill. Most failures happen because the cue has been poisoned — used for unpleasant things, repeated when ignored, or never proofed under distraction.</p><h4>Rebuilding Recall</h4><ol><li>Choose a new cue if the old one has been poisoned.</li><li>Load the cue: call → dog arrives → jackpot reward. 20 reps at close distance.</li><li>Long line work: 10-metre line, call, move backwards fast if no response, reward massively on arrival.</li><li>The rule: never call your dog to anything unpleasant.</li></ol><h4>Owner Homework</h4><p>Practise 10 recall reps per day on a long line. Log each as immediate (&lt;3s), slow (3–10s), or no response. Target: 90% immediate before advancing to off-lead.</p><div class="lesson-quiz" data-lesson="c2_m2_l1"><h4>Knowledge Check</h4><p>Your dog's recall has become unreliable. What is the FIRST step?</p><div class="quiz-options"><button class="qo" data-correct="false">Repeat the cue louder until they comply</button><button class="qo" data-correct="true">Return to short distance on a long line with massive rewards, rebuilding value from scratch</button><button class="qo" data-correct="false">Only practise recall when you are certain the dog will respond</button></div></div>`},
      {id:'c2_m2_l2',name:'Advanced Loose Lead Walking',desc:'Achieve effortless, pressure-free loose lead walking in all environments.',xp:90,tip:'Loose lead walking is 80% mental engagement and 20% mechanics.',
       content:`<h3>Walking Without Tension</h3><p>The dog pulls, the owner resists — and the dog learns that pulling works. The solution isn't stronger muscles — it's smarter mechanics.</p><h4>The Core Principle</h4><p>Forward movement is the most powerful reinforcer on a walk. Lead tightens → you stop. Lead slackens → you move. Done consistently, the dog learns a tight lead stops all progress.</p><h4>The Three Techniques</h4><ol><li><strong>Stop-start:</strong> Lead tightens → freeze. Slack → mark and move.</li><li><strong>Direction change:</strong> Lead tightens → smooth direction change. Reward when dog catches up.</li><li><strong>Engagement walking:</strong> Randomly reward dog for being at your side before the lead goes tight.</li></ol><h4>Owner Homework</h4><p>Choose ONE technique and apply it exclusively for 7 days. Rate your dog's pulling 1–10 at start and end of week.</p><div class="lesson-quiz" data-lesson="c2_m2_l2"><h4>Knowledge Check</h4><p>Why does pulling back on the lead NOT solve the problem?</p><div class="quiz-options"><button class="qo" data-correct="false">Dogs don't feel pressure on the lead</button><button class="qo" data-correct="true">Forward movement is reinforcing — the dog reaches its destination regardless, and learns that pulling works</button><button class="qo" data-correct="false">Leads are the wrong tool for this problem</button></div></div>`},
      {id:'c2_m2_l3',name:'Distance Commands',desc:'Teach your dog to perform behaviours reliably at a distance from you.',xp:80,tip:'Distance is just another form of distraction — build it gradually with high reward.',
       content:`<h3>Working at a Distance</h3><p>Distance is a separate skill that must be trained independently — a dog that sits reliably at your feet may not sit when you are 10 metres away.</p><h4>Building the Stay</h4><ol><li>Position first: your dog must offer the position reliably before you add distance.</li><li>Three D's: Duration, Distance, Distraction. Build ONE at a time.</li><li>Return to reward: always return to the dog to deliver the reward.</li><li>Build in steps: 1m → 2m → 3m → 5m → 10m → 20m.</li></ol><h4>Owner Homework</h4><p>Practise 5 stays per session at your current maximum reliable distance. If more than 2 failures per session, reduce distance by 30% and rebuild.</p><div class="lesson-quiz" data-lesson="c2_m2_l3"><h4>Knowledge Check</h4><p>Why return to the dog to deliver the reward rather than calling them?</p><div class="quiz-options"><button class="qo" data-correct="false">It is easier for the dog to receive the reward while staying</button><button class="qo" data-correct="true">Returning teaches the dog the stay position itself earns the reward — calling out of stay rewards breaking position</button><button class="qo" data-correct="false">Walking back gives time to prepare the treat</button></div></div>`},
      {id:'c2_m2_l4',name:'Real World Proofing',desc:'Take every skill from the training session into the real world with distractions.',xp:100,tip:'If it only works at home it isn\'t trained yet — proofing is where real learning happens.',
       content:`<h3>The Proofing Ladder</h3><ol><li>Home, low distraction — where you learn the skill.</li><li>Garden / quiet area — minor environmental change.</li><li>Quiet park, early morning — mild distraction.</li><li>Park with people — moderate distraction.</li><li>Busy environment — high distraction.</li><li>High-arousal scenario — maximum challenge.</li></ol><h4>Rules of Proofing</h4><ul><li>Never move up until 90% reliable at the current level.</li><li>When adding distraction, reduce all other criteria temporarily.</li><li>Reward MORE generously in new environments.</li><li>Three failures in a row = step down.</li></ul><h4>Owner Homework</h4><p>Take your dog's strongest skill to three new locations this week — easy, moderate, challenging. Rate reliability 1–10 at each location.</p><div class="lesson-quiz" data-lesson="c2_m2_l4"><h4>Knowledge Check</h4><p>Your dog performs a reliable sit at home but ignores the cue in the park. What should you do?</p><div class="quiz-options"><button class="qo" data-correct="false">Repeat the cue more firmly</button><button class="qo" data-correct="true">Recognise this as a proofing gap and build the behaviour in progressively more distracting environments</button><button class="qo" data-correct="false">Stop training in the park until the dog is older</button></div></div>`}
    ]
  },
  {
    id:'c2_m3',n:3,emoji:'🧘',courseId:'adult-transformation',courseName:'Adult Dog Transformation',
    name:'Calmness and Focus',
    desc:'Build a dog that can switch off, settle anywhere and regulate their own emotional state.',
    lessons:[
      {id:'c2_m3_l1',name:'The Art of Doing Nothing',desc:'Teach your dog that calmness is the most rewarding default state of all.',xp:80,tip:'Rewarding calmness is the most underused training tool in existence — use it every single day.',
       content:`<h3>Why Calmness Must Be Trained</h3><p>Many owners unintentionally train excitement — they engage when the dog is bouncy and ignore the dog when calm. The dog learns: excitement = attention, calmness = nothing.</p><h4>Capturing Calm</h4><p>Catch your dog in a calm moment and quietly reward it. No excited praise — just a calm, slow delivery of a soft treat. Over days and weeks, the dog learns that choosing calmness pays.</p><h4>The Relaxation Protocol</h4><ol><li>Ask your dog onto their mat or bed.</li><li>Stand beside them calmly — no talking, no eye contact.</li><li>Every 10–15 seconds, silently deliver a treat if the dog is calm and still.</li><li>Gradually extend the duration between rewards.</li><li>Add mild movement — shuffle, take a step, move to the other side of the room.</li></ol><h4>Owner Homework</h4><p>Set a timer for 5 minutes twice daily. Every time your dog is calm and relaxed, silently deliver one reward. Track how frequently your dog offers calm behaviours at start vs end of week.</p><div class="lesson-quiz" data-lesson="c2_m3_l1"><h4>Knowledge Check</h4><p>Why reward calmness with quiet praise rather than excited praise?</p><div class="quiz-options"><button class="qo" data-correct="false">Because quiet praise is more convenient</button><button class="qo" data-correct="true">Excited praise raises arousal — the opposite of what you are trying to reinforce</button><button class="qo" data-correct="false">Dogs don't respond to verbal praise</button></div></div>`},
      {id:'c2_m3_l2',name:'Settling in Public',desc:'Teach your dog to settle calmly in cafés, waiting rooms and public spaces.',xp:80,tip:'A dog that can settle in public gives you a lifetime of inclusion.',
       content:`<h3>The Portable Down-Stay</h3><p>The ability to settle calmly in public environments is one of the most practically useful skills a dog can have.</p><h4>Building the Foundation</h4><ol><li>Introduce a dedicated settle mat — this becomes the portable signal for "relax here."</li><li>Build the mat association at home: every calm moment on the mat = reward.</li><li>Practise short durations (2–3 minutes) of calm down-stay on the mat at home first.</li></ol><h4>Generalising to Public</h4><p>Follow the proofing ladder. Start in a quiet corner of a low-traffic park. When reliable there, move to a busier location.</p><h4>Owner Homework</h4><p>Practise mat settle at home (3 x 5-minute sessions), then take the mat to one new outdoor location by end of the week.</p><div class="lesson-quiz" data-lesson="c2_m3_l2"><h4>Knowledge Check</h4><p>What role does the settle mat play in public settle training?</p><div class="quiz-options"><button class="qo" data-correct="false">It is purely for the dog's physical comfort</button><button class="qo" data-correct="true">It acts as a portable contextual cue that signals to the dog it is time to relax</button><button class="qo" data-correct="false">It prevents the dog from moving around unnecessarily</button></div></div>`},
      {id:'c2_m3_l3',name:'Impulse Control Games',desc:'Build your dog\'s ability to pause, think, and make good choices under pressure.',xp:80,tip:'Impulse control is the foundation of every other skill — a dog that can pause can learn anything.',
       content:`<h3>Teaching Self-Regulation</h3><h4>Game 1 — It's Yer Choice</h4><ol><li>Hold a treat in your closed fist. Present it to the dog.</li><li>Wait. The dog will sniff, lick, paw. Do nothing.</li><li>The moment the dog moves their nose away — open your fist and let them take it.</li></ol><h4>Game 2 — Look at That</h4><ol><li>When a trigger is in the environment, mark the moment your dog notices it and looks at it.</li><li>Reward immediately — this teaches noticing triggers and looking back at you rather than reacting.</li></ol><h4>Game 3 — Red Light Green Light</h4><ol><li>Walk with your dog. Randomly say "red light" and stop dead.</li><li>Wait for the dog to stop and check in with you.</li><li>Say "green light" and move again, rewarding enthusiastically.</li></ol><h4>Owner Homework</h4><p>Play one impulse control game per day this week, rotating through the three above. Keep sessions to 5 minutes maximum.</p><div class="lesson-quiz" data-lesson="c2_m3_l3"><h4>Knowledge Check</h4><p>In "It's Yer Choice", when do you open your hand?</p><div class="quiz-options"><button class="qo" data-correct="false">After 30 seconds of waiting</button><button class="qo" data-correct="true">The moment the dog voluntarily moves their nose away, showing self-restraint</button><button class="qo" data-correct="false">When the dog sits quietly and looks at you</button></div></div>`},
      {id:'c2_m3_l4',name:'Building Emotional Regulation',desc:'Help your dog recover quickly from excitement, stress and arousal to a calm baseline.',xp:90,tip:'Recovery speed from arousal is a learnable skill — the faster your dog recovers, the safer their life.',
       content:`<h3>The Arousal Thermometer</h3><p>Every dog has an emotional thermometer. Between relaxed and flooded is a working zone where real learning happens. Emotional regulation training teaches your dog to stay in — and return to — the working zone.</p><h4>Recovery Exercises</h4><ol><li><strong>Scatter feeding:</strong> After an arousing event, scatter food in the grass. Sniffing is neurologically calming.</li><li><strong>Long, slow sniff walks:</strong> Allow the dog to lead with their nose for 15 minutes after any high-arousal event.</li><li><strong>Hand targeting:</strong> Ask for a simple nose-to-hand touch. If the dog can do it, they are in their working zone.</li></ol><h4>Owner Homework</h4><p>After every high-arousal event this week, implement a 10-minute decompression routine. Rate your dog's recovery time (minutes to calm baseline) each day.</p><div class="lesson-quiz" data-lesson="c2_m3_l4"><h4>Knowledge Check</h4><p>Why is scatter feeding an effective decompression tool?</p><div class="quiz-options"><button class="qo" data-correct="false">Because eating always calms dogs down</button><button class="qo" data-correct="true">Sniffing activates the parasympathetic nervous system, neurologically reducing arousal</button><button class="qo" data-correct="false">It distracts the dog from what excited them</button></div></div>`}
    ]
  },
  {
    id:'c2_m4',n:4,emoji:'🏠',courseId:'adult-transformation',courseName:'Adult Dog Transformation',
    name:'Household Excellence',
    desc:'Create a dog whose behaviour at home is a pleasure — polite, calm and harmonious.',
    lessons:[
      {id:'c2_m4_l1',name:'Polite Greetings',desc:'Teach your dog to greet people calmly with four paws on the floor.',xp:80,tip:'The greeting is the first impression your dog makes on everyone they meet.',
       content:`<h3>Four Paws on the Floor</h3><p>Jumping up is one of the most universally complained-about behaviours — and one of the most owner-created. Dogs jump because jumping has historically worked: it got them attention, eye contact, physical touch.</p><h4>The Mechanics</h4><ol><li>The instant the dog's front paws leave the floor: turn your back completely, cross your arms, look at the ceiling. Zero eye contact, zero touch, zero words.</li><li>The instant all four paws are on the floor: immediately deliver calm praise and a treat.</li><li>Train the alternative: ask for a sit as the greeting behaviour.</li></ol><h4>Owner Homework</h4><p>Brief every person your dog greets about the four-paws rule. Keep a tally: jumps ignored vs sits rewarded. Target 3:1 sits to jumps by end of week.</p><div class="lesson-quiz" data-lesson="c2_m4_l1"><h4>Knowledge Check</h4><p>Your dog jumps up. Most effective immediate response?</p><div class="quiz-options"><button class="qo" data-correct="false">Knee the dog in the chest</button><button class="qo" data-correct="false">Say "no" firmly and push away</button><button class="qo" data-correct="true">Turn your back completely, removing all attention until four paws are on the floor</button></div></div>`},
      {id:'c2_m4_l2',name:'Visitors and Guests',desc:'Manage and train your dog to be calm and appropriate when guests arrive.',xp:80,tip:'Visitors are one of the best training opportunities you have.',
       content:`<h3>The Doorbell Problem</h3><h4>Step 1 — Desensitise the Doorbell</h4><p>Ring or play the doorbell sound repeatedly with no door opening. Ring 20–30 times across two days. Feed a treat after each ring.</p><h4>Step 2 — The Stationing Protocol</h4><p>Teach a specific station (mat) away from the door. Practise going to station on cue until automatic. Then: doorbell rings → dog goes to station → door opens → calm dog earns visitor interaction as the reward.</p><h4>Step 3 — Managed Guest Introductions</h4><ul><li>Brief guests before entry: "please ignore the dog until they are calm."</li><li>Dog on lead initially to prevent rushing.</li><li>Allow off-lead access only when below excite threshold.</li></ul><h4>Owner Homework</h4><p>Arrange a visitor practice session this week. Rate initial arousal level and time to calm greeting (minutes). Repeat twice and track progress.</p><div class="lesson-quiz" data-lesson="c2_m4_l2"><h4>Knowledge Check</h4><p>What is the purpose of desensitising the doorbell sound?</p><div class="quiz-options"><button class="qo" data-correct="false">To make the dog completely ignore doorbells forever</button><button class="qo" data-correct="true">To reduce the arousal spike so the dog can think clearly when guests arrive</button><button class="qo" data-correct="false">To train the dog to bark at the doorbell as an alert</button></div></div>`},
      {id:'c2_m4_l3',name:'Doorway Manners',desc:'Teach your dog to wait calmly at doors and only move through them on your signal.',xp:70,tip:'Door manners are a safety skill as much as a politeness skill.',
       content:`<h3>The Door as a Training Opportunity</h3><h4>Teaching the Wait</h4><ol><li>Approach the door with your dog. Place your hand on the handle.</li><li>Begin to open the door. If the dog moves forward, immediately close it.</li><li>Repeat. Most dogs begin pausing within 5–10 repetitions.</li><li>When the dog pauses naturally, mark "yes" and release with your chosen release word.</li><li>Gradually build to opening the door fully before releasing.</li></ol><h4>Owner Homework</h4><p>Practise doorway waits at every door in your home 3x daily for one week. Track self-corrections vs door closes needed. Goal: 80% self-correction by end of week.</p><div class="lesson-quiz" data-lesson="c2_m4_l3"><h4>Knowledge Check</h4><p>In doorway manners training, what closes the door when the dog moves forward?</p><div class="quiz-options"><button class="qo" data-correct="false">A verbal correction from the handler</button><button class="qo" data-correct="true">The handler closes the door — the dog learns through the mechanics of the situation, not punishment</button><button class="qo" data-correct="false">An automated sensor</button></div></div>`},
      {id:'c2_m4_l4',name:'Living Harmoniously with Family',desc:'Integrate training into daily family life so every interaction reinforces good behaviour.',xp:90,tip:'Training isn\'t something you do at 6pm — it\'s the way you live with your dog.',
       content:`<h3>Training Is a Lifestyle</h3><p>The most effective training happens in the dozens of small interactions you have throughout every single day. Every feeding, door, game and greeting is a training opportunity.</p><h4>NILIF — Applied Lightly</h4><ul><li>Before the food bowl goes down: "sit"</li><li>Before the lead goes on: "stand still" or "sit"</li><li>Before the ball is thrown: "sit" or "down"</li></ul><h4>Children and Dogs</h4><ul><li>Teach children to ask for a sit before stroking.</li><li>Create dog-free zones enforced consistently.</li><li>Supervise all interactions.</li></ul><h4>Owner Homework</h4><p>For 7 days, identify 5 daily moments to use as training opportunities. Apply a brief behaviour request at each consistently. Note changes in responsiveness and calmness at end of week.</p><div class="lesson-quiz" data-lesson="c2_m4_l4"><h4>Knowledge Check</h4><p>What is the core principle of "Nothing in Life Is Free"?</p><div class="quiz-options"><button class="qo" data-correct="false">Withholding all rewards until perfect behaviour</button><button class="qo" data-correct="true">Asking for a brief, easy behaviour before delivering anything the dog values, creating cooperation without pressure</button><button class="qo" data-correct="false">Ensuring the dog earns every meal through formal exercises</button></div></div>`}
    ]
  },
  {
    id:'c2_m5',n:5,emoji:'🏆',courseId:'adult-transformation',courseName:'Adult Dog Transformation',
    name:'Graduation Assessment',
    desc:'Demonstrate your dog\'s transformation with a comprehensive real-world assessment.',
    lessons:[
      {id:'c2_m5_l1',name:'Skills Evaluation',desc:'A structured review of all skills covered across the program.',xp:100,tip:'This is a celebration of how far you\'ve come.',
       content:`<h3>Programme Review</h3><h4>Module 1</h4><ul><li>Can identify 5+ calming signals in real time?</li><li>Know your dog's top 3 motivators?</li><li>Management plan in place?</li></ul><h4>Module 2</h4><ul><li>Recall from 20m in moderate distraction ✓/✗</li><li>Loose lead in busy environment 5+ minutes ✓/✗</li><li>Sit-stay and down-stay at 10m ✓/✗</li></ul><h4>Module 3</h4><ul><li>Settles on mat in public 10+ minutes ✓/✗</li><li>Recovers from arousal spike within 5 minutes ✓/✗</li></ul><h4>Module 4</h4><ul><li>Greets all visitors with 4 paws on floor ✓/✗</li><li>Waits at all doors on cue ✓/✗</li></ul><div class="lesson-quiz" data-lesson="c2_m5_l1"><h4>Knowledge Check</h4><p>What reliability threshold indicates a skill is genuinely trained?</p><div class="quiz-options"><button class="qo" data-correct="false">50% — more often than not</button><button class="qo" data-correct="false">70% — occasional failures acceptable</button><button class="qo" data-correct="true">90% — succeeds 9 times out of 10 before considered reliable</button></div></div>`},
      {id:'c2_m5_l2',name:'Real World Challenges',desc:'Navigate real-world scenarios that test every skill learned.',xp:100,tip:'Real world is the only world that counts.',
       content:`<h3>The Real World Assessment</h3><h4>Assessment Scenarios</h4><ol><li>Outdoor café settle: 10 minutes under a table</li><li>Pavement recall from 15m with one distraction present</li><li>Loose lead 3-minute walk through moderate pedestrian area</li><li>Stranger greeting with 4 paws on floor</li><li>Doorway wait while handler walks 5m away</li></ol><h4>Scoring</h4><p>Pass / Pass with minor faults / Needs development. Completion requires passing 4 of 5 scenarios. Any failed scenario becomes focus of a follow-up session before certification.</p><div class="lesson-quiz" data-lesson="c2_m5_l2"><h4>Knowledge Check</h4><p>Minimum scenarios to pass for programme completion?</p><div class="quiz-options"><button class="qo" data-correct="false">All 5 must be perfect</button><button class="qo" data-correct="true">4 of 5 — any failed scenario becomes a targeted follow-up</button><button class="qo" data-correct="false">3 of 5 — majority pass is sufficient</button></div></div>`},
      {id:'c2_m5_l3',name:'Owner Confidence Assessment',desc:'Evaluate your growth as a handler alongside your dog\'s transformation.',xp:100,tip:'Confident owners create confident dogs.',
       content:`<h3>You Have Transformed Too</h3><h4>Owner Competency Areas</h4><ul><li>Reading body language in real time</li><li>Timing of reward: landing within 1 second of desired behaviour</li><li>Rate of reinforcement: rewarding enough to maintain engagement</li><li>Handling under pressure: remain calm when dog makes mistakes</li><li>Problem solving: identify why something went wrong and adjust</li></ul><h4>Self-Assessment Questions</h4><ul><li>At what point in the programme did your confidence shift most?</li><li>What is the most important thing you have learned about your dog?</li><li>What would you do differently if you started again?</li><li>What are your goals for the next 6 months?</li></ul><div class="lesson-quiz" data-lesson="c2_m5_l3"><h4>Knowledge Check</h4><p>Why is owner confidence assessed alongside the dog's performance?</p><div class="quiz-options"><button class="qo" data-correct="false">The owner's confidence determines the dog's certificate grade</button><button class="qo" data-correct="true">Handler and dog are a team — owner skill and confidence directly affects the dog's behaviour and long-term outcomes</button><button class="qo" data-correct="false">Confident owners spend more on training</button></div></div>`},
      {id:'c2_m5_l4',name:'Certification',desc:'Celebrate your graduation and receive your Adult Dog Transformation Certificate.',xp:150,tip:'You did this. Both of you.',
       content:`<h3>Congratulations</h3><p>Completing the Adult Dog Transformation Program is a genuine achievement. Adult dogs bring their history, habits and hurdles into every session — and you worked through all of it.</p><h4>Your Certificate Represents</h4><ul><li>Demonstrated understanding of canine body language</li><li>Reliable recall in distraction environments</li><li>Loose lead walking in public</li><li>Calmness and settle skills in public settings</li><li>Polite, controlled household behaviour</li><li>Consistent, ethical, force-free handling</li></ul><h4>Your Next Steps</h4><ul><li>Elite Companion Dog Program — advanced off-lead reliability</li><li>Canine Enrichment Specialist — build your dog's mental life</li><li>Maintenance plan — monthly check-ins to keep skills sharp</li></ul><div class="lesson-quiz" data-lesson="c2_m5_l4"><h4>Knowledge Check</h4><p>The Adult Dog Transformation certificate confirms:</p><div class="quiz-options"><button class="qo" data-correct="false">Competition obedience at Kennel Club standard</button><button class="qo" data-correct="true">Recall, loose lead walking, calmness, polite greetings and ethical handling methodology</button><button class="qo" data-correct="false">Perfect behaviour in all situations with no further training required</button></div></div>`}
    ]
  }
];
FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_2_MODULES);

/* ═══════════════════════════════════════════════════════════
   COURSE 3 — REACTIVE DOG RECOVERY PROGRAM
   Module IDs: c3_m1 – c3_m5
═══════════════════════════════════════════════════════════ */
var COURSE_3_MODULES = [
  {
    id:'c3_m1',n:1,emoji:'🧠',courseId:'reactive-recovery',courseName:'Reactive Dog Recovery',
    name:'Understanding Reactivity',
    desc:'Learn what reactivity really is, why it happens, and why punishment makes it worse.',
    lessons:[
      {id:'c3_m1_l1',name:'What Reactivity Actually Is',desc:'Cut through the myths and understand the real science behind reactive behaviour.',xp:70,tip:'Reactivity is not aggression — it is a communication failure born from fear.',
       content:`<h3>Reactivity Demystified</h3><p>Reactivity is an over-threshold emotional response to a trigger. The barking, lunging, spinning and pulling you see is not dominance or stubbornness — it is your dog communicating overwhelming emotional distress.</p><h4>The Emotional Root</h4><p>Most reactivity has its roots in fear or frustration. Fear-based: "that thing is scary and I need to make it go away." Frustration-based: "I want to get to that thing and I CAN'T."</p><h4>The Threshold Concept</h4><p>Every dog has a threshold — the distance or intensity at which a trigger tips them from manageable arousal into reactive explosion. Below threshold, the dog can think and take treats. Above threshold, no learning is happening. All reactive dog training is built around keeping the dog below threshold.</p><h4>Why Punishment Makes It Worse</h4><p>If your dog reacts because they are afraid, and you punish the reaction, you have added pain to an already fearful dog and confirmed that other dogs predict bad things. You have made the underlying emotion worse and suppressed the warning signals.</p><h4>Owner Homework</h4><p>For 7 days, keep a trigger log: every reaction — note the trigger, approximate distance, intensity 1–10.</p><div class="lesson-quiz" data-lesson="c3_m1_l1"><h4>Knowledge Check</h4><p>Why does punishing a reactive response make things worse?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog loses respect for the owner</button><button class="qo" data-correct="true">It adds an aversive to an already fearful state, worsening the underlying emotion and potentially suppressing warning signals</button><button class="qo" data-correct="false">Dogs do not understand punishment</button></div></div>`},
      {id:'c3_m1_l2',name:'Identifying Triggers',desc:'Map every trigger, distance and intensity to build a precise reactivity profile.',xp:70,tip:'You cannot treat what you haven\'t mapped.',
       content:`<h3>Building the Trigger Map</h3><h4>Trigger Categories</h4><ul><li>Other dogs: all dogs? Specific sizes? On or off lead?</li><li>People: all people? Men? Children? People in uniforms?</li><li>Movement: cyclists, joggers, skateboarders, cars?</li><li>Sounds: sudden noises, traffic, other dogs barking?</li><li>Environment: specific locations, tight spaces?</li></ul><h4>Distance Assessment</h4><p>For each trigger, identify the distance at which your dog: (1) notices calmly, (2) begins showing stress signals, (3) goes over threshold. Distance 2 is your working zone.</p><h4>Owner Homework</h4><p>Complete a full trigger map this week. For your top 3 triggers, estimate threshold distance in metres. Share with your trainer.</p><div class="lesson-quiz" data-lesson="c3_m1_l2"><h4>Knowledge Check</h4><p>What is the 'working zone' for reactive dog training?</p><div class="quiz-options"><button class="qo" data-correct="false">The distance at which the dog is completely unaware of the trigger</button><button class="qo" data-correct="true">The distance at which the dog notices the trigger but has not yet gone over threshold — where they can still think and take treats</button><button class="qo" data-correct="false">The distance at which the dog is reacting fully</button></div></div>`},
      {id:'c3_m1_l3',name:'The Stress Bucket',desc:'Understand how cumulative stress affects reactivity and how to manage your dog\'s daily stress load.',xp:70,tip:'Managing the stress bucket is as important as any specific training exercise.',
       content:`<h3>Why Some Days Are Worse Than Others</h3><p>Think of your dog's capacity to cope as a bucket. Every stressor adds water. When the bucket overflows, any subsequent trigger produces a disproportionate reaction.</p><h4>What Drains the Bucket</h4><ul><li>Sleep: 12–16 hours of genuine rest</li><li>Sniff walks: 20 minutes of uninterrupted sniffing is more restorative than an hour of brisk walking</li><li>Scatter feeding and lick mats</li><li>Quiet time at home with low stimulation</li></ul><h4>Owner Homework</h4><p>For the next week, keep a daily stress log. Rate your dog's bucket level (1=empty, 10=overflowing) at the start of each day. Note correlations with reactivity intensity on walks.</p><div class="lesson-quiz" data-lesson="c3_m1_l3"><h4>Knowledge Check</h4><p>Why might a dog react more intensely on Friday than Monday to the same trigger?</p><div class="quiz-options"><button class="qo" data-correct="false">Dogs are more tired and less focused at the end of the week</button><button class="qo" data-correct="true">Cumulative daily stressors have filled the stress bucket, leaving less capacity to cope — threshold is lower</button><button class="qo" data-correct="false">The dog has forgotten the training done at the start of the week</button></div></div>`},
      {id:'c3_m1_l4',name:'Safety, Equipment and Management',desc:'Ensure your reactive dog is safe, well-equipped and properly managed.',xp:80,tip:'Safety first, always. No training session is worth an incident that sets recovery back by months.',
       content:`<h3>Non-Negotiable Safety First</h3><h4>Essential Equipment</h4><ul><li>Double-clipped lead: clip to both harness and collar for redundancy</li><li>Properly fitted Y-front harness that the dog cannot back out of</li><li>Muzzle training: a responsible choice for reactive dogs</li><li>High-visibility lead sleeve: "Nervous dog" or "needs space"</li></ul><h4>Walk Management Protocols</h4><ul><li>Scout routes before walking — identify trigger hotspots</li><li>Walk at low-traffic times initially</li><li>Always have an escape route planned</li><li>Carry a barrier tool (umbrella) to create visual interruption if needed</li></ul><h4>Owner Homework</h4><p>Audit your current equipment. Check harness fit, lead security, muzzle training status. Report to your trainer.</p><div class="lesson-quiz" data-lesson="c3_m1_l4"><h4>Knowledge Check</h4><p>Why is double-clipping recommended for reactive dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">It gives the handler more control to correct the dog</button><button class="qo" data-correct="true">The force of a reactive lunge can break a single clip or slip a collar — redundancy prevents escape</button><button class="qo" data-correct="false">All dogs should be walked on a double clip by law</button></div></div>`}
    ]
  },
  {
    id:'c3_m2',n:2,emoji:'🏗️',courseId:'reactive-recovery',courseName:'Reactive Dog Recovery',
    name:'Foundation Skills',
    desc:'Build the core skills all behaviour modification depends on.',
    lessons:[
      {id:'c3_m2_l1',name:'Voluntary Check-In',desc:'Teach your dog to automatically look at you for guidance in challenging environments.',xp:80,tip:'The check-in is your early warning system.',
       content:`<h3>The Check-In</h3><p>A voluntary check-in is when your dog turns to look at you of their own accord in the environment. It signals: "I notice something, I'm looking to you for information."</p><h4>Building the Check-In</h4><ol><li>In low-distraction environment, stand with your dog and wait.</li><li>The moment they make any eye contact — mark with "yes!" and deliver high-value treat.</li><li>Do not ask for attention — only reward voluntary offerings.</li><li>As the behaviour strengthens, take it to mildly stimulating environments.</li></ol><h4>Check-In Rate as Threshold Indicator</h4><p>High check-in rate = below threshold. Check-in rate drops to zero = approaching threshold, manage immediately.</p><div class="lesson-quiz" data-lesson="c3_m2_l1"><h4>Knowledge Check</h4><p>A drop in voluntary check-in rate indicates what?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog is becoming bored with the walk</button><button class="qo" data-correct="true">The dog's arousal is rising and they are approaching threshold — immediate management needed</button><button class="qo" data-correct="false">Training has been successful and check-ins are no longer needed</button></div></div>`},
      {id:'c3_m2_l2',name:'Hand Targeting',desc:'Build a strong, reliable hand touch that works as an interrupt in reactive moments.',xp:80,tip:'A trained hand touch can interrupt a reactive sequence before it escalates.',
       content:`<h3>Touch — The Reactive Dog's Best Friend</h3><h4>Teaching Touch</h4><ol><li>Present your flat palm 5cm from your dog's nose. Wait.</li><li>Most dogs sniff the hand — mark the moment nose contacts palm, reward from other hand.</li><li>Gradually move the hand further — to the side, low, high.</li><li>Add cue "touch" just before presenting hand.</li><li>Build to targeting from 1–2 metres away with mild distractions.</li></ol><h4>Using Touch as Interrupt</h4><p>When your dog notices a trigger and begins to fixate, present your hand and say "touch" before they escalate. The behaviour interrupts fixation and orients the dog toward you.</p><div class="lesson-quiz" data-lesson="c3_m2_l2"><h4>Knowledge Check</h4><p>Why is hand targeting useful for reactive dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">It teaches the dog not to look at triggers</button><button class="qo" data-correct="true">It interrupts trigger fixation, orients the dog toward the handler, and provides an achievable positive behaviour instead of reacting</button><button class="qo" data-correct="false">Touching calms dogs through physical contact</button></div></div>`},
      {id:'c3_m2_l3',name:'The Emergency U-Turn',desc:'Build a fast, reliable direction change that creates distance before reactions escalate.',xp:80,tip:'Getting distance fast and calmly is worth more than any technique.',
       content:`<h3>Distance Is Your Best Friend</h3><h4>Teaching the U-Turn</h4><ol><li>In a calm environment, say your cue ("this way," "let's go") in a bright voice.</li><li>Immediately turn and walk briskly in the opposite direction.</li><li>When the dog catches up to your side, deliver a treat and continue moving.</li><li>Practise 10 repetitions per session until the response is instant.</li></ol><h4>On the Walk</h4><p>Deploy the U-turn the moment you see a trigger at distance — do not wait until you are closer. Moving away from a trigger is not failure — it is intelligent management.</p><h4>Owner Homework</h4><p>Practise the U-turn 15 times per day in low-distraction settings this week. Target: under 3 seconds from cue to dog at your side.</p><div class="lesson-quiz" data-lesson="c3_m2_l3"><h4>Knowledge Check</h4><p>When is the best moment to deploy the emergency U-turn?</p><div class="quiz-options"><button class="qo" data-correct="false">When the dog is already reacting and needs to be removed</button><button class="qo" data-correct="true">The moment you spot the trigger at distance — before the dog's arousal begins to rise</button><button class="qo" data-correct="false">Only when no other option is available</button></div></div>`},
      {id:'c3_m2_l4',name:'Engage-Disengage',desc:'Teach your dog to notice triggers and look back at you calmly — the cornerstone of rehabilitation.',xp:90,tip:'Engage-disengage transforms the trigger from a threat into a money machine.',
       content:`<h3>Changing the Emotional Association</h3><h4>Stage 1 — Engage (Look at That)</h4><ol><li>Position your dog at working distance from the trigger (below threshold).</li><li>Watch your dog. The moment they look at the trigger — mark "yes!" and deliver a treat.</li><li>You are marking the look itself. The trigger predicts the mark and treat.</li><li>Repeat 10–20 times. The dog begins to look at the trigger and immediately look back at you.</li></ol><h4>Stage 2 — Disengage</h4><p>Once the dog is fluently looking at the trigger and immediately back at you, the disengage is happening automatically. The trigger now functions as the cue to check in with you.</p><h4>Owner Homework</h4><p>Run 3 engage-disengage sessions at working distance this week. Count: looks at trigger that resulted in immediate look back (without reacting). Report ratio to your trainer.</p><div class="lesson-quiz" data-lesson="c3_m2_l4"><h4>Knowledge Check</h4><p>What does the handler mark when the dog looks at the trigger?</p><div class="quiz-options"><button class="qo" data-correct="false">The moment the dog looks away from the trigger</button><button class="qo" data-correct="true">The moment the dog looks AT the trigger — to pair trigger with reward</button><button class="qo" data-correct="false">Only when the dog looks at the trigger and sits down</button></div></div>`}
    ]
  },
  {
    id:'c3_m3',n:3,emoji:'💪',courseId:'reactive-recovery',courseName:'Reactive Dog Recovery',
    name:'Confidence Building',
    desc:'Build genuine confidence and resilience through structured exposure and positive experience.',
    lessons:[
      {id:'c3_m3_l1',name:'Building Positive Associations',desc:'Systematically build positive emotional associations with triggers that cause reactivity.',xp:80,tip:'You cannot talk a dog out of fear. You can only replace it with a new emotional experience.',
       content:`<h3>Counter-Conditioning</h3><p>Counter-conditioning replaces a negative emotional association with a positive one through systematic pairing. Every time your dog sees the trigger at a safe distance and something wonderful happens, the trigger's emotional charge diminishes.</p><h4>Controlled Exposure Sessions</h4><ol><li>Position at sub-threshold distance (dog is aware but calm).</li><li>Every 10–15 seconds, deliver a high-value treat regardless of the dog's behaviour. Trigger present = treats flowing.</li><li>Remove the trigger. Treats stop. This is classical conditioning — trigger predicts reward.</li></ol><h4>Owner Homework</h4><p>Set up 3 controlled exposure sessions this week at your dog's threshold distance. Rate body language during each session 1–10 (1=very tense, 10=completely relaxed). Report the trajectory.</p><div class="lesson-quiz" data-lesson="c3_m3_l1"><h4>Knowledge Check</h4><p>In counter-conditioning, treats are delivered when the trigger is present regardless of the dog's behaviour. Why?</p><div class="quiz-options"><button class="qo" data-correct="false">To reward the dog for being brave</button><button class="qo" data-correct="true">To create a classical conditioning association: trigger present = good things happen, regardless of what the dog does</button><button class="qo" data-correct="false">To keep the dog busy so they don't react</button></div></div>`},
      {id:'c3_m3_l2',name:'Confidence Through Enrichment',desc:'Use structured enrichment to build neurological resilience and emotional confidence.',xp:70,tip:'A mentally fulfilled dog is a more confident dog.',
       content:`<h3>Enrichment as Rehabilitation</h3><p>Each time a dog works through a puzzle, explores a novel environment or performs a natural behaviour, they build resilience — the ability to cope with challenge. For reactive dogs, this directly improves threshold.</p><h4>Confidence-Building Enrichment</h4><ul><li>Sniff walks: dog-led walks where the dog controls pace and direction</li><li>Novel object introduction: introduce new objects in a controlled, positive way at home</li><li>Proprioception work: walking over different surfaces builds body confidence</li><li>Training new tricks: success in learning builds confidence</li><li>Controlled sniff stations: scent jars, sniff boxes</li></ul><h4>Owner Homework</h4><p>Add one enrichment activity to your dog's daily routine this week. Note any changes in overall calmness, engagement and reactivity intensity.</p><div class="lesson-quiz" data-lesson="c3_m3_l2"><h4>Knowledge Check</h4><p>Why does regular enrichment improve a reactive dog's threshold?</p><div class="quiz-options"><button class="qo" data-correct="false">Because enrichment physically tires the dog out</button><button class="qo" data-correct="true">Problem-solving and positive novel experience build neurological resilience, improving the dog's overall ability to cope with challenge</button><button class="qo" data-correct="false">Because enrichment distracts the dog from their triggers</button></div></div>`},
      {id:'c3_m3_l3',name:'Building a Safe Social Reference Point',desc:'Help your dog learn that other dogs and people at a distance can be neutral or positive.',xp:80,tip:'Neutral is a massive win. You don\'t need your dog to love other dogs — you just need them not to panic.',
       content:`<h3>The Goal Is Neutrality</h3><p>The realistic and transformative goal is neutrality — the ability to be in the presence of a trigger without emotional flooding.</p><h4>Creating Safe Social Exposure</h4><ol><li>Parallel walking: walk your reactive dog at a safe distance parallel to a calm, neutral dog. Gradually decrease distance across multiple sessions.</li><li>Park sessions at distance: sit with your dog at the edge of a park. Dogs present = treats flowing. Move 1 metre closer per week.</li><li>Staged social encounters: arrange to meet a known, calm dog with a reliable owner. Keep distance where both dogs are comfortable.</li></ol><h4>Success Criteria</h4><p>The dog can be within 20 metres of a neutral trigger with loose body language, able to take treats, without vocal reactivity.</p><div class="lesson-quiz" data-lesson="c3_m3_l3"><h4>Knowledge Check</h4><p>What is the realistic goal for most reactive dogs regarding their primary trigger?</p><div class="quiz-options"><button class="qo" data-correct="false">To love and actively seek out their trigger</button><button class="qo" data-correct="true">Neutrality — to exist near the trigger without emotional flooding, with loose body language and maintained cognitive function</button><button class="qo" data-correct="false">To completely ignore all triggers in all environments</button></div></div>`},
      {id:'c3_m3_l4',name:'Building Handler Trust Under Pressure',desc:'Become the source of safety your reactive dog turns to instead of reacting.',xp:90,tip:'When your dog trusts that you will manage their environment, they stop having to manage it themselves.',
       content:`<h3>You Are the Safe Haven</h3><p>Reactive dogs often feel responsible for managing their own safety — and that responsibility is exhausting. When you consistently demonstrate that you will notice threats early and create distance, your dog begins to delegate that responsibility to you.</p><h4>Building Trust Behaviourally</h4><ul><li>Never push past threshold: every time you do, you erode trust</li><li>Be predictable: cue your U-turns consistently, use the same routes</li><li>Advocate for your dog: if a stranger wants to approach, say no. If an off-lead dog is approaching, create distance</li><li>Celebrate small wins: when your dog looks at a trigger and checks in rather than reacting, make a big deal of it</li></ul><h4>Owner Homework</h4><p>Reflect on the past week. Identify 3 moments you could have advocated more strongly for your dog's space, and 3 moments you managed the environment well. Write both down.</p><div class="lesson-quiz" data-lesson="c3_m3_l4"><h4>Knowledge Check</h4><p>How does consistently managing your dog's environment below threshold build trust?</p><div class="quiz-options"><button class="qo" data-correct="false">It doesn't — exposure at all levels is needed</button><button class="qo" data-correct="true">It shows the dog that their handler notices threats and manages them — so the dog gradually delegates the responsibility of safety monitoring to the handler</button><button class="qo" data-correct="false">It teaches the dog that the triggers are not real threats</button></div></div>`}
    ]
  },
  {
    id:'c3_m4',n:4,emoji:'🔄',courseId:'reactive-recovery',courseName:'Reactive Dog Recovery',
    name:'Behaviour Modification',
    desc:'Apply systematic behaviour modification protocols to reduce and eliminate reactive responses.',
    lessons:[
      {id:'c3_m4_l1',name:'Desensitisation Protocols',desc:'Use systematic, gradual exposure to reduce your dog\'s emotional sensitivity to triggers.',xp:90,tip:'Desensitisation only works below threshold — above threshold is practice for reacting.',
       content:`<h3>Systematic Desensitisation</h3><p>Desensitisation gradually reduces the emotional intensity of a trigger by exposing the dog to it at a level they can cope with, then slowly increasing that level.</p><h4>The Desensitisation Hierarchy</h4><ol><li>Photo/audio of trigger at low volume</li><li>Real trigger at maximum comfortable distance (100m)</li><li>Real trigger at 75m, 50m, 30m, 20m, 10m</li><li>Real trigger in motion at distance, then closer</li></ol><p>Progress only when dog is fully comfortable — 3 sessions with no stress signals at each level.</p><h4>Owner Homework</h4><p>Build a 10-step desensitisation hierarchy for your dog's primary trigger. Identify your current working step and run 2 sessions. Report: stress signals observed, treat acceptance rate, any disengage moments.</p><div class="lesson-quiz" data-lesson="c3_m4_l1"><h4>Knowledge Check</h4><p>Why must desensitisation always be conducted below threshold?</p><div class="quiz-options"><button class="qo" data-correct="false">Because above-threshold sessions are more tiring for the handler</button><button class="qo" data-correct="true">Because above threshold the dog's limbic system has overridden cognitive function — no new learning occurs and the reactive response is rehearsed and strengthened</button><button class="qo" data-correct="false">Because below threshold training is more enjoyable for the dog</button></div></div>`},
      {id:'c3_m4_l2',name:'Interrupting the Reactive Sequence',desc:'Learn to identify and interrupt the pre-reactive sequence before it reaches explosion point.',xp:90,tip:'The reaction you see is the last second of a much longer process — interrupt the beginning, not the end.',
       content:`<h3>The Reactive Sequence</h3><p>A reactive explosion follows a predictable sequence: orientation → freeze → fixate → stiffen → vocalise → lunge. By the time you see the barking, the dog's nervous system has been building for several seconds.</p><h4>Interrupting at Each Stage</h4><ul><li>Orientation: ideal time to reward a check-in or deploy touch cue</li><li>Freeze: time for U-turn or directional change immediately</li><li>Fixation: move body between dog and trigger to break visual line</li><li>Stiffening: distance immediately — near the tipping point</li></ul><h4>The Interrupt Toolbox</h4><ul><li>Hand target ("touch")</li><li>Emergency U-turn ("this way")</li><li>Scatter feed</li><li>Physical body block</li><li>Rapid directional changes</li></ul><div class="lesson-quiz" data-lesson="c3_m4_l2"><h4>Knowledge Check</h4><p>At which stage is it most effective to intervene?</p><div class="quiz-options"><button class="qo" data-correct="false">At the lunge — this is when the dog is clearest about needing help</button><button class="qo" data-correct="true">At orientation or freeze — before fixation locks in and the limbic system floods the cognitive brain</button><button class="qo" data-correct="false">After the reaction — to debrief the dog</button></div></div>`},
      {id:'c3_m4_l3',name:'Threshold Management in Practice',desc:'Apply real-time threshold management across all walking environments.',xp:90,tip:'Your dog\'s threshold is not fixed — it changes daily. Read it fresh each walk.',
       content:`<h3>Dynamic Threshold Management</h3><p>Threshold changes with stress bucket levels, time of day, environment, weather, and previous experiences. Successful management requires real-time observation and flexible decision-making.</p><h4>Pre-Walk Assessment</h4><ul><li>How did they sleep? How was yesterday?</li><li>Have there been stressors today?</li><li>Are they eating normally?</li><li>Body language check: loose and wiggly or tight and alert?</li></ul><h4>On-Walk Real-Time Assessment</h4><ul><li>Check-in rate dropping = threshold rising, increase management immediately</li><li>Refusing treats = at or above threshold, create distance now</li><li>Body tension increasing = approaching threshold, don't wait</li></ul><div class="lesson-quiz" data-lesson="c3_m4_l3"><h4>Knowledge Check</h4><p>Your dog is refusing treats on a walk. What does this most likely indicate?</p><div class="quiz-options"><button class="qo" data-correct="false">They are not hungry</button><button class="qo" data-correct="true">They are at or above threshold — arousal has suppressed food drive, and distance needs to be created immediately</button><button class="qo" data-correct="false">The treats are not high enough value</button></div></div>`},
      {id:'c3_m4_l4',name:'Medication and Professional Support',desc:'Understand when medication may be indicated and how to work with your veterinary team.',xp:80,tip:'Medication is not giving up — for some dogs it is the tool that makes behaviour modification possible.',
       content:`<h3>When Behaviour Modification Needs Support</h3><p>For some reactive dogs, the neurological arousal system is dysregulated in ways that training alone cannot fully address. Veterinary intervention can create the neurological window that makes behaviour modification possible.</p><h4>Signs Medication May Be Indicated</h4><ul><li>Recovery time from reactions exceeds 30+ minutes consistently</li><li>Cannot take treats within 20m of any trigger</li><li>Sleep significantly disrupted</li><li>Months of consistent training show minimal progress</li></ul><h4>Medication Options (Discuss with Vet)</h4><ul><li>SSRIs / TCAs: Fluoxetine, clomipramine — long-term anxiety-based reactivity</li><li>Situational anxiolytics: Trazodone, gabapentin</li><li>Nutraceuticals: Zylkene, Adaptil, l-theanine</li></ul><div class="lesson-quiz" data-lesson="c3_m4_l4"><h4>Knowledge Check</h4><p>Medication for a reactive dog is most effective when:</p><div class="quiz-options"><button class="qo" data-correct="false">Used as a permanent replacement for behaviour modification</button><button class="qo" data-correct="true">Used alongside a consistent behaviour modification programme to create the neurological window in which training can take effect</button><button class="qo" data-correct="false">Given only on particularly stressful days</button></div></div>`}
    ]
  },
  {
    id:'c3_m5',n:5,emoji:'🌟',courseId:'reactive-recovery',courseName:'Reactive Dog Recovery',
    name:'Long-Term Success',
    desc:'Maintain and build on your reactive dog\'s recovery with a sustainable long-term plan.',
    lessons:[
      {id:'c3_m5_l1',name:'Measuring Real Progress',desc:'Define meaningful success metrics for reactive dog recovery.',xp:90,tip:'Progress is measured in thresholds, not perfection.',
       content:`<h3>What Progress Actually Looks Like</h3><h4>Meaningful Metrics</h4><ul><li>Threshold distance: has it reduced? Even 5 metres is measurable neurological change.</li><li>Recovery time: how long after a reaction before the dog is calm? Reducing from 30 minutes to 10 is enormous.</li><li>Reaction intensity: bark-lunge vs bark-only vs stiffening vs checking in.</li><li>Check-in rate: increasing voluntary check-ins in trigger-present environments.</li><li>Quality of life: more settled at home? Sleeping better? Playing more?</li></ul><h4>Owner Homework</h4><p>Review your trigger log from Week 1 and compare to this week across all four metrics. Write a summary of the most significant changes. Share with your trainer.</p><div class="lesson-quiz" data-lesson="c3_m5_l1"><h4>Knowledge Check</h4><p>Which is the MOST meaningful indicator of reactive dog recovery progress?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog never barks at any trigger anymore</button><button class="qo" data-correct="true">A reduction in threshold distance, recovery time and reaction intensity measured over weeks and months</button><button class="qo" data-correct="false">The dog can meet other dogs off-lead without preparation</button></div></div>`},
      {id:'c3_m5_l2',name:'Managing Setbacks',desc:'Understand why setbacks happen and how to manage them without losing progress.',xp:80,tip:'Setbacks are data, not failure.',
       content:`<h3>Setbacks Are Part of Recovery</h3><h4>Common Causes</h4><ul><li>Illness or pain: physical discomfort lowers threshold dramatically</li><li>Season changes: spring and autumn bring increased wildlife</li><li>Flooded bucket: a stressful week fills the bucket</li><li>Traumatic incident: unexpected close encounter can temporarily reset associations</li></ul><h4>Setback Protocol</h4><ol><li>Drop back one full level on the desensitisation hierarchy immediately</li><li>Reduce walk frequency and length for 48–72 hours</li><li>Fill the bucket drains: extra sleep, scatter feeding, sniff walks</li><li>Return to training at reduced level with extra high-value rewards</li><li>Do not push through — recovery requires reduced demand</li></ol><div class="lesson-quiz" data-lesson="c3_m5_l2"><h4>Knowledge Check</h4><p>Correct immediate response when a reactive dog has a significant setback?</p><div class="quiz-options"><button class="qo" data-correct="false">Increase training intensity to push through the regression</button><button class="qo" data-correct="true">Drop back one level on the desensitisation hierarchy, reduce environmental demands, and increase recovery activities</button><button class="qo" data-correct="false">Avoid all trigger exposure permanently</button></div></div>`},
      {id:'c3_m5_l3',name:'Building a Sustainable Routine',desc:'Design a daily and weekly routine that supports your reactive dog\'s long-term wellbeing.',xp:80,tip:'Sustainable routine beats intense short-term effort every time.',
       content:`<h3>The Recovery Lifestyle</h3><h4>The Daily Routine Framework</h4><ul><li>Morning: pre-walk threshold assessment, 20-min decompression sniff walk, one enrichment activity</li><li>Midday: rest and sleep, long-lasting chew or lick mat</li><li>Afternoon: 5-min desensitisation session (if applicable), scatter feeding</li><li>Evening: calm activity, brief training session (3–5 minutes)</li></ul><h4>Weekly Targets</h4><ul><li>3–4 structured desensitisation / counter-conditioning sessions</li><li>Daily decompression activities</li><li>1 controlled parallel walk or managed social exposure</li><li>Weekly review of threshold and progress metrics</li></ul><div class="lesson-quiz" data-lesson="c3_m5_l3"><h4>Knowledge Check</h4><p>Why is a consistent daily routine particularly important for reactive dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Reactive dogs need more physical exercise than other dogs</button><button class="qo" data-correct="true">Predictability reduces baseline anxiety, keeps the stress bucket consistently lower, and provides regular desensitisation opportunities without overwhelming the dog</button><button class="qo" data-correct="false">Routine prevents boredom and new problem behaviours</button></div></div>`},
      {id:'c3_m5_l4',name:'Programme Graduation',desc:'Celebrate your reactive dog\'s recovery journey and plan the next phase.',xp:150,tip:'You advocated for your dog every single day. That matters enormously.',
       content:`<h3>You Did Something Hard and You Did It With Love</h3><p>Completing the Reactive Dog Recovery Program is not a small thing. The changes you have created — in your dog's nervous system, your handling skills, and your relationship — are real and lasting.</p><h4>What You Have Achieved</h4><ul><li>A comprehensive understanding of reactivity, threshold and stress physiology</li><li>A complete toolkit: check-ins, hand targeting, U-turns, engage-disengage, desensitisation hierarchies</li><li>A measurable reduction in threshold distance, reaction intensity, and recovery time</li><li>A sustainable daily routine that supports your dog's ongoing wellbeing</li><li>The confidence to advocate for your dog and manage their environment proactively</li></ul><h4>Your Next Chapter</h4><ul><li>Canine Enrichment Specialist: build the richest possible mental life</li><li>Senior Dog Wellness: if your reactive dog is ageing</li><li>Monthly trainer check-in: quarterly reviews keep progress on track</li></ul><div class="lesson-quiz" data-lesson="c3_m5_l4"><h4>Knowledge Check</h4><p>Completing the Reactive Dog Recovery Program means:</p><div class="quiz-options"><button class="qo" data-correct="false">The dog's reactivity is permanently cured and no further management is needed</button><button class="qo" data-correct="true">The owner has built a comprehensive understanding, toolkit and sustainable routine — recovery is ongoing but the foundation is solid and the trajectory is positive</button><button class="qo" data-correct="false">The dog is ready to attend off-lead group classes immediately</button></div></div>`}
    ]
  }
];
FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_3_MODULES);

/* ═══════════════════════════════════════════════════════════
   COURSE 5 — ELITE COMPANION DOG PROGRAM
   Module IDs: c5_m1 – c5_m5 (condensed)
═══════════════════════════════════════════════════════════ */
var COURSE_5_MODULES = [
  {
    id:'c5_m1',n:1,emoji:'💎',courseId:'elite-companion',courseName:'Elite Companion Dog',
    name:'Elite Foundations',
    desc:'Build the communication framework, focus and calmness that underpins elite companion behaviour.',
    lessons:[
      {id:'c5_m1_l1',name:'The Elite Companion Standard',desc:'Understand what elite companion behaviour looks and feels like in daily life.',xp:80,tip:'Elite is not about perfection — it is about reliability, calmness and genuine partnership.',
       content:`<h3>What Elite Companion Means</h3><p>An elite companion dog is reliable, calm and appropriate in every environment — from restaurants to family gatherings. The standard is high but entirely achievable.</p><h4>The Four Pillars</h4><ul><li><strong>Reliability:</strong> Skills work in all environments.</li><li><strong>Calmness:</strong> Default emotional state is settled, not aroused.</li><li><strong>Responsiveness:</strong> Checks in frequently, responds to soft low-energy cues.</li><li><strong>Discretion:</strong> Does not draw negative attention — an invisible, well-behaved presence.</li></ul><div class="lesson-quiz" data-lesson="c5_m1_l1"><h4>Knowledge Check</h4><p>What distinguishes an elite companion dog from a competition-trained dog?</p><div class="quiz-options"><button class="qo" data-correct="false">Elite companions know more commands</button><button class="qo" data-correct="true">Elite companion behaviour is defined by reliability, calmness and appropriateness across real-life environments — not performance scores</button><button class="qo" data-correct="false">Competition dogs are always better trained</button></div></div>`},
      {id:'c5_m1_l2',name:'Advanced Focus and Engagement',desc:'Build laser-focus and willing engagement that holds even in high-distraction environments.',xp:80,tip:'A dog that chooses to engage with you over the environment has made you the most interesting thing in their world.',
       content:`<h3>Building Voluntary Engagement</h3><p>Elite companion behaviour begins with a dog that actively chooses to engage with their handler rather than the environment. This is built through making every interaction deeply rewarding.</p><h4>The Engagement Game</h4><ol><li>Stand with your dog in mild distraction. Treats in pocket — do not show them.</li><li>Wait. Say nothing. Do nothing.</li><li>The moment your dog makes voluntary eye contact — mark and deliver a high-value reward.</li><li>Return to neutral. Wait again.</li><li>Over sessions, the dog learns that looking at you earns reward — and begins offering eye contact more frequently.</li></ol><div class="lesson-quiz" data-lesson="c5_m1_l2"><h4>Knowledge Check</h4><p>Why should you not show treats when building voluntary engagement?</p><div class="quiz-options"><button class="qo" data-correct="false">Dogs don't respond to treats in distracting environments</button><button class="qo" data-correct="true">You want the dog to choose engagement intrinsically — treats shown or cues given create compliance, not genuine voluntary focus</button><button class="qo" data-correct="false">Cues should only be given when the dog is already focused</button></div></div>`},
      {id:'c5_m1_l3',name:'Precision Heel',desc:'Develop a polished, effortless heel position that looks and feels elegant in any setting.',xp:90,tip:'Precision heel is not about control — it is about partnership. Done right, it feels like dancing.',
       content:`<h3>The Elegant Heel</h3><p>Precision heeling — a dog that moves beautifully at their handler's side, matching pace, maintaining position and checking in regularly, without tension in the lead — requires hundreds of rewarded repetitions but produces results that turn heads for the right reasons.</p><h4>Building Heel Position</h4><ol><li>Mark and reward your dog for standing at your left side.</li><li>Take one step. Dog maintains position → mark and reward. If not → stop, reset, try again.</li><li>Gradually build: 2 steps → 5 → 10 → 20 steps before marking.</li><li>Add changes of pace (slow, normal, fast) and direction (left, right, about turn).</li><li>Begin in low distraction. Add distraction only when 90% reliable.</li></ol><div class="lesson-quiz" data-lesson="c5_m1_l3"><h4>Knowledge Check</h4><p>When adding distraction to heel training, what should you do to duration between rewards?</p><div class="quiz-options"><button class="qo" data-correct="false">Increase it — the dog should heel longer in distracting environments</button><button class="qo" data-correct="true">Reduce it — adding distraction is a new challenge, and increasing reward frequency keeps focus high while the dog adjusts</button><button class="qo" data-correct="false">Keep it the same to maintain consistency</button></div></div>`},
      {id:'c5_m1_l4',name:'The Default Down',desc:'Install a rock-solid default down that your dog offers automatically in any static situation.',xp:90,tip:'A dog that downs automatically when you stop moving makes every public situation effortless.',
       content:`<h3>The Most Useful Behaviour You Can Teach</h3><p>The default down — where a dog automatically settles into a down position whenever their handler stops moving — is perhaps the single most practically useful behaviour for an elite companion dog.</p><h4>Teaching the Default Down</h4><ol><li>Every time you stop moving, immediately ask for a down. Mark and reward generously.</li><li>After 50–100 repetitions, begin pausing before asking — wait 3 seconds. If the dog offers the down without the cue: jackpot reward.</li><li>Progressively extend the pre-cue pause until the dog offers the down automatically every time you stop.</li><li>Proof in multiple environments.</li></ol><div class="lesson-quiz" data-lesson="c5_m1_l4"><h4>Knowledge Check</h4><p>How do you progress from a cued down to a default (automatic) down?</p><div class="quiz-options"><button class="qo" data-correct="false">Remove the reward so the dog learns to down without expecting payment</button><button class="qo" data-correct="true">Gradually extend the pause before giving the cue, heavily rewarding the dog when they offer the down before the cue is given</button><button class="qo" data-correct="false">Use a different cue word to signal the automatic down</button></div></div>`}
    ]
  },
  {
    id:'c5_m2',n:2,emoji:'🌿',courseId:'elite-companion',courseName:'Elite Companion Dog',
    name:'Off Lead Reliability',
    desc:'Build the off-lead reliability that gives your dog freedom and you complete peace of mind.',
    lessons:[
      {id:'c5_m2_l1',name:'Off Lead Foundations',desc:'Establish the trust, skills and safety protocols needed before any dog goes off lead.',xp:90,tip:'Off lead is a privilege earned through training — not a right given through optimism.',
       content:`<h3>Before You Unclip</h3><h4>The Off Lead Readiness Checklist</h4><ul><li>Recall reliability on long line: 95%+ across 3 different environments</li><li>Voluntary check-in rate: minimum 1 per minute in moderate distraction</li><li>Response to emergency stop cue from 20m+</li><li>No high-level trigger reactivity on lead</li><li>Good frustration tolerance</li></ul><div class="lesson-quiz" data-lesson="c5_m2_l1"><h4>Knowledge Check</h4><p>What recall reliability should be achieved on a long line before removing it?</p><div class="quiz-options"><button class="qo" data-correct="false">70% — the majority of the time</button><button class="qo" data-correct="false">80% — most training standards accept this</button><button class="qo" data-correct="true">95%+ across multiple environments — safety off lead demands near-perfect reliability</button></div></div>`},
      {id:'c5_m2_l2',name:'Emergency Stop and Down at Distance',desc:'Train a reliable emergency stop that works at 30m+ in high distraction.',xp:100,tip:'The emergency stop is the skill that could save your dog\'s life. Practise it 1,000 times before you need it once.',
       content:`<h3>The Life-Saving Stop</h3><h4>Training the Emergency Down</h4><ol><li>Choose a distinct cue: "DOWN!" in a sharp, clear tone different from your everyday cue.</li><li>Begin at 1 metre. Cue "DOWN!" → dog downs immediately → jackpot reward.</li><li>Gradually increase distance: 3m → 5m → 10m → 20m → 30m.</li><li>Only increase distance when 100% reliable at the previous level.</li><li>Add movement: dog walking → cue. Then trotting → cue. Then running → cue.</li></ol><h4>Maintaining Reliability</h4><p>Practise the emergency stop 5 times per week for life. Never let it go unpractised for more than 2 weeks.</p><div class="lesson-quiz" data-lesson="c5_m2_l2"><h4>Knowledge Check</h4><p>Why should the emergency stop cue be distinctly different from the everyday down cue?</p><div class="quiz-options"><button class="qo" data-correct="false">To avoid confusing the dog during regular training</button><button class="qo" data-correct="true">In a genuine emergency the dog must respond instantly — a sharp, distinct cue fires a conditioned reflex, while an everyday cue may require processing time</button><button class="qo" data-correct="false">Two cues for the same behaviour help the dog generalise</button></div></div>`},
      {id:'c5_m2_l3',name:'Off Lead in High Distraction',desc:'Proof off-lead reliability across the highest distraction environments.',xp:100,tip:'A dog that comes back reliably when a squirrel runs past is a dog you can trust anywhere.',
       content:`<h3>The Distraction Gauntlet</h3><h4>Distraction Proofing Protocol</h4><ol><li>Identify your dog's top 5 distraction triggers when off lead.</li><li>Set up controlled exposures at a level where the dog notices but doesn't chase/react.</li><li>Recall from this controlled exposure. Jackpot every success.</li><li>Gradually increase distraction intensity as reliability grows.</li><li>Never go off lead in a new high-distraction environment without first testing recall on a long line there.</li></ol><h4>The Recall Party</h4><p>Every off-lead recall must result in the best moment of your dog's day — genuine celebration, highest-value treat, a brief play session.</p><div class="lesson-quiz" data-lesson="c5_m2_l3"><h4>Knowledge Check</h4><p>Before going off lead in a new high-distraction environment, what should you always do first?</p><div class="quiz-options"><button class="qo" data-correct="false">Do a brief warm-up walk to assess the environment</button><button class="qo" data-correct="true">Test recall on a long line in that specific environment until reliability is confirmed</button><button class="qo" data-correct="false">Only go off lead if no other dogs are present</button></div></div>`},
      {id:'c5_m2_l4',name:'Off Lead Etiquette',desc:'Model excellent off-lead etiquette that keeps your dog safe and other people comfortable.',xp:80,tip:'A well-mannered off-lead dog reflects on every dog owner. Set the standard.',
       content:`<h3>Off Lead Etiquette Rules</h3><ul><li>Never allow your dog to rush at an on-lead dog</li><li>Recall your dog any time another owner asks — even if your dog is friendly</li><li>Wide berth around children — always</li><li>Livestock = lead on, every time. No exceptions.</li><li>Leave no trace: bag all waste, leave gates as you found them</li></ul><div class="lesson-quiz" data-lesson="c5_m2_l4"><h4>Knowledge Check</h4><p>Another owner asks you to call your dog away. Your dog is friendly. What do you do?</p><div class="quiz-options"><button class="qo" data-correct="false">Explain your dog is friendly and allow the interaction</button><button class="qo" data-correct="true">Recall your dog immediately — the other owner's request must always be respected regardless of your dog's temperament</button><button class="qo" data-correct="false">Recall only if the other dog appears nervous</button></div></div>`}
    ]
  },
  {
    id:'c5_m3',n:3,emoji:'🏙️',courseId:'elite-companion',courseName:'Elite Companion Dog',
    name:'Public Access Mastery',
    desc:'Train flawless public access behaviour across every environment.',
    lessons:[
      {id:'c5_m3_l1',name:'Navigating Busy Environments',desc:'Build confident, calm movement through crowded urban environments.',xp:90,tip:'A dog that navigates a busy high street calmly has been prepared, not just exposed.',
       content:`<h3>The Urban Dog</h3><p>Busy urban environments present a complex combination of challenges: erratic pedestrian movement, sudden sounds, food smells, other dogs, cyclists, narrow pavements. Elite public access behaviour requires the dog to be genuinely comfortable in all of these simultaneously.</p><h4>Desensitisation Programme</h4><ol><li>Begin at the quietest edge of your target environment — early morning, minimal traffic.</li><li>Walk, mark and reward calm behaviour frequently. Duration: 10 minutes.</li><li>Progressively increase foot traffic and noise levels across sessions over weeks.</li><li>Introduce specific challenges: sitting calmly as a cyclist passes, pausing as a bus accelerates nearby.</li></ol><div class="lesson-quiz" data-lesson="c5_m3_l1"><h4>Knowledge Check</h4><p>When beginning urban environment training, what conditions should you start with?</p><div class="quiz-options"><button class="qo" data-correct="false">The busiest environment possible for maximum exposure</button><button class="qo" data-correct="true">The quietest version of your target environment — low traffic, low noise — building up gradually</button><button class="qo" data-correct="false">Indoor environments only until fully trained</button></div></div>`},
      {id:'c5_m3_l2',name:'Café and Restaurant Behaviour',desc:'Build a reliable, long-duration settle that works in busy dining environments.',xp:100,tip:'A dog that settles quietly under a café table for two hours is the most socially welcome dog in any venue.',
       content:`<h3>The Gold Standard of Public Settling</h3><h4>Progression</h4><ol><li>Home dining table: settle mat under your table while you eat. 15 minutes. High reward rate.</li><li>Outdoor café, quiet period: 20-minute coffee. Low-distraction venue. Treat every 30–60 seconds.</li><li>Outdoor café, moderate period: 45 minutes. Reduce treat frequency gradually.</li><li>Indoor café: 20 minutes to restart — enclosed smell concentration is more challenging.</li><li>Full restaurant: dinner service, 60–90 minutes. Dog self-settling with minimal intervention.</li></ol><div class="lesson-quiz" data-lesson="c5_m3_l2"><h4>Knowledge Check</h4><p>Why is an indoor café more challenging than an outdoor café?</p><div class="quiz-options"><button class="qo" data-correct="false">There are more people present indoors</button><button class="qo" data-correct="true">Enclosed spaces concentrate food smells, create closer proximity to strangers, and reduce the dog's ability to see approaching triggers — all increasing cognitive demand</button><button class="qo" data-correct="false">Hard floors indoors are less comfortable for the dog</button></div></div>`},
      {id:'c5_m3_l3',name:'Public Transport and Vehicles',desc:'Train calm, confident behaviour on public transport and in vehicles.',xp:90,tip:'A dog that travels well is a dog that goes everywhere with you.',
       content:`<h3>Transport Training</h3><h4>Vehicle Desensitisation Steps</h4><ol><li>Dog comfortable near stationary vehicle: sits calmly, takes treats.</li><li>Dog comfortable entering and exiting: calm entry, calm settle.</li><li>Short journey (5 minutes) with treats flowing throughout.</li><li>Gradual duration increase: 10 → 20 → 45 → 60+ minutes.</li></ol><h4>Public Transport Protocol</h4><ul><li>Settle mat under the seat — creates a defined space signal</li><li>High-value rewards at high-stimulus moments (train departure, station announcements)</li><li>Position dog against the wall rather than in the aisle</li></ul><div class="lesson-quiz" data-lesson="c5_m3_l3"><h4>Knowledge Check</h4><p>Why is a settle mat useful on public transport?</p><div class="quiz-options"><button class="qo" data-correct="false">It prevents the dog from lying on upholstered seats</button><button class="qo" data-correct="true">It provides a familiar contextual cue that signals "this is a settle situation" — reducing anxiety through predictability in an unpredictable environment</button><button class="qo" data-correct="false">It is required by most transport operators</button></div></div>`},
      {id:'c5_m3_l4',name:'Accommodation and Staying Away',desc:'Prepare your dog for calm behaviour in hotels, holiday accommodation and friends\' homes.',xp:90,tip:'A dog that settles confidently in an unfamiliar environment overnight is a travel companion for life.',
       content:`<h3>Away From Home</h3><h4>Pre-Stay Preparation</h4><ul><li>Bring familiar bedding — the dog's scent on their own bed is calming</li><li>Bring the settle mat — the contextual cue for calm</li><li>Feed a meal on arrival before exploring — feeding promotes calm and creates positive association</li><li>Brief exploration on lead first — systematic investigation before free access</li></ul><h4>Building Overnight Confidence</h4><p>Practise with "mini stays" — visits to dog-friendly venues for 2–3 hours before building to overnight. Maintain the same sleeping setup as at home to reduce overnight anxiety.</p><div class="lesson-quiz" data-lesson="c5_m3_l4"><h4>Knowledge Check</h4><p>Why feed your dog a meal on arrival at new accommodation before allowing free exploration?</p><div class="quiz-options"><button class="qo" data-correct="false">To prevent the dog from chewing unfamiliar items when hungry</button><button class="qo" data-correct="true">Feeding promotes calm and creates a positive emotional association with the new environment — arriving and eating signals safety</button><button class="qo" data-correct="false">To maintain the regular feeding schedule</button></div></div>`}
    ]
  },
  {
    id:'c5_m4',n:4,emoji:'🤝',courseId:'elite-companion',courseName:'Elite Companion Dog',
    name:'Advanced Social Skills',
    desc:'Develop exceptional social skills with people, children, other dogs and animals.',
    lessons:[
      {id:'c5_m4_l1',name:'Greeting People of All Types',desc:'Train calm, appropriate greetings with every type of person your dog may encounter.',xp:90,tip:'A dog that greets a wheelchair user, a child and a man in a hi-vis jacket with equal calm has genuinely excellent social skills.',
       content:`<h3>Universal Social Confidence</h3><p>Many dogs greet familiar adults confidently but struggle with men in uniforms, people using mobility aids, children at unexpected angles, or people who move differently. Building universal social confidence requires systematic positive exposure to diversity.</p><h4>Priority Groups</h4><ul><li>Children of different ages (toddlers, school age, teenagers)</li><li>Elderly people with different mobility (walking sticks, frames, wheelchairs)</li><li>People in uniforms</li><li>People with accessories (hats, hoods, backpacks, umbrellas, prams)</li><li>People who move differently (runners, cyclists, people who limp)</li></ul><div class="lesson-quiz" data-lesson="c5_m4_l1"><h4>Knowledge Check</h4><p>Why might a dog confident with familiar adults be nervous around people in uniform?</p><div class="quiz-options"><button class="qo" data-correct="false">Dogs recognise authority figures instinctively</button><button class="qo" data-correct="true">Social confidence is context-specific — confident greetings with familiar people do not automatically transfer to unfamiliar categories. Each group requires its own positive exposure</button><button class="qo" data-correct="false">Dogs associate uniforms with vet visits</button></div></div>`},
      {id:'c5_m4_l2',name:'Polite Dog-to-Dog Interaction',desc:'Train appropriate, calm behaviour during on-lead and off-lead dog-to-dog interactions.',xp:90,tip:'Polite dog greeting is an arc and a sniff — not a face-to-face interrogation.',
       content:`<h3>The Polite Dog Greeting</h3><p>A polite greeting follows: arc approach, brief sniff at the rear, mutual assessment, disengagement or play invitation. Dogs that charge head-on or over-persist produce defensive reactions from other dogs.</p><h4>On-Lead Greeting Protocol</h4><ol><li>Approach in a wide arc — never head-on.</li><li>Allow a 3–5 second sniff maximum, then recall or disengage using their name.</li><li>Keep lead loose throughout — tight leads create tension.</li><li>If either dog stiffens or shows whale eye — disengage immediately.</li></ol><div class="lesson-quiz" data-lesson="c5_m4_l2"><h4>Knowledge Check</h4><p>Why should dogs approach each other in an arc rather than head-on?</p><div class="quiz-options"><button class="qo" data-correct="false">To give the handler room to move between them if needed</button><button class="qo" data-correct="true">A direct head-on approach is a challenge gesture in dog body language — an arc is non-threatening and allows mutual assessment without confrontation</button><button class="qo" data-correct="false">Because arcing reduces the risk of tangled leads</button></div></div>`},
      {id:'c5_m4_l3',name:'Children and Dogs — Excellence',desc:'Build exceptional, safe behaviour around children of all ages in all contexts.',xp:100,tip:'A dog that is genuinely safe and calm with children is one of the greatest gifts you can give a family.',
       content:`<h3>The Child-Dog Relationship</h3><h4>Skills Required Around Children</h4><ul><li>Calm greetings with no jumping even when the child is excited</li><li>Tolerates being approached at face level</li><li>Moves away calmly when over-stimulated</li><li>Ignores food held by children without mugging</li><li>Responds to cues even when children are running nearby</li></ul><h4>The Non-Negotiable Rule</h4><p>No child-dog interaction is ever fully unsupervised, regardless of how well-trained the dog is. This is not a reflection on the dog — it acknowledges children's unpredictability and the importance of safety.</p><div class="lesson-quiz" data-lesson="c5_m4_l3"><h4>Knowledge Check</h4><p>What is the non-negotiable rule regarding children and dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Children must always ask permission before approaching any dog</button><button class="qo" data-correct="true">No child-dog interaction is ever fully unsupervised — this applies to all dogs regardless of training history</button><button class="qo" data-correct="false">Dogs must be on lead whenever children are present</button></div></div>`},
      {id:'c5_m4_l4',name:'Other Animals and Wildlife',desc:'Train calm, appropriate responses to cats, livestock and wildlife.',xp:90,tip:'Prey drive is instinct — management and training together produce a dog that can be trusted around all animals.',
       content:`<h3>Multi-Species Social Skills</h3><h4>Cats and Household Animals</h4><ul><li>Introduction protocol: dog on lead, cat has exit route, treats for calm behaviour.</li><li>Cat must always have elevated escape options.</li><li>Build to off-lead coexistence through gradual, managed exposure over weeks.</li></ul><h4>Livestock</h4><ul><li>Lead on, every time, near livestock. No exceptions.</li><li>Practise calm walking past visible livestock at distance, treating calm behaviour.</li><li>The target: walk calmly on lead within 20 metres of grazing livestock without pulling or fixating.</li></ul><div class="lesson-quiz" data-lesson="c5_m4_l4"><h4>Knowledge Check</h4><p>Why must dogs always be on lead near livestock regardless of training level?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it is illegal to have a dog off lead near livestock</button><button class="qo" data-correct="true">Because livestock movement can trigger prey drive instinctively even in a well-trained dog — and a dog worrying livestock is a legal and safety emergency. The risk is never worth taking.</button><button class="qo" data-correct="false">Because livestock are frightened by the presence of dogs</button></div></div>`}
    ]
  },
  {
    id:'c5_m5',n:5,emoji:'🥇',courseId:'elite-companion',courseName:'Elite Companion Dog',
    name:'Elite Companion Certification',
    desc:'Demonstrate elite companion standard and earn your Four Paws Elite Companion Certificate.',
    lessons:[
      {id:'c5_m5_l1',name:'Full Programme Assessment',desc:'A comprehensive assessment across all modules of the Elite Companion Dog Program.',xp:150,tip:'This is everything you have worked for. Enter it with confidence.',
       content:`<h3>The Elite Companion Assessment</h3><h4>Assessment Components</h4><ul><li>Precision heel through a busy pedestrian area — 200 metres</li><li>Café settle — 45 minutes, indoor or outdoor</li><li>Off-lead recall with distraction (assessor's dog present at distance)</li><li>Emergency down at 20 metres</li><li>Stranger greeting during café settle — 3 different people</li><li>Leave it with food dropped at close range</li><li>Default down when handler stops — 5 different locations</li><li>Loose lead walk past another dog on lead</li></ul><h4>Scoring</h4><p>Distinction / Pass / Needs Development. Certification requires Pass or above in all components. Distinction in 6+ earns Elite Distinction status.</p><div class="lesson-quiz" data-lesson="c5_m5_l1"><h4>Knowledge Check</h4><p>What is required to achieve Elite Distinction status?</p><div class="quiz-options"><button class="qo" data-correct="false">A perfect score in every component</button><button class="qo" data-correct="true">Pass or above in ALL components, plus Distinction in 6 or more components</button><button class="qo" data-correct="false">Distinction in at least half of the components</button></div></div>`},
      {id:'c5_m5_l2',name:'Maintenance Plan',desc:'Build a long-term maintenance plan that keeps elite companion skills sharp for life.',xp:100,tip:'Elite is a standard you maintain, not a box you tick once.',
       content:`<h3>Skills Without Maintenance Fade</h3><h4>Daily Maintenance (5 minutes)</h4><ul><li>3 x precision heel repetitions on the morning walk</li><li>1 x recall from 20m+</li><li>1 x default down when stopping at a junction or shop</li></ul><h4>Weekly Maintenance</h4><ul><li>1 x café or outdoor venue visit</li><li>1 x off-lead session with recall practice</li><li>1 x new environment exposure</li></ul><h4>Monthly</h4><ul><li>Emergency down practice at maximum distance</li><li>Enrichment plan review and update</li><li>Progress notes: what is sharp, what needs work?</li></ul><div class="lesson-quiz" data-lesson="c5_m5_l2"><h4>Knowledge Check</h4><p>How frequently should the emergency down be practised as maintenance?</p><div class="quiz-options"><button class="qo" data-correct="false">Only when you feel it has become unreliable</button><button class="qo" data-correct="true">Monthly at minimum — this is a safety-critical skill that must be maintained even when everything else is running smoothly</button><button class="qo" data-correct="false">Once a year at the annual assessment</button></div></div>`},
      {id:'c5_m5_l3',name:'Becoming an Ambassador',desc:'Use your elite companion dog to positively represent responsible dog ownership in your community.',xp:100,tip:'Every time your well-behaved dog impresses someone in public, you make it easier for every dog owner who comes after you.',
       content:`<h3>The Ripple Effect</h3><p>An elite companion dog is more than a well-trained animal — it is an ambassador for responsible dog ownership, force-free training and the genuine capability of domestic dogs.</p><h4>Being an Ambassador Means</h4><ul><li>Always managing your dog to the standard — especially in public</li><li>Sharing knowledge generously when someone asks "how did you train them to do that?"</li><li>Advocating for force-free training — gently, not preachy. A demonstration is worth a thousand arguments.</li><li>Supporting dog-friendly venues — leave reviews, thank staff who welcome dogs</li></ul><div class="lesson-quiz" data-lesson="c5_m5_l3"><h4>Knowledge Check</h4><p>Why is a well-behaved dog in public more powerful than any verbal argument for force-free training?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it shows the dog is trained to competition standard</button><button class="qo" data-correct="true">Because a visible demonstration of genuine, reliable, relationship-based training is immediately convincing in a way that theoretical arguments never are</button><button class="qo" data-correct="false">Because it embarrasses owners of poorly trained dogs</button></div></div>`},
      {id:'c5_m5_l4',name:'Certification and Recognition',desc:'Celebrate your Elite Companion Dog certification — the highest standard in the Four Paws Academy.',xp:200,tip:'You built something remarkable. Both of you.',
       content:`<h3>Elite Companion Dog — Certified</h3><p>Completing the Elite Companion Dog Program is the highest achievement in the Four Paws Training & Enrichment Academy. You have built something remarkable.</p><h4>What Your Certificate Confirms</h4><ul><li>Precision heel in real-world environments</li><li>Off-lead reliability including emergency stop at distance</li><li>Flawless public access behaviour across retail, transport and dining environments</li><li>Universal social skills with people, children, dogs and animals</li><li>Long-term maintenance plan in place</li><li>Ethical, force-free methodology throughout</li></ul><h4>What Comes Next</h4><p>Many graduates explore dog sports (Rally Obedience, Trick Dog trials, Heelwork to Music), community volunteering (Pets as Therapy visits), or simply the joy of living with the most wonderful companion they have ever had. Whatever you choose — enjoy every moment of it.</p><div class="lesson-quiz" data-lesson="c5_m5_l4"><h4>Knowledge Check</h4><p>The Elite Companion Dog certification represents:</p><div class="quiz-options"><button class="qo" data-correct="false">A dog that never makes mistakes in any situation</button><button class="qo" data-correct="true">A dog and owner team that has demonstrated reliable, relationship-based, force-free excellence across every domain of real-world companion dog life</button><button class="qo" data-correct="false">Competition-level obedience ready for Kennel Club events</button></div></div>`}
    ]
  }
];
FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_5_MODULES);

/* ─── /app/fp-courses-part3.js ─── */
/* ═══════════════════════════════════════════════════════════
   COURSE 4 — CANINE ENRICHMENT SPECIALIST PROGRAM
   Module IDs: c4_m1 – c4_m5
═══════════════════════════════════════════════════════════ */

var COURSE_4_MODULES = [
  {
    id:'c4_m1', n:1, emoji:'🔬', courseId:'enrichment-specialist', courseName:'Canine Enrichment Specialist',
    name:'Science of Enrichment',
    desc:'Understand the neuroscience behind enrichment and why it is essential, not optional, for every dog.',
    lessons:[
      {
        id:'c4_m1_l1', name:'Why Enrichment Matters',
        desc:'Discover the science that proves enrichment fundamentally changes a dog\'s brain and behaviour.',
        xp:70,
        tip:'Enrichment is not a treat — it is a biological need. A dog without it will find their own solutions, and you won\'t like them.',
        content:`<h3>The Enriched Brain</h3>
<p>Neuroscience research consistently shows that animals in enriched environments develop denser neural networks, recover from stress more quickly, and show fewer compulsive or destructive behaviours than those in barren environments. Enrichment is not a luxury — it is a neurological necessity.</p>
<h4>The SEEKING System</h4>
<p>Dogs possess a powerful SEEKING system — a neurological drive to search, explore, investigate and acquire. This system, driven by dopamine, produces deep satisfaction when activated and restlessness, anxiety and destructive behaviour when chronically under-stimulated. Every enrichment activity you provide activates the SEEKING system and produces genuine neurochemical wellbeing.</p>
<h4>The Five Domains of Welfare</h4>
<ul><li><strong>Nutrition:</strong> Quality food, appropriate quantity, how it is delivered.</li><li><strong>Environment:</strong> Safe, stimulating, appropriate physical space.</li><li><strong>Health:</strong> Physical wellbeing, pain management, veterinary care.</li><li><strong>Behaviour:</strong> Opportunity to perform natural behaviours — this is where enrichment lives.</li><li><strong>Mental State:</strong> The cumulative emotional experience of living in your home.</li></ul>
<h4>Practical Exercise</h4>
<p>Audit your dog's current daily life against the Five Domains. Score each domain 1–5. Any domain scoring below 3 is a priority for this programme.</p>
<h4>Owner Homework</h4>
<p>Complete the Five Domains audit and share it with your trainer. Identify the two lowest-scoring domains and research one enrichment activity that would specifically improve each one.</p>
<div class="lesson-quiz" data-lesson="c4_m1_l1"><h4>Knowledge Check</h4><p>What is the SEEKING system and why is it relevant to enrichment?</p><div class="quiz-options"><button class="qo" data-correct="false">A training method that uses treats to teach dogs to search for hidden objects</button><button class="qo" data-correct="true">A neurological drive powered by dopamine that motivates searching and exploration — enrichment activates it and produces genuine wellbeing</button><button class="qo" data-correct="false">The dog's instinct to seek attention from their owner</button></div></div>`
      },
      {
        id:'c4_m1_l2', name:'Types of Enrichment',
        desc:'Master the six categories of enrichment and learn how to balance them for your individual dog.',
        xp:70,
        tip:'Variety is the key — rotate enrichment types so the SEEKING system never gets bored.',
        content:`<h3>The Six Enrichment Categories</h3>
<p>Enrichment is not just puzzle feeders. A comprehensive enrichment programme covers six distinct categories, each targeting different aspects of the dog's behavioural and psychological needs.</p>
<h4>1. Nutritional Enrichment</h4>
<p>HOW food is delivered, not just what food is given. Scatter feeding, lick mats, stuffed Kongs, snuffle mats, puzzle feeders, freeze-dried food trails — all transform eating from a 30-second event into a 10–20 minute stimulating experience.</p>
<h4>2. Sensory Enrichment</h4>
<p>Engaging all senses — not just sight. Novel scents, soundscapes, textures to walk on, new visual environments, safe materials to mouth and explore.</p>
<h4>3. Cognitive Enrichment</h4>
<p>Problem-solving activities that require the dog to think. Puzzle feeders, object permanence games, discrimination tasks, trick training sequences.</p>
<h4>4. Social Enrichment</h4>
<p>Appropriate interaction with people, dogs and other animals. Quality one-to-one human interaction, carefully managed dog-dog play, observation of other animals.</p>
<h4>5. Physical Enrichment</h4>
<p>Movement that is purposeful and varied — not just a lead walk. Digging pits, paddling pools, agility equipment, balance boards, terrain variety.</p>
<h4>6. Occupational Enrichment</h4>
<p>Activities that allow the dog to perform their breed-specific natural behaviours. Retrieving, herding games, tracking, searching, pulling, digging.</p>
<h4>Owner Homework</h4>
<p>Over the next 6 days, try one activity from each category. Rate your dog's engagement level (1–10) for each. By the end of the week you will have a clear profile of your dog's enrichment preferences.</p>
<div class="lesson-quiz" data-lesson="c4_m1_l2"><h4>Knowledge Check</h4><p>Which enrichment category specifically addresses a dog's need to perform breed-specific natural behaviours?</p><div class="quiz-options"><button class="qo" data-correct="false">Cognitive enrichment</button><button class="qo" data-correct="false">Sensory enrichment</button><button class="qo" data-correct="true">Occupational enrichment</button></div></div>`
      },
      {
        id:'c4_m1_l3', name:'Reading Enrichment Engagement',
        desc:'Learn to assess whether your dog is genuinely engaged and benefiting from enrichment activities.',
        xp:60,
        tip:'A dog that walks away from an enrichment activity after 30 seconds is telling you something important — listen.',
        content:`<h3>Not All Engagement Is Equal</h3>
<p>Providing enrichment is only valuable if the dog is actually engaging with it in a way that activates the SEEKING system. A dog that sniffs a puzzle feeder for 5 seconds and walks away, or that becomes frustrated and shuts down, is not receiving the intended benefit.</p>
<h4>Signs of Genuine Engagement</h4>
<ul><li>Focused attention on the activity for sustained periods</li><li>Active problem-solving behaviours (pawing, nosing, repositioning)</li><li>Loose, fluid body language — no tension</li><li>Returning to the activity repeatedly without prompting</li><li>Relaxed body and calm demeanour after the activity ends</li></ul>
<h4>Signs of Poor Engagement</h4>
<ul><li>Abandoning the activity quickly and moving away</li><li>Frustrated behaviour — barking at the feeder, pawing aggressively</li><li>Seeking handler attention instead of engaging with the activity</li><li>Over-aroused, unable to settle into the task</li><li>Ignoring the activity completely</li></ul>
<h4>Adjusting for Your Dog</h4>
<p>Poor engagement usually means the activity is either too hard (increase accessibility — make rewards easier to get), too easy (add complexity), or simply not the right type for this dog (try a different category). The goal is sustained, joyful engagement — not struggle.</p>
<h4>Owner Homework</h4>
<p>Film your dog engaging with three different enrichment activities this week. Review each film and score engagement quality (1–10) using the criteria above. Adjust one activity based on your observations and re-test.</p>
<div class="lesson-quiz" data-lesson="c4_m1_l3"><h4>Knowledge Check</h4><p>Your dog becomes frustrated and starts barking at a puzzle feeder. What should you do?</p><div class="quiz-options"><button class="qo" data-correct="false">Encourage them to keep trying — persistence is part of the benefit</button><button class="qo" data-correct="true">Make the puzzle easier so the dog can succeed and experience reward — frustration shuts down the SEEKING system rather than activating it</button><button class="qo" data-correct="false">Remove the puzzle feeder permanently as it is not suitable for this dog</button></div></div>`
      },
      {
        id:'c4_m1_l4', name:'Safety in Enrichment',
        desc:'Understand the safety considerations for all enrichment activities and materials.',
        xp:60,
        tip:'Enrichment should activate curiosity, not create hazards. Every new activity deserves a safety check first.',
        content:`<h3>Safety Is Non-Negotiable</h3>
<p>Enrichment activities involve novel materials, foods, and environments — all of which carry safety considerations. A well-designed enrichment programme accounts for safety at every stage without being so cautious that it becomes restrictive.</p>
<h4>Food Safety Checklist</h4>
<ul><li>No toxic foods: grapes, raisins, onions, garlic, xylitol (in peanut butter), macadamia nuts, chocolate, avocado.</li><li>Appropriate portion sizes — enrichment food counts toward daily calorie allowance.</li><li>Supervise new food introductions for allergic reactions.</li><li>Frozen treats in hot weather — monitor for gulping and bloat risk in deep-chested breeds.</li></ul>
<h4>Physical Safety Checklist</h4>
<ul><li>No small pieces that can be swallowed — check puzzle feeders for broken parts regularly.</li><li>No rubber toys that can be chewed into chunks — replace when damaged.</li><li>Supervise all novel material introductions until chewing behaviour is known.</li><li>Check outdoor enrichment areas for hazards: toxic plants, sharp objects, escape routes.</li></ul>
<h4>Supervision Tiers</h4>
<ul><li><strong>Full supervision required:</strong> New activities, novel materials, all activities for puppies under 6 months.</li><li><strong>Periodic supervision:</strong> Known activities with established safety record for this dog.</li><li><strong>Unsupervised approved:</strong> Activities specifically assessed as safe for this individual dog alone.</li></ul>
<h4>Owner Homework</h4>
<p>Review every enrichment activity your dog currently has access to against the safety checklists above. Remove any items that fail the check and replace them with a safe alternative. Document your safety review.</p>
<div class="lesson-quiz" data-lesson="c4_m1_l4"><h4>Knowledge Check</h4><p>Which of the following ingredients must always be checked on peanut butter labels before using it as enrichment?</p><div class="quiz-options"><button class="qo" data-correct="false">Added sugar</button><button class="qo" data-correct="true">Xylitol — an artificial sweetener that is toxic to dogs</button><button class="qo" data-correct="false">Palm oil</button></div></div>`
      }
    ]
  },
  {
    id:'c4_m2', n:2, emoji:'🍖', courseId:'enrichment-specialist', courseName:'Canine Enrichment Specialist',
    name:'Food Enrichment',
    desc:'Transform every meal and snack into a stimulating, rewarding experience that feeds body and mind.',
    lessons:[
      {
        id:'c4_m2_l1', name:'Scatter Feeding and Lick Mats',
        desc:'The simplest enrichment tools deliver some of the most powerful neurological benefits.',
        xp:60,
        tip:'Scatter feeding for 5 minutes produces more genuine calm than a 20-minute lead walk. Use it daily.',
        content:`<h3>The Power of Simple</h3>
<p>Two of the most effective enrichment tools available are also the simplest: scatter feeding and lick mats. Both activate the SEEKING system and the parasympathetic nervous system simultaneously — combining stimulation with deep calm.</p>
<h4>Scatter Feeding</h4>
<p>Instead of feeding from a bowl, scatter your dog's meal across a patch of grass or a snuffle mat. The dog must use their nose to locate each individual piece. This activates the olfactory system, which is directly linked to calm, focused dopamine release. A dog that scatter feeds their breakfast is meaningfully calmer for 2–3 hours afterward than a dog fed from a bowl.</p>
<h4>Lick Mats</h4>
<p>Spreadable foods (plain yoghurt, peanut butter without xylitol, pumpkin puree, wet food, mashed banana) spread onto a textured rubber mat. The rhythmic licking action releases endorphins and is highly calming. Freeze the mat for extended duration — a frozen lick mat can last 20–30 minutes.</p>
<h4>Recipes to Try</h4>
<ul><li>Plain Greek yoghurt + blueberries + a smear of peanut butter (xylitol-free)</li><li>Wet food + cucumber slices pressed in</li><li>Pumpkin puree + a few pieces of kibble pressed in</li><li>Mashed banana + plain cooked chicken pieces</li></ul>
<h4>Owner Homework</h4>
<p>Replace your dog's bowl feeding with scatter feeding for 5 days this week. Keep a daily note on your dog's post-meal behaviour and overall calmness level. Compare to bowl-feeding baseline.</p>
<div class="lesson-quiz" data-lesson="c4_m2_l1"><h4>Knowledge Check</h4><p>Why does lick mat use produce a calming effect?</p><div class="quiz-options"><button class="qo" data-correct="false">Because the dog is lying down while using it</button><button class="qo" data-correct="true">Because the rhythmic licking action releases endorphins and activates the parasympathetic nervous system</button><button class="qo" data-correct="false">Because the food on the lick mat contains calming nutrients</button></div></div>`
      },
      {
        id:'c4_m2_l2', name:'Kong Stuffing and Frozen Feeders',
        desc:'Master Kong stuffing and frozen feeder preparation for sustained, rewarding food enrichment.',
        xp:70,
        tip:'Batch-make 5 frozen Kongs on Sunday. You\'ll thank yourself every weekday morning.',
        content:`<h3>The Kong — A Classic for Good Reason</h3>
<p>The stuffed Kong is one of the most versatile enrichment tools available. When properly stuffed and frozen, it provides 20–45 minutes of focused, rewarding activity that calms, stimulates and satisfies simultaneously. Most dogs do not use Kong enrichment to its full potential because owners don't stuff or freeze them correctly.</p>
<h4>Stuffing Technique</h4>
<ol><li>Block the small hole at the top with a small piece of meat or a chunk of carrot.</li><li>Fill with a mixture of your dog's regular food, wet food, and a binding agent (yoghurt, pumpkin, mashed banana).</li><li>Pack firmly but not so tight the dog cannot get anything out — early success is motivating.</li><li>Top with a high-value smear visible at the large opening (peanut butter, cream cheese, fish paste).</li><li>Freeze for minimum 4 hours — overnight is ideal.</li></ol>
<h4>Difficulty Progression</h4>
<ul><li><strong>Beginner:</strong> Unfrozen, loosely packed — food falls out easily.</li><li><strong>Intermediate:</strong> Frozen with mixed contents.</li><li><strong>Advanced:</strong> Double-frozen, tightly packed with complex contents including larger pieces.</li></ul>
<h4>Other Frozen Feeders</h4>
<p>Ice cube trays (food frozen in ice), carrot sticks frozen in broth, stuffed trachea or hooves, frozen marrow bones — all provide sustained food enrichment appropriate for different dogs and budgets.</p>
<h4>Owner Homework</h4>
<p>Make a batch of 3 stuffed, frozen Kongs this week using the technique above. Offer one per day on three consecutive days. Time your dog's engagement with each. Note which recipes produce the longest engagement.</p>
<div class="lesson-quiz" data-lesson="c4_m2_l2"><h4>Knowledge Check</h4><p>Why is freezing a stuffed Kong more beneficial than offering it at room temperature?</p><div class="quiz-options"><button class="qo" data-correct="false">Because frozen food is healthier than room temperature food</button><button class="qo" data-correct="true">Because freezing significantly extends the duration of engagement, providing longer sustained activation of the SEEKING system</button><button class="qo" data-correct="false">Because it prevents the dog from eating the food too fast</button></div></div>`
      },
      {
        id:'c4_m2_l3', name:'Puzzle Feeders and Snuffle Mats',
        desc:'Use puzzle feeders and snuffle mats to create cognitive food challenges at the right difficulty level.',
        xp:70,
        tip:'Choose puzzle difficulty based on your dog\'s confidence, not intelligence — a nervous dog needs easy wins.',
        content:`<h3>Food + Thinking = Enrichment Gold</h3>
<p>Puzzle feeders and snuffle mats combine the SEEKING system activation of food with the additional cognitive engagement of problem-solving. Research shows that animals who work for food show higher levels of satisfaction and lower levels of anxiety than those who receive food freely — even when the free food is nutritionally identical.</p>
<h4>Puzzle Feeder Levels</h4>
<ul><li><strong>Level 1:</strong> Food visible, simple one-step movement to access (sliding cover, lift-and-find).</li><li><strong>Level 2:</strong> Food partially hidden, two-step solution (slide then lift, rotate then reveal).</li><li><strong>Level 3:</strong> Food hidden, multi-step solution requiring sequence memory.</li><li><strong>Level 4:</strong> Novel puzzles requiring problem-solving transfer from previous experiences.</li></ul>
<h4>Snuffle Mats</h4>
<p>A rubber base with fleece strips tied through it — food is buried in the strips and the dog must use their nose to locate it. Highly effective for anxious or reactive dogs as the sniffing action is neurologically calming. Easy to make at home: rubber bath mat with holes + cut fleece strips.</p>
<h4>Rotation is Essential</h4>
<p>Novelty is a core component of enrichment value. Rotate puzzles weekly so the dog encounters familiar and novel challenges. Store puzzles in rotation so each feels relatively new when it reappears.</p>
<h4>Owner Homework</h4>
<p>Assess your dog's current puzzle feeder level. If they complete their current puzzle in under 2 minutes, move to the next level. If they disengage within 30 seconds, drop a level. Adjust and re-test this week.</p>
<div class="lesson-quiz" data-lesson="c4_m2_l3"><h4>Knowledge Check</h4><p>Research shows that animals who work for food compared to those who receive it freely demonstrate:</p><div class="quiz-options"><button class="qo" data-correct="false">Higher stress and lower contentment</button><button class="qo" data-correct="true">Higher levels of satisfaction and lower levels of anxiety</button><button class="qo" data-correct="false">No measurable difference in wellbeing outcomes</button></div></div>`
      },
      {
        id:'c4_m2_l4', name:'Food Trails and Foraging Games',
        desc:'Take food enrichment outdoors with scent trails, buried treasure, and natural foraging activities.',
        xp:80,
        tip:'A 10-minute foraging session in long grass is neurologically equivalent to an hour of physical exercise. Use it.',
        content:`<h3>Foraging — The Ultimate Food Enrichment</h3>
<p>Dogs evolved as scavengers and opportunistic foragers. Their olfactory system — with 300 million scent receptors compared to our 5 million — is built for this work. Foraging activities engage the system at its deepest level, producing profound satisfaction and calm.</p>
<h4>Garden Foraging Setup</h4>
<ol><li>Take a handful of your dog's kibble or high-value treats.</li><li>Let the dog watch you scatter them across a section of garden or long grass.</li><li>Release with "find it" and watch them work.</li><li>Gradually increase the area and reduce the density as they become more skilled.</li><li>Progress to scattering without the dog watching — they must work from scent alone.</li></ol>
<h4>Buried Treasure</h4>
<p>Bury food items in a sandpit or soft soil. The digging and discovery combination is particularly satisfying for terrier breeds and any dog with high prey or food drive. Supervise initially to ensure the dog doesn't eat non-food items.</p>
<h4>Scent Trails</h4>
<p>Drag a high-value food item along a winding trail in the garden or on a walk. Allow the dog to follow the trail by nose. Start with straight, short trails and progress to longer, more complex routes. This is the foundation of formal nose work and tracking.</p>
<h4>Owner Homework</h4>
<p>Set up a garden foraging session every morning this week using one of the three methods above. Rotate between them. Time each session — record how long your dog forages before self-selecting to stop. Note post-foraging calmness compared to non-foraging days.</p>
<div class="lesson-quiz" data-lesson="c4_m2_l4"><h4>Knowledge Check</h4><p>Approximately how many scent receptors does a dog have compared to a human?</p><div class="quiz-options"><button class="qo" data-correct="false">10 million vs 5 million — about double</button><button class="qo" data-correct="true">300 million vs 5 million — sixty times more</button><button class="qo" data-correct="false">50 million vs 5 million — ten times more</button></div></div>`
      }
    ]
  },
  {
    id:'c4_m3', n:3, emoji:'👃', courseId:'enrichment-specialist', courseName:'Canine Enrichment Specialist',
    name:'Sensory Enrichment',
    desc:'Engage all of your dog\'s senses — not just smell — for a fully rounded enrichment programme.',
    lessons:[
      {
        id:'c4_m3_l1', name:'Scent Work and Nose Games',
        desc:'Harness your dog\'s extraordinary olfactory system with structured scent games.',
        xp:80,
        tip:'When you give a dog permission to use their nose fully, you give them their superpower back.',
        content:`<h3>The Nose Knows</h3>
<p>Scent work is the single most neurologically satisfying activity available to most dogs. It engages the primary sense, activates the SEEKING system, and produces a deep, sustained calm that no other activity matches. Even 5 minutes of structured nose work can measurably reduce a dog's cortisol level.</p>
<h4>Introduction to Nose Games</h4>
<ol><li><strong>Which hand:</strong> Hide a treat in one closed fist. Present both hands. When the dog nose-targets the correct hand, open and reward. Progresses rapidly — most dogs master this in under 10 repetitions.</li><li><strong>Cup game:</strong> Three cups, treat under one. Let the dog find it. Gradually increase the cups, shuffle them, and increase delay between hiding and searching.</li><li><strong>Muffin tin:</strong> Place treats in some holes of a muffin tin, cover all holes with tennis balls. Dog must find which balls cover food.</li></ol>
<h4>Introduction to Formal Nose Work</h4>
<p>Introduce a target scent (birch essential oil on a cotton swab, stored in a tin with ventilation holes). When the dog investigates the tin: mark and reward. Progress to hiding the tin in a box among other boxes. This is the foundation of K9 Nose Work and can develop into a serious sport.</p>
<h4>Owner Homework</h4>
<p>Play one scent game per day this week from the list above. Progress the difficulty every 2 days as the dog's accuracy improves. Note which games produce the highest engagement and the longest post-activity calm period.</p>
<div class="lesson-quiz" data-lesson="c4_m3_l1"><h4>Knowledge Check</h4><p>Why does nose work produce measurable calm in dogs even more than physical exercise?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs are tired after using their nose extensively</button><button class="qo" data-correct="true">Because scent processing engages the olfactory system which is directly linked to the limbic (emotional) system, producing neurological calm alongside dopamine reward</button><button class="qo" data-correct="false">Because sniffing reduces a dog's oxygen levels</button></div></div>`
      },
      {
        id:'c4_m3_l2', name:'Texture and Proprioception',
        desc:'Engage your dog\'s tactile senses and build body awareness through surface and texture exploration.',
        xp:60,
        tip:'A dog that is comfortable in their own body — on any surface — is a more confident dog in every situation.',
        content:`<h3>The Tactile Sense in Dogs</h3>
<p>Dogs experience the world through touch — paws, whiskers, skin and coat all gather information about surfaces, textures and temperature. Providing a variety of safe tactile experiences builds body awareness, confidence on novel surfaces, and neurological integration — all of which contribute directly to emotional resilience.</p>
<h4>Surface Variety Programme</h4>
<p>Introduce your dog to a new surface every 2–3 days:</p>
<ul><li>Grass, gravel, sand, mud, wet grass, snow</li><li>Rubber matting, carpet, wooden flooring, tiles</li><li>Wobble board or balance disc (proprioception)</li><li>Shallow paddling pool</li><li>Crinkly tarpaulin or plastic sheet</li><li>Raised platforms and low A-frames</li></ul>
<h4>Introduction Method</h4>
<ol><li>Place the surface near your dog without pressure — allow free investigation.</li><li>Scatter treats on and around the surface to create positive association.</li><li>Allow the dog to place one paw on voluntarily before treating.</li><li>Never push or pull the dog onto a novel surface — voluntary engagement is everything.</li></ol>
<h4>Proprioception Benefits</h4>
<p>Proprioception work (wobble boards, balance discs, stepping over poles) builds the dog's awareness of where their body is in space. This is particularly valuable for older dogs (arthritis prevention), recovering dogs, and any dog showing physical anxiety (reluctance to step over obstacles, fear of slippery floors).</p>
<h4>Owner Homework</h4>
<p>Set up a "sensory trail" in your garden this week — 4–5 different surfaces in a line. Encourage your dog to walk the trail using treats. Film the session and note which surfaces produce hesitation vs confident crossing. Focus next week on building confidence on the hesitation surfaces.</p>
<div class="lesson-quiz" data-lesson="c4_m3_l2"><h4>Knowledge Check</h4><p>What is the correct method for introducing a nervous dog to a novel surface?</p><div class="quiz-options"><button class="qo" data-correct="false">Guide them firmly across the surface so they experience it quickly</button><button class="qo" data-correct="true">Place the surface nearby without pressure, scatter treats around it, and reward any voluntary investigation or contact</button><button class="qo" data-correct="false">Only introduce it once they are confident on all other surfaces</button></div></div>`
      },
      {
        id:'c4_m3_l3', name:'Sound and Visual Enrichment',
        desc:'Engage your dog\'s auditory and visual senses with safe, stimulating new experiences.',
        xp:60,
        tip:'Dogs process the world through all senses simultaneously — neglecting any one of them is a missed enrichment opportunity.',
        content:`<h3>Beyond Smell — The Other Senses</h3>
<p>While smell is a dog's primary sense, hearing and vision are also rich sources of enrichment — and, when managed poorly, primary sources of stress. Understanding how to use sound and visual experiences as enrichment (rather than inadvertently as stressors) adds significant depth to your programme.</p>
<h4>Sound Enrichment</h4>
<ul><li><strong>Nature soundscapes:</strong> Birdsong, rain, wind in trees — calming for most dogs.</li><li><strong>Specific sound exposure:</strong> If your dog is sensitive to specific sounds (fireworks, traffic, children), systematic desensitisation via recordings at very low volume, paired with high-value rewards.</li><li><strong>Music:</strong> Research by the Scottish SPCA and University of Glasgow found that reggae and soft rock produced the most positive behavioural responses in kennelled dogs. Classical music reduces arousal in most dogs.</li><li><strong>White noise / brown noise:</strong> Masks environmental triggers, reduces sound reactivity.</li></ul>
<h4>Visual Enrichment</h4>
<ul><li><strong>Window watching:</strong> A safe observation point with a view of bird feeders, wildlife, or pedestrians — stimulating for most dogs without stress.</li><li><strong>Dog TV:</strong> Some dogs engage genuinely with dog-specific video content. Observe whether it relaxes or arouses.</li><li><strong>New environments:</strong> A drive to a new location just to sit and observe — visually stimulating without physical demand.</li></ul>
<h4>Owner Homework</h4>
<p>Choose one sound enrichment and one visual enrichment activity from above to try this week. Observe and record your dog's response — engaged and calm, engaged and aroused, or disinterested. Adjust based on the response.</p>
<div class="lesson-quiz" data-lesson="c4_m3_l3"><h4>Knowledge Check</h4><p>What type of music has research shown produces the most calming effect in dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Heavy metal — it masks environmental sounds effectively</button><button class="qo" data-correct="true">Classical music and certain genres like reggae and soft rock, which have been shown to reduce arousal and increase resting behaviour</button><button class="qo" data-correct="false">Pop music because it is most familiar in the home environment</button></div></div>`
      },
      {
        id:'c4_m3_l4', name:'Environmental Enrichment',
        desc:'Transform your dog\'s everyday environment into a rich, varied, stimulating living space.',
        xp:70,
        tip:'You don\'t need a big house or a big garden — you need a thoughtful one.',
        content:`<h3>Enriching the Space Your Dog Lives In</h3>
<p>Environmental enrichment is about transforming your dog's daily living environment so it provides ongoing stimulation, variety and choice without requiring constant handler involvement. A well-designed enriched environment is one of the most sustainable and cost-effective enrichment investments you can make.</p>
<h4>Indoor Environmental Enrichment</h4>
<ul><li><strong>Multiple resting spots at different heights:</strong> Beds, raised platforms, window perches, floor mats in different rooms. Dogs self-select for temperature regulation and social proximity preference.</li><li><strong>Chew station:</strong> A designated area with safe, appropriate chew options always available. Chewing is self-calming and reduces anxiety-based behaviours.</li><li><strong>Sniff corner:</strong> An area where you rotate novel scents on cotton wool — herbs, spices, safe essential oils. Refresh weekly.</li><li><strong>Toy rotation:</strong> Keep only 3–4 toys accessible at once. Rotate weekly. Novelty restores toy value.</li></ul>
<h4>Garden Environmental Enrichment</h4>
<ul><li>Digging pit (children's sandpit) for breeds with digging instincts</li><li>Raised platforms and stepping stones at varying heights</li><li>Water feature or paddling pool (seasonal)</li><li>Bird feeders to provide wildlife observation</li><li>Long grass patch left unmown for natural foraging and sensory exploration</li></ul>
<h4>Owner Homework</h4>
<p>Implement two new environmental enrichment elements this week — one indoor and one outdoor. Leave them in place for 5 days and observe how frequently your dog spontaneously uses them. Items used frequently stay; items ignored get replaced with something else.</p>
<div class="lesson-quiz" data-lesson="c4_m3_l4"><h4>Knowledge Check</h4><p>Why is toy rotation more enriching than leaving all toys available all the time?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs become aggressive over toys when too many are available</button><button class="qo" data-correct="true">Because novelty restores toy value — a toy that has been absent reappears with the same activation of the SEEKING system as a brand new toy</button><button class="qo" data-correct="false">Because rotation ensures toys are cleaned regularly</button></div></div>`
      }
    ]
  },
  {
    id:'c4_m4', n:4, emoji:'🧩', courseId:'enrichment-specialist', courseName:'Canine Enrichment Specialist',
    name:'Cognitive Development',
    desc:'Challenge your dog\'s brain with structured cognitive activities that build problem-solving skills and confidence.',
    lessons:[
      {
        id:'c4_m4_l1', name:'Trick Training as Enrichment',
        desc:'Use trick training to build cognitive engagement, physical coordination and owner-dog connection.',
        xp:80,
        tip:'Tricks are not frivolous — each new behaviour builds new neural pathways and grows the dog\'s confidence in their own ability to learn.',
        content:`<h3>Tricks Are Serious Business</h3>
<p>Trick training is one of the most enrichment-rich activities available because it combines cognitive challenge (what does this cue mean?), physical challenge (can my body do this?), social reward (working with my person), and the deep satisfaction of the SEEKING system being activated through learning. A dog that learns a new trick a week is a dog in excellent mental health.</p>
<h4>Tricks Progression Pathway</h4>
<ul><li><strong>Beginner:</strong> High five, spin, touch, bow, wave</li><li><strong>Intermediate:</strong> Roll over, weave through legs, back up, pick up named objects</li><li><strong>Advanced:</strong> Tidy toys by name, find named objects in another room, limp, cover eyes</li><li><strong>Expert:</strong> Multi-step sequences, discrimination between 10+ named objects, creative behaviour on cue</li></ul>
<h4>Teaching Framework</h4>
<ol><li>Shape or lure the behaviour in 5-minute sessions.</li><li>Mark the best approximation of the behaviour — don't wait for perfection.</li><li>Add the cue only when the behaviour is 80% reliable without the cue.</li><li>Practise 3 repetitions per session once the trick is learned — maintenance, not drilling.</li></ol>
<h4>Owner Homework</h4>
<p>Choose one new trick to teach this week. Spend 5 minutes per day on it. By the end of the week, the dog should be performing the behaviour reliably enough to name it. Log each session: what you tried, what happened, what you'll adjust tomorrow.</p>
<div class="lesson-quiz" data-lesson="c4_m4_l1"><h4>Knowledge Check</h4><p>When should you add a verbal cue to a new trick?</p><div class="quiz-options"><button class="qo" data-correct="false">At the very beginning so the dog associates the word with the movement from the start</button><button class="qo" data-correct="true">When the behaviour is reliably occurring (approximately 80% of the time) without the verbal cue</button><button class="qo" data-correct="false">Only after the dog can perform the trick perfectly without any mistakes</button></div></div>`
      },
      {
        id:'c4_m4_l2', name:'Object Discrimination and Naming',
        desc:'Teach your dog to identify and retrieve named objects — one of the most cognitively demanding skills available.',
        xp:90,
        tip:'A dog that knows 10 named objects is demonstrating cognitive capability equivalent to a 2-year-old human child. Take it seriously.',
        content:`<h3>The Smartest Trick in the Book</h3>
<p>Object discrimination — the ability to identify and retrieve a specifically named object from a group — is one of the most cognitively demanding skills you can teach. Research on dogs like Chaser the Border Collie (who learned over 1,000 words) demonstrates that dogs have genuine categorical understanding of language, not just conditioned responses to sounds.</p>
<h4>Teaching Named Objects — Step by Step</h4>
<ol><li>Choose Object 1. Introduce it alone — play with it, reward the dog for interacting with it. Name it as they engage: "ball, yes! ball, yes!"</li><li>Present Object 1 and ask "where's your ball?" Reward any orientation toward or touch of the ball.</li><li>Progress to retrieving Object 1 on cue from the floor.</li><li>Add Object 2 using the same process until the dog retrieves it reliably by name.</li><li>The critical test: place both objects on the floor. Ask for Object 1. The dog must discriminate.</li></ol>
<h4>Troubleshooting</h4>
<p>If the dog picks the wrong object: remove all reward, wait 5 seconds, try again. If they continue to struggle, go back to single-object naming for 3 more sessions before reintroducing the second object.</p>
<h4>Owner Homework</h4>
<p>Begin naming your dog's two most familiar toys this week using the step-by-step method above. By the end of two weeks, test discrimination between them. Log each session including success percentage and any patterns in errors.</p>
<div class="lesson-quiz" data-lesson="c4_m4_l2"><h4>Knowledge Check</h4><p>What does research on dogs like Chaser the Border Collie demonstrate about language in dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Only Border Collies are capable of learning object names</button><button class="qo" data-correct="true">Dogs have genuine categorical understanding of language — they can learn that words refer to specific objects within categories, not just conditioned responses to sounds</button><button class="qo" data-correct="false">Dogs can only learn object names through food reward</button></div></div>`
      },
      {
        id:'c4_m4_l3', name:'Canine Parkour and Body Awareness',
        desc:'Use the urban environment as a cognitive and physical playground with canine parkour.',
        xp:80,
        tip:'Every bench, wall, kerb and log is a training opportunity waiting to happen. Start seeing your environment differently.',
        content:`<h3>The World Is a Gym</h3>
<p>Canine parkour (also known as Urban Agility) uses naturally occurring environmental features — benches, walls, kerbs, logs, bollards, steps — as training props. It builds physical confidence, body awareness, cognitive engagement and the ability to offer behaviours creatively. It's free, it's everywhere, and dogs love it.</p>
<h4>Foundation Behaviours</h4>
<ul><li><strong>Four paws on:</strong> All four paws on a raised surface (bench, wall, step). The foundational parkour position.</li><li><strong>Two paws on:</strong> Front two paws on a surface while back paws remain on the ground.</li><li><strong>Under:</strong> Dog moves under a low obstacle.</li><li><strong>Between:</strong> Dog walks between two parallel surfaces.</li><li><strong>Around:</strong> Dog circles a specific object on cue.</li></ul>
<h4>Teaching Four Paws On</h4>
<ol><li>Lure one paw onto the surface. Mark and reward.</li><li>Lure two paws. Mark and reward.</li><li>Wait for the dog to offer all four. Mark with enthusiasm.</li><li>Add the cue "up" once reliable.</li><li>Generalise to different surfaces of different heights.</li></ol>
<h4>Owner Homework</h4>
<p>On your walks this week, identify 5 parkour opportunities in your environment. Teach "four paws on" with 3 different surfaces. Film your best achievement and share with your trainer.</p>
<div class="lesson-quiz" data-lesson="c4_m4_l3"><h4>Knowledge Check</h4><p>What is the primary value of canine parkour beyond physical exercise?</p><div class="quiz-options"><button class="qo" data-correct="false">It trains dogs to behave better in urban environments by reducing pulling</button><button class="qo" data-correct="true">It builds body awareness, confidence on novel surfaces, cognitive engagement through problem-solving, and the ability to offer creative behaviours</button><button class="qo" data-correct="false">It improves a dog's agility performance scores</button></div></div>`
      },
      {
        id:'c4_m4_l4', name:'Problem-Solving and Brain Games',
        desc:'Design and deliver structured brain games that progressively challenge your dog\'s cognitive abilities.',
        xp:90,
        tip:'A dog that problem-solves confidently is a dog that handles life\'s challenges confidently. The skills transfer.',
        content:`<h3>Designing the Cognitive Challenge</h3>
<p>Effective brain games share three characteristics: they are achievable (the dog can succeed), progressively challenging (they get harder as the dog improves), and rewarding (success produces genuine satisfaction). Poorly designed brain games frustrate rather than enrich.</p>
<h4>The Shell Game — Advanced</h4>
<p>Three identical containers, treat under one. Show the dog which container has the treat, then cover all three. Move them slowly. Ask the dog to identify the correct container by nosing or pawing it. Progress: more containers, faster movement, longer delay before searching.</p>
<h4>The Choice Game</h4>
<p>Present 5 objects in a row. Treats are placed under one specific object (e.g. always the red cone). The dog must learn the rule — not the location, but the OBJECT. This tests concept learning, not spatial memory.</p>
<h4>Sequential Behaviours</h4>
<p>Chain 3–4 known tricks into a sequence on a single cue. "Routine": sit → down → roll over → spin. Teach the chain backwards — last behaviour first. The cognitive demand of sequence memory is high and deeply satisfying.</p>
<h4>Innovation — Teaching "Something New"</h4>
<p>Ask your dog for a behaviour you haven't taught by standing with treats ready and saying "what can you do?" Reward any novel behaviour that differs from the last. Over sessions, dogs begin to offer creative, unreinforced behaviours — demonstrating genuine creative cognitive function.</p>
<h4>Owner Homework</h4>
<p>Choose one of the four brain games above and commit to it for 7 days, progressing difficulty daily. Log each session: what was attempted, what the dog achieved, what the next step is. Share your progress log with your trainer at the end of the week.</p>
<div class="lesson-quiz" data-lesson="c4_m4_l4"><h4>Knowledge Check</h4><p>When teaching a behaviour chain, why is it recommended to teach it backwards (last behaviour first)?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs find the end of sequences easier to remember</button><button class="qo" data-correct="true">Because backward chaining means the most recently learned behaviour always leads directly to the reward, keeping motivation high throughout the chain</button><button class="qo" data-correct="false">Because forward chaining is too cognitively demanding for most dogs</button></div></div>`
      }
    ]
  },
  {
    id:'c4_m5', n:5, emoji:'📅', courseId:'enrichment-specialist', courseName:'Canine Enrichment Specialist',
    name:'Building Weekly Enrichment Plans',
    desc:'Design, implement and refine a sustainable weekly enrichment plan tailored to your individual dog.',
    lessons:[
      {
        id:'c4_m5_l1', name:'Assessing Your Dog\'s Enrichment Needs',
        desc:'Create a complete enrichment profile for your individual dog as the foundation of a personalised plan.',
        xp:80,
        tip:'The best enrichment plan is the one designed for the dog in front of you — not the dog next door.',
        content:`<h3>Every Dog Is Different</h3>
<p>A Border Collie and a Basset Hound require radically different enrichment programmes. The enrichment specialist approach begins with an individual assessment — understanding your specific dog's drives, preferences, physical capabilities and lifestyle — before designing any plan.</p>
<h4>The Enrichment Profile Assessment</h4>
<ul><li><strong>Energy level:</strong> High (needs significant physical and mental output), medium, low</li><li><strong>Primary drive:</strong> Food, play, social, environmental, olfactory</li><li><strong>Breed instincts:</strong> See Course 2 Module 1 — what natural behaviours need an outlet?</li><li><strong>Physical capabilities:</strong> Age, mobility, health conditions that limit or inform activity choices</li><li><strong>Anxiety level:</strong> Does stress narrow the range of enrichment activities the dog can engage with?</li><li><strong>Preference data:</strong> Engagement scores from previous enrichment activities across all six categories</li></ul>
<h4>Owner Homework</h4>
<p>Complete the full Enrichment Profile for your dog using the six dimensions above. Combine this with the engagement scores from your previous activities across Modules 1–4. You now have all the data you need to build a genuinely personalised plan. Share the profile with your trainer before the next lesson.</p>
<div class="lesson-quiz" data-lesson="c4_m5_l1"><h4>Knowledge Check</h4><p>Why must an enrichment plan be tailored to the individual dog rather than following a generic template?</p><div class="quiz-options"><button class="qo" data-correct="false">Because generic plans are harder to follow consistently</button><button class="qo" data-correct="true">Because breed instincts, individual drives, physical capabilities and anxiety levels vary enormously — an enrichment plan that fails to address the specific dog's needs will have limited effectiveness</button><button class="qo" data-correct="false">Because all dogs have different preferred food types</button></div></div>`
      },
      {
        id:'c4_m5_l2', name:'Designing the Weekly Plan',
        desc:'Build a balanced, achievable weekly enrichment plan using your dog\'s individual profile.',
        xp:80,
        tip:'Aim for variety and balance across the six categories — but keep it realistic. A good plan you follow beats a perfect plan you don\'t.',
        content:`<h3>The Weekly Enrichment Blueprint</h3>
<p>A balanced enrichment plan covers all six categories across the week without overwhelming owner or dog. The goal is consistency over intensity — five minutes of quality daily enrichment outperforms a two-hour session once a week.</p>
<h4>Sample Weekly Framework</h4>
<ul><li><strong>Monday:</strong> Scatter feeding (nutritional) + 5 min nose work game (sensory)</li><li><strong>Tuesday:</strong> Frozen Kong (nutritional) + trick training session (cognitive)</li><li><strong>Wednesday:</strong> Snuffle mat (nutritional) + novel surface walk (physical/sensory)</li><li><strong>Thursday:</strong> Food trail in garden (nutritional/sensory) + object naming practice (cognitive)</li><li><strong>Friday:</strong> Puzzle feeder (nutritional/cognitive) + parkour on walk (physical)</li><li><strong>Saturday:</strong> Controlled social enrichment (social) + long decompression sniff walk (physical)</li><li><strong>Sunday:</strong> Enrichment free choice day — offer 3 options and let the dog choose</li></ul>
<h4>Building Your Version</h4>
<p>Use your enrichment profile to personalise the template. High food drive: lean into food enrichment daily. High olfactory drive: nose work features every other day. Low energy: shorter, calmer activities. Anxious dog: familiar, achievable activities dominate with one novel element per week.</p>
<h4>Owner Homework</h4>
<p>Write your personalised weekly enrichment plan for next week. Every day should have at least one scheduled enrichment activity from at least 3 different categories across the week. Share with your trainer for feedback before implementing.</p>
<div class="lesson-quiz" data-lesson="c4_m5_l2"><h4>Knowledge Check</h4><p>Why is 5 minutes of daily enrichment more effective than a 2-hour session once a week?</p><div class="quiz-options"><button class="qo" data-correct="false">Because longer sessions overwhelm the dog</button><button class="qo" data-correct="true">Because consistent daily SEEKING system activation maintains neurological wellbeing — infrequent large doses create peaks and troughs rather than sustainable baseline enrichment</button><button class="qo" data-correct="false">Because 5-minute sessions are easier to organise</button></div></div>`
      },
      {
        id:'c4_m5_l3', name:'Seasonal and Budget-Friendly Enrichment',
        desc:'Adapt your enrichment programme across seasons and budgets without losing effectiveness.',
        xp:70,
        tip:'The best enrichment is free — a cardboard box, some grass, and a handful of kibble can achieve everything an expensive puzzle feeder does.',
        content:`<h3>Enrichment for Every Season and Budget</h3>
<p>An effective enrichment programme doesn't require expensive equipment or a large space. The most enrichment-rich environments are often the simplest — natural, varied and freely available.</p>
<h4>Free and Low-Cost Enrichment Ideas</h4>
<ul><li>Cardboard boxes — fill with newspaper and treats, let the dog shred and dig</li><li>Toilet roll tubes — stuff with kibble and fold the ends closed</li><li>Egg carton — place treats in each compartment, close the lid, let the dog open it</li><li>Old towel — roll treats inside and tie loosely</li><li>Ice cube tray — freeze kibble or treats in water or broth</li><li>Cardboard tubes from kitchen rolls — tie one end, stuff with treats, fold the other</li></ul>
<h4>Seasonal Adaptations</h4>
<ul><li><strong>Winter:</strong> Indoor scent work, lick mats, puzzle feeders, trick training (keep active when walks are limited)</li><li><strong>Spring:</strong> Garden foraging, surface exploration on wet grass, nature soundscapes through open windows</li><li><strong>Summer:</strong> Frozen treats, paddling pools, early morning outdoor sessions, shade-based scatter feeding</li><li><strong>Autumn:</strong> Leaf pile foraging, conker and acorn hunting (supervise), longer sniff walks in falling leaves</li></ul>
<h4>Owner Homework</h4>
<p>Create 5 enrichment activities this week using only materials you already have at home — no purchases allowed. Rate engagement for each. Report your most successful free enrichment hack.</p>
<div class="lesson-quiz" data-lesson="c4_m5_l3"><h4>Knowledge Check</h4><p>What makes a cardboard box an effective enrichment tool?</p><div class="quiz-options"><button class="qo" data-correct="false">Dogs are attracted to the smell of cardboard specifically</button><button class="qo" data-correct="true">It combines novelty, safe destruction, foraging (treats inside), and sensory exploration of textures, smell and sound — activating multiple enrichment categories simultaneously</button><button class="qo" data-correct="false">It is the only safe material for dogs to chew</button></div></div>`
      },
      {
        id:'c4_m5_l4', name:'Certification and Your Ongoing Plan',
        desc:'Complete the Canine Enrichment Specialist certification and build your ongoing enrichment commitment.',
        xp:150,
        tip:'You are now the enrichment expert your dog always deserved.',
        content:`<h3>Canine Enrichment Specialist — Programme Complete</h3>
<p>Completing this programme means you have moved from providing enrichment occasionally to understanding it scientifically, delivering it strategically, and adapting it continuously to your individual dog's needs. This is specialist-level knowledge and it will transform your dog's quality of life for years to come.</p>
<h4>Your Certification Demonstrates</h4>
<ul><li>Understanding of the neuroscience of enrichment (SEEKING system, Five Domains)</li><li>Competence across all six enrichment categories</li><li>Ability to assess individual enrichment needs and preferences</li><li>Practical skill in designing and delivering a personalised weekly enrichment plan</li><li>Commitment to budget-accessible, season-adaptable enrichment delivery</li></ul>
<h4>Your Ongoing Commitment</h4>
<p>The Enrichment Plan you have designed is not static — it should evolve as your dog ages, as seasons change, and as you continue to learn your dog's preferences more deeply. Reassess quarterly: what's working brilliantly, what's been dropped, what needs refreshing.</p>
<h4>Share Your Knowledge</h4>
<p>You now have enough knowledge to help other dog owners in your community understand enrichment. Consider sharing one enrichment idea per week on social media, in a dog walking group, or with your vet — enrichment education ripples outward and every dog it reaches benefits.</p>
<div class="lesson-quiz" data-lesson="c4_m5_l4"><h4>Knowledge Check</h4><p>How frequently should you formally reassess your dog's enrichment plan?</p><div class="quiz-options"><button class="qo" data-correct="false">Only when the dog shows a behaviour problem</button><button class="qo" data-correct="true">Quarterly — to account for seasonal changes, ageing, evolving preferences and any lifestyle changes</button><button class="qo" data-correct="false">Weekly — the plan should be completely rebuilt every 7 days</button></div></div>`
      }
    ]
  }
];

FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_4_MODULES);

/* ─── /app/fp-course6.js ─── */
/* ═══════════════════════════════════════════════════════════
   COURSE 6 — SENIOR DOG WELLNESS PROGRAM
   Module IDs: c6_m1 – c6_m5
═══════════════════════════════════════════════════════════ */

var COURSE_6_MODULES = [
  {
    id:'c6_m1', n:1, emoji:'🌅', courseId:'senior-wellness', courseName:'Senior Dog Wellness',
    name:'Understanding the Ageing Dog',
    desc:'Learn what physical and cognitive changes happen as your dog ages and how to adapt your approach.',
    lessons:[
      {
        id:'c6_m1_l1', name:'Signs of Healthy Ageing',
        desc:'Distinguish normal ageing changes from signs that need veterinary attention.',
        xp:70, tip:'Knowing what is normal ageing and what is not could save your dog years of unnecessary suffering.',
        content:`<h3>What Ageing Looks Like</h3>
<p>Dogs age at different rates depending on breed and size. Large breeds are considered senior from age 6–7; small breeds from age 10–11. Understanding what is expected helps you notice what is not.</p>
<h4>Normal Ageing Changes</h4>
<ul><li>Greying muzzle and face</li><li>Slightly reduced energy and exercise tolerance</li><li>Longer recovery after exertion</li><li>Mild stiffness after rest that eases with movement</li><li>Slightly increased sleep duration</li><li>Reduced hearing and visual acuity</li></ul>
<h4>Changes That Need Veterinary Assessment</h4>
<ul><li>Sudden behaviour changes — increased anxiety, confusion, house soiling</li><li>Significant weight loss or gain without dietary change</li><li>Persistent lameness or reluctance to move</li><li>Excessive drinking or urinating</li><li>Lumps or bumps that appear or change rapidly</li><li>Persistent coughing, laboured breathing</li></ul>
<h4>Owner Homework</h4>
<p>Complete a monthly body check on your senior dog: weight, coat condition, lumps, dental health, mobility assessment. Keep a log. Changes over time are more informative than any single observation.</p>
<div class="lesson-quiz" data-lesson="c6_m1_l1"><h4>Knowledge Check</h4><p>At what age is a Labrador Retriever generally considered senior?</p><div class="quiz-options"><button class="qo" data-correct="false">10 years — the same as small breeds</button><button class="qo" data-correct="true">6–7 years — large breeds age faster than small breeds</button><button class="qo" data-correct="false">12 years — dogs are senior only in their final years</button></div></div>`
      },
      {
        id:'c6_m1_l2', name:'Cognitive Dysfunction Syndrome',
        desc:'Recognise and respond to canine cognitive dysfunction — the dog equivalent of dementia.',
        xp:80, tip:'CDS is manageable — caught early, you can significantly slow its progression and maintain quality of life.',
        content:`<h3>The Ageing Brain</h3>
<p>Canine Cognitive Dysfunction Syndrome (CDS) affects up to 28% of dogs aged 11–12 and over 68% of dogs aged 15–16. It is caused by physical changes in the brain — amyloid plaques, reduced neurotransmitter levels, and decreased brain mass — and produces a recognisable cluster of behavioural changes.</p>
<h4>The DISHA Framework</h4>
<ul><li><strong>D — Disorientation:</strong> Getting stuck in corners, staring at walls, failing to navigate familiar spaces.</li><li><strong>I — Interaction changes:</strong> Reduced interest in family, increased clinginess, or uncharacteristic aggression.</li><li><strong>S — Sleep changes:</strong> Reversed sleep-wake cycle, night-time restlessness and vocalisation.</li><li><strong>H — House soiling:</strong> Forgetting previously reliable toilet training.</li><li><strong>A — Activity changes:</strong> Reduced engagement, repetitive behaviours, appearing lost or confused.</li></ul>
<h4>What Helps</h4>
<ul><li>Veterinary diagnosis and medication (selegiline, propentofylline)</li><li>Dietary supplements (omega-3, antioxidants, medium-chain triglycerides)</li><li>Enrichment maintained — cognitive stimulation slows deterioration</li><li>Routine consistency — familiar predictability reduces confusion</li></ul>
<h4>Owner Homework</h4>
<p>Use the DISHA framework to assess your senior dog. If 2+ signs are present, book a veterinary consultation this week. Early intervention produces the best outcomes.</p>
<div class="lesson-quiz" data-lesson="c6_m1_l2"><h4>Knowledge Check</h4><p>What does the 'S' in the DISHA framework stand for?</p><div class="quiz-options"><button class="qo" data-correct="false">Stress — increased anxiety behaviours</button><button class="qo" data-correct="true">Sleep changes — reversed sleep-wake cycle, night restlessness</button><button class="qo" data-correct="false">Socialisation — reduced interest in other dogs</button></div></div>`
      },
      {
        id:'c6_m1_l3', name:'Pain Recognition in Senior Dogs',
        desc:'Learn to identify subtle and overt pain signals in your ageing dog.',
        xp:80, tip:'Dogs hide pain instinctively. By the time it\'s obvious, it\'s been there a long time.',
        content:`<h3>The Hidden Pain Problem</h3>
<p>Dogs are evolutionary prey-animal descendants and instinctively mask pain — showing weakness in the wild was dangerous. This means chronic pain in senior dogs is dramatically under-recognised and under-treated. Learning to see what your dog is trying to hide is one of the most important skills a senior dog owner can develop.</p>
<h4>Subtle Pain Signals</h4>
<ul><li>Reluctance to jump up or use stairs (previously easy)</li><li>Slow to rise from rest, stiff for the first few steps</li><li>Licking or chewing a specific area repeatedly</li><li>Flinching when touched in certain areas</li><li>Grumpiness with people or other dogs that were previously fine</li><li>Reduced appetite — pain suppresses the desire to eat</li><li>Panting at rest or during the night</li><li>Weight shifting when standing — avoiding loading a painful limb</li></ul>
<h4>The Pain Scale</h4>
<p>Use a validated canine pain scale (e.g. the Glasgow Composite Pain Scale) to assess your dog monthly. A score you can track over time gives your vet invaluable objective data.</p>
<h4>Owner Homework</h4>
<p>Film your senior dog rising from rest, walking 20 paces, and going up a step or incline. Review the footage slowly. Note any hesitation, unevenness, or stiffness. Share with your vet at the next check-up.</p>
<div class="lesson-quiz" data-lesson="c6_m1_l3"><h4>Knowledge Check</h4><p>Why do dogs instinctively hide pain?</p><div class="quiz-options"><button class="qo" data-correct="false">Because they have a higher pain threshold than humans</button><button class="qo" data-correct="true">As descendants of wild animals, displaying weakness or vulnerability was a survival risk — this instinct persists in domestic dogs</button><button class="qo" data-correct="false">Because they do not experience pain the same way humans do</button></div></div>`
      },
      {
        id:'c6_m1_l4', name:'The Senior Wellness Vet Partnership',
        desc:'Build an effective partnership with your veterinary team for proactive senior dog healthcare.',
        xp:70, tip:'The best vet relationship is a partnership built on shared information and proactive communication.',
        content:`<h3>Proactive Senior Healthcare</h3>
<p>Senior dogs benefit from bi-annual veterinary health checks rather than annual — a dog ages the equivalent of 3–5 human years in a single calendar year at senior age. Proactive monitoring catches problems early, when they are most treatable.</p>
<h4>What Senior Health Checks Include</h4>
<ul><li>Full physical examination including lymph node assessment</li><li>Dental health evaluation (dental disease affects 80%+ of senior dogs)</li><li>Blood panel: organ function, thyroid, blood cell counts</li><li>Urinalysis: kidney function, infection screening</li><li>Blood pressure measurement (hypertension common in senior dogs)</li><li>Weight and body condition score</li><li>Mobility and neurological assessment</li></ul>
<h4>Preparing for Vet Visits</h4>
<ul><li>Keep a symptom diary between visits — specific observations with dates</li><li>Bring your monthly body check log</li><li>Prepare 3 questions in advance — vets can cover more ground when you are specific</li><li>Video symptoms at home — many behaviours don't appear in the consulting room</li></ul>
<h4>Owner Homework</h4>
<p>If your senior dog has not had a health check in the last 6 months, book one this week. Before you go: complete the body check log, film any concerning movements or behaviours, and prepare your 3 questions.</p>
<div class="lesson-quiz" data-lesson="c6_m1_l4"><h4>Knowledge Check</h4><p>How frequently should senior dogs receive veterinary health checks?</p><div class="quiz-options"><button class="qo" data-correct="false">Annually — the same as adult dogs</button><button class="qo" data-correct="true">Bi-annually (every 6 months) — because a senior dog ages 3–5 human-equivalent years per calendar year</button><button class="qo" data-correct="false">Only when symptoms appear — preventive checks are not necessary</button></div></div>`
      }
    ]
  },
  {
    id:'c6_m2', n:2, emoji:'🏃', courseId:'senior-wellness', courseName:'Senior Dog Wellness',
    name:'Adapted Exercise and Mobility',
    desc:'Adapt exercise and movement to support your senior dog\'s joints, energy levels and changing capabilities.',
    lessons:[
      {
        id:'c6_m2_l1', name:'Exercise for the Senior Dog',
        desc:'Redesign your dog\'s exercise programme to support healthy ageing without causing harm.',
        xp:70, tip:'Little and often beats long and occasional for senior dogs — the joints thank you for it.',
        content:`<h3>Exercising the Senior Body</h3>
<p>Senior dogs still need regular exercise — it maintains muscle mass, joint mobility, cardiovascular health and mental wellbeing. The key change is quality over quantity: shorter, more frequent outings that keep the dog moving without causing exhaustion or joint stress.</p>
<h4>Senior Exercise Principles</h4>
<ul><li><strong>Shorter, more frequent:</strong> 3–4 x 15–20 minutes rather than 1 x 60-minute walk.</li><li><strong>Warm up and cool down:</strong> Allow a slow start and gentle end to every outing — cold joints need time to warm up.</li><li><strong>Soft surfaces:</strong> Grass and earth are kinder to ageing joints than pavement.</li><li><strong>Avoid high-impact activities:</strong> Jumping, sharp turns, and fetch with repeated sudden stops cause joint stress.</li><li><strong>Let the dog set the pace:</strong> If they slow, stop or sit — they need a rest. Honour it.</li><li><strong>Monitor recovery:</strong> Stiffness or lameness lasting more than 30 minutes after exercise indicates too much.</li></ul>
<h4>Owner Homework</h4>
<p>For one week, replace one long walk with three shorter ones. Compare your dog's mobility, energy level and post-walk recovery. Note any difference in stiffness or enthusiasm.</p>
<div class="lesson-quiz" data-lesson="c6_m2_l1"><h4>Knowledge Check</h4><p>What indicates a senior dog has been over-exercised?</p><div class="quiz-options"><button class="qo" data-correct="false">Sleeping for 2 hours after the walk</button><button class="qo" data-correct="true">Stiffness or lameness lasting more than 30 minutes after exercise</button><button class="qo" data-correct="false">Reduced appetite for the rest of the day</button></div></div>`
      },
      {
        id:'c6_m2_l2', name:'Hydrotherapy and Swimming',
        desc:'Use water-based exercise to maintain fitness while protecting painful or arthritic joints.',
        xp:80, tip:'Water removes weight from painful joints and allows movement that is impossible on land — it is medicine in motion.',
        content:`<h3>The Power of Water</h3>
<p>Hydrotherapy — therapeutic exercise in water — is one of the most effective interventions for senior dogs with arthritis, post-surgical recovery, or muscle weakness. Water supports the dog's weight, removing stress from painful joints, while resistance provides beneficial muscle conditioning.</p>
<h4>Types of Canine Hydrotherapy</h4>
<ul><li><strong>Underwater treadmill:</strong> Dog walks on a treadmill with water level adjusted to reduce weight-bearing. Precise and controlled.</li><li><strong>Swim pool:</strong> Dog swims with support — excellent for cardiovascular fitness and full-body conditioning.</li><li><strong>Home swimming:</strong> Lakes, rivers, or purpose-built paddling pools — beneficial if the dog enjoys water and can enter and exit safely.</li></ul>
<h4>Is Hydrotherapy Right for Your Dog?</h4>
<ul><li>Dogs with arthritis: highly beneficial — often produces significant mobility improvement.</li><li>Post-operative recovery: typically prescribed by the vet as part of the rehabilitation plan.</li><li>Overweight senior dogs: reduces joint load while maintaining movement.</li><li>Dogs with open wounds, skin infections, or incontinence: consult your vet before starting.</li></ul>
<h4>Owner Homework</h4>
<p>Research qualified canine hydrotherapy centres in your area. If your senior dog has any mobility issues, discuss hydrotherapy with your vet at the next check-up and ask for a referral if appropriate.</p>
<div class="lesson-quiz" data-lesson="c6_m2_l2"><h4>Knowledge Check</h4><p>Why is underwater treadmill therapy beneficial for arthritic dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Because warm water relaxes muscles and reduces inflammation directly</button><button class="qo" data-correct="true">Because water supports the dog's body weight, removing stress from painful joints while the movement maintains muscle mass and joint mobility</button><button class="qo" data-correct="false">Because dogs instinctively move more freely in water</button></div></div>`
      },
      {
        id:'c6_m2_l3', name:'Physiotherapy and Home Exercises',
        desc:'Learn simple home physiotherapy exercises that support your senior dog\'s mobility every day.',
        xp:80, tip:'Five minutes of home physio daily can make the difference between a dog that is mobile at 14 and one that isn\'t.',
        content:`<h3>Home Physiotherapy</h3>
<p>Veterinary physiotherapy improves mobility, reduces pain, and maintains function in senior dogs. Between professional sessions, simple home exercises — prescribed or approved by your vet or physiotherapist — extend the benefit and involve you directly in your dog's wellbeing.</p>
<h4>Safe Home Exercises (Consult Your Vet Before Starting)</h4>
<ul><li><strong>Passive range of motion:</strong> Gently flex and extend each limb through its comfortable range while the dog is relaxed. Maintains joint flexibility.</li><li><strong>Cavaletti poles:</strong> Low poles (broom handles on the ground) the dog walks over slowly. Encourages deliberate limb placement and core engagement.</li><li><strong>Balance cushion standing:</strong> Two front paws on a soft balance cushion for 30 seconds. Builds core and hindquarter strength.</li><li><strong>Sit-to-stand repetitions:</strong> Ask for a sit, then release. Repeat 5 times. Strengthens hindquarters without high-impact stress.</li><li><strong>Gentle massage:</strong> Long, slow strokes along major muscle groups. Reduces tension, improves circulation, deepens the human-dog bond.</li></ul>
<h4>Owner Homework</h4>
<p>Choose two exercises from the list above (after discussing with your vet). Practise them for 5 minutes daily for two weeks. Note any changes in mobility, stiffness, or enthusiasm for movement.</p>
<div class="lesson-quiz" data-lesson="c6_m2_l3"><h4>Knowledge Check</h4><p>What is the primary benefit of sit-to-stand repetitions for senior dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">It improves the dog's obedience reliability</button><button class="qo" data-correct="true">It strengthens the hindquarters — which are critical for mobility — without high-impact joint stress</button><button class="qo" data-correct="false">It improves cardiovascular fitness</button></div></div>`
      },
      {
        id:'c6_m2_l4', name:'Assistive Devices and Home Adaptations',
        desc:'Make your home and daily life accessible and comfortable for a senior dog with changing mobility.',
        xp:70, tip:'A ramp instead of stairs costs very little and could add years to your dog\'s quality of life.',
        content:`<h3>Making Life Easier</h3>
<p>Simple environmental adaptations can dramatically improve a senior dog's quality of life, independence, and comfort. Many mobility limitations that appear fixed are actually access problems — the dog cannot get to where they want to go, not that they cannot move at all.</p>
<h4>Essential Home Adaptations</h4>
<ul><li><strong>Non-slip matting:</strong> Slippery floors are dangerous for dogs with reduced hindquarter strength. Rubber-backed rugs along walking routes are inexpensive and transformative.</li><li><strong>Ramps:</strong> Car boot ramps, sofa ramps, and bed ramps allow safe access without jumping — which is high-impact on arthritic joints.</li><li><strong>Raised food and water bowls:</strong> Reduces neck and shoulder strain during eating, particularly beneficial for larger breeds.</li><li><strong>Orthopaedic bedding:</strong> Memory foam or egg-crate mattresses relieve pressure on bony prominences during the increased sleep of senior life.</li><li><strong>Steps to favourite spots:</strong> Maintain access to the sofa or window ledge that your dog has always enjoyed — losing access to favourite spaces compounds the cognitive and emotional impact of ageing.</li></ul>
<h4>Assistive Devices</h4>
<ul><li>Rear support harnesses — help dogs with hindquarter weakness navigate stairs.</li><li>Boots — protect paws from knuckling (dragging toes in advanced neurological cases).</li><li>Mobility carts — for dogs with significant hindquarter paralysis who retain quality of life.</li></ul>
<h4>Owner Homework</h4>
<p>Walk through your home and identify one area where your senior dog struggles. Implement one adaptation this week — a rug, a ramp, or a raised bowl — and observe the effect over 5 days.</p>
<div class="lesson-quiz" data-lesson="c6_m2_l4"><h4>Knowledge Check</h4><p>Why is non-slip matting on hard floors important for senior dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">To prevent the dog from running indoors</button><button class="qo" data-correct="true">Reduced hindquarter strength makes slippery surfaces genuinely dangerous for senior dogs — slipping causes falls, injuries and anxiety about movement</button><button class="qo" data-correct="false">To keep the floor clean during shedding season</button></div></div>`
      }
    ]
  },
  {
    id:'c6_m3', n:3, emoji:'🧬', courseId:'senior-wellness', courseName:'Senior Dog Wellness',
    name:'Nutrition and Supplements',
    desc:'Optimise your senior dog\'s diet and supplementation for healthy ageing, joint health and cognitive support.',
    lessons:[
      {
        id:'c6_m3_l1', name:'Senior Nutrition Fundamentals',
        desc:'Understand how nutritional needs change with age and how to adapt your dog\'s diet accordingly.',
        xp:70, tip:'What you feed your senior dog today directly affects their quality of life for years to come.',
        content:`<h3>The Ageing Metabolism</h3>
<p>Senior dogs experience measurable changes in metabolism, muscle mass, digestive efficiency and organ function. A diet appropriate for a 3-year-old dog may be actively harmful for a 12-year-old dog. Adapting nutrition to age is one of the highest-impact health interventions available to owners.</p>
<h4>Key Nutritional Changes in Senior Dogs</h4>
<ul><li><strong>Protein:</strong> Contrary to old advice, senior dogs often need MORE high-quality protein — not less — to maintain muscle mass. Reduced kidney function is managed through protein quality, not restriction, unless diagnosed kidney disease is present.</li><li><strong>Calories:</strong> Most senior dogs have lower energy requirements — but not all. Highly active seniors or those with muscle-wasting conditions may need more.</li><li><strong>Fibre:</strong> Increased fibre supports digestive health and helps regulate blood glucose.</li><li><strong>Water:</strong> Seniors are more prone to dehydration — wet food or broth added to meals improves hydration significantly.</li></ul>
<h4>What to Look for in Senior Food</h4>
<ul><li>Named meat as the first ingredient</li><li>Joint-support ingredients (glucosamine, chondroitin)</li><li>Added omega-3 fatty acids</li><li>Antioxidants (vitamins C and E)</li><li>Appropriate caloric density for your dog's current weight and activity level</li></ul>
<h4>Owner Homework</h4>
<p>Read the ingredient label and nutritional analysis on your senior dog's current food. Compare it against the criteria above. Discuss any concerns with your vet at the next health check.</p>
<div class="lesson-quiz" data-lesson="c6_m3_l1"><h4>Knowledge Check</h4><p>Modern evidence suggests senior dogs generally need what change in protein compared to adult dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Significantly less protein to protect aging kidneys</button><button class="qo" data-correct="true">Equal or more high-quality protein — to maintain muscle mass, unless diagnosed kidney disease requires a specific restriction</button><button class="qo" data-correct="false">The same protein — nutritional needs don't change with age</button></div></div>`
      },
      {
        id:'c6_m3_l2', name:'Joint Supplements',
        desc:'Navigate the evidence for joint supplements and make informed choices for your arthritic dog.',
        xp:70, tip:'Not all supplements are equal — some have strong evidence, many have very little. Know which is which.',
        content:`<h3>Supplementation — Separating Evidence from Marketing</h3>
<p>The pet supplement market is enormous and largely unregulated. Navigating it effectively requires understanding the evidence base for each supplement rather than relying on packaging claims.</p>
<h4>Well-Evidenced Joint Supplements</h4>
<ul><li><strong>Omega-3 fatty acids (EPA/DHA):</strong> Strong evidence for reducing joint inflammation. Source: fish oil (not flaxseed — dogs cannot efficiently convert ALA). Dose: discuss with vet.</li><li><strong>Glucosamine and chondroitin:</strong> Moderate evidence for supporting cartilage health and reducing osteoarthritis progression. Most effective in early to moderate disease.</li><li><strong>Green-lipped mussel:</strong> Contains both omega-3s and glycosaminoglycans — reasonable evidence base for joint support.</li></ul>
<h4>Supplements with Limited Evidence</h4>
<ul><li>Many proprietary blends with multiple ingredients — difficult to assess individual contributions.</li><li>Turmeric — some anti-inflammatory properties but poor bioavailability in standard forms.</li><li>Herbal joint products — variable evidence, always check for drug interactions with any medications.</li></ul>
<h4>Owner Homework</h4>
<p>List every supplement your senior dog currently receives. Discuss the evidence base and appropriate dosing with your vet. Remove anything with no evidence base and ensure dosed supplements are at therapeutic levels — sub-therapeutic doses produce no benefit.</p>
<div class="lesson-quiz" data-lesson="c6_m3_l2"><h4>Knowledge Check</h4><p>Why is fish oil preferable to flaxseed oil as an omega-3 source for dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Because flaxseed is toxic to dogs</button><button class="qo" data-correct="true">Because dogs cannot efficiently convert the ALA in flaxseed to the EPA and DHA that produce anti-inflammatory effects — fish oil delivers these directly</button><button class="qo" data-correct="false">Because fish oil tastes better and dogs accept it more readily</button></div></div>`
      },
      {
        id:'c6_m3_l3', name:'Weight Management in Senior Dogs',
        desc:'Understand the critical importance of healthy weight in senior dogs and how to achieve it.',
        xp:80, tip:'Every extra kilogram a dog carries puts 4kg of additional pressure on their joints. Weight is medicine.',
        content:`<h3>The Weight-Pain Connection</h3>
<p>Obesity is the most significant modifiable risk factor for arthritis pain, mobility decline, heart disease, diabetes, and reduced lifespan in dogs. In senior dogs — where arthritis is already common — excess weight compounds joint damage and pain exponentially. Research shows that maintaining a lean body condition can extend a dog's life by up to 2 years.</p>
<h4>Assessing Body Condition Score</h4>
<p>Body Condition Score (BCS) is a 9-point scale:</p>
<ul><li>1–3: Underweight (ribs visible, no fat cover)</li><li>4–5: Ideal (ribs easily felt, visible waist, tucked abdomen)</li><li>6–7: Overweight (ribs palpable only with pressure, waist barely visible)</li><li>8–9: Obese (ribs not palpable, no waist, rounded abdomen)</li></ul>
<p>Ideal BCS for a senior dog: 4–5. Never 6+ for a dog with arthritis.</p>
<h4>Safe Weight Loss for Senior Dogs</h4>
<ul><li>Target 1–2% bodyweight loss per month — faster causes muscle loss alongside fat</li><li>Increase lean protein, reduce carbohydrates</li><li>Use low-calorie vegetables (carrot, cucumber, green beans) as treat replacements</li><li>Weigh monthly — track on a graph to confirm trajectory</li></ul>
<h4>Owner Homework</h4>
<p>Assess your senior dog's BCS this week. If above 5, discuss a weight management plan with your vet and begin monthly weighing. Set a 3-month target weight.</p>
<div class="lesson-quiz" data-lesson="c6_m3_l3"><h4>Knowledge Check</h4><p>What is the maximum safe rate of weight loss for a senior dog?</p><div class="quiz-options"><button class="qo" data-correct="false">5% bodyweight per month — faster results reduce joint strain sooner</button><button class="qo" data-correct="true">1–2% bodyweight per month — faster loss causes muscle wasting alongside fat loss</button><button class="qo" data-correct="false">10% bodyweight per month under veterinary supervision</button></div></div>`
      },
      {
        id:'c6_m3_l4', name:'Cognitive Support Through Nutrition',
        desc:'Use evidence-based nutritional strategies to support brain health and slow cognitive decline.',
        xp:80, tip:'What your dog eats today is building — or eroding — their brain tomorrow.',
        content:`<h3>Feeding the Ageing Brain</h3>
<p>Canine Cognitive Dysfunction Syndrome has a nutritional component — oxidative stress and reduced energy metabolism in brain cells are primary drivers of cognitive decline. Several nutritional strategies have evidence for slowing this process.</p>
<h4>Brain-Supporting Nutrients</h4>
<ul><li><strong>Medium-chain triglycerides (MCT oil):</strong> Provides an alternative fuel source for neurons when glucose metabolism is impaired. Coconut oil contains MCTs but purpose-formulated MCT supplements provide more reliable dosing. Prescription diets (e.g. Hill's b/d) are specifically formulated with MCTs.</li><li><strong>Antioxidants (vitamins C and E, beta-carotene, selenium):</strong> Reduce oxidative damage to neurons. Many senior diets include these.</li><li><strong>Omega-3 fatty acids (DHA specifically):</strong> Critical structural component of neuronal membranes. Supports neural communication and brain cell maintenance.</li><li><strong>SAMe (S-Adenosylmethionine):</strong> Supports neurotransmitter production. Available as Novifit — licensed for CDS in dogs.</li></ul>
<h4>Dietary Approach</h4>
<p>A prescription senior cognitive diet (discuss with your vet) combined with targeted supplementation provides the most comprehensive nutritional brain support. Begin as early as possible — prevention is more effective than treatment.</p>
<h4>Owner Homework</h4>
<p>Discuss the MCT and omega-3 evidence with your vet and agree a supplementation plan for cognitive support at your next health check. Don't wait for symptoms — start brain nutrition support before the first signs appear.</p>
<div class="lesson-quiz" data-lesson="c6_m3_l4"><h4>Knowledge Check</h4><p>Why are medium-chain triglycerides (MCTs) beneficial for dogs with cognitive dysfunction?</p><div class="quiz-options"><button class="qo" data-correct="false">They reduce inflammation in the joints, which also affects brain function</button><button class="qo" data-correct="true">They provide an alternative energy source for neurons whose glucose metabolism is impaired by the changes of CDS</button><button class="qo" data-correct="false">They improve blood flow to the brain by thinning the blood</button></div></div>`
      }
    ]
  },
  {
    id:'c6_m4', n:4, emoji:'💛', courseId:'senior-wellness', courseName:'Senior Dog Wellness',
    name:'Emotional Wellbeing in Senior Life',
    desc:'Support your senior dog\'s emotional health, confidence and quality of life as they navigate the changes of ageing.',
    lessons:[
      {
        id:'c6_m4_l1', name:'Anxiety in Older Dogs',
        desc:'Understand why anxiety often increases with age and how to provide effective support.',
        xp:80, tip:'Anxiety in a senior dog is a medical and behavioural problem combined — treat both, not just one.',
        content:`<h3>Why Older Dogs Become More Anxious</h3>
<p>Anxiety frequently increases in senior dogs due to a combination of factors: pain (which creates hypervigilance), sensory decline (difficulty processing the environment), cognitive decline (confusion and disorientation), and reduced resilience of the nervous system. What presents as anxiety is often pain, confusion, or both.</p>
<h4>Common Senior Anxiety Presentations</h4>
<ul><li>Increased noise sensitivity — sounds that were manageable become overwhelming</li><li>Separation anxiety onset or worsening in a previously settled dog</li><li>Night-time restlessness and vocalisation</li><li>Increased clinginess or, conversely, social withdrawal</li><li>Heightened startle response</li></ul>
<h4>Addressing the Root Causes</h4>
<ul><li><strong>Pain assessment first:</strong> Effective pain management often reduces anxiety dramatically — they are frequently the same problem.</li><li><strong>Sensory support:</strong> Reduce unexpected sudden sounds, improve lighting (night lights for CDS dogs), maintain very consistent routines.</li><li><strong>Anxiolytic support:</strong> Discuss medication options with your vet — effective options exist for senior anxiety and dramatically improve quality of life.</li></ul>
<h4>Owner Homework</h4>
<p>Keep a 7-day anxiety diary: note every anxious episode, its time, context and intensity. Bring the diary to your next vet appointment. This data helps identify whether the pattern fits a pain, cognitive or environmental cause.</p>
<div class="lesson-quiz" data-lesson="c6_m4_l1"><h4>Knowledge Check</h4><p>Why should pain be assessed first when a senior dog presents with new-onset anxiety?</p><div class="quiz-options"><button class="qo" data-correct="false">Because all senior dog anxiety is caused by pain</button><button class="qo" data-correct="true">Because chronic pain produces hypervigilance and anxiety — effectively treating pain often resolves the anxiety without needing separate behavioural intervention</button><button class="qo" data-correct="false">Because pain medication also has anxiolytic effects</button></div></div>`
      },
      {
        id:'c6_m4_l2', name:'Keeping Life Meaningful',
        desc:'Adapt activities and enrichment to keep your senior dog engaged, purposeful and joyful.',
        xp:80, tip:'A senior dog still has a whole life to live — your job is to make sure they know it.',
        content:`<h3>Purpose Doesn\'t Retire</h3>
<p>One of the most common mistakes senior dog owners make is gradually removing activities as the dog ages — fewer walks, less training, less enrichment — out of misplaced kindness. The result is a dog with less pain in their joints but more suffering in their spirit. Senior dogs still need mental engagement, purpose and joy.</p>
<h4>Adapting, Not Removing</h4>
<ul><li><strong>Shorter walks, more often:</strong> Not fewer walks. More, shorter, richer — full of sniffing opportunities.</li><li><strong>Low-impact enrichment:</strong> Lick mats, scatter feeding, gentle nose work, light trick maintenance — all achievable without physical strain.</li><li><strong>Social connection:</strong> Quiet, calm time with people the dog loves. Not exciting — genuinely connecting.</li><li><strong>New, gentle experiences:</strong> A drive to a new location to sit and observe. A new scent introduced gently. Novelty without physical demand.</li></ul>
<h4>Reading What They Still Enjoy</h4>
<p>Watch for the signals of joy in your senior dog: soft eyes when they see the lead, nose going to the ground with enthusiasm, the "slow wag" of deep contentment. These signals tell you what still matters to them — follow their lead.</p>
<h4>Owner Homework</h4>
<p>Make a list of the 5 things your senior dog has always loved most. Find a modified version of each that they can still access safely. Implement one this week.</p>
<div class="lesson-quiz" data-lesson="c6_m4_l2"><h4>Knowledge Check</h4><p>What is the primary risk of gradually removing activities from a senior dog's life 'to protect them'?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog becomes dependent on the remaining activities</button><button class="qo" data-correct="true">Reduced engagement, purpose and stimulation causes cognitive and emotional decline — activity should be adapted, not removed</button><button class="qo" data-correct="false">The dog becomes physically weaker without activity practice</button></div></div>`
      },
      {
        id:'c6_m4_l3', name:'The Human-Senior Dog Bond',
        desc:'Deepen your relationship with your senior dog through presence, understanding and intentional connection.',
        xp:80, tip:'The quality of attention you give your senior dog matters more than you know.',
        content:`<h3>The Deepest Chapter</h3>
<p>The senior years of a dog's life, navigated well, can be the deepest and most tender chapter of the human-dog relationship. The frenetic energy of puppyhood has settled. The dog knows you entirely. What they need now is not more activity — it is more presence.</p>
<h4>The Language of Presence</h4>
<ul><li><strong>Calm, unhurried time together:</strong> Sitting beside your dog. No agenda. Just being together.</li><li><strong>Gentle physical contact:</strong> Slow stroking along the body, gentle massage. Touch is deeply communicative.</li><li><strong>Eye contact:</strong> Soft, warm eye contact releases oxytocin in both dog and human. The gaze of a senior dog who trusts you completely is one of the most profound experiences available.</li><li><strong>Narrating the day:</strong> Simply talking to your dog — they don't understand every word, but they understand tone, and being spoken to warmly communicates care.</li></ul>
<h4>Owner Homework</h4>
<p>Set aside 10 minutes daily this week for intentional, undivided presence with your senior dog — no phone, no TV, no other task. Just be with them. Note what you observe about your dog during this time that you have been missing in the busyness of daily life.</p>
<div class="lesson-quiz" data-lesson="c6_m4_l3"><h4>Knowledge Check</h4><p>What neurochemical is released in both dogs and humans during mutual soft eye contact?</p><div class="quiz-options"><button class="qo" data-correct="false">Dopamine — the reward chemical</button><button class="qo" data-correct="true">Oxytocin — the bonding hormone, which deepens attachment and produces genuine feelings of warmth and connection</button><button class="qo" data-correct="false">Serotonin — the mood-regulating chemical</button></div></div>`
      },
      {
        id:'c6_m4_l4', name:'End-of-Life Planning',
        desc:'Approach end-of-life planning with clarity, compassion and informed decision-making.',
        xp:90, tip:'The most loving thing you can do for your dog is to face the end of their life clearly and prepare for it fully.',
        content:`<h3>The Hardest Conversation</h3>
<p>Every dog owner will eventually face the end of their dog's life. Having clear, thoughtful plans in place before a crisis makes the most difficult decision in pet ownership marginally less devastating. This lesson is not about being morbid — it is about being prepared to act with clarity and love.</p>
<h4>Quality of Life Assessment</h4>
<p>The HHHHHMM Quality of Life Scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad) provides a structured framework for ongoing assessment. Many vets recommend scoring monthly from the point a dog is diagnosed with a terminal or life-limiting condition.</p>
<h4>Having the Conversation with Your Vet</h4>
<ul><li>Ask directly: "What signs will tell us it is time?"</li><li>Discuss your dog's specific condition trajectory — what to expect and when.</li><li>Ask about palliative care options — pain management, anxiety support, hospice approaches.</li><li>Discuss home euthanasia services if this option would be less distressing for your dog.</li></ul>
<h4>Preparing for Grief</h4>
<p>The grief of losing a dog is real, deep, and often underestimated by people who have not experienced it. Acknowledge in advance that you will need support, time, and kindness for yourself. Speak to your vet or a pet bereavement counsellor — these resources exist because the need is genuine.</p>
<h4>Owner Homework</h4>
<p>If your dog has a life-limiting diagnosis: use the HHHHHMM scale to score their quality of life today. Set a score threshold (agreed with your vet) below which you will have the end-of-life conversation. Write it down. This is one of the kindest things you can do for your dog.</p>
<div class="lesson-quiz" data-lesson="c6_m4_l4"><h4>Knowledge Check</h4><p>What does the HHHHHMM Quality of Life Scale measure?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog's training reliability across 7 key areas</button><button class="qo" data-correct="true">Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, and More good days than bad — a structured framework for assessing whether a dog's life remains worth living from their perspective</button><button class="qo" data-correct="false">The dog's health across 7 organ systems</button></div></div>`
      }
    ]
  },
  {
    id:'c6_m5', n:5, emoji:'🌸', courseId:'senior-wellness', courseName:'Senior Dog Wellness',
    name:'Thriving in Senior Life',
    desc:'Bring everything together into a complete Senior Wellness Plan that supports your dog through their golden years.',
    lessons:[
      {
        id:'c6_m5_l1', name:'Building Your Senior Wellness Plan',
        desc:'Create a comprehensive, personalised wellness plan for your individual senior dog.',
        xp:90, tip:'A written plan is a commitment. A commitment is love in action.',
        content:`<h3>The Complete Senior Wellness Plan</h3>
<p>A Senior Wellness Plan brings together everything covered in this programme — health monitoring, adapted exercise, nutrition, enrichment, emotional support and end-of-life preparation — into a single living document that evolves with your dog.</p>
<h4>Plan Components</h4>
<ul><li><strong>Health monitoring schedule:</strong> Monthly body check, bi-annual vet visits, monthly weight, quarterly BCS assessment</li><li><strong>Exercise plan:</strong> Current walk frequency, duration and intensity; hydrotherapy if applicable; home physio exercises</li><li><strong>Nutrition plan:</strong> Current diet, supplements with doses, calorie target, weight target</li><li><strong>Enrichment plan:</strong> Weekly enrichment schedule adapted to current capabilities</li><li><strong>Emotional support plan:</strong> Anxiety management strategies, daily presence routine, social contact</li><li><strong>End-of-life plan:</strong> Quality of life threshold score, named vet, contact details for home euthanasia if preferred, grief support resources</li></ul>
<h4>Owner Homework</h4>
<p>Write your Senior Wellness Plan this week using the six components above. Share it with your trainer and your vet. Review and update it every 3 months — or any time your dog's condition changes significantly.</p>
<div class="lesson-quiz" data-lesson="c6_m5_l1"><h4>Knowledge Check</h4><p>How frequently should a Senior Wellness Plan be formally reviewed?</p><div class="quiz-options"><button class="qo" data-correct="false">Annually — at the same time as the annual vet check</button><button class="qo" data-correct="true">Every 3 months, or whenever there is a significant change in the dog's condition</button><button class="qo" data-correct="false">Only when a new problem emerges</button></div></div>`
      },
      {
        id:'c6_m5_l2', name:'Programme Certification',
        desc:'Celebrate your commitment to your senior dog\'s golden years and receive your Senior Wellness certification.',
        xp:150, tip:'You chose to do more for your senior dog than most people ever will. That matters.',
        content:`<h3>Senior Dog Wellness — Certified</h3>
<p>Completing the Senior Dog Wellness Program means you have invested in your ageing dog's quality of life at the moment it matters most. The knowledge and systems you have put in place will make the difference between an old dog who merely exists and a senior dog who truly thrives.</p>
<h4>What Your Certification Demonstrates</h4>
<ul><li>Ability to recognise and respond to signs of healthy ageing, pain, and cognitive decline</li><li>A complete adapted exercise programme appropriate to your dog's current capabilities</li><li>Evidence-based nutritional and supplementation plan in place</li><li>Emotional wellbeing support and enrichment programme adapted for senior life</li><li>End-of-life planning completed with clarity and compassion</li><li>A written, reviewed Senior Wellness Plan</li></ul>
<h4>The Gift You Have Given</h4>
<p>Senior dogs ask for very little — good food, comfortable rest, gentle movement, familiar smells, and the presence of the person they love most. You have learned to give them all of these things with knowledge, skill and intention. The time you have with them now is precious. Use every day of it well.</p>
<div class="lesson-quiz" data-lesson="c6_m5_l2"><h4>Knowledge Check</h4><p>The Senior Dog Wellness certification primarily demonstrates:</p><div class="quiz-options"><button class="qo" data-correct="false">Medical expertise equivalent to a veterinary nurse</button><button class="qo" data-correct="true">A complete, evidence-based approach to supporting a senior dog's physical health, mobility, nutrition, enrichment, emotional wellbeing and end-of-life planning</button><button class="qo" data-correct="false">The ability to manage all senior health conditions without veterinary input</button></div></div>`
      },
      {
        id:'c6_m5_l3', name:'Connecting with Senior Dog Community',
        desc:'Find support, share knowledge and connect with others on the senior dog journey.',
        xp:70, tip:'You are not alone in this journey. The senior dog community is one of the warmest you will find.',
        content:`<h3>Finding Your Tribe</h3>
<p>The senior dog owner community is a uniquely warm and supportive space — united by shared love, shared challenges, and the shared experience of navigating the most tender chapter of life with a dog. Connecting with this community enriches both your experience and your dog's wellbeing.</p>
<h4>Resources and Community</h4>
<ul><li><strong>Senior dog rescue and adoption groups:</strong> Adopting a senior dog is one of the most compassionate acts in dog ownership. Many older dogs in rescue have been given up by owners who could no longer cope — they deserve a chance.</li><li><strong>Online communities:</strong> Senior dog-specific groups provide peer support, practical advice and a space to share the emotional journey.</li><li><strong>Veterinary specialist networks:</strong> If your dog has complex needs, ask your vet for a referral to a veterinary internist, orthopaedic specialist or veterinary behaviourist.</li><li><strong>Pet bereavement support:</strong> The Blue Cross, PDSA, and many veterinary practices offer free pet bereavement counselling — use it when the time comes.</li></ul>
<h4>Sharing Your Knowledge</h4>
<p>You have completed a comprehensive programme in senior dog wellness. Share one thing you have learned with another dog owner this week — whether in person, in an online group, or simply in conversation. Knowledge shared is impact multiplied.</p>
<div class="lesson-quiz" data-lesson="c6_m5_l3"><h4>Knowledge Check</h4><p>What is one of the most compassionate acts available to someone who has completed the Senior Dog Wellness program?</p><div class="quiz-options"><button class="qo" data-correct="false">Returning their own dog to rescue when they become too difficult to manage</button><button class="qo" data-correct="true">Adopting a senior rescue dog — applying your knowledge and commitment to a dog who has been given up and desperately needs an informed, caring home</button><button class="qo" data-correct="false">Volunteering at a dog training club as an assistant</button></div></div>`
      },
      {
        id:'c6_m5_l4', name:'Honouring the Journey',
        desc:'Reflect on your dog\'s full life journey and the privilege of being their person through every stage.',
        xp:100, tip:'Every stage of your dog\'s life has been a gift. The senior years, navigated with love and knowledge, are the deepest gift of all.',
        content:`<h3>A Life Well Lived Together</h3>
<p>You have shared your life with this dog. You have walked in rain and sun, navigated challenges, celebrated milestones, and built a relationship that — for your dog — represents the entirety of what love and safety mean. The senior years are not the end of that story. They are the chapter where everything you have built together reaches its fullest expression.</p>
<h4>Reflection</h4>
<ul><li>What is your favourite memory of your dog at their peak?</li><li>What have they taught you that you would not have learned any other way?</li><li>What do you want the last weeks and days of their life to feel like for them?</li><li>Who will you be grateful to for helping you through this journey?</li></ul>
<h4>The Promise</h4>
<p>You enrolled in this programme because you wanted to do better for your senior dog than simply watching them age. You have done that. You understand their body, their mind, their emotional life, and their needs. You are as prepared as any owner can be to give them the best possible quality of life for every day they have left. That is a remarkable promise to keep — and you are keeping it.</p>
<div class="lesson-quiz" data-lesson="c6_m5_l4"><h4>Knowledge Check</h4><p>The Senior Dog Wellness Programme ultimately equips owners to:</p><div class="quiz-options"><button class="qo" data-correct="false">Prevent all age-related health conditions through diet and exercise alone</button><button class="qo" data-correct="true">Give their senior dog the best possible quality of life through knowledge, adapted care, proactive health management and intentional emotional presence — for every day that remains</button><button class="qo" data-correct="false">Extend their dog's lifespan beyond their natural genetic potential</button></div></div>`
      }
    ]
  }
];

FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_6_MODULES);

/* ─── /app/fp-course7.js ─── */
/* ═══════════════════════════════════════════════════════════
   COURSE 7 — RESCUE DOG INTEGRATION PROGRAM
   Module IDs: c7_m1 – c7_m5
═══════════════════════════════════════════════════════════ */

var COURSE_7_MODULES = [
  {
    id:'c7_m1', n:1, emoji:'🏠', courseId:'rescue-integration', courseName:'Rescue Dog Integration',
    name:'The First Two Weeks',
    desc:'Navigate the critical first two weeks with your rescue dog using the proven three-three-three rule.',
    lessons:[
      {
        id:'c7_m1_l1', name:'The Three-Three-Three Rule',
        desc:'Understand the three stages of rescue dog adjustment and what to expect at each.',
        xp:70, tip:'The dog you see in week one is not the dog you will have in month three. Give them time.',
        content:`<h3>Three Days, Three Weeks, Three Months</h3>
<p>The three-three-three rule describes the typical adjustment timeline for a rescue dog. Understanding it prevents owners from panicking when their new dog is shut down and frightened, or from becoming concerned when the "honeymoon" dog suddenly starts testing boundaries as they gain confidence.</p>
<h4>First 3 Days — Overwhelm</h4>
<p>The dog is terrified, shut down, or hypervigilant. They may not eat, drink, toilet outdoors, or interact. They are processing a seismic change — every smell, sound and sight is new. What to do: give them a safe, quiet space. Minimal demands. Let them decompress at their own pace. No visitors.</p>
<h4>First 3 Weeks — Learning the Routine</h4>
<p>The dog begins to relax into the rhythm of the household. Their true personality begins to emerge — often surprising owners with both positive traits (affection, playfulness) and challenging ones (separation anxiety, resource guarding, reactivity) that were masked by shut-down in the first days.</p>
<h4>First 3 Months — Settling In</h4>
<p>The dog now understands the household routine and begins to feel genuinely safe. This is when training becomes most effective — the dog has the cognitive space to learn. Some behaviours will continue to improve for 6–12 months as the nervous system fully regulates.</p>
<h4>Owner Homework</h4>
<p>Write down where you think your rescue dog currently is in the three-three-three timeline. Note three specific behaviours that reflect their adjustment stage. Share with your trainer.</p>
<div class="lesson-quiz" data-lesson="c7_m1_l1"><h4>Knowledge Check</h4><p>What typically happens around the 3-week mark that surprises some rescue owners?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog becomes completely settled and all problems resolve</button><button class="qo" data-correct="true">The dog's true personality emerges — including challenging behaviours that were masked by shut-down in the first days</button><button class="qo" data-correct="false">The dog returns to the same shut-down state as day one</button></div></div>`
      },
      {
        id:'c7_m1_l2', name:'Setting Up the Safe Space',
        desc:'Create a decompression zone that gives your rescue dog the security they desperately need.',
        xp:70, tip:'Safety is not a luxury for a rescue dog — it is the precondition for everything else.',
        content:`<h3>The Decompression Zone</h3>
<p>A rescue dog arrives with an overloaded nervous system and no established territory. Before anything else — before training, before socialisation, before visitors — they need a physical space that is entirely safe, predictable and theirs.</p>
<h4>Setting Up the Safe Space</h4>
<ul><li><strong>Location:</strong> A quiet room or corner away from foot traffic, front doors and external noise.</li><li><strong>Den:</strong> A crate or covered pen with soft bedding and the dog's introduction scent (a blanket from the rescue centre if possible).</li><li><strong>Access:</strong> The dog should always be able to enter and exit freely — the safe space is a refuge, not a prison.</li><li><strong>Rules:</strong> Children and visitors do not enter the safe space. The dog is never disturbed when inside it. This is the one place where nothing will happen to them.</li></ul>
<h4>Scent Introduction</h4>
<p>Place a worn item of clothing (your scent) near the safe space from day one. This builds a scent map association — your smell = safe. Do not wash the bedding for the first two weeks; your dog's own scent accumulating makes it more secure, not less clean.</p>
<h4>Owner Homework</h4>
<p>Set up the safe space before your dog arrives (or today if they are already home). Review: is it truly quiet? Is there always free access? Are all household members briefed that this space is off-limits to them? Photograph it and share with your trainer.</p>
<div class="lesson-quiz" data-lesson="c7_m1_l2"><h4>Knowledge Check</h4><p>Why should bedding in a rescue dog's safe space not be washed in the first two weeks?</p><div class="quiz-options"><button class="qo" data-correct="false">To maintain the scent of the rescue centre, which is familiar</button><button class="qo" data-correct="true">To allow the dog's own scent to accumulate, making the space feel increasingly familiar and secure</button><button class="qo" data-correct="false">Because washing disrupts the fibre structure of the bedding</button></div></div>`
      },
      {
        id:'c7_m1_l3', name:'Decompression Walks',
        desc:'Use structured decompression walks to begin rebuilding trust and reducing overwhelm.',
        xp:70, tip:'A decompression walk is not about exercise — it is about giving a rescue dog permission to exist.',
        content:`<h3>The Decompression Walk</h3>
<p>A decompression walk is a dog-led, low-demand walk whose sole purpose is to allow the dog to decompress through nose-led environmental investigation. There are no cues, no direction changes, no lead corrections — just movement at the dog's pace, following their nose.</p>
<h4>How to Run a Decompression Walk</h4>
<ul><li>Long line or flexi lead (in safe areas) to allow freedom without risk.</li><li>Follow the dog's nose — wherever they want to sniff, they sniff.</li><li>No cues unless safety requires it.</li><li>No other dogs, no busy areas — quiet, familiar routes only in the first weeks.</li><li>Duration: 20–30 minutes maximum. Sensory overload is easy for a newly arrived rescue dog.</li></ul>
<h4>What You Are Building</h4>
<p>Every decompression walk builds three things: cortisol reduction (sniffing is neurologically calming), trust in the handler as a safe companion, and sensory familiarity with the new territory. These three things are the foundation of every successful rescue dog integration.</p>
<h4>Owner Homework</h4>
<p>Replace all structured walks with decompression walks for the first two weeks. Keep them short (20 minutes), quiet, and completely dog-led. Note any changes in your dog's body language, relaxation and willingness to engage across the two weeks.</p>
<div class="lesson-quiz" data-lesson="c7_m1_l3"><h4>Knowledge Check</h4><p>What are the three things built by decompression walks?</p><div class="quiz-options"><button class="qo" data-correct="false">Physical fitness, lead skills, and socialisation</button><button class="qo" data-correct="true">Cortisol reduction, trust in the handler, and sensory familiarity with the new territory</button><button class="qo" data-correct="false">Obedience, recall, and loose lead walking</button></div></div>`
      },
      {
        id:'c7_m1_l4', name:'Managing Household Introductions',
        desc:'Introduce your rescue dog to household members, children, and resident pets safely and successfully.',
        xp:80, tip:'Every introduction is an investment in a relationship. Make the first impression one worth having.',
        content:`<h3>Introductions That Set Dogs Up to Succeed</h3>
<p>Most problematic rescue dog situations in the first month are caused by introductions that happened too fast, too intensely, or with too little management. A slow, structured, positive introduction takes more time upfront and saves months of remediation later.</p>
<h4>Adult Humans</h4>
<ul><li>Let the dog approach — never approach the dog first.</li><li>No reaching down to the head — offer the back of the hand low for sniffing.</li><li>No direct eye contact initially — look slightly to the side.</li><li>No picking up, hugging, or restraint in the first days.</li><li>Feed treats from the hand of each new person — "new human = food" builds the association quickly.</li></ul>
<h4>Children</h4>
<ul><li>Brief children specifically before introduction: quiet voice, no running, let the dog come to them.</li><li>Child sits on the floor, arm extended with treat — dog approaches voluntarily.</li><li>All child-dog interactions supervised and short (2–3 minutes maximum) for the first two weeks.</li></ul>
<h4>Resident Pets</h4>
<ul><li>Dog-to-dog: introduce on neutral ground (a park, not the home) on parallel walks before any direct meeting.</li><li>Cats: scent swapping (bedding swap between rooms) for 3–5 days before any visual contact.</li><li>Visual contact through a baby gate before free access.</li><li>Never leave resident pets and new dog unsupervised until settled coexistence is established over weeks.</li></ul>
<div class="lesson-quiz" data-lesson="c7_m1_l4"><h4>Knowledge Check</h4><p>How should a resident cat be introduced to a new rescue dog?</p><div class="quiz-options"><button class="qo" data-correct="false">Allow them to meet freely immediately — dogs and cats sort themselves out</button><button class="qo" data-correct="true">Scent swapping for 3–5 days, then visual contact through a barrier, before any free access — always ensuring the cat has elevated escape routes</button><button class="qo" data-correct="false">Introduce them in the garden where the space is larger</button></div></div>`
      }
    ]
  },
  {
    id:'c7_m2', n:2, emoji:'🔍', courseId:'rescue-integration', courseName:'Rescue Dog Integration',
    name:'Understanding Rescue History',
    desc:'Learn to read your rescue dog\'s history through their behaviour and adapt your approach accordingly.',
    lessons:[
      {
        id:'c7_m2_l1', name:'Reading Between the Lines',
        desc:'Use behaviour observation to understand your rescue dog\'s background and emotional history.',
        xp:80, tip:'Your rescue dog\'s behaviour is their biography — learn to read it.',
        content:`<h3>Behaviour as History</h3>
<p>Most rescue dogs arrive with incomplete or inaccurate histories. The rescue centre may know very little about a dog's previous life. But the dog's behaviour tells you everything — if you know how to read it. This module teaches you to interpret your rescue dog's responses as information about their past experiences.</p>
<h4>Common Behaviour Patterns and Their Meanings</h4>
<ul><li><strong>Flinching at raised hands:</strong> History of physical punishment. Approach with very slow, low movements until confidence is built.</li><li><strong>Resource guarding food:</strong> History of food insecurity — competing for food, inconsistent feeding, or having food removed. Feed from the hand initially; never approach while eating.</li><li><strong>Extreme startle response to sounds:</strong> Not necessarily abuse — can indicate under-socialisation. Systematic desensitisation required.</li><li><strong>Velcro behaviour (following everywhere):</strong> Previous abandonment, time alone in kennels, or genuine attachment. May predict separation anxiety.</li><li><strong>Shutting down on lead:</strong> Previous aversive lead experiences (choke chains, leash corrections) — gentle lead introduction required.</li></ul>
<h4>Owner Homework</h4>
<p>Observe your rescue dog for one week and record every moment of hesitation, avoidance, flinching, or heightened response. Note the trigger for each. Share with your trainer — this forms the behaviour history that will guide your training plan.</p>
<div class="lesson-quiz" data-lesson="c7_m2_l1"><h4>Knowledge Check</h4><p>A rescue dog guards their food bowl intensely. What does this most likely indicate about their history?</p><div class="quiz-options"><button class="qo" data-correct="false">They are a dominant dog asserting control over resources</button><button class="qo" data-correct="true">A history of food insecurity — competing for food, inconsistent access, or having food removed — which produced a strong conditioned guarding response</button><button class="qo" data-correct="false">They are greedy and need strict feeding rules from the start</button></div></div>`
      },
      {
        id:'c7_m2_l2', name:'Trauma-Informed Training',
        desc:'Adapt your training approach to be genuinely trauma-informed for a rescue dog\'s unique needs.',
        xp:80, tip:'Trauma-informed training is not soft — it is the most effective approach for a dog whose nervous system has been shaped by fear.',
        content:`<h3>What Trauma Does to a Dog</h3>
<p>Trauma — whether from abuse, neglect, isolation, or significant loss — produces measurable neurological changes. The stress response system becomes hyperactive, the threshold for fear responses drops, and the capacity to learn new things is reduced when under stress. Training a traumatised dog without accounting for these changes produces slow results and frequent setbacks.</p>
<h4>Trauma-Informed Training Principles</h4>
<ul><li><strong>Safety first, always:</strong> The dog must feel safe before any learning can occur. Never proceed if the dog is showing stress signals.</li><li><strong>Choice and control:</strong> Give the dog as much choice as possible — where to stand, whether to engage, when to stop. Autonomy reduces anxiety dramatically.</li><li><strong>Predictability:</strong> Consistent routines, consistent responses, consistent rules. Trauma creates an expectation of chaos — predictability is healing.</li><li><strong>Patience over pace:</strong> The speed of the dog, not the speed of the programme. A traumatised dog may need 10x longer to learn the same skill as a puppy. This is normal.</li><li><strong>Celebrate micro-progress:</strong> A rescue dog taking a treat from a stranger's hand for the first time is an achievement. Mark it. Celebrate it. Progress is real even when it is small.</li></ul>
<h4>Owner Homework</h4>
<p>Review your current training approach against the five trauma-informed principles. Identify one principle you could apply more consistently. Implement it this week and note the effect on your dog's engagement and stress signals.</p>
<div class="lesson-quiz" data-lesson="c7_m2_l2"><h4>Knowledge Check</h4><p>Why does giving a traumatised dog choice and control reduce their anxiety?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs with choice are harder to train and therefore focus better</button><button class="qo" data-correct="true">Because trauma creates a learned helplessness — the loss of control over outcomes. Restoring choice restores agency, which is neurologically calming and builds confidence</button><button class="qo" data-correct="false">Because choice prevents the dog from forming bad habits</button></div></div>`
      },
      {
        id:'c7_m2_l3', name:'Fear and Trust Building',
        desc:'Build genuine trust with a fearful rescue dog through systematic, patient positive experience.',
        xp:90, tip:'Trust with a fearful dog is built in seconds and lost in seconds. Every interaction is either a deposit or a withdrawal.',
        content:`<h3>The Trust Account</h3>
<p>Think of your relationship with a fearful rescue dog as a bank account that begins with a very low balance. Every positive interaction is a deposit. Every frightening experience — even unintentional — is a withdrawal. The goal is consistent, sustainable deposits that grow the balance over months.</p>
<h4>Deposits (Trust Builders)</h4>
<ul><li>Delivering high-value food from your hand without asking for anything</li><li>Letting the dog end interactions at their choosing</li><li>Sitting on the floor at the dog's level — less threatening than standing over them</li><li>Speaking softly, calmly, and warmly — tone matters more than words</li><li>Consistently following through — if you call them, you always make it worthwhile</li><li>Advocating for them — removing them from situations that are too much</li></ul>
<h4>Withdrawals (Trust Reducers)</h4>
<ul><li>Any physical punishment or harsh correction</li><li>Forcing interaction (picking up, restraining, approaching when the dog is trying to flee)</li><li>Exposing to situations they are not ready for</li><li>Unpredictable responses — same situation producing different reactions from the handler</li></ul>
<h4>Owner Homework</h4>
<p>For one week, keep a daily deposit/withdrawal tally. Every interaction that builds trust: +1. Every interaction that costs trust: -1. Your end-of-week score tells you whether you are moving toward trust or away from it.</p>
<div class="lesson-quiz" data-lesson="c7_m2_l3"><h4>Knowledge Check</h4><p>Which of the following is a trust withdrawal with a fearful rescue dog?</p><div class="quiz-options"><button class="qo" data-correct="false">Sitting on the floor to interact with them</button><button class="qo" data-correct="true">Picking up or restraining the dog when they are trying to move away</button><button class="qo" data-correct="false">Delivering food from your hand without asking for a behaviour</button></div></div>`
      },
      {
        id:'c7_m2_l4', name:'Working with the Rescue Centre',
        desc:'Use your relationship with the rescue centre as a resource for understanding and supporting your dog.',
        xp:70, tip:'The rescue centre know things about your dog that they may not have had space to tell you — ask.',
        content:`<h3>The Rescue Centre as a Resource</h3>
<p>Good rescue centres are a wealth of information about the dogs they rehome. Their staff have spent hours with your dog, observed their responses, identified their triggers, and built the first fragile trust. This knowledge is invaluable — and most owners don't think to go back and ask for it after adoption.</p>
<h4>Questions to Ask the Rescue Centre</h4>
<ul><li>What is known about this dog's history before rescue?</li><li>What specific triggers or fears were observed during their time in kennels?</li><li>What did they enjoy? What motivated them?</li><li>Were there any incidents — with people, other dogs, or in specific situations?</li><li>What management tools were being used (lead type, muzzle, crate)?</li><li>What progress was made in kennels and over what timeframe?</li></ul>
<h4>Post-Adoption Support</h4>
<p>Many rescue organisations offer post-adoption support — follow-up calls, behavioural advice, or introductions to a behaviourist. Always ask what is available. A dog returned to rescue because their owner felt unsupported is a tragedy that good post-adoption support prevents.</p>
<h4>Owner Homework</h4>
<p>Contact your rescue centre this week if you have not already done so. Ask at least three questions from the list above. Record the answers and share with your trainer — this information may change your training approach significantly.</p>
<div class="lesson-quiz" data-lesson="c7_m2_l4"><h4>Knowledge Check</h4><p>Why is it valuable to contact the rescue centre after adoption?</p><div class="quiz-options"><button class="qo" data-correct="false">To update them on the dog's progress so they can improve their kennelling practices</button><button class="qo" data-correct="true">The rescue centre staff have direct observation data — specific triggers, motivators, history, and management strategies — that can significantly improve your training approach and prevent early mistakes</button><button class="qo" data-correct="false">To ensure the dog's microchip details have been correctly transferred</button></div></div>`
      }
    ]
  },
  {
    id:'c7_m3', n:3, emoji:'📈', courseId:'rescue-integration', courseName:'Rescue Dog Integration',
    name:'Foundation Training for Rescue Dogs',
    desc:'Build essential skills using a trauma-informed, patience-led approach tailored to your rescue dog\'s specific needs.',
    lessons:[
      {
        id:'c7_m3_l1', name:'Starting Training at the Right Time',
        desc:'Know when your rescue dog is ready to begin structured training and how to introduce it gently.',
        xp:80, tip:'Starting training too early with a rescue dog is not ambitious — it is counterproductive. Wait for readiness.',
        content:`<h3>Readiness Indicators</h3>
<p>Beginning structured training before a rescue dog is settled produces poor results and can damage the trust you are building. The following indicators suggest a dog is ready to begin foundation training.</p>
<h4>Signs of Readiness</h4>
<ul><li>Consistently eating full meals in their new home</li><li>Willingly approaches handler for interaction (not just food)</li><li>Able to take treats in different rooms of the home</li><li>Shows relaxed body language for significant periods of the day</li><li>Toileting reliably on schedule outdoors</li><li>Able to settle when the handler is in another room</li></ul>
<h4>Introducing Training Gently</h4>
<ul><li>Begin with 2-minute sessions — micro-sessions that end before the dog disengages.</li><li>Use the highest value food you have identified — only the best earns the effort of focus.</li><li>Start with the easiest possible behaviour — a hand touch, name recognition, or a simple sit.</li><li>Three sessions per day maximum — rescue dogs have limited cognitive bandwidth initially.</li></ul>
<h4>Owner Homework</h4>
<p>Use the readiness checklist above to assess your dog today. Score each indicator (present/absent). If 5 of 6 are present, begin micro-training sessions this week. If fewer than 4 are present, focus exclusively on decompression and trust-building for another week before reassessing.</p>
<div class="lesson-quiz" data-lesson="c7_m3_l1"><h4>Knowledge Check</h4><p>What does it mean if a rescue dog is not eating their full meals in the new home?</p><div class="quiz-options"><button class="qo" data-correct="false">They are fussy eaters and may need a different food</button><button class="qo" data-correct="true">They are not yet sufficiently settled — stress suppresses appetite. This is a sign that decompression should continue before any training begins</button><button class="qo" data-correct="false">They are controlling their food intake and should be on a strict feeding schedule</button></div></div>`
      },
      {
        id:'c7_m3_l2', name:'Name Recognition and Check-In',
        desc:'Teach your rescue dog their name and the beginning of voluntary check-in behaviour.',
        xp:80, tip:'The first word a rescue dog learns in their new life should be the happiest sound they\'ve ever heard.',
        content:`<h3>The Most Important Word</h3>
<p>For some rescue dogs, their name may have negative associations from their previous life — spoken harshly before something unpleasant. Whether this is the case or not, building a new positive association with their name (or choosing a new name) is one of the first and most impactful things you can do.</p>
<h4>Teaching Name Recognition</h4>
<ol><li>Say the name once, warmly and clearly.</li><li>The instant the dog orients toward you at all — any ear flick, any eye movement — mark with "yes!" and deliver a high-value treat.</li><li>Never repeat the name if they don't respond. Wait, move closer, reduce distraction, try again.</li><li>Never use the name in a negative context — calling them for anything unpleasant poisons the cue.</li><li>Practise 20 repetitions per day across 4 micro-sessions for the first week.</li></ol>
<h4>New Name for a New Life</h4>
<p>If the rescue centre has given the dog a name you don't know the history of, or if you feel a fresh start is appropriate, choose a new name. Use the same teaching protocol. Dogs adapt to a new name quickly when the new name consistently predicts good things.</p>
<h4>Owner Homework</h4>
<p>Practise 20 name recognition repetitions today. Record the response rate (how many of 20 produced an orientation toward you). Target 90% orientation by the end of the week.</p>
<div class="lesson-quiz" data-lesson="c7_m3_l2"><h4>Knowledge Check</h4><p>Why should you never repeat a dog's name if they don't respond?</p><div class="quiz-options"><button class="qo" data-correct="false">Because repetition teaches the dog it takes multiple calls to respond</button><button class="qo" data-correct="true">Because repeating the name when ignored teaches the dog they can ignore it without consequence — it also dilutes the association you are building. Instead, make yourself more interesting or reduce distraction</button><button class="qo" data-correct="false">Because it confuses the dog about which repetition they should respond to</button></div></div>`
      },
      {
        id:'c7_m3_l3', name:'Positive Toileting Routine',
        desc:'Establish a reliable, stress-free toileting routine for your rescue dog from day one.',
        xp:70, tip:'A predictable toileting routine is one of the greatest sources of security you can give a rescue dog.',
        content:`<h3>Toileting and Stress</h3>
<p>Many rescue dogs arrive with disrupted toileting habits — either from life in kennels (where toileting in the sleeping area was unavoidable) or from a previous home with inconsistent access to outdoors. A patient, positive, predictable toileting routine resolves most issues within 2–4 weeks.</p>
<h4>The Toileting Routine Protocol</h4>
<ul><li>Take out first thing in the morning, after every meal, after every play session, and last thing at night — minimum 6 times per day initially.</li><li>Use a consistent exit route and a specific toileting spot — familiar smells trigger the toileting response.</li><li>Wait patiently and quietly — no talking, no encouragement until they go.</li><li>The instant they begin to toilet: mark with a calm "good" (don't startle them with excitement mid-stream).</li><li>Deliver a high-value treat immediately after they finish — on the spot, not back inside the house.</li><li>If they don't go within 5 minutes: return inside and try again in 15 minutes.</li></ul>
<h4>Indoor Accidents</h4>
<p>Clean immediately with an enzyme-based cleaner that eliminates odour completely — other cleaners leave scent traces that encourage repeat use of the same spot. Never punish accidents — the dog is not being naughty, the routine is not yet established.</p>
<div class="lesson-quiz" data-lesson="c7_m3_l3"><h4>Knowledge Check</h4><p>Why should the treat be delivered on the spot immediately after toileting rather than back inside the house?</p><div class="quiz-options"><button class="qo" data-correct="false">To prevent the dog from being distracted by the return journey</button><button class="qo" data-correct="true">Because the reward must immediately follow the behaviour for the association to form — delivering inside the house rewards coming indoors, not toileting outdoors</button><button class="qo" data-correct="false">Because dogs prefer to eat outdoors</button></div></div>`
      },
      {
        id:'c7_m3_l4', name:'Separation Anxiety Prevention',
        desc:'Implement a separation anxiety prevention protocol from day one before problems develop.',
        xp:90, tip:'Prevention takes three weeks. Treatment takes three months. Do the maths.',
        content:`<h3>The Velcro Dog Problem</h3>
<p>Separation anxiety is one of the most common challenges in rescue dogs — often developing in the first weeks of adoption as the dog bonds intensely with their new owner after the instability of kennel life. Prevention — starting a gradual alone-time programme from day one — is far easier than treatment after the anxiety is established.</p>
<h4>Prevention Protocol — Week by Week</h4>
<ul><li><strong>Week 1:</strong> Practice brief absences of 30 seconds to 2 minutes while the dog is settled with a lick mat or Kong. Return calmly, no fuss. 3–5 repetitions per day.</li><li><strong>Week 2:</strong> Extend to 5–15 minute absences. Go to another room, not out of the house. Build the association: you leave, you always return.</li><li><strong>Week 3:</strong> Brief outdoor absences — 5 minutes outside the front door. Kong or long-lasting chew during absence. Return calmly.</li><li><strong>Week 4+:</strong> Gradually extend outdoor absences. Never extend so far that the dog reaches the point of full distress — stay below threshold throughout.</li></ul>
<h4>Signs Intervention Is Needed</h4>
<p>If your dog vocalises, destroys, or toilets during any absence, the programme is progressing too fast. Step back two stages and rebuild more gradually. If significant anxiety persists despite careful progression, discuss medication support with your vet — this is a medical condition, not a training failure.</p>
<div class="lesson-quiz" data-lesson="c7_m3_l4"><h4>Knowledge Check</h4><p>What does it mean if a rescue dog vocalises or destroys during a planned brief absence?</p><div class="quiz-options"><button class="qo" data-correct="false">The dog is being manipulative and the owner should not return</button><button class="qo" data-correct="true">The absence duration has exceeded the dog's current threshold — the programme must step back two stages and rebuild more gradually</button><button class="qo" data-correct="false">The dog needs more exercise before alone time to tire them out</button></div></div>`
      }
    ]
  },
  {
    id:'c7_m4', n:4, emoji:'🌱', courseId:'rescue-integration', courseName:'Rescue Dog Integration',
    name:'Common Rescue Challenges',
    desc:'Address the most common behavioural challenges seen in rescue dogs with targeted, evidence-based approaches.',
    lessons:[
      {
        id:'c7_m4_l1', name:'Resource Guarding',
        desc:'Safely assess and address resource guarding behaviour in your rescue dog.',
        xp:90, tip:'Resource guarding is communication, not aggression. Learn the language before you try to change it.',
        content:`<h3>Understanding Resource Guarding</h3>
<p>Resource guarding — growling, snapping or biting when someone approaches a valued resource (food, toys, resting places, people) — is one of the most commonly mishandled behaviours in rescue dogs. It is a normal canine behaviour that, when punished, becomes dangerous. When addressed correctly, it is highly manageable.</p>
<h4>Safety First — Assessing Severity</h4>
<ul><li><strong>Low level:</strong> Stiffening, hard stare, eating faster when approached. Safe to address with counter-conditioning.</li><li><strong>Medium level:</strong> Growling, lip curl, or whale eye when approached. Consult a qualified behaviourist before proceeding.</li><li><strong>High level:</strong> Snapping or biting. Immediate professional intervention required — manage through strict resource avoidance until assessed.</li></ul>
<h4>Counter-Conditioning — Low Level Only</h4>
<ol><li>Approach the dog while they eat at a distance that produces no tension. Drop a high-value treat near the bowl. Walk away.</li><li>Repeat — build the association: person approaching = something amazing happens, then they leave.</li><li>Gradually decrease distance across many sessions as the dog begins to look up from their bowl in anticipation rather than stiffening.</li></ol>
<p>The goal: the dog looks up when you approach with a happy, anticipatory expression — the opposite of guarding.</p>
<div class="lesson-quiz" data-lesson="c7_m4_l1"><h4>Knowledge Check</h4><p>Why does punishing a growling dog make resource guarding more dangerous?</p><div class="quiz-options"><button class="qo" data-correct="false">Because punishment teaches the dog that growling is wrong and they stop doing it</button><button class="qo" data-correct="true">Because growling is a warning signal — suppressing the warning with punishment removes the communication without changing the underlying emotion, producing a dog that bites without warning</button><button class="qo" data-correct="false">Because punishment during eating causes food aggression to develop</button></div></div>`
      },
      {
        id:'c7_m4_l2', name:'Reactivity in Rescue Dogs',
        desc:'Understand and address the specific forms of reactivity most common in rescue dogs.',
        xp:90, tip:'A reactive rescue dog is not broken — they are trying to tell you something with the only language they have.',
        content:`<h3>Rescue Reactivity — the Context</h3>
<p>Reactivity in rescue dogs has additional layers compared to reactivity in dogs with known, stable histories. The trigger may be specific and traumatic (a man in a blue uniform, for example), or it may reflect under-socialisation, kennel stress, or learned responses from previous homes. Understanding the context shapes the approach.</p>
<h4>Common Rescue-Specific Reactivity Patterns</h4>
<ul><li><strong>Stranger reactivity:</strong> Often male figures specifically — may indicate previous experience of punishment from a man.</li><li><strong>On-lead reactivity to other dogs:</strong> Common in kennel dogs who had restricted dog-to-dog interaction for months — frustration plus poor socialisation.</li><li><strong>Sound reactivity:</strong> Particular sounds trigger extreme responses — may reflect a specific traumatic event.</li><li><strong>Traffic reactivity:</strong> Common in dogs who lived rurally and have no traffic socialisation history.</li></ul>
<h4>The Approach</h4>
<p>Apply the full reactive dog protocol from the Reactive Dog Recovery Programme (Course 3), with additional sensitivity to the rescue context. Always combine trigger-specific work with stress bucket management — kennel stress takes months to fully resolve and continues to lower the threshold during that period.</p>
<div class="lesson-quiz" data-lesson="c7_m4_l2"><h4>Knowledge Check</h4><p>Why might a rescue dog show specific reactivity to male figures?</p><div class="quiz-options"><button class="qo" data-correct="false">Because male voices are lower and more startling to dogs</button><button class="qo" data-correct="true">It may indicate previous experience of punishment, threat or abuse from a male figure — specific trigger reactivity often reflects a conditioned fear response to a specific characteristic</button><button class="qo" data-correct="false">Because male figures are less familiar with dog body language and approach incorrectly</button></div></div>`
      },
      {
        id:'c7_m4_l3', name:'Destructive Behaviour and Chewing',
        desc:'Address destructive chewing and behaviour through management, enrichment and appropriate outlets.',
        xp:80, tip:'A dog that destroys your home is a dog with unmet needs. Meet the need, solve the behaviour.',
        content:`<h3>Destruction Is Communication</h3>
<p>Destructive behaviour in rescue dogs falls into three main categories: separation anxiety-driven destruction (covered in Module 3), boredom and under-stimulation, and stress-based chewing (a self-calming behaviour). Each requires a different response.</p>
<h4>Boredom Destruction</h4>
<ul><li>Increase enrichment significantly — the behaviour is telling you the dog needs more mental and physical stimulation.</li><li>Rotate toys weekly. Introduce puzzle feeders, scatter feeding, and nose work.</li><li>Ensure adequate physical exercise appropriate to the dog's age and capability.</li></ul>
<h4>Stress Chewing</h4>
<p>Chewing is inherently calming — it releases endorphins and reduces cortisol. A dog that chews excessively is self-medicating stress. Provide appropriate legal chews (raw bones, antlers, long-lasting treats) and reduce the dog's overall stress load through routine, enrichment and decompression.</p>
<h4>Management While Training</h4>
<ul><li>Dog-proof the environment — remove access to items that can be destroyed.</li><li>Supervise actively during the integration period — no unsupervised access to the home until the dog is settled.</li><li>A crate or pen used positively provides safe containment when direct supervision is not possible.</li></ul>
<div class="lesson-quiz" data-lesson="c7_m4_l3"><h4>Knowledge Check</h4><p>Why does chewing reduce stress in dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it gives the dog something to focus on instead of the stressor</button><button class="qo" data-correct="true">The physical act of chewing releases endorphins and reduces cortisol — it is a genuine neurochemical stress-reduction mechanism</button><button class="qo" data-correct="false">Because destroyed objects no longer serve as triggers</button></div></div>`
      },
      {
        id:'c7_m4_l4', name:'When to Seek Professional Help',
        desc:'Know the signs that your rescue dog\'s behaviour requires professional intervention.',
        xp:80, tip:'Seeking help early is not weakness — it is the most effective thing you can do for your rescue dog.',
        content:`<h3>Knowing Your Limits</h3>
<p>Some rescue dogs present with behaviour challenges that exceed what an owner — even an experienced, committed one — can address without professional support. Knowing when to seek qualified help is one of the most important skills a rescue dog owner can have. The earlier intervention happens, the better the outcome.</p>
<h4>Immediate Professional Referral Indicators</h4>
<ul><li>Any bite that breaks skin — regardless of context</li><li>Growling at children in the household</li><li>Inability to enter or exit the home without extreme distress</li><li>Aggression toward resident pets that cannot be safely managed</li><li>Self-harming behaviour (excessive licking to the point of skin damage, spinning, pacing continuously)</li><li>Complete inability to eat for more than 48 hours in the new home</li></ul>
<h4>Who to Contact</h4>
<ul><li><strong>Veterinarian first:</strong> Rule out medical causes for all behaviour problems.</li><li><strong>Clinical Animal Behaviourist:</strong> ABTC-registered professionals for complex behaviour cases.</li><li><strong>Your rescue centre:</strong> Many have behaviour support staff or approved behaviourist contacts.</li><li><strong>Four Paws trainer:</strong> Your assigned trainer can assess and refer appropriately.</li></ul>
<div class="lesson-quiz" data-lesson="c7_m4_l4"><h4>Knowledge Check</h4><p>What is the first professional contact you should make when a rescue dog presents any new significant behaviour problem?</p><div class="quiz-options"><button class="qo" data-correct="false">A dog trainer to begin behaviour modification immediately</button><button class="qo" data-correct="true">A veterinarian — to rule out medical causes before assuming the problem is purely behavioural</button><button class="qo" data-correct="false">The rescue centre — they are responsible for the dog's behaviour</button></div></div>`
      }
    ]
  },
  {
    id:'c7_m5', n:5, emoji:'🌟', courseId:'rescue-integration', courseName:'Rescue Dog Integration',
    name:'Thriving — Rescue Dog Success',
    desc:'Celebrate your rescue dog\'s journey and plan for a lifetime of growth, security and joy.',
    lessons:[
      {
        id:'c7_m5_l1', name:'Measuring Integration Success',
        desc:'Assess how far your rescue dog has come and celebrate every genuine achievement.',
        xp:90, tip:'Compare your rescue dog only to themselves at arrival — the transformation is always remarkable.',
        content:`<h3>Where Did You Start? Where Are You Now?</h3>
<p>Rescue dog integration is one of the most rewarding journeys in dog ownership — and one of the hardest to measure, because progress is often gradual and the starting point is not always fully understood. This lesson provides a structured assessment framework to recognise and celebrate genuine progress.</p>
<h4>Integration Success Indicators</h4>
<ul><li>Eats full meals reliably — every day, with no anxiety around the bowl</li><li>Settles in the home with relaxed body language for significant periods</li><li>Approaches handler voluntarily for interaction and affection</li><li>Responds reliably to their name</li><li>Toilets reliably outdoors with minimal accidents</li><li>Can be left alone for appropriate periods without distress</li><li>Engages with enrichment activities with enthusiasm</li><li>Walks on lead with manageable stress levels</li></ul>
<h4>Owner Homework</h4>
<p>Score each indicator (0 = not present, 1 = partial, 2 = fully achieved). Your total out of 16 reflects your dog's integration progress. Compare with your score from week one. Share the comparison with your trainer.</p>
<div class="lesson-quiz" data-lesson="c7_m5_l1"><h4>Knowledge Check</h4><p>Against what should you measure your rescue dog's progress?</p><div class="quiz-options"><button class="qo" data-correct="false">The breed standard for behaviour in that type of dog</button><button class="qo" data-correct="true">Their own behaviour at the point of arrival — every rescue dog's journey is unique and should be measured only against their own starting point</button><button class="qo" data-correct="false">Other rescue dogs of the same age who arrived at the same time</button></div></div>`
      },
      {
        id:'c7_m5_l2', name:'The Rescue Dog at 6 and 12 Months',
        desc:'Understand what typically changes in the second half of the first year and how to support continued growth.',
        xp:80, tip:'The 6-12 month window is often when the real dog emerges. Stay curious, stay patient.',
        content:`<h3>Beyond the First Three Months</h3>
<p>The three-three-three rule covers the first three months. But rescue dog transformation often continues well beyond this — the 6-month and 12-month milestones bring their own shifts, challenges and breakthroughs.</p>
<h4>Months 3–6: The Testing Phase</h4>
<p>As the dog fully settles, they begin to test the boundaries of their new world — not out of manipulation, but out of growing confidence. Behaviours that were suppressed during early adjustment may emerge. This is a positive sign (the dog feels safe enough to express themselves) but requires consistent, patient management.</p>
<h4>Months 6–12: The True Self Emerges</h4>
<p>By 12 months, most rescue dogs have decompressed fully and their genuine personality is apparent. This is often the most pleasant surprise for owners — the dog that arrived as a terrified shadow becomes a confident, affectionate, playful companion. Training accelerates. The relationship deepens.</p>
<h4>Owner Homework</h4>
<p>If your dog has been home for more than 3 months: write a "then and now" comparison. Three specific behaviours that have transformed. One behaviour that is still a work in progress. Share with your trainer.</p>
<div class="lesson-quiz" data-lesson="c7_m5_l2"><h4>Knowledge Check</h4><p>New behaviours emerging in a rescue dog at 3–6 months usually indicate:</p><div class="quiz-options"><button class="qo" data-correct="false">The dog was misrepresented by the rescue centre</button><button class="qo" data-correct="true">Growing confidence — behaviours suppressed during early shut-down are now emerging as the dog feels safe enough to express themselves</button><button class="qo" data-correct="false">The initial training has failed and needs to restart</button></div></div>`
      },
      {
        id:'c7_m5_l3', name:'Advocating for Rescue Dogs',
        desc:'Use your experience to advocate for rescue dogs and support others on the same journey.',
        xp:80, tip:'The best thing that can happen to a rescue dog community is people like you, who did the work, sharing what you learned.',
        content:`<h3>You Are Now an Expert</h3>
<p>By completing the Rescue Dog Integration Program, you have acquired knowledge, skills and lived experience that most dog owners — and many dog professionals — do not have. You have navigated the decompression period, the trust-building, the behaviour challenges and the gradual emergence of a settled, confident dog. This knowledge is genuinely valuable.</p>
<h4>Ways to Advocate</h4>
<ul><li><strong>Share honestly:</strong> The rescue dog journey is not always easy. Sharing your honest experience — including the hard parts — helps others prepare rather than expect an instantly perfect dog.</li><li><strong>Counter the myths:</strong> "Rescue dogs are damaged," "you never know what you're getting," "puppies are better." Your experience is the most powerful counter-argument available.</li><li><strong>Support rescue organisations:</strong> Volunteer, donate, foster, or simply share adoption posts. Every home found is a life changed.</li><li><strong>Be a reference:</strong> Offer to be a reference or support contact for others adopting from your rescue centre — your lived experience is more reassuring than any brochure.</li></ul>
<div class="lesson-quiz" data-lesson="c7_m5_l3"><h4>Knowledge Check</h4><p>Why is honest sharing of the rescue dog experience — including difficult parts — valuable?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it discourages unsuitable people from adopting</button><button class="qo" data-correct="true">Because it allows prospective adopters to prepare realistically, reducing the risk of returns caused by unmet expectations</button><button class="qo" data-correct="false">Because negative experiences should always be shared to hold rescue centres accountable</button></div></div>`
      },
      {
        id:'c7_m5_l4', name:'Rescue Dog Integration Certification',
        desc:'Receive your Rescue Dog Integration certification and celebrate the transformation you have made possible.',
        xp:150, tip:'You gave a dog their life back. That is not nothing — it is everything.',
        content:`<h3>Rescue Dog Integration — Certified</h3>
<p>Completing this programme means you have given a rescue dog the patient, informed, compassionate start they needed to become the dog they were always capable of being. This is not a small thing. The dog beside you today — settled, trusting, and beginning to thrive — is proof of what consistent love and skilled care can do.</p>
<h4>What Your Certification Demonstrates</h4>
<ul><li>Understanding of the three-three-three adjustment framework</li><li>Ability to set up and maintain a safe decompression environment</li><li>Trauma-informed training approach</li><li>Foundation skills established: name recognition, toileting, check-in, separation tolerance</li><li>Evidence-based management of common rescue challenges</li><li>Knowledge of when and how to seek professional support</li></ul>
<h4>What Your Dog Now Has</h4>
<p>A home. A person. A routine they can rely on. The experience of being cared for with patience and skill. The beginning of a life that is genuinely good. Whatever happened before — the kennel, the previous home, the unknown history — it has not defined them. You have helped define what comes next. That is the greatest possible gift.</p>
<div class="lesson-quiz" data-lesson="c7_m5_l4"><h4>Knowledge Check</h4><p>The Rescue Dog Integration program is unique among the Four Paws courses because:</p><div class="quiz-options"><button class="qo" data-correct="false">It is more difficult than other courses</button><button class="qo" data-correct="true">It specifically addresses the unique emotional, historical and neurological context of a dog transitioning from an uncertain past into a new home — requiring trauma-informed approaches not needed for dogs with stable histories</button><button class="qo" data-correct="false">It covers more training skills than any other course</button></div></div>`
      }
    ]
  }
];

FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_7_MODULES);

/* ─── /app/fp-courses-part4.js ─── */
/* ═══════════════════════════════════════════════════════════
   COURSE 8 — MULTI-DOG HOUSEHOLD PROGRAM
   Module IDs: c8_m1 – c8_m5
═══════════════════════════════════════════════════════════ */

var COURSE_8_MODULES = [
  {
    id:'c8_m1', n:1, emoji:'🐾', courseId:'multi-dog', courseName:'Multi-Dog Household',
    name:'Understanding Multi-Dog Dynamics',
    desc:'Learn how dogs communicate, compete and coexist so you can design a genuinely harmonious household.',
    lessons:[
      {
        id:'c8_m1_l1', name:'How Dogs Relate to Each Other',
        desc:'Understand canine social structure and what it means for your multi-dog home.',
        xp:70, tip:'Dogs are not wolves and your home is not a pack — but understanding how dogs relate to each other changes everything.',
        content:`<h3>Canine Social Structure — The Reality</h3>
<p>The old "pack and dominance" model of dog social behaviour has been thoroughly revised by modern ethology. Dogs are not constantly competing for dominance — they are fluid social animals who negotiate access to resources through communication, learned patterns and relationship history. Understanding this changes how you interpret and manage your multi-dog household.</p>
<h4>What Dogs Actually Do</h4>
<ul><li>They form relationships based on familiarity, positive experience and compatible communication styles — not rank.</li><li>They negotiate resource access through body language signals — deference, avoidance, displacement — most of which owners miss entirely.</li><li>They have preferred companions and dogs they merely tolerate — forced proximity with an incompatible dog is stressful regardless of how long they have lived together.</li><li>They can live in genuine harmony when their individual needs are met and their communication is respected.</li></ul>
<h4>Reading Inter-Dog Communication</h4>
<ul><li><strong>Deference signals:</strong> Head turning, body lowering, licking the other dog's muzzle, moving away — these are cooperative signals, not weakness.</li><li><strong>Displacement:</strong> One dog moves away from a resource when another approaches — comfortable coexistence, not submission.</li><li><strong>Tension signals:</strong> Stiff body, hard stare, standing over the other dog, growling — these are conflict signals requiring management.</li></ul>
<h4>Owner Homework</h4>
<p>Observe your dogs interacting for 10 minutes without intervening. Note every communication signal you see. Bring your observations to your trainer — can you identify deference, displacement or tension signals?</p>
<div class="lesson-quiz" data-lesson="c8_m1_l1"><h4>Knowledge Check</h4><p>When one dog moves away from a resource as another dog approaches, this most likely indicates:</p><div class="quiz-options"><button class="qo" data-correct="false">The first dog is being bullied and needs protection</button><button class="qo" data-correct="true">Normal canine displacement — a cooperative communication signal that prevents conflict by voluntarily ceding the resource</button><button class="qo" data-correct="false">Dominance hierarchy being established through force</button></div></div>`
      },
      {
        id:'c8_m1_l2', name:'Resource Competition and Management',
        desc:'Identify and manage every resource competition point in your multi-dog home.',
        xp:80, tip:'Most multi-dog conflict is resource conflict in disguise. Remove the competition, remove the conflict.',
        content:`<h3>What Dogs Compete Over</h3>
<p>Resource competition is the primary driver of inter-dog conflict in household settings. Understanding what counts as a resource — and where competition flashpoints exist — allows you to manage the environment so competition rarely occurs.</p>
<h4>Resources Dogs Compete Over</h4>
<ul><li><strong>Food:</strong> Bowls, chews, dropped food, treats in training — the highest-value resource and the most common flashpoint.</li><li><strong>Space:</strong> Preferred resting spots, furniture positions, proximity to the owner.</li><li><strong>Access to the owner:</strong> Attention, physical contact, being called first — dogs notice these patterns.</li><li><strong>Doorways and thresholds:</strong> Going through a door first is a significant social moment for many dogs.</li><li><strong>Toys:</strong> Not just possession — the desire to have what the other dog has is often the trigger.</li></ul>
<h4>Management Solutions</h4>
<ul><li>Feed separately — every dog in a separate room, door closed, for all meals and chews.</li><li>Multiple resting spots — ensure there are more preferred spots than dogs.</li><li>Parallel attention — give each dog individual time with you daily.</li><li>Rotate toys rather than having all available simultaneously.</li><li>Manage doorways — dogs go through calmly, one at a time, with no competition.</li></ul>
<h4>Owner Homework</h4>
<p>Map every resource competition point in your home this week. For each one, identify the current management in place and one improvement. Implement the improvements and note any reduction in tension.</p>
<div class="lesson-quiz" data-lesson="c8_m1_l2"><h4>Knowledge Check</h4><p>Why should all meals and chews always be given to dogs in separate spaces?</p><div class="quiz-options"><button class="qo" data-correct="false">To prevent overeating by monitoring each dog's intake</button><button class="qo" data-correct="true">Food is the highest-value resource and the most common inter-dog conflict trigger — removing the competition opportunity eliminates the risk entirely</button><button class="qo" data-correct="false">Because dogs eat better when they are not distracted by others</button></div></div>`
      },
      {
        id:'c8_m1_l3', name:'Individual Needs in a Multi-Dog Home',
        desc:'Ensure every dog in your household has their individual needs met despite sharing a home.',
        xp:70, tip:'Each dog in your home is an individual — what works for one may actively harm another. Know each one separately.',
        content:`<h3>The Individual Within the Group</h3>
<p>The most common failure in multi-dog households is treating the dogs as a unit rather than as individuals. Each dog has their own exercise needs, enrichment preferences, training pace, social preferences and stress threshold. Failing to account for this produces undertrained, under-enriched dogs whose frustration eventually expresses itself in inter-dog tension.</p>
<h4>Individual Assessments for Each Dog</h4>
<ul><li>Exercise: does each dog get an amount and type appropriate to their age, breed and health?</li><li>Training: does each dog have a personal training plan, or does the more confident dog always outcompete the quieter one?</li><li>Enrichment: does each dog's enrichment match their individual drives and preferences?</li><li>Veterinary care: is each dog seen individually — not just as part of a group check-up?</li><li>Alone time with the owner: does each dog have dedicated one-to-one time without the other dogs present?</li></ul>
<h4>The Quiet Dog Problem</h4>
<p>In multi-dog households, the quietest, most adaptable dog is often the most overlooked. They cope. They yield. They don't demand. Over time their needs go chronically unmet while the louder, more demanding dog gets proportionally more attention. Actively seek out and meet the quiet dog's needs.</p>
<h4>Owner Homework</h4>
<p>Complete a separate Individual Needs Assessment for each of your dogs this week. Identify any dog whose needs are being partially unmet due to the multi-dog context. Design one specific improvement for that dog.</p>
<div class="lesson-quiz" data-lesson="c8_m1_l3"><h4>Knowledge Check</h4><p>Why is the quietest, most adaptable dog in a multi-dog household often at most risk of having unmet needs?</p><div class="quiz-options"><button class="qo" data-correct="false">Because quiet dogs require less stimulation than demanding dogs</button><button class="qo" data-correct="true">Because they cope without demanding — their unmet needs are invisible until they accumulate to a level that produces stress responses or health problems</button><button class="qo" data-correct="false">Because adaptable dogs have already learned to meet their own needs</button></div></div>`
      },
      {
        id:'c8_m1_l4', name:'Compatible and Incompatible Pairs',
        desc:'Honestly assess the compatibility of the dogs in your household and manage incompatibility safely.',
        xp:80, tip:'Not all dogs are destined to be friends — honest assessment prevents years of managed tension from becoming a crisis.',
        content:`<h3>Compatibility Is Not Guaranteed</h3>
<p>Dogs living in the same household are not automatically compatible — and the desire to believe they are can lead owners to misinterpret tension signals for months or years before a serious incident occurs. Honest, ongoing compatibility assessment is a core multi-dog household responsibility.</p>
<h4>Signs of Genuine Compatibility</h4>
<ul><li>Relaxed body language when the other dog enters the room</li><li>Voluntary proximity — choosing to rest near each other</li><li>Comfortable play initiation and mutual enjoyment of play</li><li>Easy food separation with no guarding or attempts to steal</li><li>Recovery from minor tension within seconds, with no escalation</li></ul>
<h4>Signs of Managed Incompatibility</h4>
<ul><li>One dog consistently moving away when the other enters a space</li><li>Tension visible when the dogs are within 1–2 metres of each other</li><li>Incidents that are becoming more frequent or intense over time</li><li>One dog showing chronic stress signals in the home (panting, hiding, reduced appetite)</li></ul>
<h4>Managing Incompatibility</h4>
<p>Incompatible dogs can often coexist safely through careful management (separate spaces, rotation, never unsupervised) but this requires honest acknowledgement of the situation and professional support. Denial is not a management strategy.</p>
<div class="lesson-quiz" data-lesson="c8_m1_l4"><h4>Knowledge Check</h4><p>What does one dog consistently moving away when the other enters a space most likely indicate?</p><div class="quiz-options"><button class="qo" data-correct="false">Normal submission and a healthy social hierarchy</button><button class="qo" data-correct="true">Possible managed incompatibility — the dog is continuously yielding space to avoid conflict, which is a chronic stress state that requires honest assessment</button><button class="qo" data-correct="false">The dogs have established their preferred areas of the home</button></div></div>`
      }
    ]
  },
  {
    id:'c8_m2', n:2, emoji:'🤝', courseId:'multi-dog', courseName:'Multi-Dog Household',
    name:'Introducing a New Dog',
    desc:'Navigate the introduction of a new dog to your existing household safely and successfully.',
    lessons:[
      {
        id:'c8_m2_l1', name:'Preparation Before Arrival',
        desc:'Prepare your home and your existing dogs for the arrival of a new dog.',
        xp:80, tip:'The success of a new dog introduction is largely determined by what you do before the dog arrives.',
        content:`<h3>The Prepared Household</h3>
<p>Most introduction problems are created in the preparation phase — or rather, the lack of it. Dogs that meet on the doorstep of their shared territory, with no prior scent introduction and no management infrastructure, are set up for conflict. Preparation takes three days. Remediation takes three months.</p>
<h4>Pre-Arrival Preparation</h4>
<ul><li><strong>Separate resource zones:</strong> Each dog has their own designated feeding area, sleeping space and toy access. Set these up before the new dog arrives.</li><li><strong>Scent introduction:</strong> Bring home a blanket with the new dog's scent 3–5 days before arrival. Place it in your existing dog's space — allow investigation at their own pace with no pressure.</li><li><strong>Route planning:</strong> Plan the first meeting location (neutral territory — a park, not your home or garden) and the first walk route.</li><li><strong>Baby gates:</strong> Install gate(s) that allow visual and olfactory contact without physical access — essential management infrastructure for the first weeks.</li></ul>
<h4>Existing Dog Preparation</h4>
<p>Increase enrichment and exercise for your existing dog in the week before the new dog arrives. A well-exercised, mentally satisfied dog has more capacity for the stress of change than a dog whose needs are unmet.</p>
<div class="lesson-quiz" data-lesson="c8_m2_l1"><h4>Knowledge Check</h4><p>What is the purpose of scent introduction before the new dog arrives?</p><div class="quiz-options"><button class="qo" data-correct="false">To allow the existing dog to become territorial about the new dog's scent</button><button class="qo" data-correct="true">To allow the existing dog to investigate the new dog's scent in a safe, low-pressure context before the actual introduction — reducing the novelty and arousal of the first meeting</button><button class="qo" data-correct="false">To help the new dog smell familiar in the home immediately</button></div></div>`
      },
      {
        id:'c8_m2_l2', name:'The First Meeting',
        desc:'Run a safe, positive first meeting between your existing and new dogs.',
        xp:90, tip:'A great first meeting takes 20 minutes of preparation and 5 minutes of careful execution.',
        content:`<h3>Neutral Ground, Parallel Walking</h3>
<p>The gold standard first meeting between dogs is a parallel walk on neutral territory. Both dogs walk in the same direction at a safe distance, gradually closing the gap as body language permits. This is far superior to a face-to-face introduction because it removes the confrontational element and allows natural investigation without pressure.</p>
<h4>The Parallel Walk Protocol</h4>
<ol><li>Two handlers, one dog each. Meet at a quiet, neutral location — not either dog's home territory.</li><li>Begin walking in parallel at 10 metres apart. Watch body language — loose, curious = good. Stiff, fixating = maintain distance.</li><li>If both dogs are relaxed, gradually close the gap over 10–15 minutes.</li><li>Allow a brief arc approach and sniff (3–5 seconds maximum, then both handlers walk on).</li><li>Continue walking together — movement reduces tension.</li><li>End on a positive note before any arousal builds.</li></ol>
<h4>Home Introduction</h4>
<p>After a successful walk: enter the garden first (if applicable), then the home. New dog explores with existing dog outside initially. Remove all food, high-value toys and contested resources before allowing free access. Supervise completely for the first 48 hours.</p>
<div class="lesson-quiz" data-lesson="c8_m2_l2"><h4>Knowledge Check</h4><p>Why is parallel walking superior to a face-to-face introduction for introducing dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs cannot communicate while moving</button><button class="qo" data-correct="true">Because it removes the confrontational element of direct face-to-face contact, allows natural investigation at the dogs' own pace, and uses forward movement to dissipate arousal</button><button class="qo" data-correct="false">Because handlers maintain better control when walking</button></div></div>`
      },
      {
        id:'c8_m2_l3', name:'The First Two Weeks Together',
        desc:'Manage the critical first two weeks of a new dog joining the household.',
        xp:80, tip:'Two weeks of careful management prevents two years of conflict. Always worth the effort.',
        content:`<h3>Supervision and Separation</h3>
<p>The first two weeks with a new dog are not the time to assess long-term compatibility — the new dog is stressed, the existing dog is disrupted, and neither is showing their true colours. This is the time for maximum management and minimum assumption.</p>
<h4>First Two Weeks Management Rules</h4>
<ul><li><strong>Never unsupervised:</strong> When you cannot actively watch both dogs, they are in separate spaces. Gates, crates or separate rooms.</li><li><strong>Separate everything:</strong> Feeding, chews, high-value treats — always in separate spaces, every time.</li><li><strong>Intervene early:</strong> If you see tension building (stiffening, hard stare, stillness), redirect both dogs before any escalation. Do not wait for a growl.</li><li><strong>Individual walks:</strong> Walk dogs separately for the first week if possible — this gives each dog decompression time away from the other and prevents walk-time arousal transferring to home tension.</li><li><strong>Calm, low-stimulation home:</strong> Reduce visitors, loud noise and high-arousal activities during the settling period.</li></ul>
<h4>Gradual Freedom</h4>
<p>Increase supervised free time together only as positive interactions accumulate. One week of good days earns slightly more freedom. Any incident resets the clock.</p>
<div class="lesson-quiz" data-lesson="c8_m2_l3"><h4>Knowledge Check</h4><p>When should you intervene during the first two weeks if you see tension building between the dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">When growling occurs — before that, let the dogs work it out</button><button class="qo" data-correct="true">At the first signs of tension — stiffening, hard stare or stillness — before any escalation. Early intervention prevents rehearsal of conflict</button><button class="qo" data-correct="false">Only when physical contact between the dogs occurs</button></div></div>`
      },
      {
        id:'c8_m2_l4', name:'Building a Positive Relationship',
        desc:'Actively build positive associations between your dogs so they develop a genuine bond.',
        xp:80, tip:'A positive relationship between dogs doesn\'t happen by itself — you engineer it through shared positive experiences.',
        content:`<h3>Engineering Positive Associations</h3>
<p>Coexistence is not the same as a positive relationship. Many multi-dog households have dogs that simply tolerate each other. With intentional effort, you can engineer a genuinely positive relationship — where the presence of the other dog predicts good things.</p>
<h4>Techniques for Building Positive Association</h4>
<ul><li><strong>Parallel enrichment:</strong> Both dogs receive a lick mat or Kong simultaneously, at a comfortable distance. The other dog's presence = amazing things appearing. Gradually decrease distance as both dogs remain relaxed.</li><li><strong>Group walks:</strong> Walking together (once individually comfortable) is a powerful bonding activity — shared experience, shared sensory environment, natural forward movement.</li><li><strong>Play facilitation:</strong> If both dogs show play interest, facilitate brief, well-matched play sessions with handler supervision and clear start/end boundaries.</li><li><strong>Calm co-presence:</strong> Reward both dogs for relaxed proximity with calm praise and gentle treats. The goal: each dog associates the other's presence with good, calm things.</li></ul>
<h4>Owner Homework</h4>
<p>Implement one parallel enrichment session daily this week, beginning at whatever distance both dogs are comfortable. Record starting distance and ending distance across 7 sessions. Target: 50% reduction in starting distance by the end of the week.</p>
<div class="lesson-quiz" data-lesson="c8_m2_l4"><h4>Knowledge Check</h4><p>What is the goal of parallel enrichment in multi-dog relationship building?</p><div class="quiz-options"><button class="qo" data-correct="false">To keep both dogs busy so they don't interact</button><button class="qo" data-correct="true">To build a classical conditioning association: the other dog's presence predicts something wonderful appearing — gradually shifting the emotional response from neutral or tense to positive</button><button class="qo" data-correct="false">To assess which dog is more food motivated</button></div></div>`
      }
    ]
  },
  {
    id:'c8_m3', n:3, emoji:'⚖️', courseId:'multi-dog', courseName:'Multi-Dog Household',
    name:'Training in a Multi-Dog Home',
    desc:'Manage training effectively when you have multiple dogs with different skills and needs.',
    lessons:[
      {
        id:'c8_m3_l1', name:'Training Dogs Individually',
        desc:'Establish a system for giving each dog individual training time and progress.',
        xp:80, tip:'Individual training time is not a luxury in a multi-dog home — it is the only way to actually train any of them.',
        content:`<h3>The Training Separation Rule</h3>
<p>Training with multiple dogs present is almost always less effective than training individually. The distraction of other dogs, the competition for rewards, and the tendency of one dog to override another's learning all undermine the training process. Individual sessions are non-negotiable for real skill development.</p>
<h4>Practical Individual Training System</h4>
<ul><li>Train one dog at a time — the other(s) in a separate room, crate or garden.</li><li>Each dog gets a minimum of one 5-minute individual session per day.</li><li>Track each dog's training separately — different goals, different paces, different reward preferences.</li><li>Train the most challenging dog first when your patience is freshest.</li><li>After individual sessions, brief group practice of well-known behaviours can consolidate learning.</li></ul>
<h4>When Dogs Try to Gate-Crash</h4>
<p>Dogs not in the training session will often whine, scratch at doors, or otherwise try to participate. This is normal and settles within 1–2 weeks as the rotation becomes a familiar routine. Do not feel guilty — the waiting dog's turn will come.</p>
<h4>Owner Homework</h4>
<p>Implement individual training sessions for each dog for 7 days. Keep a simple log for each dog — what was practised, what the success rate was, what the next step is. Review the logs with your trainer.</p>
<div class="lesson-quiz" data-lesson="c8_m3_l1"><h4>Knowledge Check</h4><p>Why is individual training more effective than group training in a multi-dog household?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs learn by watching each other and need separation to develop independent skills</button><button class="qo" data-correct="true">Because distraction from other dogs, competition for rewards and one dog overriding another's responses all undermine the learning process — individual sessions remove all these obstacles</button><button class="qo" data-correct="false">Because group training causes dogs to compete aggressively for treats</button></div></div>`
      },
      {
        id:'c8_m3_l2', name:'Group Cues and Household Management',
        desc:'Teach dogs to respond to group cues and build a calm, well-managed household routine.',
        xp:80, tip:'A house full of dogs that all sit when asked is one of the most satisfying things in dog ownership.',
        content:`<h3>Training the Group</h3>
<p>Once individual skills are solid, group cues become a powerful household management tool. A group sit at the door before walks, a group down at dinner time, a group recall in the garden — these transform the chaos of multiple dogs into a coordinated, calm household.</p>
<h4>Teaching Group Cues</h4>
<ol><li>All individual dogs must be reliable on the cue independently before any group practice begins.</li><li>Begin with two dogs. Ask for the cue. Reward both simultaneously — one treat per dog, quickly and calmly.</li><li>Add dogs one at a time only when the smaller group is reliable.</li><li>Start with the easiest cue (sit) in the lowest-distraction setting (home, no competing resources nearby).</li></ol>
<h4>Useful Group Cues for Household Management</h4>
<ul><li><strong>Group sit:</strong> Before meals, walks, or doorways open.</li><li><strong>Group down-stay:</strong> When guests arrive, during meal preparation, or when you need a moment of calm.</li><li><strong>Group recall:</strong> In the garden — all dogs come when called regardless of what they are doing.</li><li><strong>Go to your places:</strong> Each dog goes to their own designated mat — the ultimate multi-dog management cue.</li></ul>
<div class="lesson-quiz" data-lesson="c8_m3_l2"><h4>Knowledge Check</h4><p>Before beginning group cue training, what must be true of each individual dog?</p><div class="quiz-options"><button class="qo" data-correct="false">They must have lived together for at least 6 months</button><button class="qo" data-correct="true">Each dog must be individually reliable on the cue — group practice before individual reliability produces inconsistent, unreliable group responses</button><button class="qo" data-correct="false">They must all be the same breed or similar size</button></div></div>`
      },
      {
        id:'c8_m3_l3', name:'Managing Training Jealousy',
        desc:'Handle inter-dog tension that arises during training sessions and reward delivery.',
        xp:70, tip:'Training jealousy is resource competition in a training jacket — manage it the same way.',
        content:`<h3>The Jealousy Dynamic</h3>
<p>Training jealousy — where one dog disrupts another's training session by barking, pawing the handler, or interfering with the working dog — is resource competition for owner attention and rewards. It is managed the same way as any resource competition: remove the competition, and the behaviour stops.</p>
<h4>Prevention Strategies</h4>
<ul><li>Train dogs separately (individual sessions) as the primary strategy — no audience, no competition.</li><li>When training one dog in the presence of others, ensure non-working dogs have something to engage them (frozen Kong, lick mat) throughout the session.</li><li>Do not give non-working dogs treats simply to keep them quiet — this rewards the disruptive behaviour.</li><li>Rotate training order randomly — prevent any dog from always being first or always last.</li></ul>
<h4>When Group Training Provokes Tension</h4>
<p>If two specific dogs consistently create tension during group sessions (one redirects aggression toward the other when frustrated), these dogs should be trained separately and only practise group cues in very low-arousal situations — never around food, never when either dog is above mild arousal.</p>
<div class="lesson-quiz" data-lesson="c8_m3_l3"><h4>Knowledge Check</h4><p>Why should you not give a non-working dog treats to keep them quiet during a training session?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it wastes the training budget</button><button class="qo" data-correct="true">Because it rewards the disruptive behaviour — the dog learns that barking or pawing during the other dog's training session produces treats</button><button class="qo" data-correct="false">Because the non-working dog should not receive rewards outside their own training session</button></div></div>`
      },
      {
        id:'c8_m3_l4', name:'Walks with Multiple Dogs',
        desc:'Master the logistics and dynamics of walking multiple dogs safely and enjoyably.',
        xp:80, tip:'Walking multiple dogs well is a skill. Walking multiple dogs beautifully is an art. Both are learnable.',
        content:`<h3>The Multi-Dog Walk</h3>
<p>Walking multiple dogs presents unique challenges: tangled leads, different walking paces, different trigger responses, and the amplifying effect of dogs feeding off each other's arousal. With the right equipment, preparation and technique, multi-dog walks become genuinely enjoyable.</p>
<h4>Equipment for Multi-Dog Walking</h4>
<ul><li>Separate leads for each dog — never a coupler lead until all dogs are solid loose-lead walkers individually.</li><li>Well-fitted harnesses on all dogs — prevents slipping and distributes force appropriately.</li><li>Consider a hands-free lead for one dog if managing two — this frees a hand for the other lead.</li></ul>
<h4>Lead Management Technique</h4>
<ul><li>Shorter leads for reactive or energetic dogs, slightly longer for calmer ones.</li><li>Position dogs on different sides of your body if they have tension between them — you become the physical buffer.</li><li>Always stop for treats or to manage a moment with one dog without the others interfering — practise this at home before needing it in the field.</li></ul>
<h4>The Arousal Amplification Effect</h4>
<p>Dogs feed off each other's arousal. One dog reacting raises the threshold of all others present. If one of your dogs is reactive, walk them separately until their reactivity is significantly reduced — bringing a reactive dog and a threshold-raising companion to the same environment multiplies the challenge exponentially.</p>
<div class="lesson-quiz" data-lesson="c8_m3_l4"><h4>Knowledge Check</h4><p>Why should coupler leads not be used until all dogs are solid loose-lead walkers individually?</p><div class="quiz-options"><button class="qo" data-correct="false">Because coupler leads are uncomfortable for dogs</button><button class="qo" data-correct="true">Because a dog that pulls on a coupler drags the other dog with them — this causes conflict between the dogs and makes loose-lead training impossible for either</button><button class="qo" data-correct="false">Because coupler leads are only legal for dogs of matching sizes</button></div></div>`
      }
    ]
  },
  {
    id:'c8_m4', n:4, emoji:'🚨', courseId:'multi-dog', courseName:'Multi-Dog Household',
    name:'Conflict Prevention and Resolution',
    desc:'Prevent inter-dog conflict and respond effectively when it occurs.',
    lessons:[
      {
        id:'c8_m4_l1', name:'Reading the Warning Signs',
        desc:'Identify the early warning signs of inter-dog tension before it escalates to conflict.',
        xp:90, tip:'Every fight was a warning that was missed. Learn to see them.',
        content:`<h3>The Conflict Ladder</h3>
<p>Inter-dog conflict follows a predictable escalation ladder — from subtle tension signals through to full conflict. Every rung of the ladder is an intervention opportunity. Most owners only notice the fight at the top of the ladder because they haven't learned to see the rungs below.</p>
<h4>The Escalation Ladder</h4>
<ol><li><strong>Stillness:</strong> One or both dogs become very still — movement stops. Easy to miss.</li><li><strong>Hard stare:</strong> Fixed, unblinking gaze at the other dog.</li><li><strong>Stiff body posture:</strong> Muscles tense, weight shifts forward or the dog stands very tall.</li><li><strong>Whale eye:</strong> Whites of eyes visible, face turned slightly but gaze still fixed.</li><li><strong>Lip curl / teeth visible:</strong> Clear visual warning.</li><li><strong>Growl:</strong> Audible warning — at this stage, intervention is urgent.</li><li><strong>Snap:</strong> Air snap, no contact — final warning.</li><li><strong>Fight:</strong> Contact made.</li></ol>
<h4>Intervention Strategies by Rung</h4>
<ul><li>Rungs 1–3: Calmly redirect both dogs with a happy voice and movement — "let's go!" and move away.</li><li>Rungs 4–5: Physically separate the dogs by moving between them (never grab a dog mid-tension).</li><li>Rungs 6–7: Create distance immediately — use the lead, open a door, use a large object as a visual barrier.</li></ul>
<div class="lesson-quiz" data-lesson="c8_m4_l1"><h4>Knowledge Check</h4><p>At what point on the conflict ladder should you intervene?</p><div class="quiz-options"><button class="qo" data-correct="false">At the growl — before that it is normal dog communication</button><button class="qo" data-correct="true">At the earliest possible rung — stillness or hard stare. Early intervention prevents rehearsal of escalation and avoids the fight at the top of the ladder entirely</button><button class="qo" data-correct="false">Only when physical contact occurs</button></div></div>`
      },
      {
        id:'c8_m4_l2', name:'Preventing Resource-Based Conflict',
        desc:'Implement a comprehensive resource conflict prevention system in your multi-dog home.',
        xp:90, tip:'Prevent the argument by removing what it would be about. Simple, effective, sustainable.',
        content:`<h3>Removing the Opportunity for Conflict</h3>
<p>The most effective conflict prevention strategy is environmental: remove the resources that trigger competition. This is not a permanent solution — behaviour modification also matters — but it eliminates the daily rehearsal of conflict that entrenches the problem.</p>
<h4>The Complete Resource Prevention System</h4>
<ul><li><strong>Feeding:</strong> Separate rooms, doors closed, for all meals. Both dogs finish before either is released.</li><li><strong>Chews and high-value treats:</strong> Always in separate spaces, never in the same room simultaneously.</li><li><strong>Toys:</strong> Removed when unsupervised. Introduced one at a time during supervised play if dogs play well together.</li><li><strong>Resting spots:</strong> Each dog has designated spaces. Practise "go to your place" so each dog has a spot they reliably retreat to.</li><li><strong>Owner proximity:</strong> If competition for your attention triggers tension, give each dog structured individual time and manage group time so you are not the contested resource.</li><li><strong>Doorways:</strong> Manage exits and entries calmly — no bunching, no racing through together.</li></ul>
<h4>Owner Homework</h4>
<p>Conduct a resource audit of your home this week. Identify every point where resource competition currently occurs or could occur. Implement one new prevention measure for each. Track whether incidents decrease over 7 days.</p>
<div class="lesson-quiz" data-lesson="c8_m4_l2"><h4>Knowledge Check</h4><p>When should toys be available in a multi-dog household with a history of resource guarding?</p><div class="quiz-options"><button class="qo" data-correct="false">Always — dogs need access to toys for enrichment at all times</button><button class="qo" data-correct="true">Only during directly supervised sessions, and removed when supervision ends — unsupervised toy access is a conflict risk in any household with resource-sensitive dogs</button><button class="qo" data-correct="false">Only when training, so the dogs associate toys with positive experiences</button></div></div>`
      },
      {
        id:'c8_m4_l3', name:'Responding to a Fight',
        desc:'Know exactly what to do if a fight occurs between your dogs — safely and effectively.',
        xp:90, tip:'Knowing what to do in a fight takes the panic out of it — and that clarity can save a dog from serious injury.',
        content:`<h3>If a Fight Occurs</h3>
<p>Despite the best management and training, fights can happen. Knowing how to respond immediately, calmly and safely is essential knowledge for every multi-dog household owner. The wrong response can escalate the fight or result in serious injury to the handler.</p>
<h4>What NOT to Do</h4>
<ul><li>Do not grab a fighting dog by the collar — you will be bitten. Redirected aggression is the most common cause of handler injury in dog fights.</li><li>Do not scream or shout — it raises arousal and escalates the fight.</li><li>Do not physically try to pull two dogs apart by the body — you will be injured.</li></ul>
<h4>Safe Separation Techniques</h4>
<ul><li><strong>The wheelbarrow:</strong> Both handlers (if two are present) grasp the hind legs of one dog each simultaneously and lift and walk backwards — the dogs cannot bite their handlers and the fight is physically broken.</li><li><strong>Physical barrier insertion:</strong> A large flat object (chair, board, bin lid) placed between the dogs breaks visual contact and the physical connection.</li><li><strong>Water:</strong> A bucket of cold water poured over the dogs can interrupt the fight enough to separate.</li><li><strong>Loud noise:</strong> A marine air horn or panic alarm can interrupt a fight — have one accessible.</li></ul>
<h4>After a Fight</h4>
<p>Separate dogs completely. Check for wounds (adrenaline masks pain — look carefully). Calm yourself before handling either dog. Consult your vet and behaviourist before reintroducing the dogs. Document the trigger context fully.</p>
<div class="lesson-quiz" data-lesson="c8_m4_l3"><h4>Knowledge Check</h4><p>Why should you never grab a fighting dog by the collar?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it can injure the dog's neck</button><button class="qo" data-correct="true">Because redirected aggression — biting whatever is in contact with them during arousal — is the most common cause of serious handler injury during dog fights</button><button class="qo" data-correct="false">Because it gives the dog an opportunity to escape</button></div></div>`
      },
      {
        id:'c8_m4_l4', name:'Post-Conflict Management and Rebuilding',
        desc:'Manage the aftermath of a conflict and rebuild the dogs\' relationship safely.',
        xp:80, tip:'How you manage the 48 hours after a fight is more important than the fight itself.',
        content:`<h3>The Aftermath Protocol</h3>
<p>The period immediately following a dog fight requires careful management. Both dogs are physiologically aroused for hours after even a brief fight — their stress hormones remain elevated and their threshold for another incident is dramatically lowered. Rushing reintroduction causes repeat incidents.</p>
<h4>Immediate Aftermath (First 48 Hours)</h4>
<ul><li>Completely separate dogs — different rooms, different spaces, no visual contact.</li><li>Veterinary check for both dogs — wounds are often hidden under fur.</li><li>Document everything: what triggered the fight, which dog escalated first, duration, what ended it.</li><li>Do not comfort either dog in a way that raises arousal — calm, quiet presence only.</li></ul>
<h4>Rebuilding After a Fight</h4>
<ul><li>Do not reintroduce until both dogs are physiologically calm — minimum 24–48 hours.</li><li>Begin reintroduction from scratch: scent contact under a door, then visual through a gate, then parallel walks, then supervised proximity.</li><li>Work with a qualified behaviourist before free access is restored after any fight involving injury.</li><li>Review and strengthen resource management — the fight has given you information about what needs more protection.</li></ul>
<div class="lesson-quiz" data-lesson="c8_m4_l4"><h4>Knowledge Check</h4><p>Why should dogs be separated for at least 24–48 hours after a fight before reintroduction?</p><div class="quiz-options"><button class="qo" data-correct="false">To give the dogs time to forget the incident</button><button class="qo" data-correct="true">Because stress hormones remain physiologically elevated for hours after a fight — reintroduction during this window finds both dogs with a dramatically lowered threshold and risks immediate repeat conflict</button><button class="qo" data-correct="false">To give the owner time to consult a trainer</button></div></div>`
      }
    ]
  },
  {
    id:'c8_m5', n:5, emoji:'🌈', courseId:'multi-dog', courseName:'Multi-Dog Household',
    name:'The Harmonious Multi-Dog Home',
    desc:'Build and maintain genuine harmony in your multi-dog household for the long term.',
    lessons:[
      {
        id:'c8_m5_l1', name:'The Harmony Maintenance Plan',
        desc:'Create a sustainable long-term management and enrichment plan for your multi-dog household.',
        xp:90, tip:'Harmony in a multi-dog home is not a destination — it is a daily practice.',
        content:`<h3>Sustainable Multi-Dog Harmony</h3>
<p>The multi-dog household that works beautifully long-term is not one that is conflict-free because the dogs are naturally perfectly compatible — it is one where the owner has built robust management systems, individual enrichment routines, and proactive monitoring that keeps the household running smoothly day after day.</p>
<h4>The Daily Harmony Checklist</h4>
<ul><li>Each dog has had individual attention today</li><li>All meals and chews have been fed separately</li><li>All dogs have had appropriate exercise</li><li>Each dog has had at least one enrichment activity</li><li>No resource competition incidents today</li><li>Body language monitoring has happened — any tension noted</li></ul>
<h4>Weekly Review</h4>
<ul><li>Is any dog showing increasing stress signals?</li><li>Have there been any more incidents than last week?</li><li>Is the resource management system still holding?</li><li>Does any dog's individual needs assessment need updating?</li></ul>
<h4>Owner Homework</h4>
<p>Implement the Daily Harmony Checklist this week. At the end of each day, score: how many items were achieved? Target 5/6 minimum. Review the results with your trainer and identify any day patterns — what makes some days harder than others?</p>
<div class="lesson-quiz" data-lesson="c8_m5_l1"><h4>Knowledge Check</h4><p>What is the most reliable indicator that a multi-dog household is functioning harmoniously?</p><div class="quiz-options"><button class="qo" data-correct="false">The dogs play together every day</button><button class="qo" data-correct="true">Each dog's individual needs are consistently met, resource management systems are in place and maintained, and body language monitoring shows all dogs below tension threshold on most days</button><button class="qo" data-correct="false">No incidents have occurred in the past month</button></div></div>`
      },
      {
        id:'c8_m5_l2', name:'When the Household Changes',
        desc:'Manage the harmony of your multi-dog home through significant household changes.',
        xp:80, tip:'Any change to the household is a change to the balance — prepare proactively, not reactively.',
        content:`<h3>Change Disrupts Balance</h3>
<p>Multi-dog household dynamics are sensitive to change — the arrival of a baby, a family member moving out, a house move, a dog's illness or death, a new pet — all of these disrupt the established patterns that underpin harmony. Anticipating and managing change proactively prevents disruption from becoming crisis.</p>
<h4>Common Disruptions and Responses</h4>
<ul><li><strong>New baby:</strong> Increase each dog's enrichment and exercise before the birth. Apply the full baby introduction protocol from the Elite Companion course. Maintain each dog's individual routine as consistently as possible.</li><li><strong>House move:</strong> Treat as a new introduction — reintroduce dogs to the new space gradually, maintain separate feeding and all management protocols even though they are established dogs.</li><li><strong>Loss of a dog:</strong> The surviving dog(s) may show genuine grief responses — reduced appetite, searching behaviour, clinginess or lethargy. Maintain routine, increase gentle enrichment, allow time. Do not rush to add a replacement dog.</li><li><strong>Dog illness:</strong> An ill dog's changed scent and behaviour can trigger tension from housemates — manage proximity carefully and monitor for resource competition shifts.</li></ul>
<div class="lesson-quiz" data-lesson="c8_m5_l2"><h4>Knowledge Check</h4><p>After one dog in a multi-dog household dies, how soon is it typically appropriate to add a new dog?</p><div class="quiz-options"><button class="qo" data-correct="false">Immediately — to give the remaining dog company during grief</button><button class="qo" data-correct="true">After sufficient time for both the owner and remaining dog(s) to grieve and restabilise — typically several months minimum — rushing a new addition into a grief-disrupted household rarely produces good outcomes</button><button class="qo" data-correct="false">After exactly 6 months — the standard recovery period</button></div></div>`
      },
      {
        id:'c8_m5_l3', name:'The Joy of Multiple Dogs',
        desc:'Celebrate the unique richness that multiple dogs bring to a home when managed well.',
        xp:80, tip:'A well-managed multi-dog home is one of the most joyful places on earth.',
        content:`<h3>What Multiple Dogs Give You</h3>
<p>All of the work in this programme — the management systems, the individual training, the conflict prevention, the careful introductions — exists to produce one outcome: a home full of dogs who are genuinely well and genuinely happy, where the humans can enjoy them without constant anxiety.</p>
<h4>What Multiple Dogs Give Your Dogs</h4>
<ul><li>Social companionship across the day — not just when the owner is home</li><li>Play opportunities with a species-appropriate partner</li><li>The security of a familiar, established social group</li><li>Natural learning through observation of housemates</li><li>A richer, more complex social and sensory environment</li></ul>
<h4>What Multiple Dogs Give You</h4>
<ul><li>The privilege of witnessing multiple dog personalities and how they shape each other</li><li>The particular joy of watching dogs who love each other play together</li><li>A home that is always animated, always full of life</li><li>The knowledge that each dog always has a companion, even when you cannot be there</li></ul>
<h4>Owner Homework</h4>
<p>This week, take 10 minutes to simply observe your dogs interacting without managing, training or redirecting anything — just watch with appreciation. Notice what they have built with each other. Note what you see.</p>
<div class="lesson-quiz" data-lesson="c8_m5_l3"><h4>Knowledge Check</h4><p>What is the primary benefit multiple dogs provide to each other that a single dog cannot access?</p><div class="quiz-options"><button class="qo" data-correct="false">Competition that keeps them mentally sharp</button><button class="qo" data-correct="true">Species-appropriate social companionship — communication, play, and social presence that humans cannot fully replicate regardless of how much time they spend with their dog</button><button class="qo" data-correct="false">Motivation to eat through competition at mealtimes</button></div></div>`
      },
      {
        id:'c8_m5_l4', name:'Multi-Dog Household Certification',
        desc:'Receive your Multi-Dog Household certification and celebrate the harmony you have built.',
        xp:150, tip:'Managing multiple dogs well is one of the most underrated skills in dog ownership. You have it.',
        content:`<h3>Multi-Dog Household — Certified</h3>
<p>Completing the Multi-Dog Household Program means you have developed the knowledge, systems and skills to manage multiple dogs in genuine harmony — not just keeping the peace, but creating a household where every dog thrives individually and the group functions as a stable, positive social unit.</p>
<h4>What Your Certification Demonstrates</h4>
<ul><li>Understanding of canine social dynamics and communication</li><li>Complete resource management system implemented</li><li>Safe introduction protocol knowledge and skills</li><li>Individual training programme for each dog</li><li>Conflict prevention system in place and maintained</li><li>Post-conflict response knowledge and safety skills</li><li>Long-term harmony maintenance plan operational</li></ul>
<h4>The Home You Have Built</h4>
<p>Managing multiple dogs well is genuinely difficult — it requires more knowledge, more patience, more systems and more daily commitment than most single-dog owners appreciate. The harmony in your home is not accidental. It is built. And you built it deliberately, carefully and with real skill. That is something to be proud of.</p>
<div class="lesson-quiz" data-lesson="c8_m5_l4"><h4>Knowledge Check</h4><p>The Multi-Dog Household certification primarily recognises:</p><div class="quiz-options"><button class="qo" data-correct="false">Having dogs that are naturally compatible and easy to manage</button><button class="qo" data-correct="true">A deliberately built system of management, individual care, conflict prevention and enrichment that produces genuine harmony in a complex multi-dog environment</button><button class="qo" data-correct="false">Completing all other Four Paws courses first</button></div></div>`
      }
    ]
  }
];

FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_8_MODULES);

/* ─── /app/fp-courses-part5.js ─── */
/* ═══════════════════════════════════════════════════════════
   COURSE 9 — FIRST-TIME OWNER FOUNDATIONS
   Module IDs: c9_m1 – c9_m5
═══════════════════════════════════════════════════════════ */

var COURSE_9_MODULES = [
  {
    id:'c9_m1', n:1, emoji:'🌟', courseId:'first-time-owner', courseName:'First-Time Owner Foundations',
    name:'Preparing for Your First Dog',
    desc:'Everything you need to know, buy, arrange and decide before your dog comes home.',
    lessons:[
      {
        id:'c9_m1_l1', name:'Choosing the Right Dog',
        desc:'Make an informed, realistic decision about the breed, age and source of your first dog.',
        xp:70, tip:'The right dog for your life is the best dog in the world. The wrong one is the hardest thing you\'ll ever love.',
        content:`<h3>The Most Important Decision</h3>
<p>Choosing your first dog is one of the most significant decisions you will make. The wrong match — however lovable the individual dog — can produce years of stress, expense and guilt. Taking time to make a genuinely informed choice is the greatest gift you can give both yourself and your future dog.</p>
<h4>Honest Self-Assessment First</h4>
<ul><li><strong>Exercise:</strong> How much time can you realistically spend exercising a dog every day — in all weathers, for the next 10–15 years?</li><li><strong>Space:</strong> What is your home and garden like? Will the dog spend most of their time in a flat, a house with a garden, or somewhere else?</li><li><strong>Time alone:</strong> How many hours per day will the dog be alone on average?</li><li><strong>Experience:</strong> First-time owner or experienced? Some breeds are genuinely not suitable first dogs.</li><li><strong>Children/other pets:</strong> What are the requirements for a dog that coexists safely with your household?</li><li><strong>Finances:</strong> Can you realistically afford veterinary care, food, insurance, training, boarding and equipment for 12–15 years?</li></ul>
<h4>Breed Considerations</h4>
<p>Breed matters — not because mixed breeds are less valid, but because breed predicts instincts, energy level, trainability type and likely health issues. Research your shortlist breeds thoroughly: contact breed clubs, speak to breeders, meet adult dogs of the breed.</p>
<h4>Source Matters</h4>
<ul><li><strong>Reputable breeder:</strong> Health-tests parents, allows visits to see conditions and mother, will take the dog back at any point in its life.</li><li><strong>Rescue:</strong> Wide age range available, many adults already house-trained, post-adoption support often available.</li><li><strong>Puppy farm/pet shop:</strong> Never. The suffering created by puppy farming is significant and your purchase funds it directly.</li></ul>
<div class="lesson-quiz" data-lesson="c9_m1_l1"><h4>Knowledge Check</h4><p>Why should you never buy a puppy from a pet shop?</p><div class="quiz-options"><button class="qo" data-correct="false">Because pet shop puppies are poorly socialised</button><button class="qo" data-correct="true">Because pet shops source puppies from puppy farms — commercial breeding operations that prioritise profit over welfare. Every purchase directly funds this industry</button><button class="qo" data-correct="false">Because you cannot see the puppy's parents in a pet shop</button></div></div>`
      },
      {
        id:'c9_m1_l2', name:'Essential Equipment',
        desc:'Buy exactly what you need and nothing you don\'t before your dog comes home.',
        xp:60, tip:'You need less than you think and better quality than you expect. Buy the bed once — buy it well.',
        content:`<h3>The Essential Equipment List</h3>
<p>The pet industry will sell you an enormous amount of equipment you don't need. This lesson tells you exactly what you do need, what can wait, and what to avoid entirely.</p>
<h4>Must-Have Before Arrival</h4>
<ul><li><strong>Collar with ID tag:</strong> Legally required in the UK. Must include your name and address. Not your dog's name — this helps a stranger call them away from you.</li><li><strong>Lead (1.2–1.5 metres):</strong> A simple, well-made flat lead. Not a retractable lead — they teach pulling and are dangerous.</li><li><strong>Harness:</strong> A Y-front harness that doesn't restrict shoulder movement. Essential for puppies and preferred for adult dogs.</li><li><strong>Crate:</strong> Large enough for the adult dog to stand, turn and lie flat. The most useful training tool you will ever buy.</li><li><strong>Beds:</strong> One in the crate, one in the living area. Washable covers.</li><li><strong>Food and water bowls:</strong> Stainless steel or ceramic — dishwasher safe. One set per dog.</li><li><strong>Appropriate food:</strong> Research your breed's nutritional needs. Decide before the dog arrives — transitions between foods cause digestive upset.</li><li><strong>Enzymatic cleaner:</strong> For accidents. Nothing else fully eliminates the scent that encourages repeat toileting in the same spot.</li></ul>
<h4>What Can Wait</h4>
<p>Toys (get 3–4 to start), puzzle feeders, specialist enrichment equipment — try these as you learn your dog's preferences rather than buying everything upfront.</p>
<div class="lesson-quiz" data-lesson="c9_m1_l2"><h4>Knowledge Check</h4><p>Why should an ID tag include your address rather than your dog's name?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dog names must be kept private for security reasons</button><button class="qo" data-correct="true">Because knowing the dog's name allows a stranger to call them toward themselves and away from you — your address identifies where to return a found dog without this risk</button><button class="qo" data-correct="false">Because the law requires addresses, not names, on ID tags</button></div></div>`
      },
      {
        id:'c9_m1_l3', name:'Puppy-Proofing Your Home',
        desc:'Make your home safe for a new dog before they arrive.',
        xp:60, tip:'A puppy-proofed home is a relaxed owner. An un-proofed home is a vet bill waiting to happen.',
        content:`<h3>The Safe Home</h3>
<p>Dogs — especially puppies — explore the world with their mouths and have no concept of danger. A home that is safe for a human child is not automatically safe for a dog. Taking two hours to puppy-proof before your dog arrives prevents the majority of accidents and losses that new dog owners experience in the first weeks.</p>
<h4>Room by Room Hazard Check</h4>
<ul><li><strong>Kitchen:</strong> Secure bin (dogs are drawn to food waste), put away cleaning products, check that the oven isn't accessible when cooling, no food left at counter height.</li><li><strong>Living room:</strong> Trailing electrical cables (chewing hazard), toxic houseplants (lilies, ivy, pothos, aloe vera — check every plant), small items that can be swallowed (coins, batteries, children's toys).</li><li><strong>Bathroom:</strong> Toilet lid closed (drowning risk for puppies, medication in the water for flea-treated dogs), medications stored out of reach, razor blades.</li><li><strong>Garden:</strong> Secure perimeter (check for gaps, height of fencing), toxic plants (foxglove, laburnum, yew, rhododendron — check all), slugs and snails if you use slug pellets (metaldehyde is lethal to dogs).</li></ul>
<h4>Temporary Restrictions</h4>
<p>Use baby gates to restrict access to stairs, rooms and areas that cannot be fully secured. Give the dog access to one or two supervised areas initially — gradually expanding as they learn the house rules.</p>
<div class="lesson-quiz" data-lesson="c9_m1_l3"><h4>Knowledge Check</h4><p>Why are metaldehyde slug pellets particularly dangerous to dogs?</p><div class="quiz-options"><button class="qo" data-correct="false">Because they smell attractive to dogs and cause digestive upset</button><button class="qo" data-correct="true">Because metaldehyde is acutely toxic to dogs — even small quantities can cause seizures and death. They must be removed from any garden a dog will access</button><button class="qo" data-correct="false">Because slugs that have consumed pellets are toxic when eaten by dogs</button></div></div>`
      },
      {
        id:'c9_m1_l4', name:'Finding Your Veterinary Team',
        desc:'Choose a veterinary practice and register your dog before they arrive home.',
        xp:60, tip:'Register with your vet before your dog arrives — the first vet visit should be a wellness check, not an emergency.',
        content:`<h3>Your Veterinary Partnership</h3>
<p>Your veterinary practice is one of the most important relationships in your dog's life. Finding the right practice — one where you feel heard, where the staff are genuinely engaged, and where the philosophy aligns with your own — before you need them in an emergency is one of the most practical things a new dog owner can do.</p>
<h4>What to Look for in a Practice</h4>
<ul><li>Cat-Friendly Clinic or Fear-Free certification — indicates a practice that takes animal anxiety seriously</li><li>Transparent pricing — willing to provide estimates before proceeding with treatment</li><li>Good communication — takes questions seriously, explains clearly</li><li>Reasonable waiting times and out-of-hours provision (or a clear out-of-hours referral)</li><li>Location — accessible for emergencies as well as routine appointments</li></ul>
<h4>Pet Insurance</h4>
<p>Take out pet insurance before your first vet visit — conditions noted before insurance is in place may be excluded. Lifetime cover is significantly better than annual policies for ongoing conditions. Research independently (Which? Pet Insurance reviews) before buying.</p>
<h4>First Appointment</h4>
<p>The first appointment should be a wellness check within 48–72 hours of the dog arriving. This establishes a baseline health record, confirms vaccinations, discusses microchipping (if not done) and deworming/flea treatment, and begins the positive association with the practice.</p>
<div class="lesson-quiz" data-lesson="c9_m1_l4"><h4>Knowledge Check</h4><p>Why is lifetime pet insurance significantly better than annual policies?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it is always cheaper over the dog's lifetime</button><button class="qo" data-correct="true">Because annual policies typically exclude any condition diagnosed in a previous policy year — lifetime policies continue to cover ongoing conditions year after year</button><button class="qo" data-correct="false">Because lifetime policies cover more types of treatment</button></div></div>`
      }
    ]
  },
  {
    id:'c9_m2', n:2, emoji:'🏡', courseId:'first-time-owner', courseName:'First-Time Owner Foundations',
    name:'The First Days and Weeks',
    desc:'Navigate the first days and weeks with your new dog calmly, confidently and correctly.',
    lessons:[
      {
        id:'c9_m2_l1', name:'Coming Home Day',
        desc:'Make your dog\'s first day in your home as calm and positive as possible.',
        xp:70, tip:'Less is more on coming home day — the most loving thing you can do is give your dog space to breathe.',
        content:`<h3>The First Day</h3>
<p>Coming home day is overwhelming for every dog — regardless of age, breed or temperament. Every smell, sound and surface is new. The people are strangers (even if previously met). The routine is unknown. The most loving thing you can do is make the first day as calm and low-demand as possible.</p>
<h4>Coming Home Day Protocol</h4>
<ul><li>Limit the welcome party: no visitors on the first day. Immediate family only.</li><li>Quiet, calm voices — no squealing, no rushing toward the dog.</li><li>Let the dog explore at their own pace — don't carry them around for introductions.</li><li>Show them the water bowl and their sleeping area immediately.</li><li>Take them outside to their designated toileting spot within 15 minutes of arriving.</li><li>Do not expect or demand engagement — some dogs shut down on arrival day, others are hyperactive. Both are normal.</li></ul>
<h4>The First Night</h4>
<p>Many puppies and new dogs vocalise on the first night — this is normal. They are alone for the first time in an unfamiliar space. Options: crate beside the bed so the dog can hear and smell you, a clothing item of yours in the crate for scent comfort, a ticking clock under the bedding (mimics heartbeat). Do not leave the dog to cry alone in another room on night one — the distress is real.</p>
<div class="lesson-quiz" data-lesson="c9_m2_l1"><h4>Knowledge Check</h4><p>Why should visitors be limited on your dog's first day home?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs are contagious to visitors in the first 48 hours</button><button class="qo" data-correct="true">Because coming home is already overwhelmingly novel — additional strangers compound the sensory overload and prevent the dog from beginning to settle into their new environment</button><button class="qo" data-correct="false">Because the dog needs to bond with the immediate family before meeting anyone else</button></div></div>`
      },
      {
        id:'c9_m2_l2', name:'Establishing Routine',
        desc:'Build the daily routine that gives your dog the predictability they need to feel secure.',
        xp:70, tip:'Routine is not boring for a dog — it is the architecture of security.',
        content:`<h3>Why Routine Matters</h3>
<p>Dogs thrive on routine — not because they are rigid, but because predictability reduces anxiety. A dog that knows when they will be fed, walked, trained and given attention has a lower baseline cortisol level than a dog whose days are unpredictable. Lower cortisol means a calmer, more trainable, more settled dog.</p>
<h4>The Daily Routine Framework</h4>
<ul><li><strong>Morning:</strong> Wake up → toilet trip → breakfast (scatter fed) → brief walk or garden time → settle while owner works/does household tasks.</li><li><strong>Midday:</strong> Toilet trip → enrichment activity → rest/nap time. (Dogs need 12–16 hours of sleep per day — midday rest is not optional.)</li><li><strong>Afternoon:</strong> Toilet trip → play or training session → calm activity.</li><li><strong>Evening:</strong> Walk → dinner → calm household time → final toilet trip before bed → sleep.</li></ul>
<h4>Consistency Is Everything</h4>
<p>The specific times matter less than the consistency. A dog fed at 7am and 5pm will adapt perfectly. A dog whose meal times vary by 3 hours every day experiences daily uncertainty that costs their wellbeing.</p>
<h4>Owner Homework</h4>
<p>Write your personalised daily routine before your dog arrives (or this week if they are already home). Share with all household members. Commit to it for 30 days and track the effect on your dog's behaviour and calmness.</p>
<div class="lesson-quiz" data-lesson="c9_m2_l2"><h4>Knowledge Check</h4><p>Why do dogs need 12–16 hours of sleep per day?</p><div class="quiz-options"><button class="qo" data-correct="false">Because dogs are lazy by nature and prefer sleep to activity</button><button class="qo" data-correct="true">Because sleep is neurologically essential for dogs — it is during sleep that learning consolidates, stress hormones reset, and the immune system performs maintenance. Under-rested dogs are more anxious, reactive and difficult to train</button><button class="qo" data-correct="false">Because dogs have slower metabolisms than humans and need more rest to digest food</button></div></div>`
      },
      {
        id:'c9_m2_l3', name:'Toilet Training',
        desc:'Establish reliable outdoor toileting quickly and without stress using a proven positive method.',
        xp:70, tip:'Toilet training takes 2–4 weeks of consistent effort. It takes much longer if you skip steps.',
        content:`<h3>Positive Toilet Training</h3>
<p>Toilet training with punishment (rubbing a dog's nose in their mess, scolding for accidents) is not only ineffective — it teaches dogs to hide when they need to toilet, making the problem worse. Positive toilet training — catching and rewarding the desired behaviour — produces reliable results in 2–4 weeks with consistent effort.</p>
<h4>The Toilet Training Protocol</h4>
<ul><li>Take out every 30–60 minutes for puppies, every 2–3 hours for adult dogs, and always after: waking up, eating, drinking, playing, and any excitement.</li><li>Use a consistent exit and a specific toileting spot — familiar smells trigger the response.</li><li>Wait quietly — no distracting chat or play until after they have toileted.</li><li>The instant they begin: say your chosen cue word quietly ("busy," "go toilet," "quick").</li><li>The instant they finish: mark with "yes!" and deliver a high-value treat immediately — on the spot.</li><li>Then play and praise — make the return inside rewarding too.</li></ul>
<h4>Handling Accidents</h4>
<ul><li>If you catch the dog mid-accident indoors: no drama, calmly interrupt and take outside immediately.</li><li>If you find an accident after the fact: say nothing. Clean with enzyme cleaner. Adjust your supervision.</li><li>Never punish an accident. The dog cannot connect the punishment to the act after the fact — you only teach them that you are unpredictable.</li></ul>
<div class="lesson-quiz" data-lesson="c9_m2_l3"><h4>Knowledge Check</h4><p>When should the treat be delivered after a dog toilets outside?</p><div class="quiz-options"><button class="qo" data-correct="false">When you return inside — to reward the whole trip</button><button class="qo" data-correct="false">After a 5-second pause to ensure the dog has finished</button><button class="qo" data-correct="true">Immediately after they finish — on the spot outdoors. Any delay disconnects the reward from the specific behaviour being trained</button></div></div>`
      },
      {
        id:'c9_m2_l4', name:'Crate Training',
        desc:'Introduce the crate as a safe, positive space that your dog loves voluntarily.',
        xp:70, tip:'A dog that loves their crate has a portable safe haven for life. It\'s worth every minute of introduction.',
        content:`<h3>The Crate — A Safe Haven, Not a Prison</h3>
<p>A crate, introduced correctly, becomes one of the most valuable tools in your dog's life — a safe, familiar space where they rest, recover and feel secure. Introduced incorrectly (too fast, by shutting the dog in and leaving), it becomes a source of panic and distress. The difference is patience.</p>
<h4>The Crate Introduction Protocol</h4>
<ol><li><strong>Days 1–3:</strong> Crate is open in the living area. Meals are fed near the crate, then just inside the door, then further in. No door closing. The dog chooses to enter.</li><li><strong>Days 4–7:</strong> Begin feeding all meals inside the crate with door open. Dog enters confidently. Begin closing the door for the duration of the meal only, then opening immediately after.</li><li><strong>Week 2:</strong> Close the door after meals and wait 5 minutes before opening. Extend gradually: 10 minutes, 20 minutes, 30 minutes. Always with a Kong or chew inside.</li><li><strong>Week 3+:</strong> Build to overnight use only after the dog is consistently calm for 30+ minutes during the day. Never rush this stage.</li></ol>
<h4>Crate Rules</h4>
<ul><li>Never use the crate as punishment.</li><li>Never leave the dog crated for more than 4 hours (adult) or 1 hour per month of age (puppies).</li><li>Always provide water access for crating over 1 hour.</li><li>The crate should always be associated with positive things — rest, food, peace.</li></ul>
<div class="lesson-quiz" data-lesson="c9_m2_l4"><h4>Knowledge Check</h4><p>What is the maximum time an adult dog should be crated in one stretch?</p><div class="quiz-options"><button class="qo" data-correct="false">8 hours — a full working day if the dog has been well exercised</button><button class="qo" data-correct="true">4 hours maximum — beyond this, confinement causes physical and psychological stress regardless of how well the dog is crate-trained</button><button class="qo" data-correct="false">2 hours — the same as the maximum recommended for any confinement</button></div></div>`
      }
    ]
  },
  {
    id:'c9_m3', n:3, emoji:'📚', courseId:'first-time-owner', courseName:'First-Time Owner Foundations',
    name:'Foundation Training',
    desc:'Build the essential foundation skills every dog needs using clear, positive, effective methods.',
    lessons:[
      {
        id:'c9_m3_l1', name:'How Dogs Learn',
        desc:'Understand the basic science of how dogs learn so your training is always effective.',
        xp:70, tip:'Understanding the science of dog learning makes every training session more effective and every mistake more instructive.',
        content:`<h3>The Learning Science</h3>
<p>Dogs learn through associations — they connect events that happen close together in time. Understanding two core learning principles allows you to design effective training for any behaviour you want to build or change.</p>
<h4>Classical Conditioning</h4>
<p>An involuntary emotional response to a previously neutral stimulus. The clicker or marker word becomes meaningful through classical conditioning — "yes!" → treat, repeated hundreds of times, means the marker word itself produces a positive emotional response before the treat even arrives.</p>
<h4>Operant Conditioning</h4>
<p>Behaviour is shaped by its consequences. Four quadrants:</p>
<ul><li><strong>Positive Reinforcement (R+):</strong> Add something pleasant after a behaviour → behaviour increases. The foundation of force-free training.</li><li><strong>Negative Punishment (P-):</strong> Remove something pleasant after a behaviour → behaviour decreases. (Turning away when dog jumps removes attention.)</li><li><strong>Positive Punishment (R+):</strong> Add something unpleasant after a behaviour → behaviour decreases. Causes fear and destroys trust.</li><li><strong>Negative Reinforcement (R-):</strong> Remove something unpleasant after a behaviour → behaviour increases. (Release of leash pressure when dog stops pulling.) Ethically complex.</li></ul>
<h4>Four Paws Training Philosophy</h4>
<p>We use Positive Reinforcement as our primary tool, Negative Punishment as our secondary tool, and never use Positive Punishment or physical correction. This produces faster learning, stronger relationships and dogs that are genuinely happy to train.</p>
<div class="lesson-quiz" data-lesson="c9_m3_l1"><h4>Knowledge Check</h4><p>What type of learning is occurring when you turn your back on a jumping dog?</p><div class="quiz-options"><button class="qo" data-correct="false">Positive punishment — adding something unpleasant</button><button class="qo" data-correct="true">Negative punishment — removing something pleasant (your attention) after the behaviour, which reduces the likelihood of that behaviour occurring again</button><button class="qo" data-correct="false">Negative reinforcement — removing something unpleasant to increase behaviour</button></div></div>`
      },
      {
        id:'c9_m3_l2', name:'The Marker and Reward System',
        desc:'Set up a marker and reward system that accelerates all future training.',
        xp:70, tip:'A charged marker is the most powerful communication tool in training. Invest the time to build it properly.',
        content:`<h3>The Bridge Between Behaviour and Reward</h3>
<p>A marker (a specific word like "yes!" or the click of a clicker) is a precise communication tool — it tells the dog the exact moment they did the right thing. Without it, the dog has to guess what earned the reward. With it, learning is dramatically faster and clearer.</p>
<h4>Charging the Marker</h4>
<ol><li>Choose your marker: "yes!" (consistent tone, not excited shriek), or a clicker.</li><li>Say "yes!" and immediately deliver a treat. No behaviour required.</li><li>Repeat 30–50 times across 2–3 short sessions.</li><li>Test: say "yes!" and watch for the dog to perk up, look at you expectantly, or orient toward the treat hand — the marker is charged.</li></ol>
<h4>Using the Marker</h4>
<ul><li>Mark at the PEAK of the desired behaviour — not after.</li><li>One mark = one reward. Always follow through.</li><li>The marker is not a command — you don't say "yes!" to ask for a behaviour. You say it to capture it.</li><li>Keep treats small (pea-sized) — you will use many of them and they must not fill the dog up.</li></ul>
<h4>Reward Variety</h4>
<p>Vary your rewards: food (different values), toys, play, praise, access to interesting environments. A dog trained on varied rewards is more adaptable and less dependent on a specific treat type.</p>
<div class="lesson-quiz" data-lesson="c9_m3_l2"><h4>Knowledge Check</h4><p>When exactly should you say your marker word during training?</p><div class="quiz-options"><button class="qo" data-correct="false">After the dog has held the behaviour for 3 seconds to confirm they understood</button><button class="qo" data-correct="true">At the precise peak moment of the desired behaviour — the marker bridges the gap between the behaviour and the reward, so timing is everything</button><button class="qo" data-correct="false">Just before you deliver the treat</button></div></div>`
      },
      {
        id:'c9_m3_l3', name:'The First Five Cues',
        desc:'Teach the five foundation cues every dog needs: sit, down, stay, come and leave it.',
        xp:80, tip:'Five well-trained cues will serve you better than twenty poorly trained ones. Master these completely.',
        content:`<h3>The Foundation Five</h3>
<p>Every dog needs five foundation cues that work reliably across environments. These five skills handle the majority of daily life situations and are the prerequisite for every more advanced skill.</p>
<h4>1. Sit</h4>
<p>Lure nose upward with a treat — bottom naturally lowers. Mark when bottom touches the floor. Add the cue "sit" once reliable. Sit is your default polite behaviour — all greetings, all doorways, all waiting moments.</p>
<h4>2. Down</h4>
<p>From a sit: lure nose toward chest, then slowly to the floor between front paws. Mark when elbows touch. The down is the foundation of settle, stay and relaxation training.</p>
<h4>3. Stay</h4>
<p>Build duration before distance: mark and reward for remaining in position while you count to 2, then 5, then 10. Add one step away only when 10 seconds is reliable. Progress as per Module 2 of Adult Dog Transformation.</p>
<h4>4. Come</h4>
<p>Say the name once, then "come!" in a bright, inviting voice. Reward massively every single time. Never call to anything unpleasant. Begin in low distraction, progress to long line, build to off lead only when 90%+ reliable.</p>
<h4>5. Leave It</h4>
<p>Present a closed fist with a treat inside. Dog sniffs, licks, paws — wait. The moment they move back: mark and reward from the OTHER hand. Never reward from the fisted hand — that food is permanently off limits. Progress to treat on the floor, treat in reach, treat while walking.</p>
<div class="lesson-quiz" data-lesson="c9_m3_l3"><h4>Knowledge Check</h4><p>In "leave it" training, why do you reward from the OTHER hand rather than the one containing the item?</p><div class="quiz-options"><button class="qo" data-correct="false">Because the dog needs to learn to get rewards from different locations</button><button class="qo" data-correct="true">Because the fisted hand contains the item that is permanently off limits — rewarding from it would teach the dog that persisting with the item eventually earns access to it</button><button class="qo" data-correct="false">Because the treat in the fisted hand is lower value</button></div></div>`
      },
      {
        id:'c9_m3_l4', name:'Training Sessions — Getting Them Right',
        desc:'Structure your training sessions for maximum effectiveness and minimum frustration.',
        xp:70, tip:'Five focused minutes beats an unfocused hour every time.',
        content:`<h3>The Perfect Training Session</h3>
<p>Most first-time owners either train too long (frustrating both dog and handler), too randomly (no plan, no progression), or not at all between classes. Understanding what makes a training session effective transforms your results dramatically.</p>
<h4>The Ideal Session Structure</h4>
<ul><li><strong>Duration:</strong> 3–5 minutes for puppies, 5–10 minutes for adult dogs. End before the dog disengages.</li><li><strong>Timing:</strong> When the dog is slightly hungry (before meals) and not over-tired or over-aroused.</li><li><strong>Plan:</strong> Know what you are teaching before you begin. One new behaviour plus one or two maintenance repetitions of known behaviours.</li><li><strong>End on a win:</strong> Always end with something the dog does confidently and enjoys. The last behaviour should feel like success.</li><li><strong>Frequency:</strong> 3–4 sessions per day beats one long session — short and frequent is how dogs learn best.</li></ul>
<h4>When Training Goes Wrong</h4>
<ul><li>If the dog cannot do something: you have moved too fast. Go back a step.</li><li>If the dog disengages: session is too long, treat value too low, or the dog is tired/stressed. Stop.</li><li>If you feel frustrated: stop immediately. Frustration communicates and makes training worse. Try again later.</li></ul>
<div class="lesson-quiz" data-lesson="c9_m3_l4"><h4>Knowledge Check</h4><p>What should you do if your dog cannot perform a behaviour they previously knew?</p><div class="quiz-options"><button class="qo" data-correct="false">Repeat the cue more clearly until they respond correctly</button><button class="qo" data-correct="true">Go back one step in the training progression — the dog is telling you that the last progression was too large or this environment is too challenging</button><button class="qo" data-correct="false">Take a week off training and restart from scratch</button></div></div>`
      }
    ]
  },
  {
    id:'c9_m4', n:4, emoji:'🌍', courseId:'first-time-owner', courseName:'First-Time Owner Foundations',
    name:'Socialisation and Life Skills',
    desc:'Give your dog the confident, resilient foundation they need to thrive in the modern world.',
    lessons:[
      {
        id:'c9_m4_l1', name:'The Socialisation Window',
        desc:'Understand and make the most of the critical socialisation period in puppies.',
        xp:80, tip:'The socialisation window closes at 12–14 weeks. What a puppy experiences positively in this window shapes their world view for life.',
        content:`<h3>The Most Important Weeks of Your Dog's Life</h3>
<p>Between 3 and 12–14 weeks, puppies go through a critical developmental period during which their brain is uniquely primed to accept new experiences as normal. Positive, varied exposure during this window produces a confident, adaptable dog. Missed opportunities during this window produce a dog that finds novelty frightening — and this is very difficult to remediate later.</p>
<h4>The Socialisation Checklist</h4>
<p>Aim to expose your puppy positively to as many of the following as possible before 14 weeks:</p>
<ul><li>People: men, women, children, elderly, people in uniforms, people with hats/beards/glasses</li><li>Sounds: traffic, rain, thunder (recordings), fireworks (recordings), household appliances</li><li>Environments: town centre, parks, trains, cars, lifts, stairs</li><li>Surfaces: grass, gravel, sand, carpet, tiles, metal grating</li><li>Animals: cats, other dogs (vaccinated), farm animals if possible</li><li>Handling: ears, paws, mouth, body, being groomed, being examined by strangers</li></ul>
<h4>Positive Means No Flooding</h4>
<p>Every exposure must be positive — the puppy should not be frightened. Signs of fear mean you are too close/too intense — increase distance, decrease intensity, pair with high-value treats. A frightened exposure is worse than no exposure at all.</p>
<div class="lesson-quiz" data-lesson="c9_m4_l1"><h4>Knowledge Check</h4><p>What should you do if your puppy shows fear during a socialisation exposure?</p><div class="quiz-options"><button class="qo" data-correct="false">Continue the exposure — the puppy needs to learn to cope with the experience</button><button class="qo" data-correct="true">Immediately increase distance or reduce intensity until the puppy is below threshold — a frightening exposure is worse than no exposure and can create a lasting negative association</button><button class="qo" data-correct="false">Pick the puppy up and comfort them while continuing the exposure</button></div></div>`
      },
      {
        id:'c9_m4_l2', name:'Ongoing Socialisation for Adult Dogs',
        desc:'Continue socialisation and positive novel experiences throughout your dog\'s life.',
        xp:70, tip:'Socialisation doesn\'t end at 14 weeks — it continues throughout life and must be maintained like any skill.',
        content:`<h3>Beyond the Window</h3>
<p>The critical socialisation window closes at 12–14 weeks, but socialisation continues throughout the dog's life. Without ongoing positive novel experiences, the adult dog's world gradually narrows — environments, people and experiences that have not been recently encountered can become sources of anxiety even if they were well-socialised as a puppy.</p>
<h4>Ongoing Socialisation Practices</h4>
<ul><li>New environments: visit a new location at least once per week — a different park, a different street, a new town.</li><li>New people: proactively arrange positive interactions with new people — friendly strangers who follow your greeting protocol.</li><li>Maintenance exposure: revisit key environments (town centre, public transport, cafés) regularly so they remain familiar.</li><li>Seasonal maintenance: fireworks, Christmas decorations, Halloween costumes, summer outdoor events — all of these produce novel stimuli annually. Prepare with desensitisation recordings in advance.</li></ul>
<h4>Socialisation vs Exposure</h4>
<p>Socialisation is positive, voluntary, manageable exposure. Exposure without management (flooding a dog with experiences they cannot cope with) is not socialisation — it is trauma. The dog must be below threshold and able to take treats throughout every socialisation experience.</p>
<div class="lesson-quiz" data-lesson="c9_m4_l2"><h4>Knowledge Check</h4><p>What is the difference between socialisation and flooding?</p><div class="quiz-options"><button class="qo" data-correct="false">Flooding is a faster, more intensive form of socialisation</button><button class="qo" data-correct="true">Socialisation is positive, managed exposure below threshold where the dog can take treats and has choice. Flooding is forced exposure above threshold — this is traumatic, not beneficial</button><button class="qo" data-correct="false">Flooding refers to water-based socialisation activities</button></div></div>`
      },
      {
        id:'c9_m4_l3', name:'Building Confidence and Resilience',
        desc:'Help your dog develop the confidence and resilience to cope well with the challenges of modern life.',
        xp:80, tip:'A confident dog is not born — they are built, one positive experience at a time.',
        content:`<h3>What Makes a Confident Dog</h3>
<p>Confidence is not a personality trait that some dogs have and others don't — it is a learned state that is built through repeated successful experiences. A dog with a history of being supported through novel situations, rewarded for brave behaviour, and protected from overwhelming experiences becomes genuinely confident over months and years.</p>
<h4>Confidence-Building Activities</h4>
<ul><li><strong>Puppy and beginner training classes:</strong> Learning in a social environment with other dogs and handlers, guided by a professional.</li><li><strong>Novel environment exploration:</strong> New places with positive experiences — "this new thing = great things happen."</li><li><strong>Problem-solving enrichment:</strong> Puzzle feeders, nose work, trick training — each successful problem solved adds to a dog's confidence in their own ability.</li><li><strong>Positive handling:</strong> Regular, positive grooming, examination and handling — the dog learns that being touched by humans always leads to good things.</li><li><strong>Adventure walks:</strong> Different terrain, different surfaces, different wildlife observations — broad environmental experience builds broad environmental confidence.</li></ul>
<h4>Owner Confidence Matters Too</h4>
<p>Dogs read their handler's emotional state continuously. An anxious, tense handler produces an anxious, tense dog. Working on your own confidence and calmness as a handler — through this programme and through practice — directly improves your dog's confidence.</p>
<div class="lesson-quiz" data-lesson="c9_m4_l3"><h4>Knowledge Check</h4><p>Why does successful problem-solving enrichment build a dog's confidence?</p><div class="quiz-options"><button class="qo" data-correct="false">Because it tires the dog out, reducing anxiety through physical fatigue</button><button class="qo" data-correct="true">Because each successful problem solved builds a history of competence — the dog learns that challenges can be navigated successfully, which transfers to confidence in novel real-world situations</button><button class="qo" data-correct="false">Because enrichment activities are always done in familiar, safe environments</button></div></div>`
      },
      {
        id:'c9_m4_l4', name:'Puppy Classes and Training Groups',
        desc:'Choose the right puppy class and get maximum value from group training environments.',
        xp:70, tip:'A good puppy class is one of the best investments you can make in your first weeks together.',
        content:`<h3>Finding the Right Class</h3>
<p>Puppy classes serve two distinct purposes: socialisation (exposure to other puppies and people in a controlled setting) and foundation training (beginning to build the five essential cues under guidance). A well-run class does both. A poorly run class can undo days of your careful work.</p>
<h4>What to Look for in a Puppy Class</h4>
<ul><li>Trainer uses positive reinforcement methods — no choke chains, no shouting, no physical corrections.</li><li>Puppy play is supervised and broken up frequently — continuous free play produces over-aroused, rude puppies.</li><li>Class size is manageable (6–8 puppies maximum).</li><li>Trainer can explain WHY each technique works, not just demonstrate it.</li><li>Accredited trainer: ABTC, IMDT, APDT, or KCAI accreditation are quality markers.</li></ul>
<h4>Getting the Most from Class</h4>
<ul><li>Practice everything covered in class at home within 24 hours of the session while it is fresh.</li><li>Come with questions — your trainer is your primary resource during this period.</li><li>Don't compare your puppy to others in the class — every dog learns at their own pace.</li></ul>
<h4>Owner Homework</h4>
<p>Research puppy classes in your area this week. Visit one (most allow observers) before enrolling. Assess it against the criteria above. Only enrol if it meets all of them.</p>
<div class="lesson-quiz" data-lesson="c9_m4_l4"><h4>Knowledge Check</h4><p>Why should continuous, uninterrupted puppy play be avoided in a puppy class?</p><div class="quiz-options"><button class="qo" data-correct="false">Because puppies get too tired to learn afterwards</button><button class="qo" data-correct="true">Because continuous play produces over-arousal and teaches rude greeting behaviour — interrupted, managed play sessions teach puppies appropriate start/stop and to remain below threshold</button><button class="qo" data-correct="false">Because not all puppies enjoy play and some should be excluded</button></div></div>`
      }
    ]
  },
  {
    id:'c9_m5', n:5, emoji:'🎉', courseId:'first-time-owner', courseName:'First-Time Owner Foundations',
    name:'Your First Year — Building for Life',
    desc:'Complete your first year as a dog owner with confidence, knowledge and a plan for everything ahead.',
    lessons:[
      {
        id:'c9_m5_l1', name:'Common First-Year Challenges',
        desc:'Know what to expect in the first year and how to handle the challenges that catch most owners off guard.',
        xp:80, tip:'Forewarned is forearmed. Every challenge is easier when you know it is coming and know what to do.',
        content:`<h3>What the First Year Actually Looks Like</h3>
<p>The first year with a dog is the most challenging — and the most formative. Understanding what is developmentally normal at each stage prevents panic, reduces mistakes, and helps you stay consistent through the phases that derail many new owners.</p>
<h4>The Puppy Witching Hour (8–12 Weeks)</h4>
<p>Puppies have brief but intense periods of frenetic energy, biting and seemingly uncontrollable behaviour — particularly in the evening. This is normal. Solution: predictable routine with adequate nap time, calm activities in the evening, appropriate chew access.</p>
<h4>The Fear Period (8–11 Weeks and 6–14 Months)</h4>
<p>During fear periods, puppies may suddenly become frightened of things they were previously confident with. Never force through fear during this period — wait it out with gentle support and positive exposure at very low intensity.</p>
<h4>The Adolescent Period (5–18 Months)</h4>
<p>The hormonal surge of adolescence produces a dog that appears to have forgotten everything they knew, ignores known cues, and pulls on the lead as if they have never been trained. This is the phase when most dogs are given up. It is completely normal and temporary. Maintain consistent training, manage expectations, and get support from your trainer — do not give up.</p>
<h4>Owner Homework</h4>
<p>Identify which developmental phase your dog is currently in. Research its typical duration and specific challenges. Bring three specific questions to your next trainer session.</p>
<div class="lesson-quiz" data-lesson="c9_m5_l1"><h4>Knowledge Check</h4><p>Why do dogs in adolescence appear to forget their training?</p><div class="quiz-options"><button class="qo" data-correct="false">Because they are wilfully disobedient and need firmer handling</button><button class="qo" data-correct="true">Because hormonal changes during adolescence affect the dog's neurological processing and threshold — the brain is undergoing significant development that temporarily disrupts trained responses. This resolves with time and consistent positive training</button><button class="qo" data-correct="false">Because training methods used for puppies stop working for adolescent dogs</button></div></div>`
      },
      {
        id:'c9_m5_l2', name:'Health Literacy for Dog Owners',
        desc:'Develop the health literacy to recognise common problems and know when to call the vet.',
        xp:80, tip:'Knowing when NOT to call the vet is as valuable as knowing when you must. Both save lives and money.',
        content:`<h3>Your Dog Health Foundation</h3>
<p>You don't need to be a vet — but you do need to know enough to recognise when something is wrong and act appropriately. Over-treating minor issues and under-treating genuine emergencies are both common first-time owner errors. This lesson gives you a framework.</p>
<h4>Call the Vet Immediately</h4>
<ul><li>Suspected poisoning (any toxic substance ingested)</li><li>Difficulty breathing or pale/blue gums</li><li>Unable to stand or sudden collapse</li><li>Bloated abdomen with unproductive retching (bloat — life-threatening emergency)</li><li>Seizures</li><li>Eye injuries or sudden vision changes</li><li>Suspected broken bone or inability to weight bear</li><li>Deep lacerations or significant bleeding</li><li>Known ingestion of a foreign object</li></ul>
<h4>Can Usually Wait for an Appointment</h4>
<ul><li>Single bout of vomiting with no other symptoms in a dog that is bright and alert</li><li>Single bout of diarrhoea with no blood, no lethargy, no vomiting</li><li>Mild lameness that improves over 24 hours</li><li>Small superficial cuts</li><li>Ear scratching without discharge or odour</li></ul>
<h4>Owner Homework</h4>
<p>Write down the emergency number for your vet practice and the nearest out-of-hours emergency clinic. Save both in your phone today. These are numbers you need before you need them.</p>
<div class="lesson-quiz" data-lesson="c9_m5_l2"><h4>Knowledge Check</h4><p>A dog has a bloated abdomen and keeps retching unsuccessfully. What should you do?</p><div class="quiz-options"><button class="qo" data-correct="false">Wait 30 minutes to see if it resolves before calling</button><button class="qo" data-correct="true">Call the vet immediately — this is a classic presentation of bloat (gastric dilatation volvulus), a life-threatening emergency where every minute matters</button><button class="qo" data-correct="false">Give the dog water to help with the retching</button></div></div>`
      },
      {
        id:'c9_m5_l3', name:'Building Your Support Network',
        desc:'Assemble the team of professionals and community that will support your dog\'s life.',
        xp:70, tip:'Dog ownership is not a solo sport. The right support network makes every challenge manageable.',
        content:`<h3>Your Dog Ownership Team</h3>
<p>The most successful dog owners are not those with the most knowledge — they are those with the best support network. Building relationships with key professionals before you need them in a crisis is one of the most practical investments a new owner can make.</p>
<h4>Your Core Team</h4>
<ul><li><strong>Veterinary practice:</strong> Your primary health partner. Build a relationship — bring your dog for happy visits (treats, no examination) so the practice is not only associated with unpleasant things.</li><li><strong>Dog trainer:</strong> Your Four Paws trainer is your primary training resource. Use them proactively, not just in crisis.</li><li><strong>Dog walker or day care:</strong> For the working days when your dog needs more than you can give. Research thoroughly — ask for references and trial visits.</li><li><strong>Emergency boarding contact:</strong> A trusted person who could care for your dog at short notice if you are taken ill or called away unexpectedly.</li></ul>
<h4>Community</h4>
<ul><li>Dog-owning friends in your area — shared walking, shared knowledge, shared support.</li><li>Breed-specific community — valuable for breed-specific advice and shared experience.</li><li>Online support groups — for specific challenges (reactivity, separation anxiety, adolescence).</li></ul>
<div class="lesson-quiz" data-lesson="c9_m5_l3"><h4>Knowledge Check</h4><p>Why should you bring your dog to the vet occasionally just for treats and a friendly greeting?</p><div class="quiz-options"><button class="qo" data-correct="false">To keep the veterinary staff familiar with your dog's behaviour</button><button class="qo" data-correct="true">To ensure the veterinary practice is not exclusively associated with examinations and unpleasant procedures — building a positive association reduces stress for the dog during genuine appointments</button><button class="qo" data-correct="false">Because vets offer this service free of charge as a community benefit</button></div></div>`
      },
      {
        id:'c9_m5_l4', name:'First-Time Owner Certification',
        desc:'Celebrate completing your First-Time Owner Foundations and look ahead to a lifetime with your dog.',
        xp:150, tip:'You started as a first-time owner. You are finishing as someone who genuinely knows what they are doing.',
        content:`<h3>First-Time Owner Foundations — Complete</h3>
<p>Completing this programme means you have given yourself the foundation of knowledge that most dog owners spend years acquiring through trial and error. You understand how dogs learn, how to set them up for success, how to build skills, how to keep them healthy, and how to support them through every developmental phase. That is a remarkable starting point.</p>
<h4>What Your Certification Demonstrates</h4>
<ul><li>Informed, research-based dog selection and acquisition</li><li>Safe home preparation before arrival</li><li>Positive, effective toilet training and crate introduction</li><li>Foundation training (sit, down, stay, come, leave it) using positive methods</li><li>Understanding of the socialisation window and ongoing socialisation practices</li><li>Health literacy — knowing when to call the vet</li><li>A support network and daily routine in place</li></ul>
<h4>What Comes Next</h4>
<p>You have completed the foundations. Everything in the Four Paws Academy is now open to you — from Canine Enrichment Specialist to Elite Companion Dog. Choose what matches your dog's current stage and your own goals. The journey you are on together is one of the most rewarding things life has to offer. Enjoy every single step of it.</p>
<div class="lesson-quiz" data-lesson="c9_m5_l4"><h4>Knowledge Check</h4><p>What is the most important thing a First-Time Owner Foundations graduate has compared to a typical new dog owner?</p><div class="quiz-options"><button class="qo" data-correct="false">Perfect dog training technique from day one</button><button class="qo" data-correct="true">A foundation of evidence-based knowledge that replaces years of trial and error — understanding how dogs learn, what they need, and how to support them through every challenge they will face</button><button class="qo" data-correct="false">A guarantee that their dog will never develop behaviour problems</button></div></div>`
      }
    ]
  }
];

FP_COURSE.modules = FP_COURSE.modules.concat(COURSE_9_MODULES);


console.log('[FP] Extended courses loaded. Total modules: ' + FP_COURSE.modules.length);
})();
