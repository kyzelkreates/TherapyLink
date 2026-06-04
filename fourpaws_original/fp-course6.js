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
