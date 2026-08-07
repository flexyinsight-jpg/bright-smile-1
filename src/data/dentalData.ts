import { DentalService, Dentist, Testimonial, FAQItem } from '../types';

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'clean-checkup',
    title: 'Routine Cleaning & Complete Checkup',
    category: 'preventative',
    shortDesc: 'Gentle ultrasonic plaque removal, smooth enamel polishing, and a painless digital checkup.',
    fullDesc: 'Keep your teeth healthy and bright with our relaxing cleaning session. We use quiet ultrasonic tools that gently lift plaque without scraping, followed by high-definition digital scans to keep track of your oral health.',
    price: '$120',
    duration: '45 mins',
    iconName: 'Sparkles',
    features: ['Ultrasonic tartar removal', 'Laser gum health screen', 'High-definition 3D intraoral scan', 'Remineralizing fluoride varnish'],
    popular: true,
  },
  {
    id: 'teeth-whitening',
    title: 'Gentle Laser Teeth Whitening',
    category: 'cosmetic',
    shortDesc: 'Brighten your natural smile up to 8 shades in a comfortable 60-minute relaxing visit.',
    fullDesc: 'Lift years of coffee, tea, or red wine stains using cold-laser technology combined with our custom anti-sensitivity shield gel. Enjoy TV or music during your treatment!',
    price: '$299',
    duration: '60 mins',
    iconName: 'Zap',
    features: ['Instant 8-shade brightening', 'Zero-sensitivity protective gel', 'Take-home touch-up kit included', 'Long-lasting 12-18 month results'],
    popular: true,
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    category: 'orthodontics',
    shortDesc: 'Discreet, comfortable clear aligners to straighten your teeth without traditional metal braces.',
    fullDesc: 'Transform your smile quietly. Custom-fitted 3D printed clear aligners allow you to eat whatever you like while gradually nudging your teeth into perfect alignment.',
    price: 'From $1,999',
    duration: '6-12 months',
    iconName: 'Smile',
    features: ['3D digital outcome simulation', 'No metal wires or food restrictions', 'Fewer office visits required', 'Retainer set included'],
    popular: true,
  },
  {
    id: 'dental-implants',
    title: 'Natural 3D Dental Implants',
    category: 'surgical',
    shortDesc: 'Permanent, natural-looking tooth replacement designed to match your natural smile seamlessly.',
    fullDesc: 'Replace missing teeth with biocompatible implants placed with computer-guided surgical precision. Restore full chewing confidence and prevent jawbone loss.',
    price: 'From $1,250',
    duration: '2-3 visits',
    iconName: 'ShieldCheck',
    features: ['Computer-guided precision placement', 'Bio-compatible titanium post', 'Natural shade-matched porcelain crown', 'Lifetime structural guarantee'],
  },
  {
    id: 'porcelain-veneers',
    title: 'Handcrafted Porcelain Veneers',
    category: 'cosmetic',
    shortDesc: 'Custom ultra-thin ceramic shells to fix chips, gaps, or permanent discoloration.',
    fullDesc: 'Designed by master ceramists to match your face shape and complexion. Durable, stain-resistant, and natural-looking porcelain veneers.',
    price: '$650 / tooth',
    duration: '2 visits',
    iconName: 'Award',
    features: ['Handcrafted ceramic art', 'Stain-resistant high durability', 'Minimal natural tooth preparation', 'Natural light transmission'],
  },
  {
    id: 'root-canal',
    title: 'Painless Root Canal Therapy',
    category: 'restorative',
    shortDesc: 'Gentle, modern treatment to eliminate tooth pain and save your natural tooth.',
    fullDesc: 'Forget the scary old myths! With modern micro-anesthesia, root canals today feel no different than receiving a standard filling. Relieve pain and preserve your tooth.',
    price: '$450',
    duration: '60-90 mins',
    iconName: 'Activity',
    features: ['Immediate pain relief', 'Microscopic infection clearing', 'Durable protective crown seal', 'Preserves natural root structure'],
  },
  {
    id: 'pediatric-care',
    title: 'Pediatric & Kids Dental Visits',
    category: 'preventative',
    shortDesc: 'Fun, friendly, and anxiety-free dental care designed especially for children.',
    fullDesc: 'Building happy dental habits early! Our pediatric room features fun games, ceiling screens, gentle sealants, and a prize box for every brave young visitor.',
    price: '$95',
    duration: '30 mins',
    iconName: 'Heart',
    features: ['Child-friendly environment', 'Protective dental sealants', 'Interactive tooth brushing guide', 'Free prize & dental kit'],
  }
];

