export type PlaneImage = { src: string; caption: string };

export const planeImages: Record<number, string | PlaneImage[]> = {
  3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/North_American_AT-6_Texan_USAF.jpg/1200px-North_American_AT-6_Texan_USAF.jpg",
  4: [
    {
      src: "/albatross-1.jpg",
      caption: "The Albatross (BuNo 7216) as she sits today in Hangar B. Restored in Coast Guard rescue colors, she's one of the finest examples of an HU-16 anywhere — that boat hull beneath the fuselage let her land on open ocean in seas up to 6 feet.",
    },
    {
      src: "/albatross-2.png",
      caption: "BuNo 7216 on the ramp in her working days, based out of Miami, FL with the U.S. Coast Guard. The engines are running — she may be minutes from a search-and-rescue mission over the Atlantic.",
    },
  ],
  5: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Douglas_C-47_Skytrain.jpg/1200px-Douglas_C-47_Skytrain.jpg",
      caption: "A Douglas C-47 Skytrain in US Army Air Forces markings. Eisenhower called it one of the weapons that won the war — C-47s carried the 101st Airborne over Normandy on D-Day.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/C-47s_over_Normandy.jpg/1200px-C-47s_over_Normandy.jpg",
      caption: "C-47s stream over Normandy on June 6, 1944. Black-and-white invasion stripes were painted overnight in the days before D-Day so Allied gunners could distinguish friendly aircraft in the chaos of the invasion.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Douglas_C-47_Skytrain_cockpit_1.jpg/1200px-Douglas_C-47_Skytrain_cockpit_1.jpg",
      caption: "The C-47 flight deck — a remarkably complex instrument layout for 1941. Pilots who flew the Hump route over the Himalayas did so in cockpits exactly like this, in conditions that defied belief.",
    },
  ],
  6: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Douglas_A-4B_Skyhawk_in_flight_c1960.jpg/1200px-Douglas_A-4B_Skyhawk_in_flight_c1960.jpg",
      caption: "An A-4B Skyhawk in flight, circa 1960. The Skyhawk's delta wing was so compact that it needed no wing-fold mechanism for carrier storage — a major engineering achievement at the time.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/A-4F_Skyhawks_Blue_Angels_in_flight_1974.jpg/1200px-A-4F_Skyhawks_Blue_Angels_in_flight_1974.jpg",
      caption: "A-4F Skyhawks of the Blue Angels flight demonstration team, 1974. The Skyhawk flew with the Blue Angels from 1974 to 1986 — its agility and predictability made it ideal for formation aerobatics.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/A-4E_Skyhawk_VA-163_on_USS_Oriskany_%28CVA-34%29_1967.jpg/1200px-A-4E_Skyhawk_VA-163_on_USS_Oriskany_%28CVA-34%29_1967.jpg",
      caption: "An A-4E of VA-163 on the deck of USS Oriskany, 1967. Skyhawks flew extensive combat missions over North Vietnam — their small size made them hard to spot from the ground.",
    },
  ],
  7: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Grumman_G-21_Goose_N1306H.jpg/1200px-Grumman_G-21_Goose_N1306H.jpg",
  8: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Nike_Ajax_missiles_1954.jpg/1200px-Nike_Ajax_missiles_1954.jpg",
  9: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Beechcraft_C-45_Expeditor_YF-EAA.jpg/1200px-Beechcraft_C-45_Expeditor_YF-EAA.jpg",
  10: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/USCG_HH-3F_Pelican_1984.jpg/1200px-USCG_HH-3F_Pelican_1984.jpg",
  11: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lockheed_P-2H_Neptune_NAS_Patuxent_1962.jpg/1200px-Lockheed_P-2H_Neptune_NAS_Patuxent_1962.jpg",
      caption: "P-2H Neptune at NAS Patuxent River, 1962. This is the same variant that patrolled the waters off Floyd Bennett Field — hunting Soviet submarines lurking along the Eastern Seaboard during the Cold War.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lockheed_SP-2H_Neptune%2C_USA_-_Navy_AN0218931.jpg/1200px-Lockheed_SP-2H_Neptune%2C_USA_-_Navy_AN0218931.jpg",
      caption: "An SP-2H Neptune on patrol. Neptune crews dropped sonobuoys and towed magnetic anomaly detectors across thousands of square miles of ocean — often flying 12-hour missions without seeing another aircraft.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lockheed_P2V-7_Neptune_of_VP-1_in_flight_c1960.jpg/1200px-Lockheed_P2V-7_Neptune_of_VP-1_in_flight_c1960.jpg",
      caption: "A P2V-7 Neptune of VP-1 in flight, circa 1960. Note the two auxiliary jet pods under the wings — they could be ignited for a burst of speed during an attack run, an unusual hybrid propulsion system that H.A.R.P. volunteers found fascinating.",
    },
  ],
  12: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nike_Hercules_2007.jpg/1200px-Nike_Hercules_2007.jpg",
  13: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/North_American_SNJ-5_Texan.jpg/1200px-North_American_SNJ-5_Texan.jpg",
  14: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/S-2_Tracker.jpg/1200px-S-2_Tracker.jpg",
  15: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Boeing_Stearman_E75_1.jpg/1200px-Boeing_Stearman_E75_1.jpg",
  16: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Consolidated_PBY-5A_Catalina_%28N9521C%29.jpg/1200px-Consolidated_PBY-5A_Catalina_%28N9521C%29.jpg",
  17: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Wiley_Post_Winnie_Mae.jpg/1200px-Wiley_Post_Winnie_Mae.jpg",
  18: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fairchild_PT-26_Cornell.jpg/1200px-Fairchild_PT-26_Cornell.jpg",
};
