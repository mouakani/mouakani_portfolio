import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Grid Based Dispense System',
    description:
      'The project involved designing and implementing a grid-based vending machine system capable of precise positioning and dispensing operations. The system was controlled through a keypad interface to navigate a 3x4 grid, with integrated motorized mechanisms for product selection and dispensing.',
    image: 'https://www.dropbox.com/scl/fi/9heog5ge7br5hx42y6dbm/Screenshot-2025-12-03-001557.png?rlkey=icn05xvd3hlgeshb5d9xj83m6&st=z52ci3lr&raw=1',
    technologies: ['Motor Control', 'Arduino', 'Prototyping', 'Solidworks'],
    duration: '2 months',
    teamSize: 4,
    role: 'Lead Design',
    difficulty: 4,
    completedDate: 'Fall 2024',
    category: 'ME360',
    features: [
      'Grid-based positioning using X and Y motors for precise navigation across a 3x4 grid.',
      'Syringe-based motorized dispensing mechanism with adjustable speed and bidirectional functionality.',
      'Keypad interface for intuitive control of grid positions and operations.',
      'Automated return-to-origin (A1) after each operation for consistent performance.',
      'Thoroughly tested for accurate positioning and reliable dispensing.',
    ],
    challenges:
      'One of the main challenges faced during the project was maintaining alignment and minimizing friction in the motion rails. Ensuring smooth and consistent movement of the X and Y motors required careful calibration of the rails and addressing any mechanical resistance, which could impact positioning accuracy and overall system performance.'
  },
  {
    id: 2,
    title: 'Point-to-Point Communication Device',
    description:
      'This project aimed to create a light-based communication device capable of transmitting messages between two points with high accuracy and speed. The system utilized a 5 mW laser and a phototransistor to establish a reliable communication channel.',
    image: 'https://www.dropbox.com/scl/fi/91jrd5fp7lm0z25mboua3/IMG_5028.jpg?rlkey=2wb0s6rfq1655ifjzjiwhfswk&st=ngjfa2wa&raw=1',
    video: 'https://www.dropbox.com/scl/fi/966zrm8i9vtgtedfhskpd/IMG_5048-2.mp4?rlkey=mklebm08k69i4ocygjtgao883&st=vtw6xt9p&raw=1',
    technologies: [
      'Circuit Design',
      'Laser Cutting',
      'Optoelectronics',
      'Prototyping',
      'Mechanical Assembly',
    ],
    duration: '3 months',
    teamSize: 4,
    role: 'Mechanical Systems Engineer',
    difficulty: 5,
    completedDate: 'Fall 2023',
    category: 'Engineering Core',
    features: [
      'Wireless communication using light.',
      'Can transmit 12 key messages with over 97% accuracy.',
      'Effective range: 1ft–5.5ft.',
      'Durable housing made from laser-cut acrylic sheets.',
    ],
    challenges:
      'Ensuring stable light signal transmission and reception was critical, requiring precise alignment of the laser and phototransistor. Additionally, designing housing to minimize interferences posed a significant challenge.'
  },
  {
    id: 3,
    title: 'Gasket Machining Project',
    description:
      'This project involved fabricating a precise PVC gasket to fit a mechanical block using advanced manufacturing techniques. It began with detailed measurements and CAD modeling, followed by generating G-code for CNC milling. The final product was tested to ensure exact fitment and alignment using locating pins.',
    image: 'https://www.dropbox.com/scl/fi/mx2mq7ixmza3rspj5bevx/Screenshot-2024-12-09-003049.png?rlkey=j917mpnrqdm8o6wkciq8u45qj&st=n7mq0g2m&raw=1',
    technologies: [
      'Tolerancing',
      'HSMWorks',
      'CNC Machining',
      'Toolpath Optimization',
      'CAD Design',
    ],
    duration: '2 weeks',
    teamSize: 1,
    role: 'Manufacturing Engineer',
    difficulty: 2,
    completedDate: 'Fall 2024',
    category: 'ME360',
    features: [
      'Multi-cloud provider support',
      'Real-time metrics visualization',
      'Automated cost optimization',
      'Security compliance monitoring',
      'Custom alert configurations',
    ],
    challenges:
      'Ensuring tight tolerances during CNC milling and achieving an exact gasket fit required meticulous measurement and testing.'
  },
  {
    id: 4,
    title: 'Temperature Monitor',
    description:
      'A compact and efficient device designed to measure and display ambient temperature with high precision. The system incorporates an LCD for real-time readings and features LED/buzzer alerts to indicate specific temperature thresholds. Powered by an optimized energy source, the device can function continuously for extended periods.',
    image: 'https://www.dropbox.com/scl/fi/77xqrp92gwb8j9anda4aw/unnamed.jpg?rlkey=dkpdva0mgpv23vhr0cos23d5c&st=cl44v1bn&raw=1',
    technologies: [
      'Arduino Programming',
      'Circuit Design',
      'Power Optimization',
      'Needs Analysis',
    ],
    duration: '2 months',
    teamSize: 1,
    role: 'Lead Developer',
    difficulty: 3,
    completedDate: 'Spring 2023',
    category: 'Engineering Core',
    features: [
      'High-precision temperature measurement with 95% accuracy',
      'Real-time LCD display with LED/buzzer alert system',
      'Extended 16.2-hour operation on optimized power source',
      'Compact and efficient design for portable use',
      'Customizable temperature threshold settings',
    ],
    challenges:
      'The main challenges involved achieving high accuracy in sensor readings while maintaining power efficiency. Optimizing the power consumption required careful component selection and programming techniques to extend battery life without compromising performance.'
  },
  {
    id: 5,
    title: 'Cart Stability Prototype',
    description:
      'This project focused on designing and simulating and prototyping a wheeled cart capable of transporting a 12-inch vertical bar across a 5-foot track without toppling. Using SolidWorks, the cart, bar, and platform were modeled as a CAD assembly. The design was then tested using a motion simulation to evaluate its stability under various conditions.',
    image: 'https://www.dropbox.com/scl/fi/v8xiopru93aokg536krjc/IMG_6667.jpg?rlkey=np0q3o31xwens2nrz6yu5jmx4&st=35hkt9sd&raw=1',
    video: 'https://storage.googleapis.com/gridpicture/ouakani%20wheels.mp4',
    technologies: [
      'SolidWorks',
      'Motion Analysis',
      'CAD Design',
      'System Modeling',
      'Stability Analysis',
    ],
    duration: '3 weeks',
    teamSize: 4,
    role: 'Design Engineer',
    difficulty: 3,
    completedDate: 'Fall 2024',
    category: 'ME360',
    features: [
      'Multi-component CAD model assembly in SolidWorks',
      'Dynamic simulation with gravity and contact forces',
      'Motor-driven wheel integration',
      'Maximum acceleration of 0.620 m/s²',
      'Cross-platform simulation compatibility',
    ],
    challenges:
      'A key challenge was maintaining traction and stability during the carts movement, especially on smoother surfaces or with heavier loads. Implementing a four-wheel drive system could provide better power distribution and improved control, enhancing overall stability. Additionally, using a higher-friction base material would increase grip, reducing the likelihood of slippage and ensuring smoother operation across various surfaces.'
  },
  {
    id: 6,
    title: 'Torque Amplifier',
    description:
      'An advanced mechanical project focused on designing and implementing a sophisticated gearbox assembly created to amplify torque. The system was engineered to efficiently convert a high rpm input to a high torque output, utilizing a carefully calculated gear train powered by a 12V motor. The project emphasized precise gear relationships and input and output considerations to ensure real-world functionality.',
    image: 'https://www.dropbox.com/scl/fi/77xqrp92gwb8j9anda4aw/unnamed.jpg?rlkey=dkpdva0mgpv23vhr0cos23d5c&st=i2ogymas&raw=1',
    technologies: [
      'SolidWorks',
      'Mechanical Design',
      'Gear Systems',
      'CAD Modeling',
      'Motion Analysis'
    ],
    duration: '6 weeks',
    teamSize: 1,
    role: 'Lead Designer',
    difficulty: 2,
    completedDate: 'Fall 2023',
    category: 'CAD Projects',
    features: [
      '12V motor power system',
      'Precision-engineered gear train',
      'Optimized gear ratios for efficient power transfer',
      'Integrated rod attachment mechanism',
      'Complete assembly with precise gear mates'
    ],
    challenges:
      'The primary challenge was establishing precise gear relationships that would translate effectively and last long. This required careful consideration of gear ratios, spacing, and mechanical tolerances to ensure smooth operation and optimal power transfer through the system.'
  }
  ,
  {
    id: 7,
    title: 'Mechanically Actuated Profilometer (MAP)',
    description:
      'A fully automated profilometer carriage system designed to measure surface roughness along the full 5-foot length of polished stainless-steel tubes. The MAP provides consistent Ra/Rz data to verify that the polishing machine meets Vita Needle’s strict surface finish standards.',
    image: 'https://www.dropbox.com/scl/fi/0jg1tq5e6bcr0i434uz46/Screenshot-2025-12-03-000546.png?rlkey=xkah97p88kxq6pma8gn5lqxjw&st=2ljnwfm0&raw=1',
    video: 'LINK_TO_VIDEO_IF_YOU_HAVE_ONE',
    technologies: [
      'Stepper Motor Control',
      'Linear Motion Systems',
      'Microcontroller Programming',
      'Mechanical Assembly',
      'Precision Measurement'
    ],
    duration: '4 months',
    teamSize: 5,
    role: 'Mechanical Systems Engineer',
    difficulty: 4,
    completedDate: 'Fall 2025',
    category: 'Engineering Core',
    features: [
      'Automated 5-foot scanning for full-length surface roughness measurement.',
      'Rigid linear rail and carriage system for smooth, vibration-free motion.',
      'Fully integrated electronics using stepper drivers and control board.',
      'Accurate Ra/Rz collection for validating polishing machine performance.',
      'Ready for industrial integration and long-run testing.'
    ],
    challenges:
      'Designing a stable, low-friction carriage; tuning motion parameters for consistent speed; ensuring smooth integration between mechanical and electrical components.'
  }
];