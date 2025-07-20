// Use Vite's import.meta.glob to dynamically import all flashcard images

export const trainingModules = [
  {
    id: "traumatic-injuries",
    title: "Blast Injuries",
    description:
      "Comprehensive guidance on managing blast injuries, shrapnel wounds, internal bleeding, limb amputations, fractures, and crush injuries.",
    icon: "💥",
    color: "red",
    duration: "60 min",
    videos: [
      {
        id: "blast-1",
        title: "How to treat blast injuries",
        videoUrl: "https://www.youtube.com/embed/7p9JYXGSoQg",
      },
      {
        id: "blast-2",
        title: "How to make a sling",
        videoUrl: "https://www.youtube.com/embed/PwfBGkBXkFA",
      },
      {
        id: "blast-3",
        title: "How to treat a fracture",
        videoUrl: "https://www.youtube.com/embed/2v8vlXgGXwE",
      },
    ],
    flashcards: [
      {
        id: "shrapnel-wounds",
        title: "Shrapnel Wounds",
        description:
          "Step-by-step first aid for shrapnel and fragment injuries",
        icon: "🔸",
        steps: [
          {
            step: 1,
            title: "Assess and Control Bleeding",
            content:
              "Apply direct pressure with clean cloth or sterile gauze. Do NOT remove visible shrapnel or debris.",
            warning:
              "Never remove embedded objects - they may be plugging blood vessels",
            image: "direct-pressure",
          },
          {
            step: 2,
            title: "Stabilize Embedded Objects",
            content:
              "Build up bulky dressings around embedded shrapnel. Tape dressings in place without moving the object.",
            tip: "Use rolled bandages or cloth to create a protective barrier around the object",
            image: "stabilize-object",
          },
          {
            step: 3,
            title: "Treat for Shock",
            content:
              "Keep patient warm, elevate legs if no spinal injury suspected. Monitor breathing and pulse.",
            warning:
              "Watch for signs of shock: rapid pulse, pale skin, weakness",
            image: "treat-shock",
          },
          {
            step: 4,
            title: "Prepare for Transport",
            content:
              "Immobilize the injured area. Document location and size of wounds. Call for immediate evacuation.",
            tip: "Take photos if possible for medical team preparation",
            image: "prepare-transport",
          },
        ],
      },
      {
        id: "internal-bleeding",
        title: "Internal Bleeding",
        description:
          "Recognizing and managing internal bleeding from blast injuries",
        icon: "🩸",
        steps: [
          {
            step: 1,
            title: "Recognize the Signs",
            content:
              "Look for: rigid/distended abdomen, rapid weak pulse, pale/clammy skin, dizziness, thirst.",
            warning:
              "Internal bleeding can be life-threatening even without external wounds",
            image: "internal-bleeding-signs",
          },
          {
            step: 2,
            title: "Position Patient Properly",
            content:
              "Keep patient lying flat. If conscious and no spinal injury, elevate legs 8-12 inches.",
            tip: "Do NOT give food or water - patient may need emergency surgery",
            image: "position-patient",
          },
          {
            step: 3,
            title: "Monitor Vital Signs",
            content:
              "Check pulse and breathing every 5 minutes. Watch for worsening shock symptoms.",
            warning: "Rapid deterioration requires immediate evacuation",
            image: "monitor-vitals",
          },
          {
            step: 4,
            title: "Prepare for Evacuation",
            content:
              "Keep patient warm with blankets. Record all observations and vital signs. Call for urgent medical transport.",
            tip: "Document time of injury and progression of symptoms",
            image: "evacuation-prep",
          },
        ],
      },
      {
        id: "limb-amputations",
        title: "Limb Amputations",
        description:
          "Emergency care for traumatic limb loss from blast injuries",
        icon: "🦴",
        steps: [
          {
            step: 1,
            title: "Stop Massive Bleeding",
            content:
              "Apply tourniquet 2-3 inches above amputation site. Tighten until bleeding stops completely.",
            warning:
              "Note the time tourniquet was applied - critical for medical team",
            image: "tourniquet-application",
          },
          {
            step: 2,
            title: "Treat the Amputation Site",
            content:
              "Cover stump with sterile dressing. Apply pressure bandage over dressing. Do NOT use direct pressure on bone.",
            tip: "If tourniquet fails, apply direct pressure above the wound",
            image: "amputation-dressing",
          },
          {
            step: 3,
            title: "Preserve the Amputated Part",
            content:
              "Wrap in clean, moist cloth. Place in plastic bag. Put bag on ice - do NOT let part touch ice directly.",
            warning: "Do NOT use dry ice or put part directly in water",
            image: "preserve-limb",
          },
          {
            step: 4,
            title: "Treat for Severe Shock",
            content:
              "Keep patient warm, elevate legs, monitor breathing. Give reassurance. Arrange immediate evacuation.",
            tip: "Psychological support is crucial - patient may be conscious and aware",
            image: "shock-treatment",
          },
        ],
      },
      {
        id: "fractures-crush-injuries",
        title: "Fractures & Crush Injuries",
        description:
          "Managing bone fractures and crush injuries from blast trauma",
        icon: "🦴",
        steps: [
          {
            step: 1,
            title: "Check Circulation, Sensation, Movement",
            content:
              "Check pulse below injury. Test sensation with light touch. Ask patient to move fingers/toes if possible.",
            warning:
              "Loss of pulse, sensation, or movement indicates serious injury",
            image: "csi-check",
          },
          {
            step: 2,
            title: "Immobilize the Fracture",
            content:
              "Splint above and below the fracture. Use rigid materials (boards, magazines). Pad splint for comfort.",
            tip: "Splint in position found - do not try to straighten deformed limbs",
            image: "splinting",
          },
          {
            step: 3,
            title: "Prevent Crush Syndrome",
            content:
              "If limb was crushed >15 minutes, do NOT elevate. Monitor for kidney problems. Prepare for rapid transport.",
            warning:
              "Crush syndrome can cause kidney failure hours after injury",
            image: "crush-syndrome",
          },
          {
            step: 4,
            title: "Monitor and Transport",
            content:
              "Recheck circulation every 15 minutes. Loosen splint if swelling occurs. Arrange medical evacuation.",
            tip: "Mark time of injury and splint application on patient or splint",
            image: "monitor-fracture",
          },
        ],
      },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question:
            "What should you NEVER do when treating a victim with embedded shrapnel?",
          options: [
            "Apply direct pressure around the object",
            "Remove the embedded object",
            "Stabilize the object with bulky dressings",
            "Call for medical evacuation",
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question:
            "When applying a tourniquet for blast-related amputation, how far above the wound should it be placed?",
          options: [
            "1 inch above the wound",
            "2-3 inches above the wound",
            "6 inches above the wound",
            "As close to the wound as possible",
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          question:
            "Which is a key sign of internal bleeding from blast injuries?",
          options: [
            "External visible wounds only",
            "Rigid or distended abdomen",
            "Normal pulse rate",
            "Pink, warm skin",
          ],
          correctAnswer: 1,
        },
        {
          id: 4,
          question: "What is the biggest risk of crush syndrome?",
          options: [
            "External bleeding",
            "Broken bones",
            "Kidney failure",
            "Skin infections",
          ],
          correctAnswer: 2,
        },
        {
          id: 5,
          question: "How should an amputated limb be preserved?",
          options: [
            "Place directly on ice",
            "Wrap in clean, moist cloth and place in plastic bag on ice",
            "Keep at room temperature",
            "Submerge in cold water",
          ],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: "burns-management",
    title: "Explosion & Chemical Burns",
    description:
      "Comprehensive protocols for blast burns, white phosphorus exposure, first to third-degree burns, and infection prevention in crisis zones.",
    icon: "🔥",
    color: "orange",
    duration: "55 min",
    videos: [
      {
        id: "burns-1",
        title: "How to treat burns and scalds",
        videoUrl: "https://www.youtube.com/embed/TLr2qsEhpC8",
      },
    ],
    flashcards: [
      {
        id: "first-second-degree-burns",
        title: "First & Second-Degree Burns",
        description:
          "Treatment protocols for superficial and partial-thickness burns from explosions",
        icon: "🔥",
        steps: [
          {
            step: 1,
            title: "Cool the Burn Immediately",
            content:
              "Run cool (not cold) water over the burn for 10-20 minutes. Remove from heat source and any non-stuck clothing.",
            warning:
              "Do NOT use ice water or ice - this can cause further tissue damage",
            image: "cool-burn",
          },
          {
            step: 2,
            title: "Assess Burn Severity",
            content:
              "First-degree: red, painful, no blisters. Second-degree: red, painful, with blisters. Check body surface area affected.",
            tip: "Use patient's palm = 1% of body surface area for quick assessment",
            image: "assess-burn",
          },
          {
            step: 3,
            title: "Clean and Protect",
            content:
              "Gently clean with sterile saline if available. Apply sterile, non-adherent dressing. Do NOT break blisters.",
            warning: "Avoid cotton or fluffy materials that can stick to burn",
            image: "dress-burn",
          },
          {
            step: 4,
            title: "Pain Management and Monitoring",
            content:
              "Give pain relief if available. Monitor for signs of infection: increased pain, fever, pus, red streaking.",
            tip: "Elevate burned limbs to reduce swelling",
            image: "monitor-burn",
          },
        ],
      },
      {
        id: "third-degree-burns",
        title: "Third-Degree Burns",
        description:
          "Critical care for full-thickness burns from explosions and severe heat exposure",
        icon: "🚨",
        steps: [
          {
            step: 1,
            title: "Recognize Third-Degree Burns",
            content:
              "Waxy white, leathery, or charred appearance. May be painless due to nerve damage. All skin layers destroyed.",
            warning:
              "Third-degree burns always require immediate medical evacuation",
            image: "third-degree-burns-1",
          },
          {
            step: 2,
            title: "Do NOT Cool Large Burns",
            content:
              "For burns >20% body surface, do NOT use water cooling - risk of hypothermia. Remove from heat source only.",
            warning:
              "Large burns can cause life-threatening heat and fluid loss",
            image: "third-degree-burns-2",
          },
          {
            step: 3,
            title: "Cover and Protect",
            content:
              "Cover with clean, dry cloth or sterile sheets. Do NOT remove stuck clothing. Wrap each burned finger/toe separately.",
            tip: "Use plastic wrap for temporary protection if sterile dressings unavailable",
            image: "third-degree-burns-3",
          },
          {
            step: 4,
            title: "Treat for Shock",
            content:
              "Monitor airway, breathing, circulation. Give fluids if conscious and no vomiting. Arrange immediate evacuation.",
            warning:
              "Watch for airway burns - look for singed facial hair, soot in mouth/nose",
            image: "third-degree-burns-4",
          },
        ],
      },
      {
        id: "white-phosphorus-burns",
        title: "White Phosphorus Exposure",
        description: "Emergency response to white phosphorus chemical burns",
        icon: "☣️",
        steps: [
          {
            step: 1,
            title: "Immediate Decontamination",
            content:
              "Flush with large amounts of water for 15-20 minutes. Remove all contaminated clothing while flushing.",
            warning:
              "White phosphorus ignites on contact with air - keep wet at all times",
            image: "white-phosphorus-1",
          },
          {
            step: 2,
            title: "Remove Visible Particles",
            content:
              "Use forceps or tweezers to remove visible white phosphorus particles while keeping area wet. Work under water if possible.",
            warning: "Do NOT use fingers - phosphorus will burn your hands",
            image: "white-phosphorus-2",
          },
          {
            step: 3,
            title: "Cover with Wet Dressings",
            content:
              "Apply wet, sterile dressings. Keep dressings moist - dry air will cause phosphorus to re-ignite.",
            tip: "If no sterile dressings available, use clean wet cloth",
            image: "white-phosphorus-3",
          },
          {
            step: 4,
            title: "Continuous Monitoring",
            content:
              "Monitor for re-ignition - look for smoke or renewed burning. Keep all affected areas wet until medical evacuation.",
            warning:
              "Phosphorus can continue burning for hours if allowed to dry",
            image: "white-phosphorus-4",
          },
        ],
      },
      {
        id: "infection-prevention",
        title: "Burn Infection Prevention",
        description:
          "Preventing deadly infections in burn wounds when medical supplies are limited",
        icon: "🦠",
        steps: [
          {
            step: 1,
            title: "Hand Hygiene First",
            content:
              "Wash hands thoroughly with soap and water or use hand sanitizer before any burn care. Wear gloves if available.",
            warning: "Dirty hands are the #1 source of burn wound infections",
            image: "infection-prevention-1",
          },
          {
            step: 2,
            title: "Clean the Wound",
            content:
              "Rinse gently with clean water or sterile saline. Remove loose debris with sterile tweezers. Do NOT scrub.",
            tip: "Boiled and cooled water can substitute for sterile saline if needed",
            image: "infection-prevention-2",
          },
          {
            step: 3,
            title: "Apply Clean Dressings",
            content:
              "Use sterile dressings if available, or clean cloth. Change dressings daily or when soiled. Keep wound moist but not wet.",
            warning: "Dry wounds heal slower and are more prone to infection",
            image: "infection-prevention-3",
          },
          {
            step: 4,
            title: "Monitor for Infection Signs",
            content:
              "Watch for: increased pain, fever, pus, bad smell, red streaking, green/yellow drainage. Seek medical help immediately.",
            tip: "Take photos to document progression if medical help is delayed",
            image: "infection-prevention-4",
          },
        ],
      },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "What should you NEVER use to cool a burn?",
          options: [
            "Cool running water",
            "Ice or ice water",
            "Room temperature water",
            "Sterile saline",
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question:
            "How can you quickly estimate burn percentage on a patient?",
          options: [
            "Count the blisters",
            "Use the patient's palm = 1% body surface area",
            "Measure with a ruler",
            "Guess based on appearance",
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          question:
            "What is the most critical action for white phosphorus burns?",
          options: [
            "Apply dry dressings",
            "Remove particles with bare hands",
            "Keep the affected area constantly wet",
            "Apply ice immediately",
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          question: "Which describes a third-degree burn?",
          options: [
            "Red and painful with blisters",
            "Waxy white, leathery, or charred - may be painless",
            "Red and painful without blisters",
            "Always very painful",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          question: "What is the #1 cause of burn wound infections?",
          options: [
            "Dirty bandages",
            "Poor wound cleaning",
            "Dirty hands during treatment",
            "Not using antibiotics",
          ],
          correctAnswer: 2,
        },
        {
          id: 6,
          question:
            "For large burns (>20% body surface), what should you avoid?",
          options: [
            "Calling for help",
            "Removing from heat source",
            "Cooling with water (hypothermia risk)",
            "Monitoring vital signs",
          ],
          correctAnswer: 2,
        },
        {
          id: 7,
          question: "Which is a sign of burn wound infection?",
          options: [
            "Initial pain and redness",
            "Clear fluid drainage",
            "Green/yellow pus and bad smell",
            "Normal healing pain",
          ],
          correctAnswer: 2,
        },
      ],
    },
  },
  {
    id: "head-spinal-trauma",
    title: "Head & Spinal Injuries",
    description:
      "Comprehensive training on traumatic brain injury (TBI), skull fractures, and spinal cord trauma with paralysis management.",
    icon: "🧠",
    color: "purple",
    duration: "50 min",
    videos: [
      {
        id: "tbi-1",
        title: "Head injury symptoms and advice",
        videoUrl: "https://www.youtube.com/embed/a4cIFZx1f2E",
      },
      {
        id: "tbi-2",
        title: "What to do if someone has a spinal cord injury",
        videoUrl: "https://www.youtube.com/embed/Uqy2IUhYkVA",
      },
    ],
    flashcards: [
      {
        id: "traumatic-brain-injury",
        title: "Traumatic Brain Injury (TBI)",
        description:
          "Assessment and management of brain injuries from blasts, impacts, and penetrating trauma",
        icon: "🧠",
        steps: [
          {
            step: 1,
            title: "Assess Consciousness Level",
            content:
              "Check responsiveness: Alert, Voice, Pain, Unresponsive (AVPU). Note any confusion, disorientation, or memory loss.",
            warning:
              "Unconsciousness or declining consciousness indicates severe TBI requiring immediate evacuation",
            image: "traumatic-brain-injury-1",
          },
          {
            step: 2,
            title: "Check for Danger Signs",
            content:
              "Look for: unequal pupils, severe headache, repeated vomiting, seizures, clear fluid from ears/nose, weakness on one side.",
            warning:
              "Any of these signs indicate serious brain injury - call for immediate medical evacuation",
            image: "traumatic-brain-injury-2",
          },
          {
            step: 3,
            title: "Positioning and Airway",
            content:
              "If conscious: sit upright or head elevated 30°. If unconscious: recovery position (if no spinal injury suspected). Monitor airway.",
            tip: "Elevating the head can help reduce brain pressure if no spinal injury",
            image: "traumatic-brain-injury-3",
          },
          {
            step: 4,
            title: "Monitor and Document",
            content:
              "Check consciousness every 15 minutes. Document changes in behavior, speech, movement. Keep patient calm and still.",
            warning:
              "Any deterioration requires immediate medical attention - brain injuries can worsen rapidly",
            image: "traumatic-brain-injury-4",
          },
        ],
      },
      {
        id: "skull-fractures",
        title: "Skull Fractures",
        description:
          "Recognition and management of skull fractures and potential brain bleeding",
        icon: "💀",
        steps: [
          {
            step: 1,
            title: "Recognize Skull Fracture Signs",
            content:
              "Look for: visible skull deformity, blood from ears/nose, bruising around eyes (raccoon eyes), bruising behind ears.",
            warning:
              "Skull fractures often indicate underlying brain injury requiring immediate medical care",
            image: "skull-fractures-1",
          },
          {
            step: 2,
            title: "Control External Bleeding",
            content:
              "Apply gentle pressure around (not on) the fracture site. Use bulky dressings to absorb blood. Do NOT push bone fragments.",
            warning:
              "Never apply direct pressure to a depressed skull fracture - can push fragments into brain",
            image: "skull-fractures-2",
          },
          {
            step: 3,
            title: "Monitor for Brain Bleeding",
            content:
              "Watch for: worsening headache, vomiting, confusion, weakness, seizures, unconsciousness. These indicate brain bleeding.",
            warning:
              "Brain bleeding is life-threatening and requires immediate surgical intervention",
            image: "skull-fractures-3",
          },
          {
            step: 4,
            title: "Immobilize and Transport",
            content:
              "Keep head and neck still. Use cervical collar if available. Transport urgently to medical facility with neurosurgical capability.",
            tip: "Assume spinal injury with any skull fracture until proven otherwise",
            image: "skull-fractures-4",
          },
        ],
      },
      {
        id: "spinal-cord-trauma",
        title: "Spinal Cord Trauma & Paralysis",
        description:
          "Assessment and immobilization of spinal injuries to prevent permanent paralysis",
        icon: "🦴",
        steps: [
          {
            step: 1,
            title: "Suspect Spinal Injury",
            content:
              "High-risk mechanisms: falls >3 feet, high-speed impacts, head/neck trauma, unconscious patients, numbness/tingling in limbs.",
            warning:
              "When in doubt, treat as spinal injury - movement can cause permanent paralysis",
            image: "spinal-cord-trauma-1",
          },
          {
            step: 2,
            title: "Test Sensation and Movement",
            content:
              "Ask patient to wiggle fingers/toes. Test light touch on hands and feet. Check for numbness, tingling, or weakness.",
            warning:
              "Loss of sensation or movement indicates spinal cord damage - immobilize immediately",
            image: "spinal-cord-trauma-2",
          },
          {
            step: 3,
            title: "Immobilize the Spine",
            content:
              "Hold head/neck in neutral position. Use cervical collar if available. Log-roll patient as one unit if must move. Keep spine straight.",
            tip: "Use towels, blankets, or boards to maintain spinal alignment during transport",
            image: "spinal-cord-trauma-3",
          },
          {
            step: 4,
            title: "Manage Complications",
            content:
              "Monitor breathing (spinal injuries can affect breathing muscles). Watch for spinal shock: low blood pressure, slow pulse.",
            warning:
              "High spinal injuries can cause breathing failure - be prepared to assist ventilation",
            image: "spinal-cord-trauma-4",
          },
        ],
      },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question:
            "Which assessment method should you use to check consciousness level in a TBI patient?",
          options: [
            "Glasgow Coma Scale only",
            "AVPU (Alert, Voice, Pain, Unresponsive)",
            "Pupil response only",
            "Blood pressure measurement",
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question: "What is a critical danger sign of severe brain injury?",
          options: [
            "Mild headache",
            "Slight dizziness",
            "Unequal pupils and repeated vomiting",
            "Normal speech",
          ],
          correctAnswer: 2,
        },
        {
          id: 3,
          question: "How should you control bleeding from a skull fracture?",
          options: [
            "Apply direct pressure on the fracture site",
            "Apply gentle pressure around (not on) the fracture",
            "Push bone fragments back into place",
            "Use ice directly on the wound",
          ],
          correctAnswer: 1,
        },
        {
          id: 4,
          question:
            "Which mechanism of injury should make you suspect spinal injury?",
          options: [
            "Minor cuts and scrapes",
            "Falls greater than 3 feet or high-speed impacts",
            "Superficial burns",
            "Mild bruising",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          question: "What indicates possible spinal cord damage?",
          options: [
            "Normal movement in all limbs",
            "Loss of sensation or inability to move fingers/toes",
            "Normal reflexes",
            "No numbness or tingling",
          ],
          correctAnswer: 1,
        },
        {
          id: 6,
          question:
            "How should you move a patient with suspected spinal injury?",
          options: [
            "Move quickly to avoid further injury",
            "Log-roll as one unit keeping spine straight",
            "Bend and twist the spine as needed",
            "Move head and body separately",
          ],
          correctAnswer: 1,
        },
        {
          id: 7,
          question: "What position is best for a conscious TBI patient?",
          options: [
            "Flat on back",
            "Face down",
            "Head elevated 30° (if no spinal injury)",
            "Any comfortable position",
          ],
          correctAnswer: 2,
        },
        {
          id: 8,
          question:
            "Clear fluid draining from the ears or nose after head trauma indicates:",
          options: [
            "Normal response to injury",
            "Possible skull fracture with brain fluid leak",
            "Simple nosebleed",
            "Dehydration",
          ],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: "severe-bleeding",
    title: "Severe Bleeding",
    description:
      "Life-threatening blood loss from bomb fragments and building collapses requiring urgent transfusion and advanced hemorrhage control.",
    icon: "🩸",
    color: "red",
    duration: "45 min",
    videos: [
      {
        id: "bleeding-1",
        title: "How to treat severe bleeding",
        videoUrl: "https://www.youtube.com/embed/NxO5LvgqZe0",
      },
    ],
    flashcards: [
      {
        id: "massive-hemorrhage-control",
        title: "Massive Hemorrhage Control",
        description:
          "Immediate life-saving interventions for catastrophic bleeding from fragments and debris",
        icon: "🩸",
        steps: [
          {
            step: 1,
            title: "Identify Life-Threatening Bleeding",
            content:
              "Look for: spurting blood, rapidly expanding pools of blood, clothing soaked with blood, weak/absent pulse.",
            warning:
              "Massive hemorrhage can cause death within 5-10 minutes - act immediately",
          },
          {
            step: 2,
            title: "Apply Direct Pressure",
            content:
              "Use both hands to apply firm, continuous pressure directly on the wound. Use gauze, clothing, or bare hands if necessary.",
            tip: "Don't lift pressure to check bleeding - maintain constant pressure for 10+ minutes",
            image: "massive-hemorrhage-control-2",
          },
          {
            step: 3,
            title: "Elevate if Possible",
            content:
              "Raise the bleeding extremity above heart level while maintaining pressure. Do NOT elevate if fracture suspected.",
            warning:
              "Never elevate potential spinal injuries or suspected fractures",
            image: "massive-hemorrhage-control-3",
          },
          {
            step: 4,
            title: "Prepare for Shock Treatment",
            content:
              "Monitor pulse, breathing, consciousness. Keep patient warm. Prepare for immediate evacuation to trauma center.",
            warning:
              "Massive blood loss leads to irreversible shock - evacuation time is critical",
            image: "massive-hemorrhage-control-4",
          },
        ],
      },
      {
        id: "tourniquet-application",
        title: "Tourniquet Application",
        description:
          "Life-saving tourniquet techniques for extremity arterial bleeding",
        icon: "🔴",
        steps: [
          {
            step: 1,
            title: "Identify Need for Tourniquet",
            content:
              "Use when: direct pressure fails, multiple casualties (triage), amputation, arterial bleeding that won't stop.",
            warning:
              "Tourniquets should be applied high and tight - failure to stop bleeding can be fatal",
            image: "tourniquet-application-1",
          },
          {
            step: 2,
            title: "Position Tourniquet Correctly",
            content:
              "Place 2-3 inches above wound, higher on thigh/upper arm. Remove clothing first. Place over single bone, not joint.",
            tip: "If first tourniquet doesn't stop bleeding, apply a second one above the first",
            image: "tourniquet-application",
          },
          {
            step: 3,
            title: "Tighten Until Bleeding Stops",
            content:
              "Tighten windlass (stick) until bleeding completely stops. Secure windlass with clip or tape. Do not loosen.",
            warning:
              "Must be tight enough to stop arterial flow - will be very painful but necessary",
            image: "tourniquet-application-3",
          },
          {
            step: 4,
            title: "Mark Time and Monitor",
            content:
              "Write time of application on patient's forehead. Monitor for continued bleeding. Arrange immediate transport.",
            warning:
              "Note exact time applied - critical information for medical team",
            image: "tourniquet-application-4",
          },
        ],
      },
      {
        id: "internal-hemorrhage",
        title: "Internal Hemorrhage Recognition",
        description:
          "Detecting and managing internal bleeding from building collapse and bomb fragments",
        icon: "🫀",
        steps: [
          {
            step: 1,
            title: "Recognize Internal Bleeding Signs",
            content:
              "Look for: rapid weak pulse, pale/clammy skin, dizziness, thirst, anxiety, abdominal rigidity, distension.",
            warning:
              "Internal bleeding can be massive without external signs - monitor vital signs closely",
            image: "internal-hemorrhage-1",
          },
          {
            step: 2,
            title: "Monitor Vital Signs",
            content:
              "Check pulse, breathing, consciousness every 5 minutes. Watch for rapid deterioration. Keep patient calm.",
            warning:
              "Rapid pulse >120 with weak pulse indicates severe blood loss requiring immediate surgery",
            image: "internal-hemorrhage-2",
          },
          {
            step: 3,
            title: "Urgent Medical Evacuation",
            content:
              "Call for immediate transport to trauma center with blood bank. Document all findings and vital sign changes.",
            warning:
              "Internal bleeding often requires emergency surgery and blood transfusion",
            image: "evacuation-prep",
          },
        ],
      },
      {
        id: "hemorrhagic-shock",
        title: "Hemorrhagic Shock Management",
        description:
          "Pre-hospital care for shock from massive blood loss requiring transfusion",
        icon: "💔",
        steps: [
          {
            step: 1,
            title: "Classify Shock Severity",
            content:
              "Class I: <15% blood loss, normal vitals. Class II: 15-30%, fast pulse. Class III: 30-40%, very fast weak pulse. Class IV: >40%, critical.",
            warning:
              "Class III and IV shock require immediate blood transfusion to survive",
            image: "hemorrhagic-shock-1",
          },
          {
            step: 2,
            title: "Control All Bleeding Sources",
            content:
              "Stop all visible bleeding with pressure, tourniquets, hemostatic agents. Look for hidden bleeding sites.",
            tip: "Control bleeding first - IV fluids cannot replace lost blood",
            image: "hemorrhagic-shock-2",
          },
          {
            step: 3,
            title: "Prevent Further Heat Loss",
            content:
              "Wrap in blankets, remove wet clothing, cover head. Hypothermia worsens bleeding and shock.",
            warning:
              "Cold patients cannot clot blood effectively - keeping warm is life-saving",
            image: "hemorrhagic-shock-3",
          },
          {
            step: 4,
            title: "Rapid Transport to Blood Bank",
            content:
              "Arrange helicopter or fastest transport to Level 1 trauma center with blood bank. Call ahead with blood type if known.",
            warning:
              "Time to blood transfusion determines survival - every minute counts",
            image: "hemorrhagic-shock-4",
          },
        ],
      },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "How quickly can massive hemorrhage cause death?",
          options: [
            "Within 30-60 minutes",
            "Within 5-10 minutes",
            "Within several hours",
            "It takes at least a day",
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question: "Where should a tourniquet be placed for leg bleeding?",
          options: [
            "Directly over the wound",
            "2-3 inches above the wound, high on the thigh",
            "Around the ankle",
            "Below the wound",
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          question: "What indicates Class III or IV hemorrhagic shock?",
          options: [
            "Normal pulse and blood pressure",
            "Slightly elevated pulse",
            "Very fast, weak pulse with >30% blood loss",
            "No symptoms",
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          question:
            "What should you do if a tourniquet doesn't stop the bleeding?",
          options: [
            "Loosen it and try again",
            "Apply a second tourniquet above the first one",
            "Remove it completely",
            "Apply it below the wound",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          question: "Which is a sign of internal bleeding?",
          options: [
            "Normal skin color and temperature",
            "Rapid weak pulse and pale, clammy skin",
            "Slow, strong pulse",
            "No abdominal pain",
          ],
          correctAnswer: 1,
        },
        {
          id: 6,
          question: "What worsens bleeding and shock in trauma patients?",
          options: [
            "Keeping the patient warm",
            "Hypothermia (getting cold)",
            "Normal body temperature",
            "Slight fever",
          ],
          correctAnswer: 1,
        },
        {
          id: 7,
          question: "What is most critical for survival in massive hemorrhage?",
          options: [
            "IV fluids only",
            "Pain medication",
            "Time to blood transfusion",
            "Antibiotics",
          ],
          correctAnswer: 2,
        },
      ],
    },
  },
  {
    id: "chest-abdominal-trauma",
    title: "Chest & Abdominal Trauma",
    description:
      "Critical care for lung punctures, pneumothorax, internal organ damage, and respiratory failure from blast and penetrating injuries.",
    icon: "🫁",
    color: "blue",
    duration: "55 min",
    videos: [
      {
        id: "chest-abd-1",
        title: "What to do if someone is unresponsive and not breathing",
        videoUrl: "https://www.youtube.com/embed/dlkgjYvHx-U",
      },
    ],
    flashcards: [
      {
        id: "lung-punctures-pneumothorax",
        title: "Lung Punctures & Pneumothorax",
        description:
          "Emergency treatment for collapsed lungs and penetrating chest wounds",
        icon: "🫁",
        steps: [
          {
            step: 1,
            title: "Recognize Pneumothorax Signs",
            content:
              "Look for: sudden chest pain, difficulty breathing, decreased breath sounds on one side, tracheal deviation (tension pneumothorax).",
            warning:
              "Tension pneumothorax can cause death within minutes - requires immediate decompression",
            image: "pneumothorax-signs",
          },
          {
            step: 2,
            title: "Seal Penetrating Chest Wounds",
            content:
              "Cover with airtight seal (plastic, foil) taped on 3 sides only. Leave one side open to allow air escape but prevent entry.",
            warning:
              "Never fully seal a chest wound - can create life-threatening tension pneumothorax",
            image: "chest-seal",
          },
          {
            step: 3,
            title: "Position for Breathing",
            content:
              "Sit patient upright or lean toward injured side if conscious. Support breathing, monitor for deterioration.",
            tip: "Upright position helps the uninjured lung work more effectively",
            image: "breathing-position",
          },
          {
            step: 4,
            title: "Monitor and Evacuate",
            content:
              "Watch for signs of tension pneumothorax: worsening breathing, weak pulse, blue skin. Arrange immediate transport.",
            warning:
              "If signs of tension pneumothorax develop, may need emergency needle decompression",
            image: "pneumothorax-evacuation",
          },
        ],
      },
      {
        id: "internal-organ-damage",
        title: "Internal Organ Damage",
        description:
          "Assessment and management of liver, spleen, and kidney injuries",
        icon: "🫘",
        steps: [
          {
            step: 1,
            title: "Assess for Internal Bleeding",
            content:
              "Check for: abdominal pain/tenderness, rigid or distended abdomen, signs of shock, bruising patterns.",
            warning:
              "Internal organ damage can cause massive bleeding with minimal external signs",
            image: "internal-organ-assessment",
          },
          {
            step: 2,
            title: "Position and Stabilize",
            content:
              "Keep patient lying flat, knees bent for comfort. Do NOT give food, water, or pain medication by mouth.",
            tip: "Bent knees help relax abdominal muscles and reduce pain",
            image: "abdominal-positioning",
          },
          {
            step: 3,
            title: "Monitor for Shock",
            content:
              "Check pulse, blood pressure, consciousness every 5 minutes. Watch for rapid weak pulse, pale skin, confusion.",
            warning:
              "Rapid deterioration indicates severe internal bleeding requiring immediate surgery",
            image: "shock-monitoring",
          },
          {
            step: 4,
            title: "Prepare for Surgery",
            content:
              "Note mechanism of injury, vital sign changes, pain location. Arrange immediate transport to trauma center.",
            warning:
              "Internal organ injuries often require emergency surgery - time is critical",
            image: "surgery-preparation",
          },
        ],
      },
      {
        id: "respiratory-failure",
        title: "Respiratory Failure Management",
        description:
          "Managing severe breathing difficulties and airway compromise",
        icon: "😷",
        steps: [
          {
            step: 1,
            title: "Assess Breathing Adequacy",
            content:
              "Check: respiratory rate, depth, effort, skin color, oxygen saturation if available. Look for accessory muscle use.",
            warning:
              "Blue lips/fingernails indicate severe oxygen deficiency requiring immediate intervention",
            image: "breathing-assessment",
          },
          {
            step: 2,
            title: "Open and Clear Airway",
            content:
              "Head-tilt, chin-lift (if no spinal injury). Remove visible obstructions. Consider jaw-thrust if spinal injury suspected.",
            tip: "If foreign body visible, try finger sweeps or back blows to dislodge",
            image: "airway-management",
          },
          {
            step: 3,
            title: "Assist Ventilation",
            content:
              "If breathing is inadequate: provide rescue breathing or bag-mask ventilation. Give oxygen if available.",
            warning:
              "If patient stops breathing, begin immediate rescue breathing - brain damage occurs within 4-6 minutes",
            image: "assisted-ventilation",
          },
          {
            step: 4,
            title: "Continuous Monitoring",
            content:
              "Recheck breathing every 2-3 minutes. Be prepared to perform CPR if breathing stops completely.",
            warning:
              "Respiratory failure can rapidly progress to cardiac arrest",
            image: "continuous-monitoring",
          },
        ],
      },
      {
        id: "chest-abdominal-assessment",
        title: "Chest & Abdominal Assessment",
        description: "Systematic evaluation of chest and abdominal trauma",
        icon: "🔍",
        steps: [
          {
            step: 1,
            title: "Look for Obvious Injuries",
            content:
              "Inspect for: penetrating wounds, bruising patterns, deformities, paradoxical chest movement, distension.",
            tip: "Remove clothing to fully assess - injuries can be hidden under garments",
            image: "visual-inspection",
          },
          {
            step: 2,
            title: "Listen to Breathing",
            content:
              "Listen for: decreased breath sounds, wheezing, gurgling, stridor. Compare both sides of chest.",
            warning:
              "Absent breath sounds on one side may indicate pneumothorax or hemothorax",
            image: "breath-sounds",
          },
          {
            step: 3,
            title: "Feel for Abnormalities",
            content:
              "Gently palpate for: tenderness, rigidity, instability, crepitus (air under skin), pulse quality.",
            warning:
              "Avoid deep palpation of abdomen - can worsen internal bleeding",
          },
          {
            step: 4,
            title: "Prioritize and Document",
            content:
              "Identify life-threatening injuries first. Document findings, mechanism of injury, vital signs for medical team.",
            tip: "Use ABCDE approach: Airway, Breathing, Circulation, Disability, Exposure",
          },
        ],
      },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: "How should you seal a penetrating chest wound?",
          options: [
            "Cover completely with airtight seal",
            "Leave wound open to drain",
            "Tape plastic on 3 sides only, leaving one side open",
            "Apply pressure bandage only",
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          question:
            "What is a sign of tension pneumothorax requiring immediate intervention?",
          options: [
            "Mild chest pain",
            "Tracheal deviation and severe breathing difficulty",
            "Slight cough",
            "Normal breathing",
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          question:
            "Which position is best for a conscious patient with breathing difficulties?",
          options: [
            "Flat on back",
            "Face down",
            "Upright or leaning toward injured side",
            "On the uninjured side",
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          question:
            "What indicates possible internal organ damage in abdominal trauma?",
          options: [
            "Normal abdomen with no pain",
            "Rigid or distended abdomen with shock signs",
            "Soft abdomen with normal vitals",
            "No external bruising",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          question:
            "What should you NOT give to a patient with suspected internal abdominal injuries?",
          options: [
            "Oxygen",
            "Emotional support",
            "Food, water, or oral pain medication",
            "Blankets for warmth",
          ],
          correctAnswer: 2,
        },
        {
          id: 6,
          question: "Blue lips and fingernails in a trauma patient indicate:",
          options: [
            "Normal circulation",
            "Severe oxygen deficiency requiring immediate intervention",
            "Mild bruising",
            "Good oxygen levels",
          ],
          correctAnswer: 1,
        },
        {
          id: 7,
          question:
            "How often should you recheck breathing in a patient with respiratory failure?",
          options: [
            "Every 30 minutes",
            "Every 15 minutes",
            "Every 2-3 minutes",
            "Once per hour",
          ],
          correctAnswer: 2,
        },
        {
          id: 8,
          question:
            "When palpating the abdomen for trauma assessment, you should:",
          options: [
            "Apply deep pressure to find all injuries",
            "Use gentle palpation to avoid worsening internal bleeding",
            "Press as hard as possible",
            "Avoid touching the abdomen completely",
          ],
          correctAnswer: 1,
        },
        {
          id: 9,
          question:
            "Absent breath sounds on one side of the chest may indicate:",
          options: [
            "Normal breathing",
            "Pneumothorax or hemothorax",
            "Good lung function",
            "No significant injury",
          ],
          correctAnswer: 1,
        },
      ],
    },
  },
];

export const getModuleById = (id) => {
  return trainingModules.find((module) => module.id === id);
};

export const getVideoById = (videoId) => {
  for (const module of trainingModules) {
    const video = module.videos.find((v) => v.id === videoId);
    if (video) return video;
  }
  return null;
};
