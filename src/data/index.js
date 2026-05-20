// ─── TABLE EXPERIENCES ────────────────────
export const TABLES = [
  {
    id: 1,
    genre: 'Romantic Date',
    icon: '🕯️',
    cap: 2,
    desc: 'Candlelit alcove draped in roses — intimate, private, unforgettable.',
    price: 1200,
    accent: '#c0573a',
  },
  {
    id: 2,
    genre: 'Family Feast',
    icon: '👨‍👩‍👧‍👦',
    cap: 8,
    desc: 'Sprawling round table with warm lighting and a kid-friendly setup.',
    price: 2500,
    accent: '#b07d2e',
  },
  {
    id: 3,
    genre: 'Friends Hangout',
    icon: '🥂',
    cap: 6,
    desc: 'Lively booth with shared platters, cocktails & a festive atmosphere.',
    price: 1800,
    accent: '#3a7c5e',
  },
  {
    id: 4,
    genre: 'Business Lunch',
    icon: '💼',
    cap: 4,
    desc: 'Hushed corner, power sockets, premium service & total discretion.',
    price: 2000,
    accent: '#2e5c8a',
  },
  {
    id: 5,
    genre: 'Birthday Bash',
    icon: '🎂',
    cap: 10,
    desc: 'Decorated table, personalised cake & complimentary champagne.',
    price: 3500,
    accent: '#7a3a8c',
  },
  {
    id: 6,
    genre: 'Solo Retreat',
    icon: '📖',
    cap: 1,
    desc: 'Sunlit window seat, curated playlist and your thoughts for company.',
    price: 600,
    accent: '#5c7a3a',
  },
];

// ─── MENU ─────────────────────────────────
export const MENU_ITEMS = [
  { cat: 'Starters', name: 'Burrata & Heirloom',    desc: 'Whipped burrata, tomato gel, micro basil',        price: '₹680',   tag: "Chef's Pick" },
  { cat: 'Starters', name: 'Smoked Salmon Tartare', desc: 'Capers, dill cream, brioche crisps',              price: '₹780',   tag: '' },
  { cat: 'Starters', name: 'Lobster Bisque',         desc: 'Cognac cream, chive oil, sourdough croutons',    price: '₹920',   tag: 'New' },
  { cat: 'Mains',    name: 'Lamb Rack Provençal',    desc: 'Herb crust, ratatouille, jus rosé',               price: '₹2,100', tag: 'Signature' },
  { cat: 'Mains',    name: 'Black Truffle Risotto',  desc: 'Arborio, aged parmesan, truffle oil',             price: '₹1,600', tag: 'Veg' },
  { cat: 'Mains',    name: 'Sea Bass en Papillote',  desc: 'Fennel, lemon butter, seasonal greens',           price: '₹1,850', tag: '' },
  { cat: 'Mains',    name: 'Duck Confit',             desc: 'Savoy cabbage, cherry reduction, pommes purée',  price: '₹1,950', tag: 'Chef Pick' },
  { cat: 'Desserts', name: 'Valrhona Fondant',        desc: 'Dark chocolate, salted caramel, gold leaf',      price: '₹620',   tag: 'Best Seller' },
  { cat: 'Desserts', name: 'Crème Brûlée',            desc: 'Vanilla bean, burnt sugar crust, berry compote', price: '₹540',   tag: '' },
];

// ─── TESTIMONIALS ─────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    role: 'Food Critic, Mint',
    text: 'The lamb rack was poetry on a plate. Élite Table has redefined fine dining in Delhi.',
    stars: 5,
  },
  {
    name: 'Rahul & Priya',
    role: 'Anniversary Dinner',
    text: 'The candlelit table, the attentive staff — every detail was perfect. We will be back.',
    stars: 5,
  },
  {
    name: 'Karan Mehta',
    role: 'Corporate Client',
    text: 'Hosted a client lunch here. The privacy, the food, the service — world-class.',
    stars: 5,
  },
];

// ─── GALLERY ITEMS ────────────────────────
export const GALLERY_ITEMS = [
  { emoji: '🥗', label: 'Seasonal Salads' },
  { emoji: '🥩', label: 'Prime Cuts' },
  { emoji: '🍷', label: 'Curated Wines' },
  { emoji: '🎂', label: 'Artisan Desserts' },
  { emoji: '🦞', label: 'Seafood Selection' },
  { emoji: '🫙', label: 'House Preserves' },
  { emoji: '🍄', label: 'Forest Mushrooms' },
  { emoji: '🍋', label: 'Citrus Creations' },
];

// ─── EXPERIENCE CARDS ─────────────────────
export const EXPERIENCE_CARDS = [
  { icon: '🌿', title: 'Farm to Table',     body: 'Seasonal produce sourced from curated farms within 200 km. Freshness is our philosophy.' },
  { icon: '🍷', title: 'Sommelier Curated', body: 'A 300-label wine cellar, paired expertly with every dish for a complete sensory journey.' },
  { icon: '👨‍🍳', title: 'Chef Awarded',     body: 'Our head chef, Vikram Nair, has earned two National Culinary Excellence Awards.' },
  { icon: '🔒', title: 'Private Dining',    body: 'Discreet private rooms for exclusive corporate & personal celebrations.' },
];

// ─── BOOKING CONSTANTS ────────────────────
export const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

export const BOOKING_STEPS = ['Choose Table', 'Your Details', 'Payment', 'Confirmed'];
