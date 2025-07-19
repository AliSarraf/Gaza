export const trainingModules = [
  {
    id: 'traumatic-injuries',
    title: 'Traumatic Injuries',
    description: 'Guidance on managing blast injuries, shrapnel wounds, internal bleeding, limb amputations, fractures, and crush injuries.',
    icon: '🩸',
    color: 'red',
    duration: '45 min',
    videos: [
      {
        id: 'trauma-1',
        title: 'Severe Bleeding Control',
        description: 'Learn to control severe bleeding using direct pressure, tourniquets, and hemostatic agents.',
        duration: '8:30',
        thumbnail: '/thumbnails/bleeding-control.jpg',
        videoUrl: '/videos/bleeding-control.mp4',
        transcript: 'In this video, we will learn how to control severe bleeding...'
      },
      {
        id: 'trauma-2',
        title: 'Fracture Management',
        description: 'Proper techniques for immobilizing fractures and preventing further injury.',
        duration: '12:15',
        thumbnail: '/thumbnails/fracture-management.jpg',
        videoUrl: '/videos/fracture-management.mp4',
        transcript: 'Fractures are common in blast injuries...'
      },
      {
        id: 'trauma-3',
        title: 'Crush Injury Response',
        description: 'Immediate response to crush injuries and prevention of crush syndrome.',
        duration: '10:45',
        thumbnail: '/thumbnails/crush-injury.jpg',
        videoUrl: '/videos/crush-injury.mp4',
        transcript: 'Crush injuries can lead to life-threatening complications...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What is the first step when treating severe bleeding?',
          options: [
            'Apply a tourniquet immediately',
            'Apply direct pressure with clean cloth',
            'Elevate the limb',
            'Call for help and wait'
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'How long should you apply direct pressure to control bleeding?',
          options: [
            '30 seconds',
            '2-3 minutes',
            '5-10 minutes',
            'Until medical help arrives'
          ],
          correctAnswer: 3
        }
      ]
    }
  },
  {
    id: 'burns-management',
    title: 'Burns Management',
    description: 'Protocols for first to third-degree burns, including those from explosions and chemical agents.',
    icon: '🔥',
    color: 'orange',
    duration: '40 min',
    videos: [
      {
        id: 'burns-1',
        title: 'Burn Assessment and Classification',
        description: 'How to assess burn severity and determine appropriate treatment.',
        duration: '9:20',
        thumbnail: '/thumbnails/burn-assessment.jpg',
        videoUrl: '/videos/burn-assessment.mp4',
        transcript: 'Burns are classified by depth and severity...'
      },
      {
        id: 'burns-2',
        title: 'Chemical Burn Treatment',
        description: 'Specific protocols for chemical burns including white phosphorus exposure.',
        duration: '11:30',
        thumbnail: '/thumbnails/chemical-burns.jpg',
        videoUrl: '/videos/chemical-burns.mp4',
        transcript: 'Chemical burns require immediate and specific treatment...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What should you do first for a chemical burn?',
          options: [
            'Apply ice',
            'Flush with water for 20 minutes',
            'Apply ointment',
            'Cover with bandage'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'head-spinal-trauma',
    title: 'Head and Spinal Trauma',
    description: 'Training on identifying and providing initial care for traumatic brain injuries and spinal cord trauma.',
    icon: '🧠',
    color: 'purple',
    duration: '35 min',
    videos: [
      {
        id: 'head-1',
        title: 'Traumatic Brain Injury Recognition',
        description: 'Signs and symptoms of TBI and immediate response protocols.',
        duration: '8:45',
        thumbnail: '/thumbnails/tbi-recognition.jpg',
        videoUrl: '/videos/tbi-recognition.mp4',
        transcript: 'Traumatic brain injuries can be life-threatening...'
      },
      {
        id: 'head-2',
        title: 'Spinal Injury Management',
        description: 'Proper handling and immobilization of suspected spinal injuries.',
        duration: '10:15',
        thumbnail: '/thumbnails/spinal-injury.jpg',
        videoUrl: '/videos/spinal-injury.mp4',
        transcript: 'Spinal injuries require careful handling...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What is a key sign of traumatic brain injury?',
          options: [
            'Fever',
            'Confusion or altered consciousness',
            'Nausea',
            'All of the above'
          ],
          correctAnswer: 3
        }
      ]
    }
  },
  {
    id: 'chest-abdominal-injuries',
    title: 'Chest and Abdominal Injuries',
    description: 'Addressing critical conditions like lung punctures, internal organ damage, and respiratory failure.',
    icon: '🫁',
    color: 'blue',
    duration: '50 min',
    videos: [
      {
        id: 'chest-1',
        title: 'Chest Trauma Assessment',
        description: 'Identifying and managing chest injuries including pneumothorax.',
        duration: '12:30',
        thumbnail: '/thumbnails/chest-trauma.jpg',
        videoUrl: '/videos/chest-trauma.mp4',
        transcript: 'Chest injuries can rapidly become life-threatening...'
      },
      {
        id: 'chest-2',
        title: 'Abdominal Injury Management',
        description: 'Recognizing internal bleeding and organ damage.',
        duration: '11:45',
        thumbnail: '/thumbnails/abdominal-injury.jpg',
        videoUrl: '/videos/abdominal-injury.mp4',
        transcript: 'Abdominal injuries may not show obvious external signs...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What is a sign of tension pneumothorax?',
          options: [
            'Chest pain',
            'Difficulty breathing and tracheal deviation',
            'Coughing',
            'Fever'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'vulnerable-populations',
    title: 'Specialized Care for Vulnerable Populations',
    description: 'Modules for pediatric emergency cases and critical care for elderly and chronic patients.',
    icon: '👶',
    color: 'pink',
    duration: '55 min',
    videos: [
      {
        id: 'pediatric-1',
        title: 'Pediatric Emergency Response',
        description: 'Special considerations for treating children in emergency situations.',
        duration: '14:20',
        thumbnail: '/thumbnails/pediatric-emergency.jpg',
        videoUrl: '/videos/pediatric-emergency.mp4',
        transcript: 'Children require special consideration in emergencies...'
      },
      {
        id: 'elderly-1',
        title: 'Elderly Patient Care',
        description: 'Managing chronic conditions and interrupted treatments in elderly patients.',
        duration: '13:15',
        thumbnail: '/thumbnails/elderly-care.jpg',
        videoUrl: '/videos/elderly-care.mp4',
        transcript: 'Elderly patients often have multiple chronic conditions...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What is different about pediatric vital signs?',
          options: [
            'They are always higher than adults',
            'They vary by age and are generally faster',
            'They are always lower than adults',
            'They are the same as adults'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'building-collapse',
    title: 'Building Collapse Injuries',
    description: 'Specific guidance on crush syndrome, suffocation, fractures, and immediate steps before surgical intervention.',
    icon: '🏗️',
    color: 'gray',
    duration: '45 min',
    videos: [
      {
        id: 'collapse-1',
        title: 'Crush Syndrome Prevention',
        description: 'Preventing and managing crush syndrome in building collapse scenarios.',
        duration: '11:30',
        thumbnail: '/thumbnails/crush-syndrome.jpg',
        videoUrl: '/videos/crush-syndrome.mp4',
        transcript: 'Crush syndrome occurs when muscle tissue is damaged...'
      },
      {
        id: 'collapse-2',
        title: 'Extrication Techniques',
        description: 'Safe techniques for extricating victims from collapsed structures.',
        duration: '12:45',
        thumbnail: '/thumbnails/extrication.jpg',
        videoUrl: '/videos/extrication.mp4',
        transcript: 'Extrication requires careful planning and execution...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What is the main risk of crush syndrome?',
          options: [
            'Infection',
            'Kidney failure',
            'Bleeding',
            'Fever'
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
  },
  {
    id: 'psychological-first-aid',
    title: 'Psychological First Aid',
    description: 'Addressing acute stress reactions, PTSD, insomnia, anxiety, and depression in emergency contexts.',
    icon: '🧠',
    color: 'green',
    duration: '50 min',
    videos: [
      {
        id: 'psych-1',
        title: 'Acute Stress Response',
        description: 'Recognizing and managing acute stress reactions in emergency situations.',
        duration: '12:00',
        thumbnail: '/thumbnails/acute-stress.jpg',
        videoUrl: '/videos/acute-stress.mp4',
        transcript: 'Acute stress reactions are normal responses to trauma...'
      },
      {
        id: 'psych-2',
        title: 'Child Trauma Support',
        description: 'Supporting children experiencing trauma and PTSD symptoms.',
        duration: '11:45',
        thumbnail: '/thumbnails/child-trauma.jpg',
        videoUrl: '/videos/child-trauma.mp4',
        transcript: 'Children process trauma differently than adults...'
      }
    ],
    quiz: {
      questions: [
        {
          id: 1,
          question: 'What is a normal response to trauma?',
          options: [
            'Immediate recovery',
            'Acute stress reactions',
            'No emotional response',
            'Complete memory loss'
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