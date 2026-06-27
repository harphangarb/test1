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
      'Floyd Bennett Field was constructed between 1928 and 1930 as New York City’s first municipal airport, officially opening for commercial flights on May 23, 1931. Built on Barren Island to compete with Newark Airport for air traffic, the field ultimately failed as a commercial hub because its location in southeast Brooklyn was considered too far from Manhattan. Despite its commercial struggles, the airport became a premier center for general aviation and record-breaking flights during the 1930s, hosting dozens of "firsts" by famous aviators such as Wiley Post, Amelia Earhart, and Howard Hughes.\n\nThe airfield transitioned to full military control as World War II intensified, closing to all civilian traffic on May 26, 1941, and officially becoming Naval Air Station (NAS) New York on June 2, 1941. During the war, it served as a critical hub for anti-submarine patrols and the delivery of thousands of aircraft. The New York City Police Department (NYPD) established its presence at the field early on, occupying a hangar for the world\'s first police aviation unit starting in 1934. The United States Coast Guard also operated Coast Guard Air Station Brooklyn on the site from 1938 until its decommission in 1998. The Navy ceased flight operations in 1970, though a non-flying reserve center remained until 1983.\n\nIn 1972, Floyd Bennett Field was integrated into the Gateway National Recreation Area, reopening as a public park under National Park Service stewardship in 1974. While fixed-wing commercial and military flights no longer operate, the site still hosts several active organizations. The NYPD maintains a helicopter base and a driver training unit at the field today, and the United States Marine Corps Reserve continues to operate its 6th Communication Battalion from the southern section. Additionally, the Aviator Sports and Events Center has occupied several historic hangars as a business concession since 2006.',
  },
  {
    id: 3,
    phase: "The Fleet",
    title: "The Yellow Plane",
    subtitle: "Based on the Piper J-3 Cub",
    type: "plane",
    serviceHistory:
      "This bright yellow plane was made in the backyard of someone's home on Long Island. The plane's control systems for the wings still work; ask a volunteer to show you!",
    harpFact:
      "This plane never left the ground! Its engine was never complete, and it has never taken off!",
  },
  {
    id: 4,
    phase: "The Fleet",
    title: 'Grumman HU-16E "Albatross"',
    type: "plane",
    buno: "7216",
    span: "96 ft 8 in.",
    specs: [
      { label: "Role", value: "Search & Rescue Amphibian" },
      { label: "Max Speed", value: "264 mph" },
      { label: "Engines", value: "2× Wright R-1820 Cyclone, 1,425 hp" },
      { label: "Range", value: "2,850 miles" },
    ],
    serviceHistory:
      "The Albatross earned its stripes rescuing downed pilots from Korean and Vietnamese waters. Capable of landing in six-foot swells, it operated with the Air Force, Navy, Coast Guard, and over a dozen foreign nations. During the Korean War, Albatrosses rescued almost 1,000 UN personnel",
    harpFact:
      "This specific airplane (BuNo 7216) initally served served with the airforce as USAF 51-7216 before moving to the Coast Guard. It operated in Miami and was displayed on the Intrepid from 1984-2001 before coming to H.A.R.P.",
  },
  {
    id: 5,
    phase: "The Fleet",
    title: 'Douglas C-47B "Skytrain"',
    type: "plane",
    buno: "44-76457",
    span: "95 ft 6 in.",
    specs: [
      { label: "Role", value: "Transport, Paratroop, Cargo" },
      { label: "Top Speed", value: "224 mph" },
      { label: "Engines", value: "2× P&W R-1830, 1,200 hp each" },
      { label: "Range", value: "1,600 miles" },
    ],
    serviceHistory:
      'Based on the DC-3, the C-47B or Dakota IV in the RAF served as the backbone of the allied war effort. The C-47 was the most produced transport plane during WWII, and the Skytrain was used for troop transport, cargo transport,  paratrooper drops, and glider towing. C-47s flew the "Hump" to resupply China and other Asian war efforts, dropped paratroopers and towed gliders on D-Day, and resupplied troops. It was also used during the Berlin Airlift, the Korean War, and certain modernized variants (AC-47 Gunship) were used during the Vietnam War.',
    harpFact:
      'Our plane USAF 44-76457 was built in 1945 and was sent to Europe a couple months before the end of the war. It was then shipped back to the US where it went to Roswell in 1948. It went to multiple places after, including Louisiana with the 4410th Special Operations Training Group and retired with the Indiana Air National Guard. ',
  },
  {
    id: 6,
    phase: "The Fleet",
    title: "Douglas A-4B Skyhawk",
    type: "plane",
    buno: "142829",
    span: "27 ft 6 in.",
    specs: [
      { label: "Role", value: "Close Air Support - Carrier Based" },
      { label: "Top Speed", value: "664 mph" },
      { label: "Engine", value: "P&W J52, 9,300 lbf thrust" },
      { label: "Ceiling", value: "42,250 ft" },
    ],
    serviceHistory:
      'Often called "Heinemann\'\s Hot Rod", after its designed Ed Heinemann, the A-4B was used for close air support. With the ability to be carrier based, it was one of the most versatile jets the Navy and Marines had. It also pioneered "buddy refueling" in the Navy, where a non-tanker aircraft refuels other planes through an external fuel tank. Skyhawks mainly served in Vietnam, though some were flying with Argentina until the 2020s. They could be armed with a variety of bombs, including nuclear ones, and had two guns. Senator John McCain famously flew one of these in Vietnam before crashing.',
    harpFact:
      "Our Skyhawk BuNo 142829 was built in 1958. It initially served between 1958-1960 with the Marine Corps before transferring to the Navy, where it served at Cecil Field. In 1963, it entered storage in Arizona before returning to active service in Rhode Island. The Skyhawk also served on the U.S.S. Franklin D. Roosovelt and the U.S.S. Shangri-La in Vietnam where it made a total of 294 carrier landings (134 aboard the FDR and 131 aboard the Shangri-La). It accumulated more than 2,700 hours of flight time. ",
  },
  {
    id: 7,
    phase: "The Fleet",
    title: 'JRF-5 Grumman "Goose"',
    type: "plane",
    buno: "87736 (Civilian N644R)",
    span: "49 ft 0 in.",
    specs: [
      { label: "Role", value: "Utility Amphibian" },
      { label: "Top Speed", value: "201 mph" },
      { label: "Engines", value: "2× P&W R-985, 450 hp each" },
      { label: "Range", value: "640 miles" },
    ],
    serviceHistory:
      "Designed for wealthy businessmen in Long Island, the Goose was Grumman's first monoplane, first twin-engined aircraft, and first aircraft to enter commercial service. During WWII, JRF-5s were used for transport, search and rescue, evacuation, and coastal partrol by the Coast Guard as well as the Navy. The NYPD also used Gooses for search and rescue, and this plane was repainted this livery, as it was dedicated to the NYPD aviation unit, which is stationed at Floyd Bennett Field as well. ",
    harpFact:
      "This Goose BuNo 87736 was accepted by the Navy on June 13, 1945. It was initially assigned to NAS South Weymouth, Massachusets and served at other naval bases before transferring to the Department of the Interior after Navy retirement on September 30, 1953. Under the registration N644R, it served in various locations in Alaska. ",
  },
  {
    id: 8,
    phase: "The Fleet",
    title: "Nike Ajax Missile System",
    type: "plane",
    buno: "N/A",
    span: "	32 ft 8 in.",
    specs: [
      { label: "Type", value: "Surface-to-Air Missile" },
      { label: "Top Speed", value: "Mach 2.25" },
      { label: "Range", value: "25 miles" },
      { label: "Ceiling", value: "60,000 ft" },
    ],
    serviceHistory:
      "Developed by Bell Labs for the U.S. Army during the Cold War, the Nike Ajax entered service in 1954. Its main target were Soviet long-range bombers, and they were deployed all across U.S. cities, including New York, as well as overseas bases. They were in operation with the U.S. army in the U.S. until 1963, and they began to be replaced in 1958 with the introduction of the Nike Hercules. Japan used a variant of these until the 1970s. ",
    harpFact:
      "There was a Nike Ajax battery at Fort Tilden in 1954-1959 as well as other parts of NYC, including the Bronx. You can now tour the battery at Fort Tilden through the National Park Service, as it's part of the Gateway National Recreation Area!",
  },
  {
    id: 9,
    phase: "The Fleet",
    title: "Beech C-45F Expeditor",
    type: "plane",
    buno: "90536 (Civilian N9659) ",
    span: "47 ft 8 in.",
    specs: [
      { label: "Role", value: "Light Transport / Nav Trainer" },
      { label: "Top Speed", value: "219 mph" },
      { label: "Engines", value: "2× P&W R-985, 450 hp each" },
      { label: "Range", value: "750 miles" },
    ],
    serviceHistory:
      "Based on the civilian Beechcraft Model 18, the C-45 was used by the U.S. army as advanced trainers. It was used to train navigators and bombardiers, and some were used as utility transport. After WWII, many moved to the U.S. Department of Agriculture and were used for aerial spraying. ",
    harpFact:
      "Our plane BuNo 90536 was built in Wichita, KS in 1944, and it flew with the U.S. Navy. In 1973, ownership was transferred to the USDA where it served in various places including Texas with the registration N9659. ",
  },
  {
    id: 10,
    phase: "The Fleet",
    title: 'Sikorsky HH-3F "Pelican"',
    subtitle: "U.S. Coast Guard Search & Rescue Helicopter",
    type: "plane",
    buno: "1434",
    span: "73 ft (Rotors Extended)",
    specs: [
      { label: "Role", value: "SAR Helicopter" },
      { label: "Top Speed", value: "163 knots" },
      { label: "Engines", value: "2× GE T58, 1,500 shp each" },
      { label: "Range", value: "480 miles" },
    ],
    serviceHistory:
      "The HH-3F was the Coast Guard's primary long-range search and rescue helicopter and was produced from 1967 to 1973 by Sikorsky in Stratford, CT. It featured fully retractable tricycle landing gear, a hydraulically operated aft ramp, and a cargo on the right side which was used for rescues. 23,169 lives were saved by Pelicans and over 65,000 others were helped by them.",
    harpFact:
      "The first Pelican delivered to the Coast Guard (BuNo 1430) served at Air Station Brooklyn between April of 1969 and July of 1971.",
  },
  {
    id: 11,
    phase: "The Fleet",
    title: "Lockheed SP-2E Neptune",
    type: "plane",
    buno: "131542",
    span: "103 ft 10 in.",
    specs: [
      { label: "Role", value: "Maritime Patrol / ASW" },
      { label: "Top Speed", value: "364 mph" },
      { label: "Engines", value: "2× Wright R-3350 + 2× J34 jets" },
      { label: "Range", value: "3,685 miles" },
    ],
    serviceHistory:
      "Developed by Lockheed to replace the Lockheed PV-1 Ventura and PV-2 Harpoon submarine trackers during WWII, the Neptune became the primary ASW aircraft of the Navy. Production began in 1946, and it was used by the Navy mainly for anti-submarine warfare (ASW). Initially, it was designed to take off from carriers with JATO rocket boosters, but this wasn't useful as it couldn't land back on the carrier. The earlier variants also had turrets but they quickly became obsolete, causing newer variants to use their space for additional modern equipment. Some models were also nuclear-capable. Beginning with the P2V-5F, they became equipped with both piston and jet engines, one of the first aicraft to do so. The Neptune was eventually replaced by the Lockheed P-3 Orion. ",
    harpFact:
      "One of our volunteers Bob Weiss was a crew member of the Neptune. Our plane BuNo 131542 saw action across the world after being built in 1954. Initially assigned to VP-22 at Barbers Point NAS in 1955, the Neptune served in the US for a while at various stations, including Alameda NAS and Jacksonville NAS. However, it also served at Rota, Spain, Sigonella, Italy, and Guantanomo Bay, Cuba. Initially a P2V-5, it was immediately redesignated as an P2V-5F and later an SP-2E. ",
  },
  {
    id: 12,
    phase: "The Fleet",
    title: "Nike Hercules ",
    type: "plane",
    buno: "N/A",
    span: "41 ft",
    specs: [
      { label: "Type", value: "SAM (Nuclear Capable)" },
      { label: "Top Speed", value: "Mach 4.0" },
      { label: "Range", value: "75 miles" },
      { label: "Ceiling", value: "100,000 ft" },
    ],
    serviceHistory:
      "Created by Bell Laboratories to replace the Nike Ajax in 1958, the Hercules was specially designed to use a nuclear warhead. It was armed with a W31 nuclear warhead, and it was designed to target and eliminate large swarms of Soviet long-range bombers, which could target US cities, such as New York. It could also be used as a surface-surface missile, though it would be much less accurate.",
    harpFact:
      "In 1958, Fort Tilden became one of the first sites in the nation to deploy the Nike Hercules missile. The battery at Fort Tilden remained operational until 1974. ",
  },
  {
    id: 13,
    phase: "The Fleet",
    title: "North American SNJ-4 Texan",
    type: "plane",
    buno: "1306",
    span: "42 ft",
    specs: [
      { label: "Role", value: "Advanced Trainer" },
      { label: "Top Speed", value: "208 mph" },
      { label: "Engine", value: "Wright Whirlwind, 220 hp" },
      { label: "Ceiling", value: "15,700 ft" },
    ],
    serviceHistory:
      "The Navy version of the AT-6 Texan, the SNJ-4 is a single-engine, tandem cockpit monoplane and was used as an advanced trainer for the army, navy, and RAF. Tens of thousands of young men trained to be pilots on these planes. Some countries used SNJs for combat purposes, and a total of 2,400 SNJ-4s were produced. The Texan series was also sold to over 40 countries' armed forces, the most for any training aircraft.  ",
    harpFact:
      "One of our volunteers Artie Khundart, a proud Aviation High School alumnus, saw this plane during a reunion and brought it to H.A.R.P. The guy on the circular logo is actually a Knickerbocker, a symbol of New York State and the once-popular Knickerbocker Beer from the 20th Century.",
  },
  {
    id: 14,
    phase: "The Fleet",
    title: "Grumman S-2E Tracker",
    type: "plane",
    buno: "151664",
    span: "69 ft 8in ft",
    specs: [
      { label: "Role", value: "Carrier-Based ASW" },
      { label: "Top Speed", value: "280 mph" },
      { label: "Engines", value: "2× Wright R-1820, 1,525 hp each" },
      { label: "Range", value: "1,300 miles" },
    ],
    serviceHistory:
      "The S-2 is the Navy's first purpose-built, single airframe anti-submarine warfare aircraft. It was introduced in 1954 to find, follow, and destroy enemy submarines. Its wings could be folded for storage on aircraft carriers, though S-2s were used both on land and sea. S-2s were also capable of carrying nuclear depth charges, and the at the back of the engines, you can find the sonobuoy launch tubes, which would launch sonobuoys, which would listen for submarines. An S-2E could launch 32 sonobouys total.",
    harpFact:
      "Our S-2E BuNo 151664 was delivered to the Navy in 1964. It later served with VS-28 in 1968 and VS-27 from 1969. In 1975, it was withdrawn from use due to fire damage, and it was struck off charge at NAS Willow Grove in Pennsylvania. It then moved to the Intrepid and later the Cradle of Aviation Museum, and it ended up at H.A.R.P. in poor condition, but our volunteers restored it to its beautiful current state! The S-2E would also never feautre the shark teeth, but our volunteers like it, so they included it during the repainting!",
  },
  {
    id: 15,
    phase: "The Fleet",
    title: "N2S Kaydet",
    type: "plane",
    buno: "66778",
    span: "32 ft 2 in.",
    specs: [
      { label: "Role", value: "Primary Trainer" },
      { label: "Top Speed", value: "124 mph" },
      { label: "Engine", value: "Continental R-670, 220 hp" },
      { label: "Built", value: "10,346 aircraft" },
    ],
    serviceHistory:
      'Often called the "Yellow Peril" or the "Stearman" due to its paint job, the N2S (and the PT-17, the Army\'s\ version) was produced by Boeing (formerly Stearman). With over 10,000 built during the 1930s and 1940s, and it became the most produced American biplane. It was America\'\ primary trainer and tens of thousands of pilots were trained on it.',
    harpFact:
      "This plane was also recovered from Aviation High School!",
  },
  {
    id: 16,
    phase: "The Fleet",
    title: "Consolidated PBY-5A Catalina",
    type: "plane",
    buno: "46456 (Brazil - 6509; Civilian - N4582T)",
    span: "104 ft",
    specs: [
      { label: "Role", value: "Patrol Bomber / SAR Amphibian" },
      { label: "Top Speed", value: "196 mph" },
      { label: "Engines", value: "2× P&W R-1830, 1,200 hp each" },
      { label: "Range", value: "2,545 miles" },
    ],
    serviceHistory:
      'The PBY Catalina is the most produced flying boat in history, with roughly 3,300 being built. During WWII, Catalinas were mainly in the Pacific and were used in antisubmarine warfare, patrol bombing, convoy escorts, search-and-rescue missions, and cargo missions. Some Catalinas were called "Black Cats" because they were painted black for night operations against Japanese submarines. A Catalina also scored the U.S. Navy\'s\ first air-to-air kill of a Japanese airplane during WWII on December 10, 1941. Some Catalinas were sent to Brazil as a part of Lend-Lease. ',
    harpFact:
      "This specific Catalina served with the Brazilians from 1944, and it was used for humanitarian missions in the Amazon up until the 1980s where it returned to the US. ",
  },
  {
    id: 17,
    phase: "The Fleet",
    title: "Winnie Mae Replica",
    subtitle: "Lockheed Vega 5C — Full-Scale Replica",
    type: "plane",
    buno: "N/A",
    span: "41 ft",
    specs: [
      { label: "Type", value: "Full-Scale Display Replica" },
      { label: "Top Speed", value: "340 (With Jet Stream)" },
      { label: "Engine", value: "P&W Wasp, 450 hp" },
      { label: "Record", value: "7 days, 18 hrs, 49 min" },
    ],
    serviceHistory:
      "After already completing a trip around the world in 8 days with Harold Gatty as his navigator in 1931, Wiley Post set out to be the first to fly around the world solo. He took off from Floyd Bennett Field on July 15, 1933, and in 7 days, 18 hours, and 49 minutes, he flew around the world. His plane had an accident during a landing in Flat, Alaska after Post got disoriented. However, it was repaired quickly, and he finished his journey. With this journey, in which he visited many places, including Berlin and Fairbanks, he proved the Jet Stream's existence by achieving a top speed almost double the Lockheed Vega's normal top speed. The plane is named the Winnie Mae after the daughter of Florence C. Hall, who purchased the plane before selling it to Post, his private pilot. The actual Winnie Mae is currently displayed at the National Air and Space Museum in Virginia.",
    harpFact:
      "It took 10 H.A.R.P. volunteers 4 years to build this full-scale replica, which looks nearly identical to the one displayed in Virginia!",
  },
  {
    id: 18,
    phase: "The Fleet",
    title: 'Fairchild PT-26 "Cornell"',
    type: "plane",
    buno: "43-36275",
    span: "35 ft 11 in.",
    specs: [
      { label: "Role", value: "Primary Trainer" },
      { label: "Top Speed", value: "129 mph" },
      { label: "Engine", value: "Ranger L-440, 175 hp" },
      { label: "Range", value: "460 miles" },
    ],
    serviceHistory:
      "The PT-26 Cornell was the primary trainer for the Royal Canadian Air Force as a part of the British Commonwealth Air Training Plan (BCATP). The US also flew them, though the PT-26 version was intended for Canada, while other variants like the PT-19 were used by the US as a primary trainer. It is the canopied version of the PT-19, allowing it to be better suited for the Canadian climate. Thousands of allies pilots trained on the PT-26 and other variants  before seeing combat in Europe and Asia. ",
    harpFact:
      "Our plane 43-36275 was accepted by the U.S. Army Air Force on August 31, 1943, and was issued to the No. 24 Elementary Flying Training School at Abbotsford, BC on September 3, 1943. It was a part of Lend-Lease, and after Abbotsford it went to some other parts of Canada before being struck off strength on May 16th, 1947.",
  },
  {
    id: 19,
    phase: "The Workshop",
    title: "The Models",
    type: "models",
    content:
      "If you look up, you will see two models: a Yokosuka MXY-7 Ohka and the V-1 flying bomb. \n\n\ The Yokosuka MXY-7 Ohka is a Japanese, rocket-powered, human-guided kamikaze attack airplane developed at the end of WWII in 1944. 852 of these were built, and it featured plywood wings and an aluminum fuselage. This kamikaze aircraft only had a range of 23 miles, though other kamikaze aircraft could fly for longer. However, the Yokosuka MXY-7 Ohka was extremely fast. \n\n\ The V-1 flying bomb was developed at Peenemünde Army Research Center in 1942. It was an early cruise missile, though it was widely inaccurate. It was usually launched from the ground along the French and Dutch coast or by modified Heinkel He 111 aircraft. Though extremely advanced for the time, they were extremely inaccurate. The first launches on London occured on June 13, 1944, and 9,521 were fired in total before the last launch site in the Low Countries was overrun on March 29, 1945. These rockets weren't used on the Eastern Front as much, and it was mainly used for a terror campaign on British civilians.  ",
  },
  {
    id: 20,
    phase: "Debrief",
    title: "Thank You for Visiting",
    subtitle: "From the H.A.R.P. Angels",
    type: "thankyou",
    content:
      "You've completed the Hangar B self-guided tour. On behalf of the H.A.R.P. volunteers, thank you for visiting.\n\nEvery aircraft you saw today is in its present condition because dedicated volunteers show up every week giving their time restoring these planes. However, there is still a lot of work to be done to restore these planes.\n\n We look forward to your next visit! While you're here, find a volunteer and ask them any questions you have. They are happy to answer! Also checkout the rest of Floyd Bennett Field like the historic Ryan Visitor Center!",
  },
];
