export interface PlaneSpec {
  label: string;
  value: string;
}

export interface TourPage {
  id: number;
  phase: string;
  title: string;
  subtitle?: string;
  type: "welcome" | "history" | "plane" | "models" | "thankyou";
  imageQuery?: string;
  buno?: string;
  span?: string;
  specs?: PlaneSpec[];
  serviceHistory?: string;
  harpFact?: string;
  content?: string;
}

export const tourPages: TourPage[] = [
  {
    id: 1,
    phase: "Induction",
    title: "Welcome to Hangar B",
    subtitle: "Floyd Bennett Field · Brooklyn, NY",
    type: "welcome",
    content:
      "This is the self-guided version of our tour provided by H.A.R.P. (Historic Aircraft Restoration Project) volunteers. You are NOT ALLOWED to enter the C-47 and the Pelican without a volunteer. If you would like a guided tour led by one of our wonderful volunteers find someone inside the hangar!",
  },
  {
    id: 2,
    phase: "Induction",
    title: "History of Floyd Bennett Field",
    type: "history",
    content:
      "Floyd Bennett Field opened in 1931 as New York City's first municipal airport. Named after the celebrated Navy aviator Floyd Bennett — Byrd's pilot on the 1926 North Pole flight — it quickly became a record-breaking destination. Wiley Post landed the Winnie Mae here. Howard Hughes departed from this very tarmac on his 1938 round-the-world record flight.\n\nWhen World War II erupted, the Navy took control, transforming the field into Naval Air Station New York. Patrol bombers hunted U-boats off the Atlantic coast. Pilots trained here before shipping out to the Pacific. Hangar B, where you stand now, sheltered those aircraft through wartime operations, Cold War readiness, and decades of service.\n\nToday the H.A.R.P. volunteers preserve that legacy — one rivet at a time.",
  },
  {
    id: 3,
    phase: "The Fleet",
    title: "The Yellow Plane",
    subtitle: "North American SNJ / AT-6 Texan",
    type: "plane",
    buno: "12345",
    span: "42 ft",
    specs: [
      { label: "Role", value: "Advanced Trainer" },
      { label: "Top Speed", value: "208 mph" },
      { label: "Engine", value: "P&W R-1340 Wasp, 600 hp" },
      { label: "Range", value: "750 miles" },
    ],
    serviceHistory:
      "Universally known as the Texan to the USAAF and Harvard to the British Commonwealth, the AT-6 was the finishing school for nearly every Allied pilot in World War II. Over 17,000 were built. Virtually every fighter and bomber pilot who flew in combat logged hours in this aircraft before they ever saw battle.",
    harpFact:
      "H.A.R.P. volunteers stripped this aircraft to bare metal and painstakingly re-applied its distinctive bright yellow training scheme. That color saved lives — it made trainers instantly visible to avoid mid-air collisions during the chaotic training rush of WWII.",
  },
  {
    id: 4,
    phase: "The Fleet",
    title: "Grumman HU-16 Albatross",
    type: "plane",
    buno: "67890",
    span: "96 ft",
    specs: [
      { label: "Role", value: "Search & Rescue Amphibian" },
      { label: "Top Speed", value: "236 mph" },
      { label: "Engines", value: "2× Wright R-1820 Cyclone, 1,425 hp" },
      { label: "Range", value: "2,850 miles" },
    ],
    serviceHistory:
      "The Albatross earned its stripes rescuing downed pilots from Korean and Vietnamese waters. Capable of landing in six-foot swells, it operated with the Air Force, Navy, Coast Guard, and over a dozen foreign nations. During the Korean War, Albatrosses are credited with rescuing hundreds of aircrew from behind enemy lines.",
    harpFact:
      "This aircraft's hull required extensive fiberglass repair — the result of decades of salt-water operations. H.A.R.P. volunteers used marine-grade materials and techniques learned from boat restorers to make her seaworthy in appearance once again.",
  },
  {
    id: 5,
    phase: "The Fleet",
    title: "Douglas C-47 Skytrain",
    type: "plane",
    buno: "11223",
    span: "95 ft",
    specs: [
      { label: "Role", value: "Military Transport" },
      { label: "Top Speed", value: "224 mph" },
      { label: "Engines", value: "2× P&W R-1830, 1,200 hp each" },
      { label: "Range", value: "1,600 miles" },
    ],
    serviceHistory:
      "Eisenhower called it one of the weapons that won the war. C-47s carried paratroopers over Normandy on D-Day, hauled supplies over the Hump in China, and kept Berlin alive during the Soviet blockade. Built by the thousands, they served in Korea, Vietnam, and dozens of conflicts well into the 21st century.",
    harpFact:
      'The distinctive "invasion stripes" painted on WWII aircraft were applied in the days before D-Day so Allied gunners could identify friendly aircraft in the chaos of the invasion. H.A.R.P. has researched the exact stripe specifications from period photographs.',
  },
  {
    id: 6,
    phase: "The Fleet",
    title: "Douglas A-4 Skyhawk",
    type: "plane",
    buno: "44556",
    span: "27 ft",
    specs: [
      { label: "Role", value: "Light Attack Jet" },
      { label: "Top Speed", value: "673 mph" },
      { label: "Engine", value: "P&W J52, 9,300 lbf thrust" },
      { label: "Ceiling", value: "42,250 ft" },
    ],
    serviceHistory:
      "Ed Heinemann's masterpiece defied a Navy spec calling for a 30,000-lb aircraft by delivering a jet half that weight with twice the payload. The Skyhawk flew combat over Vietnam, served as the Blue Angels' mount for over a decade, and fought in the Falklands War for Argentina.",
    harpFact:
      "The Skyhawk's wing was so compact it didn't need to fold for carrier storage — a major logistical advantage. H.A.R.P. volunteers noted the tight access panels during restoration; every component had to be engineered for minimum space.",
  },
  {
    id: 7,
    phase: "The Fleet",
    title: "Grumman G-21 Goose",
    type: "plane",
    buno: "77889",
    span: "49 ft",
    specs: [
      { label: "Role", value: "Utility Amphibian" },
      { label: "Top Speed", value: "201 mph" },
      { label: "Engines", value: "2× P&W R-985, 450 hp each" },
      { label: "Range", value: "640 miles" },
    ],
    serviceHistory:
      "Designed for wealthy businessmen commuting between Manhattan and their Long Island estates, the Goose was quickly pressed into military service. The Navy and Coast Guard used them for patrol and rescue. Many survived to serve bush operators in Alaska and the Caribbean for decades.",
    harpFact:
      "The Goose was built right here on Long Island by Grumman — making this a true local product. H.A.R.P. volunteers have a special affection for Grumman iron; the 'Grumman Iron Works' reputation for toughness is well-earned.",
  },
  {
    id: 8,
    phase: "The Fleet",
    title: "Nike Ajax Missile System",
    type: "plane",
    buno: "N/A",
    span: "4 ft",
    specs: [
      { label: "Type", value: "Surface-to-Air Missile" },
      { label: "Top Speed", value: "Mach 2.3" },
      { label: "Range", value: "25 miles" },
      { label: "Ceiling", value: "60,000 ft" },
    ],
    serviceHistory:
      "In the shadow of the Cold War, Nike Ajax missiles ringed every major American city. Battery sites were established in New York's parks, including Floyd Bennett Field, ready to intercept Soviet bombers. This was America's first operational surface-to-air guided missile system, deployed 1954–1964.",
    harpFact:
      "The Nike batteries were manned by young Army soldiers, often teenagers fresh from basic training, who lived on-site. H.A.R.P. volunteers have interviewed some of these veterans, whose stories bring the Cold War to life in unexpected, very human ways.",
  },
  {
    id: 9,
    phase: "The Fleet",
    title: "Beechcraft JRB Expeditor",
    type: "plane",
    buno: "99001",
    span: "47 ft",
    specs: [
      { label: "Role", value: "Light Transport / Nav Trainer" },
      { label: "Top Speed", value: "225 mph" },
      { label: "Engines", value: "2× P&W R-985, 450 hp each" },
      { label: "Range", value: "750 miles" },
    ],
    serviceHistory:
      "Based on the civilian Beechcraft Model 18 — one of the most successful twin-engine aircraft ever built — the military Expeditor served as a staff transport, navigation trainer, and ambulance aircraft. Over 4,500 were built, and the civilian Model 18 continued production until 1970, a 32-year production run.",
    harpFact:
      "The twin-tail design of the Beech 18 was considered very modern for its era. H.A.R.P. volunteers found that the aircraft's construction quality has held up remarkably well — a testament to Beechcraft's reputation for craftsmanship.",
  },
  {
    id: 10,
    phase: "The Fleet",
    title: "Sikorsky HH-3F Pelican",
    subtitle: "U.S. Coast Guard Search & Rescue Helicopter",
    type: "plane",
    buno: "22334",
    span: "62 ft",
    specs: [
      { label: "Role", value: "SAR Helicopter" },
      { label: "Top Speed", value: "162 mph" },
      { label: "Engines", value: "2× GE T58, 1,500 shp each" },
      { label: "Range", value: "480 miles" },
    ],
    serviceHistory:
      "The HH-3F was the Coast Guard's primary long-range search and rescue helicopter for decades, flying out of Air Station Brooklyn — just across Jamaica Bay. These aircraft pulled mariners from sinking ships and responded to disasters along the entire Eastern Seaboard.",
    harpFact:
      "Many H.A.R.P. volunteers remember seeing these orange helicopters flying overhead from their Brooklyn neighborhoods. Restoring the Pelican is personal — it represents the Coast Guard's quiet, constant vigil over New York waters.",
  },
  {
    id: 11,
    phase: "The Fleet",
    title: "Lockheed P-2 Neptune",
    type: "plane",
    buno: "55667",
    span: "103 ft",
    specs: [
      { label: "Role", value: "Maritime Patrol / ASW" },
      { label: "Top Speed", value: "356 mph" },
      { label: "Engines", value: "2× Wright R-3350 + 2× J34 jets" },
      { label: "Range", value: "3,685 miles" },
    ],
    serviceHistory:
      "The Neptune was the Navy's primary land-based anti-submarine patrol aircraft through the Cold War. Flying from bases like Floyd Bennett Field, Neptunes hunted Soviet submarines lurking off the American coast, dropping sonobuoys and magnetic anomaly detectors across thousands of square miles of ocean.",
    harpFact:
      "The Neptune's jet pods could be ignited for a burst of extra speed during attack runs — an unusual hybrid propulsion system. H.A.R.P. volunteers found this engineering fascinating during the inspection phase of restoration.",
  },
  {
    id: 12,
    phase: "The Fleet",
    title: "Nike Hercules Missile System",
    type: "plane",
    buno: "N/A",
    span: "7 ft",
    specs: [
      { label: "Type", value: "SAM (Nuclear Capable)" },
      { label: "Top Speed", value: "Mach 3.65" },
      { label: "Range", value: "75 miles" },
      { label: "Ceiling", value: "100,000 ft" },
    ],
    serviceHistory:
      "The successor to Nike Ajax, the Hercules could carry a nuclear warhead capable of destroying an entire formation of Soviet bombers with a single detonation. Batteries of Hercules missiles were positioned at sites across the New York metro area, on constant alert throughout the Cold War from 1958–1974.",
    harpFact:
      "These missiles were kept on constant alert — some nuclear-armed — in the middle of New York City's parks. The Army soldiers who manned them had procedures for nuclear release requiring both Presidential authorization and local command action. A sobering piece of history in a Brooklyn park.",
  },
  {
    id: 13,
    phase: "The Fleet",
    title: "Curtiss-Wright SNJ-2",
    type: "plane",
    buno: "88990",
    span: "42 ft",
    specs: [
      { label: "Role", value: "Primary Trainer" },
      { label: "Top Speed", value: "152 mph" },
      { label: "Engine", value: "Wright Whirlwind, 220 hp" },
      { label: "Ceiling", value: "15,700 ft" },
    ],
    serviceHistory:
      "Curtiss-Wright trainers gave generations of Naval aviators their first taste of flight. Simple, forgiving, and robust, these aircraft were the foundation upon which carrier pilots were built — teaching fundamentals before students advanced to more powerful aircraft like the AT-6 Texan.",
    harpFact:
      "H.A.R.P. volunteers take particular pride in this aircraft because it represents the very beginning of a naval aviator's journey. Every Blue Angel and every Top Gun graduate began in aircraft just like this one.",
  },
  {
    id: 14,
    phase: "The Fleet",
    title: "Grumman S-2 Tracker",
    type: "plane",
    buno: "11445",
    span: "72 ft",
    specs: [
      { label: "Role", value: "Carrier-Based ASW" },
      { label: "Top Speed", value: "265 mph" },
      { label: "Engines", value: "2× Wright R-1820, 1,525 hp each" },
      { label: "Range", value: "1,300 miles" },
    ],
    serviceHistory:
      "The first aircraft specifically designed to both hunt and kill submarines in a single airframe, the S-2 Tracker combined the search and attack roles previously requiring separate aircraft. It served on U.S. carriers through the 1970s and with many foreign navies into the 1990s.",
    harpFact:
      "The Tracker's folding wings were essential for carrier operations. H.A.R.P. volunteers painstakingly restored the wing-fold mechanisms — a complex system of hydraulics and locks that had to be perfectly maintained for safe carrier deck operations.",
  },
  {
    id: 15,
    phase: "The Fleet",
    title: "Boeing-Stearman",
    subtitle: "Model 75 Kaydet",
    type: "plane",
    buno: "66778",
    span: "32 ft",
    specs: [
      { label: "Role", value: "Primary Trainer" },
      { label: "Top Speed", value: "124 mph" },
      { label: "Engine", value: "Continental R-670, 220 hp" },
      { label: "Built", value: "10,346 aircraft" },
    ],
    serviceHistory:
      "More American and Allied pilots learned to fly in the Stearman than in any other aircraft. Over 10,000 were built, and they were still flying as crop dusters, aerobatic performers, and cherished warbirds decades after the war. The open-cockpit biplane gives pilots an unfiltered, visceral connection to flight.",
    harpFact:
      "H.A.R.P. volunteers describe working on the Stearman as working on 'the soul of aviation.' The simple, elegant structure — fabric over steel tube and wood — requires restoration skills closer to fine woodworking than modern aircraft maintenance.",
  },
  {
    id: 16,
    phase: "The Fleet",
    title: "Consolidated PBY-5A Catalina",
    type: "plane",
    buno: "99112",
    span: "104 ft",
    specs: [
      { label: "Role", value: "Patrol Bomber / SAR Amphibian" },
      { label: "Top Speed", value: "196 mph" },
      { label: "Engines", value: "2× P&W R-1830, 1,200 hp each" },
      { label: "Range", value: "2,545 miles" },
    ],
    serviceHistory:
      "The PBY Catalina was the Navy's workhorse of the Pacific — it spotted the Japanese fleet before Midway, flew Black Cat night attack missions, and rescued more downed aviators than any other aircraft. 'Dumbo' missions — Catalina rescue flights into combat zones — saved hundreds of American aircrews.",
    harpFact:
      "The distinctive parasol wing and two-blister design make the Catalina unmistakable. H.A.R.P. volunteers found the blisters — used by gunners and observers — to be a fascinating window into the flying boat experience.",
  },
  {
    id: 17,
    phase: "The Fleet",
    title: "Winnie Mae Replica",
    subtitle: "Lockheed Vega 5B — Full-Scale Replica",
    type: "plane",
    buno: "N/A",
    span: "41 ft",
    specs: [
      { label: "Type", value: "Full-Scale Display Replica" },
      { label: "Top Speed", value: "246 mph" },
      { label: "Engine", value: "P&W Wasp, 450 hp" },
      { label: "Record", value: "7 days, 18 hrs, 49 min" },
    ],
    serviceHistory:
      "On July 22, 1933, Wiley Post landed the Winnie Mae at Floyd Bennett Field after completing the first solo round-the-world flight. New York went wild. The original is preserved at the Smithsonian; this full-scale replica honors her return to the field where history was made.",
    harpFact:
      "H.A.R.P. volunteers built this replica using period-correct construction methods. The Vega's molded plywood monocoque fuselage — revolutionary in its day — presented unique restoration challenges met with custom tooling and careful research.",
  },
  {
    id: 18,
    phase: "The Fleet",
    title: "Fairchild PT-26 Cornell",
    type: "plane",
    buno: "33445",
    span: "36 ft",
    specs: [
      { label: "Role", value: "Primary Trainer (Commonwealth)" },
      { label: "Top Speed", value: "122 mph" },
      { label: "Engine", value: "Ranger L-440, 175 hp" },
      { label: "Range", value: "460 miles" },
    ],
    serviceHistory:
      "The PT-26 Cornell was the primary trainer for thousands of Commonwealth aircrew through the British Commonwealth Air Training Plan. Canadian and British pilots who went on to fly Spitfires and Hurricanes over Europe got their wings in the Cornell's side-by-side cockpit.",
    harpFact:
      "The side-by-side seating arrangement — unusual for trainers of the era — let instructors directly observe students' hand and foot movements, making it highly effective for instruction. H.A.R.P. volunteers note this aircraft represents the incredible Allied cooperation that made victory possible.",
  },
  {
    id: 19,
    phase: "The Workshop",
    title: "The Models",
    type: "models",
    content:
      "Throughout Hangar B you'll find an extraordinary collection of scale models — painstakingly hand-built by H.A.R.P. volunteers and skilled model-makers who have dedicated hundreds of hours to each piece.\n\nThese aren't ordinary models. Many are museum-quality 1:48 and 1:72 scale representations of aircraft that once flew from this very field, built from kits that were then extensively detailed, modified, and finished to match photographic documentation of specific airframes.\n\nLook closely at the panel lines, the weathering, the tiny stenciled markings. Each model tells a story of an individual aircraft and the people who flew it. The volunteers who build these models bring the same dedication to accuracy and craftsmanship that defines H.A.R.P.'s full-scale restoration work — just at a much smaller scale.\n\nSeveral models represent aircraft that no longer exist in full-scale form anywhere in the world. For some lost designs, these models are among the most accurate three-dimensional representations in existence.",
  },
  {
    id: 20,
    phase: "Debrief",
    title: "Thank You",
    subtitle: "From the H.A.R.P. Angels",
    type: "thankyou",
    content:
      "You've completed the Hangar B self-guided tour. On behalf of the H.A.R.P. volunteers — the 'Angels' who give their weekends, their expertise, and their hearts to this work — thank you for visiting.\n\nEvery aircraft you saw today exists because dedicated volunteers chose to show up. They learned skills they never knew they'd need. They solved problems no manual anticipated. They carried forward the stories of the men and women who built, flew, and maintained these machines in service of something larger than themselves.\n\nThis work is never finished. There are always more aircraft to restore, more stories to preserve, more history to honor.\n\nIf you felt something walking through this hangar today — that's the point.",
  },
];
