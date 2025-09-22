import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Grid Based Dispense System',
    description:
      'The project involved designing and implementing a grid-based vending machine system capable of precise positioning and dispensing operations. The system was controlled through a keypad interface to navigate a 3x4 grid, with integrated motorized mechanisms for product selection and dispensing.',
    image: 'https://storage.googleapis.com/gridpicture/image.jpg',
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
    image: 'https://storage.googleapis.com/gridpicture/phAoLRCYCLnLQlNi15D5ge9UMOvi-Eeuu-iZ0iCZjHxs6R5dr_yT6a-XDTqB5b8KFqVd4Uwc9t2sulDH9vmSkoOuN0mUurGtWmXrNQLW2Qu3xBc3ZSrzYkd0Rpjar3f-hM-SDYyInbA6-KPGVK2XxqA.png',
    video: 'https://storage.googleapis.com/gridpicture/Point-to-Point%20Laser%20Communication%20Device%20Testing.mp4',
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
    image: 'https://storage.googleapis.com/gridpicture/Screenshot%202024-12-09%20003049.png',
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
    image: 'https://storage.googleapis.com/gridpicture/Screenshot%202024-12-09%20002706.png',
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
    image: 'https://storage.googleapis.com/gridpicture/IMG_6667.jpg',
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
    title: 'Gearbox Assembly',
    description:
      'An advanced mechanical project focused on designing and implementing a sophisticated gearbox assembly in SolidWorks. The system was engineered to efficiently rotate an object attached to the end of a rod, utilizing a carefully calculated gear train powered by dual 12V motors. The project emphasized precise gear mate relationships to ensure real-world functionality.',
    image: 'https://storage.googleapis.com/gridpicture/image%20(1).png',
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
      'Dual 12V motor power system',
      'Precision-engineered gear train',
      'Optimized gear ratios for efficient power transfer',
      'Integrated rod attachment mechanism',
      'Complete assembly with precise gear mates'
    ],
    challenges:
      'The primary challenge was establishing precise gear mate relationships that would translate effectively to real-world applications. This required careful consideration of gear ratios, spacing, and mechanical tolerances to ensure smooth operation and optimal power transfer through the system.'
  }
];