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
