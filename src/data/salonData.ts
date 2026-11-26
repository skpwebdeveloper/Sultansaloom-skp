export type ServiceCategory = 'all' | 'hair-color' | 'scalp-therapy' | 'skin-grooming';

export interface SalonService {
  id: string;
  name: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  duration: string;
  description: string;
  priceNote: string;
}

export interface StudioPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
  aspectClass: string;
}

export interface ClientReview {
  id: string;
  author: string;
  service: string;
  rating: string;
  quote: string;
  outcome: string;
}

export const SALON_INFO = {
  name: 'SULTANS Salon',
  city: 'Sheikhupura',
  addressLine1: 'Opposite Stadium Road, near Stadium Park',
  addressLine2: 'Sheikhupura, Punjab, Pakistan',
  primaryPhone: '+92 310 1489947',
  secondaryPhone: '+92 306 4611205',
  whatsappNumber: '923101489947',
  hoursShort: '9:00 AM – 1:00 AM',
  hoursFull: 'Open Daily (Monday – Sunday): 9:00 AM – 1:00 AM',
  rating: '4.9',
  ratingScale: '5.0',
  googleShareUrl: 'https://share.google/Za3vswQ97o20edVdv',
};

export const STUDIO_PILLARS: StudioPillar[] = [
  {
    number: '01.',
    title: 'Precision Haircuts, Styling & Global Color',
    subtitle: 'Architectural Cuts & Seamless Color',
    description:
      'Tailored cuts sculpted to facial structure and hair texture, paired with ammonia-safe global hair coloring, dimensional ombre, and editorial blowouts.',
    highlights: [
      'Consultation-led cutting & texture balancing',
      'Global hair coloring & hand-blended ombre',
      'Keratin smoothing & event-ready styling',
    ],
    imageUrl: '/src/assets/images/hair_styling_color_1795674637084.jpg',
    imageAlt: 'Master stylist performing a precision haircut at SULTANS Salon',
    aspectClass: 'aspect-[4/3]',
  },
  {
    number: '02.',
    title: 'PRP & Laser Scalp Restoration',
    subtitle: 'Targeted Follicle & Density Science',
    description:
      'Evidence-backed scalp care combining platelet-rich plasma sessions, low-level laser hair growth therapy, and concentrated follicular serum infusions.',
    highlights: [
      'PRP hair restoration protocols',
      'Laser hair growth light therapy',
      'Clinical hair growth serum therapy',
    ],
    imageUrl: '/src/assets/images/scalp_therapy_treatment_1795674637142.jpg',
    imageAlt: 'Clinical hair growth serum droppers and precision scalp tools on travertine stone',
    aspectClass: 'aspect-[4/3]',
  },
  {
    number: '03.',
    title: 'Skincare, Manicures & Grooming Lounge',
    subtitle: 'Restorative Care Until 1:00 AM',
    description:
      'Unwind in calm treatment bays offering purifying facials, manicured hand care, and hygienic hair removal designed around Sheikhupura evening schedules.',
    highlights: [
      'Deep-cleansing & hydrating facial treatments',
      'Executive manicures & nail conditioning',
      'Clean, sensitive-skin hair removal & waxing',
    ],
    imageUrl: '/src/assets/images/grooming_skincare_lounge_1795674638451.jpg',
    imageAlt: 'Luxury skincare and manicure station with warm linen towels and botanical oils',
    aspectClass: 'aspect-[4/3]',
  },
];

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'precision-haircut',
    name: 'Signature Haircut & Restyle',
    category: 'hair-color',
    categoryLabel: 'Hair & Color',
    duration: '45 min',
    description:
      'Diagnostic consultation, precision scissor and taper work, purifying wash, and finished blow-dry styling.',
    priceNote: 'Consultation included',
  },
  {
    id: 'global-hair-color',
    name: 'Global Hair Coloring',
    category: 'hair-color',
    categoryLabel: 'Hair & Color',
    duration: '90 min',
    description:
      'Full-head rich tone coverage using bond-protecting pigments calibrated for natural shine and longevity.',
    priceNote: 'Custom shade match',
  },
  {
    id: 'ombre-coloring',
    name: 'Dimensional Ombre & Toning',
    category: 'hair-color',
    categoryLabel: 'Hair & Color',
    duration: '120 min',
    description:
      'Graduated light-to-dark blending with gloss toning and restorative post-color lipid mask.',
    priceNote: 'Strand test included',
  },
  {
    id: 'event-styling',
    name: 'Signature Event & Groom Styling',
    category: 'hair-color',
    categoryLabel: 'Hair & Color',
    duration: '60 min',
    description:
      'Long-hold formal styling, beard sculpting or blowout finish built for weddings and evening occasions.',
    priceNote: 'Late-evening slots',
  },
  {
    id: 'prp-hair-treatment',
    name: 'PRP Hair Restoration Therapy',
    category: 'scalp-therapy',
    categoryLabel: 'Scalp Therapy',
    duration: '60 min',
    description:
      'Concentrated platelet-rich plasma protocol focused on revitalizing dormant follicles and improving hair density.',
    priceNote: 'Multi-session plan',
  },
  {
    id: 'laser-hair-growth',
    name: 'Laser Hair Growth Therapy',
    category: 'scalp-therapy',
    categoryLabel: 'Scalp Therapy',
    duration: '40 min',
    description:
      'Non-invasive photobiomodulation sessions designed to stimulate scalp micro-circulation and reduce shedding.',
    priceNote: 'Zero downtime',
  },
  {
    id: 'hair-growth-serum',
    name: 'Hair Growth Serum Infusion',
    category: 'scalp-therapy',
    categoryLabel: 'Scalp Therapy',
    duration: '45 min',
    description:
      'Gentle scalp exfoliation followed by peptide and botanical growth serum absorption therapy.',
    priceNote: 'Targeted scalp care',
  },
  {
    id: 'clinical-facial',
    name: 'Deep Cleansing & Glow Facial',
    category: 'skin-grooming',
    categoryLabel: 'Skin & Grooming',
    duration: '50 min',
    description:
      'Steam extraction, enzymatic exfoliation, soothing hydro-mask, and lymphatic facial massage.',
    priceNote: 'Skin-type matched',
  },
  {
    id: 'hand-manicure',
    name: 'Executive Manicure & Hand Care',
    category: 'skin-grooming',
    categoryLabel: 'Skin & Grooming',
    duration: '35 min',
    description:
      'Cuticle detailing, nail shaping, mineral scrub, and warm towel hydration finish.',
    priceNote: 'Sterilized instruments',
  },
  {
    id: 'grooming-waxing',
    name: 'Precision Hair Removal & Grooming',
    category: 'skin-grooming',
    categoryLabel: 'Skin & Grooming',
    duration: '30 min',
    description:
      'Low-temperature soothing wax and clean detailing tailored for sensitive skin comfort.',
    priceNote: 'Single-use applicators',
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    service: 'Precision Haircut & Beard Styling',
    rating: '5.0 / 5.0',
    quote:
      'Before starting, the stylist checked my hair growth pattern and suggested a cleaner taper rather than rushing straight in.',
    outcome: 'Consistent cut that holds shape cleanly for weeks.',
  },
  {
    id: 'rev-2',
    author: 'Usman Khalid',
    service: 'Hair Growth Serum & Laser Therapy',
    rating: '4.9 / 5.0',
    quote:
      'Having clinical scalp treatments right opposite Stadium Road saves travelling to Lahore. The studio stays spotless even at 11 PM.',
    outcome: 'Completed 4 scalp sessions with noticeable reduction in breakage.',
  },
  {
    id: 'rev-3',
    author: 'Bilal Ahmad',
    service: 'Facial & Executive Manicure',
    rating: '5.0 / 5.0',
    quote:
      'Booked a late-night slot before a family wedding. They stay open until 1:00 AM and never compromise on product quality or hygiene.',
    outcome: 'Zero wait time on pre-booked evening appointment.',
  },
];

export const TIME_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '01:00 PM',
  '03:30 PM',
  '05:30 PM',
  '07:30 PM',
  '09:30 PM',
  '11:30 PM',
];
