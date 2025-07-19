export const trainingModules = [
  {
    id: 'traumatic-injuries',
    title: 'Blast Injuries',
    description: 'Comprehensive guidance on managing blast injuries, shrapnel wounds, internal bleeding, limb amputations, fractures, and crush injuries.',
    icon: '💥',
    color: 'red',
    duration: '60 min',
    videos: [
      {
        id: 'blast-1',
        title: 'Blast Injury Assessment',
        description: 'Rapid assessment of primary, secondary, tertiary, and quaternary blast injuries.',
        duration: '10:15',
        thumbnail: '/thumbnails/blast-assessment.jpg',
        videoUrl: '/videos/blast-assessment.mp4',
        transcript: 'Blast injuries present unique challenges requiring systematic assessment...'
      },
      {
        id: 'blast-2',
        title: 'Massive Hemorrhage Control',
        description: 'Advanced bleeding control for blast-related traumatic injuries including tourniquet application.',
        duration: '9:45',
        thumbnail: '/thumbnails/hemorrhage-control.jpg',
        videoUrl: '/videos/hemorrhage-control.mp4',
        transcript: 'Blast injuries often cause massive bleeding requiring immediate intervention...'
      },
      {
        id: 'blast-3',
        title: 'Amputation and Limb Preservation',
        description: 'Management of traumatic amputations and preservation techniques for severed limbs.',
        duration: '11:30',
        thumbnail: '/thumbnails/amputation-care.jpg',
        videoUrl: '/videos/amputation-care.mp4',
        transcript: 'Traumatic amputations from blasts require specific protocols...'
      },
      {
        id: 'blast-4',
        title: 'Shrapnel and Foreign Body Management',
        description: 'Safe removal and stabilization of embedded shrapnel and foreign objects.',
        duration: '8:20',
        thumbnail: '/thumbnails/shrapnel-management.jpg',
        videoUrl: '/videos/shrapnel-management.mp4',
        transcript: 'Shrapnel injuries require careful assessment before removal...'
      }
    ],
    flashcards: [
      {
        id: 'shrapnel-wounds',
        title: 'Shrapnel Wounds',
        description: 'Step-by-step first aid for shrapnel and fragment injuries',
        icon: '🔸',
        steps: [
          {
            step: 1,
            title: 'Assess and Control Bleeding',
            content: 'Apply direct pressure with clean cloth or sterile gauze. Do NOT remove visible shrapnel or debris.',
            warning: 'Never remove embedded objects - they may be plugging blood vessels',
            image: '/images/flashcards/direct-pressure.jpg'
          },
          {
            step: 2,
            title: 'Stabilize Embedded Objects',
            content: 'Build up bulky dressings around embedded shrapnel. Tape dressings in place without moving the object.',
            tip: 'Use rolled bandages or cloth to create a protective barrier around the object',
            image: '/images/flashcards/stabilize-object.jpg'
          },
          {
            step: 3,
            title: 'Treat for Shock',
            content: 'Keep patient warm, elevate legs if no spinal injury suspected. Monitor breathing and pulse.',
            warning: 'Watch for signs of shock: rapid pulse, pale skin, weakness',
            image: '/images/flashcards/treat-shock.jpg'
          },
          {
            step: 4,
            title: 'Prepare for Transport',
            content: 'Immobilize the injured area. Document location and size of wounds. Call for immediate evacuation.',
            tip: 'Take photos if possible for medical team preparation',
            image: '/images/flashcards/prepare-transport.jpg'
          }
        ]
      },
      {
        id: 'internal-bleeding',
        title: 'Internal Bleeding',
        description: 'Recognizing and managing internal bleeding from blast injuries',
        icon: '🩸',
        steps: [
          {
            step: 1,
            title: 'Recognize the Signs',
            content: 'Look for: rigid/distended abdomen, rapid weak pulse, pale/clammy skin, dizziness, thirst.',
            warning: 'Internal bleeding can be life-threatening even without external wounds',
            image: '/images/flashcards/internal-bleeding-signs.jpg'
          },
          {
            step: 2,
            title: 'Position Patient Properly',
            content: 'Keep patient lying flat. If conscious and no spinal injury, elevate legs 8-12 inches.',
            tip: 'Do NOT give food or water - patient may need emergency surgery',
            image: '/images/flashcards/position-patient.jpg'
          },
          {
            step: 3,
            title: 'Monitor Vital Signs',
            content: 'Check pulse and breathing every 5 minutes. Watch for worsening shock symptoms.',
            warning: 'Rapid deterioration requires immediate evacuation',
            image: '/images/flashcards/monitor-vitals.jpg'
          },
          {
            step: 4,
            title: 'Prepare for Evacuation',
            content: 'Keep patient warm with blankets. Record all observations and vital signs. Call for urgent medical transport.',
            tip: 'Document time of injury and progression of symptoms',
            image: '/images/flashcards/evacuation-prep.jpg'
          }
        ]
      },
      {
        id: 'limb-amputations',
        title: 'Limb Amputations',
        description: 'Emergency care for traumatic limb loss from blast injuries',
        icon: '🦴',
        steps: [
          {
            step: 1,
            title: 'Stop Massive Bleeding',
            content: 'Apply tourniquet 2-3 inches above amputation site. Tighten until bleeding stops completely.',
            warning: 'Note the time tourniquet was applied - critical for medical team',
            image: '/images/flashcards/tourniquet-application.jpg'
          },
          {
            step: 2,
            title: 'Treat the Amputation Site',
            content: 'Cover stump with sterile dressing. Apply pressure bandage over dressing. Do NOT use direct pressure on bone.',
            tip: 'If tourniquet fails, apply direct pressure above the wound',
            image: '/images/flashcards/amputation-dressing.jpg'
          },
          {
            step: 3,
            title: 'Preserve the Amputated Part',
            content: 'Wrap in clean, moist cloth. Place in plastic bag. Put bag on ice - do NOT let part touch ice directly.',
            warning: 'Do NOT use dry ice or put part directly in water',
            image: '/images/flashcards/preserve-limb.jpg'
          },
          {
            step: 4,
            title: 'Treat for Severe Shock',
            content: 'Keep patient warm, elevate legs, monitor breathing. Give reassurance. Arrange immediate evacuation.',
            tip: 'Psychological support is crucial - patient may be conscious and aware',
            image: '/images/flashcards/shock-treatment.jpg'
          }
        ]
      },
      {
        id: 'fractures-crush-injuries',
        title: 'Fractures & Crush Injuries',
        description: 'Managing bone fractures and crush injuries from blast trauma',
        icon: '🦴',
        steps: [
          {
            step: 1,
            title: 'Check Circulation, Sensation, Movement',
            content: 'Check pulse below injury. Test sensation with light touch. Ask patient to move fingers/toes if possible.',
            warning: 'Loss of pulse, sensation, or movement indicates serious injury',
            image: '/images/flashcards/csi-check.jpg'
          },
          {
            step: 2,
            title: 'Immobilize the Fracture',
            content: 'Splint above and below the fracture. Use rigid materials (boards, magazines). Pad splint for comfort.',
            tip: 'Splint in position found - do not try to straighten deformed limbs',
            image: '/images/flashcards/splinting.jpg'
          },
          {
            step: 3,
            title: 'Prevent Crush Syndrome',
            content: 'If limb was crushed >15 minutes, do NOT elevate. Monitor for kidney problems. Prepare for rapid transport.',
            warning: 'Crush syndrome can cause kidney failure hours after injury',
            image: '/images/flashcards/crush-syndrome.jpg'
          },
          {
            step: 4,
            title: 'Monitor and Transport',
            content: 'Recheck circulation every 15 minutes. Loosen splint if swelling occurs. Arrange medical evacuation.',
            tip: 'Mark time of injury and splint application on patient or splint',
            image: '/images/flashcards/monitor-fracture.jpg'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What should you NEVER do when treating a victim with embedded shrapnel?',
          options: [
            'Apply direct pressure around the object',
            'Remove the embedded object',
            'Stabilize the object with bulky dressings',
            'Call for medical evacuation'
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'When applying a tourniquet for blast-related amputation, how far above the wound should it be placed?',
          options: [
            '1 inch above the wound',
            '2-3 inches above the wound',
            '6 inches above the wound',
            'As close to the wound as possible'
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'Which is a key sign of internal bleeding from blast injuries?',
          options: [
            'External visible wounds only',
            'Rigid or distended abdomen',
            'Normal pulse rate',
            'Pink, warm skin'
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: 'What is the biggest risk of crush syndrome?',
          options: [
            'External bleeding',
            'Broken bones',
            'Kidney failure',
            'Skin infections'
          ],
          correctAnswer: 2
        },
        {
          id: 5,
          question: 'How should an amputated limb be preserved?',
          options: [
            'Place directly on ice',
            'Wrap in clean, moist cloth and place in plastic bag on ice',
            'Keep at room temperature',
            'Submerge in cold water'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'burns-management',
    title: 'Explosion & Chemical Burns',
    description: 'Comprehensive protocols for blast burns, white phosphorus exposure, first to third-degree burns, and infection prevention in crisis zones.',
    icon: '🔥',
    color: 'orange',
    duration: '55 min',
    videos: [
      {
        id: 'explosion-burns-1',
        title: 'Explosion Burn Assessment',
        description: 'Rapid assessment of burn severity from explosions and airstrikes - first, second, and third-degree classification.',
        duration: '10:45',
        thumbnail: '/thumbnails/explosion-burns.jpg',
        videoUrl: '/videos/explosion-burns.mp4',
        transcript: 'Explosion burns present unique challenges requiring rapid assessment of depth and percentage...'
      },
      {
        id: 'white-phosphorus-1',
        title: 'White Phosphorus Exposure Response',
        description: 'Emergency protocols for white phosphorus burns including immediate decontamination and treatment.',
        duration: '12:20',
        thumbnail: '/thumbnails/white-phosphorus-burns.jpg',
        videoUrl: '/videos/white-phosphorus-burns.mp4',
        transcript: 'White phosphorus burns continue to burn until oxygen is removed and require specific treatment protocols...'
      },
      {
        id: 'burn-wound-care-1',
        title: 'Burn Wound Care and Infection Prevention',
        description: 'Clean treatment techniques and infection prevention when medical supplies are limited.',
        duration: '11:15',
        thumbnail: '/thumbnails/burn-wound-care.jpg',
        videoUrl: '/videos/burn-wound-care.mp4',
        transcript: 'Preventing infection in burn wounds is critical when medical resources are scarce...'
      },
      {
        id: 'severe-burns-1',
        title: 'Severe Burns and Shock Management',
        description: 'Managing third-degree burns, fluid loss, and burn shock in emergency conditions.',
        duration: '9:30',
        thumbnail: '/thumbnails/severe-burns.jpg',
        videoUrl: '/videos/severe-burns.mp4',
        transcript: 'Severe burns can cause life-threatening complications including burn shock and infection...'
      }
    ],
    flashcards: [
      {
        id: 'first-second-degree-burns',
        title: 'First & Second-Degree Burns',
        description: 'Treatment protocols for superficial and partial-thickness burns from explosions',
        icon: '🔥',
        steps: [
          {
            step: 1,
            title: 'Cool the Burn Immediately',
            content: 'Run cool (not cold) water over the burn for 10-20 minutes. Remove from heat source and any non-stuck clothing.',
            warning: 'Do NOT use ice water or ice - this can cause further tissue damage',
            image: '/images/flashcards/cool-burn.jpg'
          },
          {
            step: 2,
            title: 'Assess Burn Severity',
            content: 'First-degree: red, painful, no blisters. Second-degree: red, painful, with blisters. Check body surface area affected.',
            tip: 'Use patient\'s palm = 1% of body surface area for quick assessment',
            image: '/images/flashcards/assess-burn.jpg'
          },
          {
            step: 3,
            title: 'Clean and Protect',
            content: 'Gently clean with sterile saline if available. Apply sterile, non-adherent dressing. Do NOT break blisters.',
            warning: 'Avoid cotton or fluffy materials that can stick to burn',
            image: '/images/flashcards/dress-burn.jpg'
          },
          {
            step: 4,
            title: 'Pain Management and Monitoring',
            content: 'Give pain relief if available. Monitor for signs of infection: increased pain, fever, pus, red streaking.',
            tip: 'Elevate burned limbs to reduce swelling',
            image: '/images/flashcards/monitor-burn.jpg'
          }
        ]
      },
      {
        id: 'third-degree-burns',
        title: 'Third-Degree Burns',
        description: 'Critical care for full-thickness burns from explosions and severe heat exposure',
        icon: '🚨',
        steps: [
          {
            step: 1,
            title: 'Recognize Third-Degree Burns',
            content: 'Waxy white, leathery, or charred appearance. May be painless due to nerve damage. All skin layers destroyed.',
            warning: 'Third-degree burns always require immediate medical evacuation',
            image: '/images/flashcards/third-degree-recognition.jpg'
          },
          {
            step: 2,
            title: 'Do NOT Cool Large Burns',
            content: 'For burns >20% body surface, do NOT use water cooling - risk of hypothermia. Remove from heat source only.',
            warning: 'Large burns can cause life-threatening heat and fluid loss',
            image: '/images/flashcards/large-burn-care.jpg'
          },
          {
            step: 3,
            title: 'Cover and Protect',
            content: 'Cover with clean, dry cloth or sterile sheets. Do NOT remove stuck clothing. Wrap each burned finger/toe separately.',
            tip: 'Use plastic wrap for temporary protection if sterile dressings unavailable',
            image: '/images/flashcards/protect-severe-burn.jpg'
          },
          {
            step: 4,
            title: 'Treat for Shock',
            content: 'Monitor airway, breathing, circulation. Give fluids if conscious and no vomiting. Arrange immediate evacuation.',
            warning: 'Watch for airway burns - look for singed facial hair, soot in mouth/nose',
            image: '/images/flashcards/burn-shock.jpg'
          }
        ]
      },
      {
        id: 'white-phosphorus-burns',
        title: 'White Phosphorus Exposure',
        description: 'Emergency response to white phosphorus chemical burns',
        icon: '☣️',
        steps: [
          {
            step: 1,
            title: 'Immediate Decontamination',
            content: 'Flush with large amounts of water for 15-20 minutes. Remove all contaminated clothing while flushing.',
            warning: 'White phosphorus ignites on contact with air - keep wet at all times',
            image: '/images/flashcards/phosphorus-decon.jpg'
          },
          {
            step: 2,
            title: 'Remove Visible Particles',
            content: 'Use forceps or tweezers to remove visible white phosphorus particles while keeping area wet. Work under water if possible.',
            warning: 'Do NOT use fingers - phosphorus will burn your hands',
            image: '/images/flashcards/remove-phosphorus.jpg'
          },
          {
            step: 3,
            title: 'Cover with Wet Dressings',
            content: 'Apply wet, sterile dressings. Keep dressings moist - dry air will cause phosphorus to re-ignite.',
            tip: 'If no sterile dressings available, use clean wet cloth',
            image: '/images/flashcards/wet-dressing.jpg'
          },
          {
            step: 4,
            title: 'Continuous Monitoring',
            content: 'Monitor for re-ignition - look for smoke or renewed burning. Keep all affected areas wet until medical evacuation.',
            warning: 'Phosphorus can continue burning for hours if allowed to dry',
            image: '/images/flashcards/monitor-phosphorus.jpg'
          }
        ]
      },
      {
        id: 'infection-prevention',
        title: 'Burn Infection Prevention',
        description: 'Preventing deadly infections in burn wounds when medical supplies are limited',
        icon: '🦠',
        steps: [
          {
            step: 1,
            title: 'Hand Hygiene First',
            content: 'Wash hands thoroughly with soap and water or use hand sanitizer before any burn care. Wear gloves if available.',
            warning: 'Dirty hands are the #1 source of burn wound infections',
            image: '/images/flashcards/hand-hygiene.jpg'
          },
          {
            step: 2,
            title: 'Clean the Wound',
            content: 'Rinse gently with clean water or sterile saline. Remove loose debris with sterile tweezers. Do NOT scrub.',
            tip: 'Boiled and cooled water can substitute for sterile saline if needed',
            image: '/images/flashcards/clean-burn-wound.jpg'
          },
          {
            step: 3,
            title: 'Apply Clean Dressings',
            content: 'Use sterile dressings if available, or clean cloth. Change dressings daily or when soiled. Keep wound moist but not wet.',
            warning: 'Dry wounds heal slower and are more prone to infection',
            image: '/images/flashcards/sterile-dressing.jpg'
          },
          {
            step: 4,
            title: 'Monitor for Infection Signs',
            content: 'Watch for: increased pain, fever, pus, bad smell, red streaking, green/yellow drainage. Seek medical help immediately.',
            tip: 'Take photos to document progression if medical help is delayed',
            image: '/images/flashcards/infection-signs.jpg'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What should you NEVER use to cool a burn?',
          options: [
            'Cool running water',
            'Ice or ice water',
            'Room temperature water',
            'Sterile saline'
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'How can you quickly estimate burn percentage on a patient?',
          options: [
            'Count the blisters',
            'Use the patient\'s palm = 1% body surface area',
            'Measure with a ruler',
            'Guess based on appearance'
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'What is the most critical action for white phosphorus burns?',
          options: [
            'Apply dry dressings',
            'Remove particles with bare hands',
            'Keep the affected area constantly wet',
            'Apply ice immediately'
          ],
          correctAnswer: 2
        },
        {
          id: 4,
          question: 'Which describes a third-degree burn?',
          options: [
            'Red and painful with blisters',
            'Waxy white, leathery, or charred - may be painless',
            'Red and painful without blisters',
            'Always very painful'
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: 'What is the #1 cause of burn wound infections?',
          options: [
            'Dirty bandages',
            'Poor wound cleaning',
            'Dirty hands during treatment',
            'Not using antibiotics'
          ],
          correctAnswer: 2
        },
        {
          id: 6,
          question: 'For large burns (>20% body surface), what should you avoid?',
          options: [
            'Calling for help',
            'Removing from heat source',
            'Cooling with water (hypothermia risk)',
            'Monitoring vital signs'
          ],
          correctAnswer: 2
        },
        {
          id: 7,
          question: 'Which is a sign of burn wound infection?',
          options: [
            'Initial pain and redness',
            'Clear fluid drainage',
            'Green/yellow pus and bad smell',
            'Normal healing pain'
          ],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: 'head-spinal-trauma',
    title: 'Head & Spinal Injuries',
    description: 'Comprehensive training on traumatic brain injury (TBI), skull fractures, and spinal cord trauma with paralysis management.',
    icon: '🧠',
    color: 'purple',
    duration: '50 min',
    videos: [
      {
        id: 'tbi-assessment-1',
        title: 'Traumatic Brain Injury (TBI) Assessment',
        description: 'Rapid assessment of consciousness levels, Glasgow Coma Scale, and immediate TBI response protocols.',
        duration: '12:30',
        thumbnail: '/thumbnails/tbi-assessment.jpg',
        videoUrl: '/videos/tbi-assessment.mp4',
        transcript: 'Traumatic brain injuries from blasts and impacts require systematic assessment of consciousness and neurological function...'
      },
      {
        id: 'skull-fractures-1',
        title: 'Skull Fractures and Brain Bleeding',
        description: 'Recognizing skull fractures, managing brain bleeding, and preventing secondary brain injury.',
        duration: '11:45',
        thumbnail: '/thumbnails/skull-fractures.jpg',
        videoUrl: '/videos/skull-fractures.mp4',
        transcript: 'Skull fractures can cause life-threatening brain bleeding and require immediate recognition and management...'
      },
      {
        id: 'spinal-trauma-1',
        title: 'Spinal Cord Trauma and Paralysis',
        description: 'Spinal immobilization techniques, paralysis assessment, and preventing further spinal damage.',
        duration: '13:20',
        thumbnail: '/thumbnails/spinal-trauma.jpg',
        videoUrl: '/videos/spinal-trauma.mp4',
        transcript: 'Spinal cord injuries can result in permanent paralysis if not handled properly during initial care...'
      },
      {
        id: 'head-spinal-transport-1',
        title: 'Head and Spinal Injury Transport',
        description: 'Safe transport techniques for head and spinal injuries, including improvised immobilization methods.',
        duration: '9:15',
        thumbnail: '/thumbnails/head-spinal-transport.jpg',
        videoUrl: '/videos/head-spinal-transport.mp4',
        transcript: 'Proper transport of head and spinal injuries is critical to prevent further damage during evacuation...'
      }
    ],
    flashcards: [
      {
        id: 'traumatic-brain-injury',
        title: 'Traumatic Brain Injury (TBI)',
        description: 'Assessment and management of brain injuries from blasts, impacts, and penetrating trauma',
        icon: '🧠',
        steps: [
          {
            step: 1,
            title: 'Assess Consciousness Level',
            content: 'Check responsiveness: Alert, Voice, Pain, Unresponsive (AVPU). Note any confusion, disorientation, or memory loss.',
            warning: 'Unconsciousness or declining consciousness indicates severe TBI requiring immediate evacuation',
            image: '/images/flashcards/consciousness-check.jpg'
          },
          {
            step: 2,
            title: 'Check for Danger Signs',
            content: 'Look for: unequal pupils, severe headache, repeated vomiting, seizures, clear fluid from ears/nose, weakness on one side.',
            warning: 'Any of these signs indicate serious brain injury - call for immediate medical evacuation',
            image: '/images/flashcards/tbi-danger-signs.jpg'
          },
          {
            step: 3,
            title: 'Positioning and Airway',
            content: 'If conscious: sit upright or head elevated 30°. If unconscious: recovery position (if no spinal injury suspected). Monitor airway.',
            tip: 'Elevating the head can help reduce brain pressure if no spinal injury',
            image: '/images/flashcards/head-positioning.jpg'
          },
          {
            step: 4,
            title: 'Monitor and Document',
            content: 'Check consciousness every 15 minutes. Document changes in behavior, speech, movement. Keep patient calm and still.',
            warning: 'Any deterioration requires immediate medical attention - brain injuries can worsen rapidly',
            image: '/images/flashcards/monitor-tbi.jpg'
          }
        ]
      },
      {
        id: 'skull-fractures',
        title: 'Skull Fractures',
        description: 'Recognition and management of skull fractures and potential brain bleeding',
        icon: '💀',
        steps: [
          {
            step: 1,
            title: 'Recognize Skull Fracture Signs',
            content: 'Look for: visible skull deformity, blood from ears/nose, bruising around eyes (raccoon eyes), bruising behind ears.',
            warning: 'Skull fractures often indicate underlying brain injury requiring immediate medical care',
            image: '/images/flashcards/skull-fracture-signs.jpg'
          },
          {
            step: 2,
            title: 'Control External Bleeding',
            content: 'Apply gentle pressure around (not on) the fracture site. Use bulky dressings to absorb blood. Do NOT push bone fragments.',
            warning: 'Never apply direct pressure to a depressed skull fracture - can push fragments into brain',
            image: '/images/flashcards/skull-bleeding-control.jpg'
          },
          {
            step: 3,
            title: 'Monitor for Brain Bleeding',
            content: 'Watch for: worsening headache, vomiting, confusion, weakness, seizures, unconsciousness. These indicate brain bleeding.',
            warning: 'Brain bleeding is life-threatening and requires immediate surgical intervention',
            image: '/images/flashcards/brain-bleeding-signs.jpg'
          },
          {
            step: 4,
            title: 'Immobilize and Transport',
            content: 'Keep head and neck still. Use cervical collar if available. Transport urgently to medical facility with neurosurgical capability.',
            tip: 'Assume spinal injury with any skull fracture until proven otherwise',
            image: '/images/flashcards/skull-fracture-transport.jpg'
          }
        ]
      },
      {
        id: 'spinal-cord-trauma',
        title: 'Spinal Cord Trauma & Paralysis',
        description: 'Assessment and immobilization of spinal injuries to prevent permanent paralysis',
        icon: '🦴',
        steps: [
          {
            step: 1,
            title: 'Suspect Spinal Injury',
            content: 'High-risk mechanisms: falls >3 feet, high-speed impacts, head/neck trauma, unconscious patients, numbness/tingling in limbs.',
            warning: 'When in doubt, treat as spinal injury - movement can cause permanent paralysis',
            image: '/images/flashcards/spinal-injury-mechanism.jpg'
          },
          {
            step: 2,
            title: 'Test Sensation and Movement',
            content: 'Ask patient to wiggle fingers/toes. Test light touch on hands and feet. Check for numbness, tingling, or weakness.',
            warning: 'Loss of sensation or movement indicates spinal cord damage - immobilize immediately',
            image: '/images/flashcards/neurological-assessment.jpg'
          },
          {
            step: 3,
            title: 'Immobilize the Spine',
            content: 'Hold head/neck in neutral position. Use cervical collar if available. Log-roll patient as one unit if must move. Keep spine straight.',
            tip: 'Use towels, blankets, or boards to maintain spinal alignment during transport',
            image: '/images/flashcards/spinal-immobilization.jpg'
          },
          {
            step: 4,
            title: 'Manage Complications',
            content: 'Monitor breathing (spinal injuries can affect breathing muscles). Watch for spinal shock: low blood pressure, slow pulse.',
            warning: 'High spinal injuries can cause breathing failure - be prepared to assist ventilation',
            image: '/images/flashcards/spinal-complications.jpg'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'Which assessment method should you use to check consciousness level in a TBI patient?',
          options: [
            'Glasgow Coma Scale only',
            'AVPU (Alert, Voice, Pain, Unresponsive)',
            'Pupil response only',
            'Blood pressure measurement'
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'What is a critical danger sign of severe brain injury?',
          options: [
            'Mild headache',
            'Slight dizziness',
            'Unequal pupils and repeated vomiting',
            'Normal speech'
          ],
          correctAnswer: 2
        },
        {
          id: 3,
          question: 'How should you control bleeding from a skull fracture?',
          options: [
            'Apply direct pressure on the fracture site',
            'Apply gentle pressure around (not on) the fracture',
            'Push bone fragments back into place',
            'Use ice directly on the wound'
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: 'Which mechanism of injury should make you suspect spinal injury?',
          options: [
            'Minor cuts and scrapes',
            'Falls greater than 3 feet or high-speed impacts',
            'Superficial burns',
            'Mild bruising'
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: 'What indicates possible spinal cord damage?',
          options: [
            'Normal movement in all limbs',
            'Loss of sensation or inability to move fingers/toes',
            'Normal reflexes',
            'No numbness or tingling'
          ],
          correctAnswer: 1
        },
        {
          id: 6,
          question: 'How should you move a patient with suspected spinal injury?',
          options: [
            'Move quickly to avoid further injury',
            'Log-roll as one unit keeping spine straight',
            'Bend and twist the spine as needed',
            'Move head and body separately'
          ],
          correctAnswer: 1
        },
        {
          id: 7,
          question: 'What position is best for a conscious TBI patient?',
          options: [
            'Flat on back',
            'Face down',
            'Head elevated 30° (if no spinal injury)',
            'Any comfortable position'
          ],
          correctAnswer: 2
        },
        {
          id: 8,
          question: 'Clear fluid draining from the ears or nose after head trauma indicates:',
          options: [
            'Normal response to injury',
            'Possible skull fracture with brain fluid leak',
            'Simple nosebleed',
            'Dehydration'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'severe-bleeding',
    title: 'Severe Bleeding (Hemorrhage)',
    description: 'Life-threatening blood loss from bomb fragments and building collapses requiring urgent transfusion and advanced hemorrhage control.',
    icon: '🩸',
    color: 'red',
    duration: '45 min',
    videos: [
      {
        id: 'massive-hemorrhage-1',
        title: 'Massive Hemorrhage Assessment',
        description: 'Rapid assessment of life-threatening blood loss and shock classification.',
        duration: '10:30',
        thumbnail: '/thumbnails/massive-hemorrhage.jpg',
        videoUrl: '/videos/massive-hemorrhage.mp4',
        transcript: 'Massive hemorrhage is the leading cause of preventable death in trauma situations...'
      },
      {
        id: 'tourniquet-techniques-1',
        title: 'Combat Tourniquet Application',
        description: 'Proper tourniquet placement and tightening techniques for extremity hemorrhage.',
        duration: '8:45',
        thumbnail: '/thumbnails/tourniquet-application.jpg',
        videoUrl: '/videos/tourniquet-application.mp4',
        transcript: 'Tourniquets are life-saving devices that can stop arterial bleeding in extremities...'
      },
      {
        id: 'pressure-points-1',
        title: 'Pressure Points and Hemostatic Agents',
        description: 'Using pressure points and hemostatic dressings when tourniquets are not effective.',
        duration: '11:20',
        thumbnail: '/thumbnails/pressure-points.jpg',
        videoUrl: '/videos/pressure-points.mp4',
        transcript: 'When tourniquets cannot be applied, pressure points and hemostatic agents become critical...'
      },
      {
        id: 'hemorrhagic-shock-1',
        title: 'Hemorrhagic Shock Management',
        description: 'Recognition and pre-hospital management of hemorrhagic shock requiring urgent transfusion.',
        duration: '12:15',
        thumbnail: '/thumbnails/hemorrhagic-shock.jpg',
        videoUrl: '/videos/hemorrhagic-shock.mp4',
        transcript: 'Hemorrhagic shock occurs when blood loss exceeds the body\'s ability to compensate...'
      }
    ],
    flashcards: [
      {
        id: 'massive-hemorrhage-control',
        title: 'Massive Hemorrhage Control',
        description: 'Immediate life-saving interventions for catastrophic bleeding from fragments and debris',
        icon: '🩸',
        steps: [
          {
            step: 1,
            title: 'Identify Life-Threatening Bleeding',
            content: 'Look for: spurting blood, rapidly expanding pools of blood, clothing soaked with blood, weak/absent pulse.',
            warning: 'Massive hemorrhage can cause death within 5-10 minutes - act immediately',
            image: '/images/flashcards/identify-massive-bleeding.jpg'
          },
          {
            step: 2,
            title: 'Apply Direct Pressure',
            content: 'Use both hands to apply firm, continuous pressure directly on the wound. Use gauze, clothing, or bare hands if necessary.',
            tip: 'Don\'t lift pressure to check bleeding - maintain constant pressure for 10+ minutes',
            image: '/images/flashcards/direct-pressure-massive.jpg'
          },
          {
            step: 3,
            title: 'Elevate if Possible',
            content: 'Raise the bleeding extremity above heart level while maintaining pressure. Do NOT elevate if fracture suspected.',
            warning: 'Never elevate potential spinal injuries or suspected fractures',
            image: '/images/flashcards/elevate-bleeding-limb.jpg'
          },
          {
            step: 4,
            title: 'Prepare for Shock Treatment',
            content: 'Monitor pulse, breathing, consciousness. Keep patient warm. Prepare for immediate evacuation to trauma center.',
            warning: 'Massive blood loss leads to irreversible shock - evacuation time is critical',
            image: '/images/flashcards/prepare-shock-treatment.jpg'
          }
        ]
      },
      {
        id: 'tourniquet-application',
        title: 'Tourniquet Application',
        description: 'Life-saving tourniquet techniques for extremity arterial bleeding',
        icon: '🔴',
        steps: [
          {
            step: 1,
            title: 'Identify Need for Tourniquet',
            content: 'Use when: direct pressure fails, multiple casualties (triage), amputation, arterial bleeding that won\'t stop.',
            warning: 'Tourniquets should be applied high and tight - failure to stop bleeding can be fatal',
            image: '/images/flashcards/tourniquet-indications.jpg'
          },
          {
            step: 2,
            title: 'Position Tourniquet Correctly',
            content: 'Place 2-3 inches above wound, higher on thigh/upper arm. Remove clothing first. Place over single bone, not joint.',
            tip: 'If first tourniquet doesn\'t stop bleeding, apply a second one above the first',
            image: '/images/flashcards/tourniquet-positioning.jpg'
          },
          {
            step: 3,
            title: 'Tighten Until Bleeding Stops',
            content: 'Tighten windlass (stick) until bleeding completely stops. Secure windlass with clip or tape. Do not loosen.',
            warning: 'Must be tight enough to stop arterial flow - will be very painful but necessary',
            image: '/images/flashcards/tourniquet-tightening.jpg'
          },
          {
            step: 4,
            title: 'Mark Time and Monitor',
            content: 'Write time of application on patient\'s forehead. Monitor for continued bleeding. Arrange immediate transport.',
            warning: 'Note exact time applied - critical information for medical team',
            image: '/images/flashcards/tourniquet-documentation.jpg'
          }
        ]
      },
      {
        id: 'internal-hemorrhage',
        title: 'Internal Hemorrhage Recognition',
        description: 'Detecting and managing internal bleeding from building collapse and bomb fragments',
        icon: '🫀',
        steps: [
          {
            step: 1,
            title: 'Recognize Internal Bleeding Signs',
            content: 'Look for: rapid weak pulse, pale/clammy skin, dizziness, thirst, anxiety, abdominal rigidity, distension.',
            warning: 'Internal bleeding can be massive without external signs - monitor vital signs closely',
            image: '/images/flashcards/internal-bleeding-recognition.jpg'
          },
          {
            step: 2,
            title: 'Position Patient for Shock',
            content: 'Lay flat, elevate legs 8-12 inches if no spinal injury. Do NOT give food or water. Monitor airway.',
            tip: 'If patient vomits, turn to side to prevent aspiration',
            image: '/images/flashcards/shock-positioning.jpg'
          },
          {
            step: 3,
            title: 'Monitor Vital Signs',
            content: 'Check pulse, breathing, consciousness every 5 minutes. Watch for rapid deterioration. Keep patient calm.',
            warning: 'Rapid pulse >120 with weak pulse indicates severe blood loss requiring immediate surgery',
            image: '/images/flashcards/vital-signs-monitoring.jpg'
          },
          {
            step: 4,
            title: 'Urgent Medical Evacuation',
            content: 'Call for immediate transport to trauma center with blood bank. Document all findings and vital sign changes.',
            warning: 'Internal bleeding often requires emergency surgery and blood transfusion',
            image: '/images/flashcards/urgent-evacuation.jpg'
          }
        ]
      },
      {
        id: 'hemorrhagic-shock',
        title: 'Hemorrhagic Shock Management',
        description: 'Pre-hospital care for shock from massive blood loss requiring transfusion',
        icon: '💔',
        steps: [
          {
            step: 1,
            title: 'Classify Shock Severity',
            content: 'Class I: <15% blood loss, normal vitals. Class II: 15-30%, fast pulse. Class III: 30-40%, very fast weak pulse. Class IV: >40%, critical.',
            warning: 'Class III and IV shock require immediate blood transfusion to survive',
            image: '/images/flashcards/shock-classification.jpg'
          },
          {
            step: 2,
            title: 'Control All Bleeding Sources',
            content: 'Stop all visible bleeding with pressure, tourniquets, hemostatic agents. Look for hidden bleeding sites.',
            tip: 'Control bleeding first - IV fluids cannot replace lost blood',
            image: '/images/flashcards/control-all-bleeding.jpg'
          },
          {
            step: 3,
            title: 'Prevent Further Heat Loss',
            content: 'Wrap in blankets, remove wet clothing, cover head. Hypothermia worsens bleeding and shock.',
            warning: 'Cold patients cannot clot blood effectively - keeping warm is life-saving',
            image: '/images/flashcards/prevent-hypothermia.jpg'
          },
          {
            step: 4,
            title: 'Rapid Transport to Blood Bank',
            content: 'Arrange helicopter or fastest transport to Level 1 trauma center with blood bank. Call ahead with blood type if known.',
            warning: 'Time to blood transfusion determines survival - every minute counts',
            image: '/images/flashcards/rapid-transport-blood.jpg'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'How quickly can massive hemorrhage cause death?',
          options: [
            'Within 30-60 minutes',
            'Within 5-10 minutes',
            'Within several hours',
            'It takes at least a day'
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'Where should a tourniquet be placed for leg bleeding?',
          options: [
            'Directly over the wound',
            '2-3 inches above the wound, high on the thigh',
            'Around the ankle',
            'Below the wound'
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'What indicates Class III or IV hemorrhagic shock?',
          options: [
            'Normal pulse and blood pressure',
            'Slightly elevated pulse',
            'Very fast, weak pulse with >30% blood loss',
            'No symptoms'
          ],
          correctAnswer: 2
        },
        {
          id: 4,
          question: 'What should you do if a tourniquet doesn\'t stop the bleeding?',
          options: [
            'Loosen it and try again',
            'Apply a second tourniquet above the first one',
            'Remove it completely',
            'Apply it below the wound'
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: 'Which is a sign of internal bleeding?',
          options: [
            'Normal skin color and temperature',
            'Rapid weak pulse and pale, clammy skin',
            'Slow, strong pulse',
            'No abdominal pain'
          ],
          correctAnswer: 1
        },
        {
          id: 6,
          question: 'What worsens bleeding and shock in trauma patients?',
          options: [
            'Keeping the patient warm',
            'Hypothermia (getting cold)',
            'Normal body temperature',
            'Slight fever'
          ],
          correctAnswer: 1
        },
        {
          id: 7,
          question: 'What is most critical for survival in massive hemorrhage?',
          options: [
            'IV fluids only',
            'Pain medication',
            'Time to blood transfusion',
            'Antibiotics'
          ],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: 'chest-abdominal-injuries',
    title: 'Chest & Abdominal Trauma',
    description: 'Critical care for lung punctures, pneumothorax, internal organ damage, and respiratory failure from blast and penetrating injuries.',
    icon: '🫁',
    color: 'blue',
    duration: '55 min',
    videos: [
      {
        id: 'lung-injuries-1',
        title: 'Lung Punctures and Pneumothorax',
        description: 'Recognition and emergency treatment of collapsed lungs, tension pneumothorax, and penetrating chest wounds.',
        duration: '13:45',
        thumbnail: '/thumbnails/lung-punctures.jpg',
        videoUrl: '/videos/lung-punctures.mp4',
        transcript: 'Lung injuries from penetrating trauma can rapidly become life-threatening requiring immediate intervention...'
      },
      {
        id: 'internal-organs-1',
        title: 'Internal Organ Damage Assessment',
        description: 'Identifying liver, spleen, and kidney injuries from blunt and penetrating abdominal trauma.',
        duration: '12:20',
        thumbnail: '/thumbnails/internal-organ-damage.jpg',
        videoUrl: '/videos/internal-organ-damage.mp4',
        transcript: 'Internal organ injuries often present with subtle signs but can cause rapid deterioration...'
      },
      {
        id: 'respiratory-failure-1',
        title: 'Respiratory Failure Management',
        description: 'Managing airway obstruction, breathing difficulties, and ventilation problems in trauma patients.',
        duration: '11:30',
        thumbnail: '/thumbnails/respiratory-failure.jpg',
        videoUrl: '/videos/respiratory-failure.mp4',
        transcript: 'Respiratory failure can result from chest trauma, airway obstruction, or severe pain limiting breathing...'
      },
      {
        id: 'chest-abdominal-stabilization-1',
        title: 'Chest and Abdominal Stabilization',
        description: 'Emergency stabilization techniques and transport preparation for serious chest and abdominal injuries.',
        duration: '10:45',
        thumbnail: '/thumbnails/chest-abdominal-stabilization.jpg',
        videoUrl: '/videos/chest-abdominal-stabilization.mp4',
        transcript: 'Proper stabilization of chest and abdominal injuries is critical during transport to prevent deterioration...'
      }
    ],
    flashcards: [
      {
        id: 'lung-punctures-pneumothorax',
        title: 'Lung Punctures & Pneumothorax',
        description: 'Emergency treatment for collapsed lungs and penetrating chest wounds',
        icon: '🫁',
        steps: [
          {
            step: 1,
            title: 'Recognize Pneumothorax Signs',
            content: 'Look for: sudden chest pain, difficulty breathing, decreased breath sounds on one side, tracheal deviation (tension pneumothorax).',
            warning: 'Tension pneumothorax can cause death within minutes - requires immediate decompression',
            image: '/images/flashcards/pneumothorax-signs.jpg'
          },
          {
            step: 2,
            title: 'Seal Penetrating Chest Wounds',
            content: 'Cover with airtight seal (plastic, foil) taped on 3 sides only. Leave one side open to allow air escape but prevent entry.',
            warning: 'Never fully seal a chest wound - can create life-threatening tension pneumothorax',
            image: '/images/flashcards/chest-seal.jpg'
          },
          {
            step: 3,
            title: 'Position for Breathing',
            content: 'Sit patient upright or lean toward injured side if conscious. Support breathing, monitor for deterioration.',
            tip: 'Upright position helps the uninjured lung work more effectively',
            image: '/images/flashcards/breathing-position.jpg'
          },
          {
            step: 4,
            title: 'Monitor and Evacuate',
            content: 'Watch for signs of tension pneumothorax: worsening breathing, weak pulse, blue skin. Arrange immediate transport.',
            warning: 'If signs of tension pneumothorax develop, may need emergency needle decompression',
            image: '/images/flashcards/pneumothorax-evacuation.jpg'
          }
        ]
      },
      {
        id: 'internal-organ-damage',
        title: 'Internal Organ Damage',
        description: 'Assessment and management of liver, spleen, and kidney injuries',
        icon: '🫘',
        steps: [
          {
            step: 1,
            title: 'Assess for Internal Bleeding',
            content: 'Check for: abdominal pain/tenderness, rigid or distended abdomen, signs of shock, bruising patterns.',
            warning: 'Internal organ damage can cause massive bleeding with minimal external signs',
            image: '/images/flashcards/internal-organ-assessment.jpg'
          },
          {
            step: 2,
            title: 'Position and Stabilize',
            content: 'Keep patient lying flat, knees bent for comfort. Do NOT give food, water, or pain medication by mouth.',
            tip: 'Bent knees help relax abdominal muscles and reduce pain',
            image: '/images/flashcards/abdominal-positioning.jpg'
          },
          {
            step: 3,
            title: 'Monitor for Shock',
            content: 'Check pulse, blood pressure, consciousness every 5 minutes. Watch for rapid weak pulse, pale skin, confusion.',
            warning: 'Rapid deterioration indicates severe internal bleeding requiring immediate surgery',
            image: '/images/flashcards/shock-monitoring.jpg'
          },
          {
            step: 4,
            title: 'Prepare for Surgery',
            content: 'Note mechanism of injury, vital sign changes, pain location. Arrange immediate transport to trauma center.',
            warning: 'Internal organ injuries often require emergency surgery - time is critical',
            image: '/images/flashcards/surgery-preparation.jpg'
          }
        ]
      },
      {
        id: 'respiratory-failure',
        title: 'Respiratory Failure Management',
        description: 'Managing severe breathing difficulties and airway compromise',
        icon: '😷',
        steps: [
          {
            step: 1,
            title: 'Assess Breathing Adequacy',
            content: 'Check: respiratory rate, depth, effort, skin color, oxygen saturation if available. Look for accessory muscle use.',
            warning: 'Blue lips/fingernails indicate severe oxygen deficiency requiring immediate intervention',
            image: '/images/flashcards/breathing-assessment.jpg'
          },
          {
            step: 2,
            title: 'Open and Clear Airway',
            content: 'Head-tilt, chin-lift (if no spinal injury). Remove visible obstructions. Consider jaw-thrust if spinal injury suspected.',
            tip: 'If foreign body visible, try finger sweeps or back blows to dislodge',
            image: '/images/flashcards/airway-management.jpg'
          },
          {
            step: 3,
            title: 'Assist Ventilation',
            content: 'If breathing is inadequate: provide rescue breathing or bag-mask ventilation. Give oxygen if available.',
            warning: 'If patient stops breathing, begin immediate rescue breathing - brain damage occurs within 4-6 minutes',
            image: '/images/flashcards/assisted-ventilation.jpg'
          },
          {
            step: 4,
            title: 'Continuous Monitoring',
            content: 'Recheck breathing every 2-3 minutes. Be prepared to perform CPR if breathing stops completely.',
            warning: 'Respiratory failure can rapidly progress to cardiac arrest',
            image: '/images/flashcards/continuous-monitoring.jpg'
          }
        ]
      },
      {
        id: 'chest-abdominal-assessment',
        title: 'Chest & Abdominal Assessment',
        description: 'Systematic evaluation of chest and abdominal trauma',
        icon: '🔍',
        steps: [
          {
            step: 1,
            title: 'Look for Obvious Injuries',
            content: 'Inspect for: penetrating wounds, bruising patterns, deformities, paradoxical chest movement, distension.',
            tip: 'Remove clothing to fully assess - injuries can be hidden under garments',
            image: '/images/flashcards/visual-inspection.jpg'
          },
          {
            step: 2,
            title: 'Listen to Breathing',
            content: 'Listen for: decreased breath sounds, wheezing, gurgling, stridor. Compare both sides of chest.',
            warning: 'Absent breath sounds on one side may indicate pneumothorax or hemothorax',
            image: '/images/flashcards/breath-sounds.jpg'
          },
          {
            step: 3,
            title: 'Feel for Abnormalities',
            content: 'Gently palpate for: tenderness, rigidity, instability, crepitus (air under skin), pulse quality.',
            warning: 'Avoid deep palpation of abdomen - can worsen internal bleeding',
            image: '/images/flashcards/palpation-technique.jpg'
          },
          {
            step: 4,
            title: 'Prioritize and Document',
            content: 'Identify life-threatening injuries first. Document findings, mechanism of injury, vital signs for medical team.',
            tip: 'Use ABCDE approach: Airway, Breathing, Circulation, Disability, Exposure',
            image: '/images/flashcards/documentation.jpg'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'How should you seal a penetrating chest wound?',
          options: [
            'Cover completely with airtight seal',
            'Leave wound open to drain',
            'Tape plastic on 3 sides only, leaving one side open',
            'Apply pressure bandage only'
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: 'What is a sign of tension pneumothorax requiring immediate intervention?',
          options: [
            'Mild chest pain',
            'Tracheal deviation and severe breathing difficulty',
            'Slight cough',
            'Normal breathing'
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'Which position is best for a conscious patient with breathing difficulties?',
          options: [
            'Flat on back',
            'Face down',
            'Upright or leaning toward injured side',
            'On the uninjured side'
          ],
          correctAnswer: 2
        },
        {
          id: 4,
          question: 'What indicates possible internal organ damage in abdominal trauma?',
          options: [
            'Normal abdomen with no pain',
            'Rigid or distended abdomen with shock signs',
            'Soft abdomen with normal vitals',
            'No external bruising'
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: 'What should you NOT give to a patient with suspected internal abdominal injuries?',
          options: [
            'Oxygen',
            'Emotional support',
            'Food, water, or oral pain medication',
            'Blankets for warmth'
          ],
          correctAnswer: 2
        },
        {
          id: 6,
          question: 'Blue lips and fingernails in a trauma patient indicate:',
          options: [
            'Normal circulation',
            'Severe oxygen deficiency requiring immediate intervention',
            'Mild bruising',
            'Good oxygen levels'
          ],
          correctAnswer: 1
        },
        {
          id: 7,
          question: 'How often should you recheck breathing in a patient with respiratory failure?',
          options: [
            'Every 30 minutes',
            'Every 15 minutes',
            'Every 2-3 minutes',
            'Once per hour'
          ],
          correctAnswer: 2
        },
        {
          id: 8,
          question: 'When palpating the abdomen for trauma assessment, you should:',
          options: [
            'Apply deep pressure to find all injuries',
            'Use gentle palpation to avoid worsening internal bleeding',
            'Press as hard as possible',
            'Avoid touching the abdomen completely'
          ],
          correctAnswer: 1
        },
        {
          id: 9,
          question: 'Absent breath sounds on one side of the chest may indicate:',
          options: [
            'Normal breathing',
            'Pneumothorax or hemothorax',
            'Good lung function',
            'No significant injury'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'chemical-injuries',
    title: 'Chemical Injuries',
    description: 'Protocols for exposure to hazardous substances like white phosphorus, focusing on severe skin burns and respiratory distress.',
    icon: '☣️',
    color: 'yellow',
    duration: '40 min',
    videos: [
      {
        id: 'chemical-1',
        title: 'White Phosphorus Exposure',
        description: 'Specific treatment protocols for white phosphorus burns.',
        duration: '10:15',
        thumbnail: '/thumbnails/white-phosphorus.jpg',
        videoUrl: '/videos/white-phosphorus.mp4',
        transcript: 'White phosphorus burns require immediate and specific treatment...'
      },
      {
        id: 'chemical-2',
        title: 'Chemical Exposure Decontamination',
        description: 'Proper decontamination procedures for chemical exposure.',
        duration: '9:30',
        thumbnail: '/thumbnails/decontamination.jpg',
        videoUrl: '/videos/decontamination.mp4',
        transcript: 'Decontamination is crucial for chemical exposure...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'How should white phosphorus burns be treated?',
          options: [
            'Cover with oil',
            'Keep wet and remove particles',
            'Apply ice',
            'Use alcohol'
          ],
          correctAnswer: 1
        }
      ]
    }
  }
];

export const getModuleById = (id) => {
  return trainingModules.find(module => module.id === id);
};

export const getVideoById = (videoId) => {
  for (const module of trainingModules) {
    const video = module.videos.find(v => v.id === videoId);
    if (video) return video;
  }
  return null;
}; 