// mrbenmeister.com — Recommendations data
// category values: 'food' | 'nightlife' | 'activity' | 'shopping' | 'landmark' | 'stay'

const BEN_RECS = [

  // ── UNITED STATES ──────────────────────────────────────────────────────────

  {
    id: 'r1',
    name: 'Antoinette Baking Co.',
    country: 'United States', state: 'Oklahoma', city: 'Tulsa',
    category: 'food',
    summary: "The best pastry spot in Tulsa. Croissants that rival anything I've had in Paris.",
    vibe: 9.1, img: null, photos: [],
    lat: 36.1549, lng: -95.9917,
    tags: ['pastry', 'coffee', 'breakfast', 'local-favorite', 'casual'],
    why: "Every single pastry is made with ridiculous care. The almond croissant alone is worth the trip."
  },
  {
    id: 'r2',
    name: 'The Philbrook Museum of Art',
    country: 'United States', state: 'Oklahoma', city: 'Tulsa',
    category: 'landmark',
    summary: "A stunning Italian Renaissance villa turned art museum, surrounded by 23 acres of gardens.",
    vibe: 9.4, img: null, photos: [],
    lat: 36.1225, lng: -95.9741,
    tags: ['art', 'gardens', 'architecture', 'museum', 'hidden-gem'],
    why: "You won't expect something this beautiful to exist in Oklahoma. The gardens alone are worth visiting on a Sunday morning."
  },
  {
    id: 'r3',
    name: 'Elgin Park',
    country: 'United States', state: 'Oklahoma', city: 'Tulsa',
    category: 'nightlife',
    summary: "A proper neighborhood cocktail bar. Low-key, well-stocked, great people.",
    vibe: 8.7, img: null, photos: [],
    lat: 36.1575, lng: -95.9933,
    tags: ['cocktails', 'date-night', 'neighborhood-bar', 'local-favorite'],
    why: "The kind of bar that doesn't need to try hard because it already gets everything right."
  },
  {
    id: 'r4',
    name: 'Venice Beach Boardwalk',
    country: 'United States', state: 'California', city: 'Los Angeles',
    category: 'activity',
    summary: "Chaotic, loud, sun-soaked, and completely worth it. Pure LA energy.",
    vibe: 8.2, img: null, photos: [],
    lat: 33.9850, lng: -118.4695,
    tags: ['beach', 'outdoor', 'people-watching', 'free', 'tourist'],
    why: "There is nowhere else on earth quite like this. Even if you've seen it all before, it still delivers."
  },
  {
    id: 'r5',
    name: "Terry Black's Barbecue",
    country: 'United States', state: 'Texas', city: 'Austin',
    category: 'food',
    summary: "Austin BBQ done right. Brisket so good it makes you question every other brisket you've had.",
    vibe: 9.3, img: null, photos: [],
    lat: 30.2547, lng: -97.7489,
    tags: ['bbq', 'barbecue', 'brisket', 'must-try', 'texas'],
    why: "The brisket has the perfect smoke ring, the perfect fat cap, the perfect bark. This is the benchmark."
  },

  // ── GERMANY ────────────────────────────────────────────────────────────────

  {
    id: 'r6',
    name: 'Brandenburg Gate',
    country: 'Germany', city: 'Berlin',
    category: 'landmark',
    summary: "One of Europe's most iconic monuments. Better at dawn than at noon.",
    vibe: 9.0, img: null, photos: [],
    lat: 52.5163, lng: 13.3777,
    tags: ['history', 'architecture', 'iconic', 'free', 'tourist'],
    why: "Show up before the tourist crowds. The gate at early morning light is a completely different experience."
  },
  {
    id: 'r7',
    name: 'Neues Odessa Bar',
    country: 'Germany', city: 'Berlin',
    category: 'nightlife',
    summary: "Berlin underground bar with serious cocktails and the right kind of dim lighting.",
    vibe: 8.8, img: null, photos: [],
    lat: 52.5290, lng: 13.3820,
    tags: ['cocktails', 'underground', 'date-night', 'hidden-gem', 'berlin'],
    why: "This is the Berlin bar experience distilled. No attitude, strong drinks, interesting crowd."
  },

  // ── CROATIA ────────────────────────────────────────────────────────────────

  {
    id: 'r8',
    name: 'Old Town Dubrovnik',
    country: 'Croatia', city: 'Dubrovnik',
    category: 'landmark',
    summary: "Walk the city walls at sunset. One of the most visually perfect places on the planet.",
    vibe: 9.6, img: null, photos: [],
    lat: 42.6413, lng: 18.1102,
    tags: ['historic', 'views', 'sunset', 'iconic', 'tourist'],
    why: "The walk around the old city walls is genuinely one of the most beautiful hours you can spend anywhere in Europe."
  },
  {
    id: 'r9',
    name: 'Restaurant 360',
    country: 'Croatia', city: 'Dubrovnik',
    category: 'food',
    summary: "Fine dining perched on the city walls above the Adriatic. The view earns its own star.",
    vibe: 9.2, img: null, photos: [],
    lat: 42.6411, lng: 18.1082,
    tags: ['fine-dining', 'views', 'seafood', 'splurge', 'date-night'],
    why: "Splurge-worthy. The tasting menu is excellent but you're really there for the view at sunset."
  },

  // ── INDONESIA ──────────────────────────────────────────────────────────────

  {
    id: 'r10',
    name: 'Tegalalang Rice Terraces',
    country: 'Indonesia', city: 'Bali',
    category: 'activity',
    summary: "Tiered rice paddies carved into the hillside. One of those places that actually lives up to the photos.",
    vibe: 9.1, img: null, photos: [],
    lat: -8.4312, lng: 115.2797,
    tags: ['nature', 'scenery', 'outdoor', 'photography', 'bali'],
    why: "Go early. The light through the terraces in the morning is something else entirely."
  },
  {
    id: 'r11',
    name: 'Ku De Ta',
    country: 'Indonesia', city: 'Bali',
    category: 'nightlife',
    summary: "Beachfront bar on Seminyak Beach. Sunset drinks here are non-negotiable.",
    vibe: 8.9, img: null, photos: [],
    lat: -8.6882, lng: 115.1541,
    tags: ['beach', 'sunset', 'cocktails', 'outdoor', 'splurge'],
    why: "The Bali sunset from this terrace is the kind of thing that makes you rethink your schedule. Stay for at least two drinks."
  },

  // ── NEW ZEALAND ────────────────────────────────────────────────────────────

  {
    id: 'r12',
    name: 'Tongariro Alpine Crossing',
    country: 'New Zealand', city: 'Tongariro',
    category: 'activity',
    summary: "New Zealand's most famous day hike. Volcanic craters, emerald lakes, and serious elevation.",
    vibe: 9.5, img: null, photos: [],
    lat: -39.1329, lng: 175.6719,
    tags: ['hiking', 'nature', 'outdoor', 'must-do', 'views'],
    why: "One of the best day hikes I've ever done. The Emerald Lakes section is something out of a movie."
  },
  {
    id: 'r13',
    name: 'The Grill by Sean Connolly',
    country: 'New Zealand', city: 'Auckland',
    category: 'food',
    summary: "Serious steak, serious wine list, serious room. Auckland's best steakhouse.",
    vibe: 9.0, img: null, photos: [],
    lat: -36.8435, lng: 174.7713,
    tags: ['steak', 'fine-dining', 'wine', 'splurge', 'date-night'],
    why: "The dry-aged ribeye is exceptional. Come hungry, come ready to linger."
  }

];

