// mrbenmeister.com - Recommendations data
// Each entry is a place Ben personally recommends.
// Category values: 'restaurant' | 'bar' | 'activity' | 'shopping' | 'landmark'
// For US entries, include a `state` field.

const BEN_RECS = [

  // -- UNITED STATES --

  {
    id: 'r1',
    name: 'Antoinette Baking Co.',
    country: 'United States', state: 'Oklahoma', city: 'Tulsa',
    category: 'restaurant',
    summary: "The best pastry spot in Tulsa. Croissants that rival anything I've had in Paris.",
    vibe: 9.1,
    img: null,
    photos: [],
    lat: 36.1549, lng: -95.9917,
    tags: ['Breakfast', 'Coffee', 'Pastries'],
    why: "Every single pastry is made with ridiculous care. The almond croissant alone is worth the trip."
  },
  {
    id: 'r2',
    name: 'The Philbrook Museum of Art',
    country: 'United States', state: 'Oklahoma', city: 'Tulsa',
    category: 'landmark',
    summary: "A stunning Italian Renaissance villa turned art museum, surrounded by 23 acres of gardens.",
    vibe: 9.4,
    img: null,
    photos: [],
    lat: 36.1225, lng: -95.9741,
    tags: ['Art', 'Gardens', 'Architecture'],
    why: "You won't expect something this beautiful to exist in Oklahoma. The gardens alone are worth visiting on a Sunday morning."
  },
  {
    id: 'r3',
    name: 'Elgin Park',
    country: 'United States', state: 'Oklahoma', city: 'Tulsa',
    category: 'bar',
    summary: "A proper neighborhood cocktail bar. Low-key, well-stocked, great people.",
    vibe: 8.7,
    img: null,
    photos: [],
    lat: 36.1575, lng: -95.9933,
    tags: ['Cocktails', 'Neighborhood', 'Date Night'],
    why: "The kind of bar that doesn't need to try hard because it already gets everything right."
  },
  {
    id: 'r4',
    name: 'Venice Beach Boardwalk',
    country: 'United States', state: 'California', city: 'Los Angeles',
    category: 'activity',
    summary: "Chaotic, loud, sun-soaked, and completely worth it. Pure LA energy.",
    vibe: 8.2,
    img: null,
    photos: [],
    lat: 33.9850, lng: -118.4695,
    tags: ['Outdoor', 'People-watching', 'Beach'],
    why: "There is nowhere else on earth quite like this. Even if you've seen it all before, it still delivers."
  },
  {
    id: 'r5',
    name: "Terry Black's Barbecue",
    country: 'United States', state: 'Texas', city: 'Austin',
    category: 'restaurant',
    summary: "Austin BBQ done right. Brisket so good it makes you question every other brisket you've had.",
    vibe: 9.3,
    img: null,
    photos: [],
    lat: 30.2547, lng: -97.7489,
    tags: ['BBQ', 'Texas', 'Must-Try'],
    why: "The brisket has the perfect smoke ring, the perfect fat cap, the perfect bark. This is the benchmark."
  },

  // -- GERMANY --

  {
    id: 'r6',
    name: 'Brandenburg Gate',
    country: 'Germany', city: 'Berlin',
    category: 'landmark',
    summary: "One of Europe's most iconic monuments. Better at dawn than at noon.",
    vibe: 9.0,
    img: null,
    photos: [],
    lat: 52.5163, lng: 13.3777,
    tags: ['History', 'Architecture', 'Iconic'],
    why: "Show up before the tourist crowds. The gate at early morning light is a completely different experience."
  },
  {
    id: 'r7',
    name: 'Neues Odessa Bar',
    country: 'Germany', city: 'Berlin',
    category: 'bar',
    summary: "Berlin underground bar with serious cocktails and the right kind of dim lighting.",
    vibe: 8.8,
    img: null,
    photos: [],
    lat: 52.5290, lng: 13.3820,
    tags: ['Cocktails', 'Nightlife', 'Underground'],
    why: "This is the Berlin bar experience distilled. No attitude, strong drinks, interesting crowd."
  },

  // -- CROATIA --

  {
    id: 'r8',
    name: 'Old Town Dubrovnik',
    country: 'Croatia', city: 'Dubrovnik',
    category: 'landmark',
    summary: "Walk the city walls at sunset. One of the most visually perfect places on the planet.",
    vibe: 9.6,
    img: null,
    photos: [],
    lat: 42.6413, lng: 18.1102,
    tags: ['Historic', 'Views', 'Sunset'],
    why: "The walk around the old city walls is genuinely one of the most beautiful hours you can spend anywhere in Europe."
  },
  {
    id: 'r9',
    name: 'Restaurant 360',
    country: 'Croatia', city: 'Dubrovnik',
    category: 'restaurant',
    summary: "Fine dining perched on the city walls above the Adriatic. The view earns its own star.",
    vibe: 9.2,
    img: null,
    photos: [],
    lat: 42.6411, lng: 18.1082,
    tags: ['Fine Dining', 'Views', 'Seafood'],
    why: "Splurge-worthy. The tasting menu is excellent but you're really there for the view at sunset."
  },

  // -- INDONESIA --

  {
    id: 'r10',
    name: 'Tegalalang Rice Terraces',
    country: 'Indonesia', city: 'Bali',
    category: 'activity',
    summary: "Tiered rice paddies carved into the hillside. One of those places that actually lives up to the photos.",
    vibe: 9.1,
    img: null,
    photos: [],
    lat: -8.4312, lng: 115.2797,
    tags: ['Nature', 'Scenery', 'Bali'],
    why: "Go early. The light through the terraces in the morning is something else entirely."
  },
  {
    id: 'r11',
    name: 'Ku De Ta',
    country: 'Indonesia', city: 'Bali',
    category: 'bar',
    summary: "Beachfront bar on Seminyak Beach. Sunset drinks here are non-negotiable.",
    vibe: 8.9,
    img: null,
    photos: [],
    lat: -8.6882, lng: 115.1541,
    tags: ['Beach', 'Sunset', 'Cocktails'],
    why: "The Bali sunset from this terrace is the kind of thing that makes you rethink your schedule. Stay for at least two drinks."
  },

  // -- NEW ZEALAND --

  {
    id: 'r12',
    name: 'Tongariro Alpine Crossing',
    country: 'New Zealand', city: 'Tongariro',
    category: 'activity',
    summary: "New Zealand's most famous day hike. Volcanic craters, emerald lakes, and serious elevation.",
    vibe: 9.5,
    img: null,
    photos: [],
    lat: -39.1329, lng: 175.6719,
    tags: ['Hiking', 'Nature', 'Views'],
    why: "One of the best day hikes I've ever done. The Emerald Lakes section is something out of a movie."
  },
  {
    id: 'r13',
    name: 'The Grill by Sean Connolly',
    country: 'New Zealand', city: 'Auckland',
    category: 'restaurant',
    summary: "Serious steak, serious wine list, serious room. Auckland's best steakhouse.",
    vibe: 9.0,
    img: null,
    photos: [],
    lat: -36.8435, lng: 174.7713,
    tags: ['Steak', 'Fine Dining', 'Wine'],
    why: "The dry-aged ribeye is exceptional. Come hungry, come ready to linger."
  }

];

// Helper: unique countries
BEN_RECS.getCountries = function() {
  return [...new Set(BEN_RECS.filter(r => r.id).map(r => r.country))].sort();
};

// Helper: US states
BEN_RECS.getUSStates = function() {
  return [...new Set(BEN_RECS.filter(r => r.id && r.country === 'United States' && r.state).map(r => r.state))].sort();
};

// Category meta
const REC_CATEGORIES = [
  { id: 'restaurant', label: 'Restaurants & Cafes',        icon: '\u{1F37D}' },
  { id: 'bar',        label: 'Bars & Nightlife',            icon: '\u{1F942}' },
  { id: 'activity',   label: 'Activities & Experiences',    icon: '\u{1F3D4}' },
  { id: 'shopping',   label: 'Shopping & Markets',          icon: '\u{1F6CD}' },
  { id: 'landmark',   label: 'Historical Sites & Landmarks',icon: '\u{1F3DB}' }
];