export const DENTISTS: Dentist[] = [
  {
    id: 'dr-sarah-mitchell',
    name: 'Dr. Sarah Mitchell, DDS',
    role: 'Lead Cosmetic & Restorative Dentist',
    specialty: 'Cosmetic Dentistry & Gentle Makeovers',
    experience: '14+ Years Experience',
    bio: 'Harvard Dental graduate who believes dentistry should feel warm, relaxing, and personalized. Outside the clinic, Sarah loves hiking Marin County trails and baking sourdough bread for her family.',
    education: 'DDS - Harvard School of Dental Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewCount: 342,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance, DMD',
    role: 'Master Implantologist & Oral Surgeon',
    specialty: '3D Dental Implants & Restorations',
    experience: '12+ Years Experience',
    bio: 'UPenn graduate dedicated to painless, computer-guided dental restoration. Marcus volunteers with community health clinics on weekends and enjoys cycling across the Golden Gate.',
    education: 'DMD - UPenn School of Dental Medicine',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    reviewCount: 289,
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
  },
  {
    id: 'dr-elena-rodriguez',
    name: 'Dr. Elena Rodriguez, Ortho Spec.',
    role: 'Senior Orthodontic Specialist',
    specialty: 'Invisalign & Clear Orthodontics',
    experience: '10+ Years Experience',
    bio: 'Columbia University orthodontic scholar known for her gentle patience with anxious patients. Elena speaks fluent Spanish and English, and is an avid classical pianist.',
    education: 'MSc Orthodontics - Columbia University',
    image: 'https://images.unsplash.com/photo-1594824813566-7885a3977336?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewCount: 215,
    availableDays: ['Tue', 'Wed', 'Fri', 'Sat'],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Emily Watson',
    role: 'Architect & Mother of 2',
    rating: 5,
    date: '2 weeks ago',
    treatment: 'Laser Teeth Whitening',
    comment: 'I used to dread going to the dentist due to sensitive teeth. Dr. Mitchell put me completely at ease! The whitening gel had zero zings, and my teeth look so bright and natural.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'David Sterling',
    role: 'High School Teacher',
    rating: 5,
    date: '1 month ago',
    treatment: '3D Dental Implants',
    comment: 'Had a chipped tooth from a basketball game. Dr. Vance guided me through the implant process step-by-step. I felt zero pain, and the staff even provided a warm blanket during procedure!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Sophia Chen',
    role: 'Graphic Designer',
    rating: 5,
    date: '3 weeks ago',
    treatment: 'Invisalign® Clear Aligners',
    comment: 'The 3D preview showed me exactly how my smile would straighten in 8 months. The clinic atmosphere feels more like a relaxing spa than a clinic. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Michael Thompson',
    role: 'Small Business Owner',
    rating: 5,
    date: '2 months ago',
    treatment: 'Routine Cleaning',
    comment: 'Punctual, super friendly staff, and no judgment even though I had missed my checkups during the pandemic. They made me feel right at home.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    verified: true,
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'I feel nervous or anxious about dental visits. How do you help?',
    answer: 'You are not alone! Over half of our patients come to us with dental anxiety. We offer a Comfort Menu with noise-canceling headphones, ceiling screens to watch your favorite Netflix show, warm blankets, gentle numbing gels, and mild sedation options so you feel completely relaxed.',
  },
  {
    id: 'faq-2',
    category: 'insurance',
    question: 'Which dental insurance plans do you accept?',
    answer: 'We accept most major dental insurance providers, including Delta Dental, Cigna, Aetna, MetLife, Guardian, Humana, and BlueCross BlueShield. Our front desk handles all paperwork and claims on your behalf.',
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'What if I have a dental emergency outside clinic hours?',
    answer: 'We hold daily emergency slots and operate a 24/7 call line at (555) 019-2831. If you experience severe tooth pain, a chipped tooth, or trauma, contact us right away for same-day relief.',
  },
  {
    id: 'faq-4',
    category: 'treatments',
    question: 'Is laser teeth whitening painful or damaging to teeth?',
    answer: 'Not at all! We use hydrogen-peroxide gels formulated with potassium nitrate sensitivity shields and cool LED laser light. It brightens enamel safely without causing sharp zings.',
  },
  {
    id: 'faq-5',
    category: 'insurance',
    question: 'Do you offer payment plans if I do not have dental insurance?',
    answer: 'Yes! We believe everyone deserves quality dental care. We offer 0% interest monthly payment options through CareCredit and Sunbit, as well as an in-house Dental Wellness Membership for uninsured families.',
  }
];

export const TIME_SLOTS = [
  '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM', 
  '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM'
];

export const SUPPORTED_INSURANCE = [
  'Delta Dental', 'Cigna Healthcare', 'Aetna Dental', 
  'MetLife', 'Guardian Life', 'BlueCross BlueShield', 'Humana', 'CareCredit Financing'
];