// Continent lookup — add countries here as the list grows
const CONTINENT_LOOKUP = {
  'United States': 'North America', 'Canada': 'North America', 'Mexico': 'North America',
  'Cuba': 'Caribbean', 'Dominican Republic': 'Caribbean', 'Jamaica': 'Caribbean', 'Puerto Rico': 'Caribbean',
  'Germany': 'Europe', 'Croatia': 'Europe', 'France': 'Europe', 'Italy': 'Europe',
  'Spain': 'Europe', 'Portugal': 'Europe', 'United Kingdom': 'Europe', 'Netherlands': 'Europe',
  'Switzerland': 'Europe', 'Austria': 'Europe', 'Greece': 'Europe', 'Czech Republic': 'Europe',
  'Hungary': 'Europe', 'Poland': 'Europe', 'Denmark': 'Europe', 'Sweden': 'Europe',
  'Norway': 'Europe', 'Iceland': 'Europe', 'Ireland': 'Europe', 'Belgium': 'Europe',
  'Montenegro': 'Europe', 'Slovenia': 'Europe', 'Serbia': 'Europe', 'Albania': 'Europe',
  'Indonesia': 'Asia', 'Japan': 'Asia', 'Thailand': 'Asia', 'Vietnam': 'Asia',
  'India': 'Asia', 'China': 'Asia', 'South Korea': 'Asia', 'Singapore': 'Asia',
  'Malaysia': 'Asia', 'Philippines': 'Asia', 'Cambodia': 'Asia', 'Nepal': 'Asia',
  'Sri Lanka': 'Asia', 'Myanmar': 'Asia', 'Laos': 'Asia', 'Taiwan': 'Asia',
  'New Zealand': 'Oceania', 'Australia': 'Oceania', 'Fiji': 'Oceania',
  'Brazil': 'South America', 'Argentina': 'South America', 'Colombia': 'South America',
  'Peru': 'South America', 'Chile': 'South America', 'Ecuador': 'South America',
  'Uruguay': 'South America', 'Bolivia': 'South America', 'Paraguay': 'South America',
  'South Africa': 'Africa', 'Morocco': 'Africa', 'Kenya': 'Africa',
  'Tanzania': 'Africa', 'Egypt': 'Africa', 'Ethiopia': 'Africa',
  'Ghana': 'Africa', 'Senegal': 'Africa', 'Rwanda': 'Africa',
};

// Category metadata
const REC_CATEGORIES = [
  { id: 'food',      label: 'Food & Drink',       icon: '\u{1F37D}' },
  { id: 'nightlife', label: 'Nightlife',           icon: '\u{1F378}' },
  { id: 'activity',  label: 'Activities',          icon: '\u{1F3D4}' },
  { id: 'shopping',  label: 'Shopping',            icon: '\u{1F6CD}' },
  { id: 'landmark',  label: 'Landmarks & Culture', icon: '\u{1F3DB}' },
  { id: 'stay',      label: 'Stay',                icon: '\u{1F3E8}' }
];
