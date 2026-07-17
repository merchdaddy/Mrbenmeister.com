/* ═══════════════════════════════════════════════════════════
   GOLD LABEL CLUB — SAMPLE DATA
   Replace with Supabase API calls when backend is connected.
   ═══════════════════════════════════════════════════════════ */

const GLC = {

  currentUser: {
    id: 'u1',
    name: 'Benjamin Meister',
    firstName: 'Benjamin',
    email: 'ben@goldlabelclub.com',
    avatar: 'https://ui-avatars.com/api/?name=Benjamin+Meister&background=1a1714&color=c9a84c&bold=true&size=128',
    city: 'New York, NY',
    role: 'admin', // 'admin' or 'member'
    memberSince: 'January 2024',
    favoriteLounge: 'l9',
    rsvps: { e1: 'going', e2: 'interested', e3: 'going' }
  },

  members: [
    { id:'u1', name:'Benjamin Meister', city:'New York, NY', role:'admin',  memberSince:'Jan 2024', avatar:'https://ui-avatars.com/api/?name=Benjamin+Meister&background=1a1714&color=c9a84c&bold=true' },
    { id:'u2', name:'Marcus Webb',       city:'Miami, FL',    role:'member', memberSince:'Feb 2024', avatar:'https://ui-avatars.com/api/?name=Marcus+Webb&background=1a1714&color=c9a84c&bold=true' },
    { id:'u3', name:'Diana Reyes',       city:'Houston, TX',  role:'member', memberSince:'Feb 2024', avatar:'https://ui-avatars.com/api/?name=Diana+Reyes&background=1a1714&color=c9a84c&bold=true' },
    { id:'u4', name:'James Calloway',    city:'Atlanta, GA',  role:'member', memberSince:'Mar 2024', avatar:'https://ui-avatars.com/api/?name=James+Calloway&background=1a1714&color=c9a84c&bold=true' },
    { id:'u5', name:'Simone Laurent',    city:'Chicago, IL',  role:'member', memberSince:'Mar 2024', avatar:'https://ui-avatars.com/api/?name=Simone+Laurent&background=1a1714&color=c9a84c&bold=true' },
    { id:'u6', name:'Rafael Ortega',     city:'Dallas, TX',   role:'member', memberSince:'Apr 2024', avatar:'https://ui-avatars.com/api/?name=Rafael+Ortega&background=1a1714&color=c9a84c&bold=true' },
    { id:'u7', name:'Alexis Monroe',     city:'Los Angeles',  role:'member', memberSince:'Apr 2024', avatar:'https://ui-avatars.com/api/?name=Alexis+Monroe&background=1a1714&color=c9a84c&bold=true' },
    { id:'u8', name:'Winston Parks',     city:'Nashville, TN',role:'member', memberSince:'May 2024', avatar:'https://ui-avatars.com/api/?name=Winston+Parks&background=1a1714&color=c9a84c&bold=true' },
    { id:'u9', name:'Camille Dubois',    city:'New Orleans',  role:'member', memberSince:'May 2024', avatar:'https://ui-avatars.com/api/?name=Camille+Dubois&background=1a1714&color=c9a84c&bold=true' },
    { id:'u10',name:'Victor Sterling',   city:'New York, NY', role:'member', memberSince:'Jun 2024', avatar:'https://ui-avatars.com/api/?name=Victor+Sterling&background=1a1714&color=c9a84c&bold=true' },
    { id:'u11',name:'Priya Nair',        city:'San Francisco',role:'member', memberSince:'Jun 2024', avatar:'https://ui-avatars.com/api/?name=Priya+Nair&background=1a1714&color=c9a84c&bold=true' },
    { id:'u12',name:'Derek Fountain',    city:'Charlotte, NC',role:'member', memberSince:'Jul 2024', avatar:'https://ui-avatars.com/api/?name=Derek+Fountain&background=1a1714&color=c9a84c&bold=true' },
  ],

  events: [
    {
      id: 'e1',
      title: 'Black Label Evening — Founder\'s Night',
      subtitle: 'An exclusive gathering for founding members',
      date: '2026-06-28',
      time: '7:00 PM',
      endTime: '11:00 PM',
      location: 'The Grand Havana Room, New York',
      address: '301 Park Ave, New York, NY 10022',
      description: 'Join us for an evening of exceptional cigars, rare spirits, and curated conversation. This is the inaugural Gold Label Club gathering — a night to mark the beginning of something extraordinary. Dress to impress. Seats are limited.',
      dressCode: 'Business Formal — Dark suits preferred',
      featuredCigar: 'Arturo Fuente Opus X — BBMF',
      host: 'Benjamin Meister',
      isPrivate: true,
      isFeatured: true,
      img: 'https://images.unsplash.com/photo-1679419860191-278d0720bc1b?w=1200&q=80',
      rsvps: { going: ['u1','u3','u5','u8','u10'], interested: ['u2','u6','u11'], notGoing: ['u4'] },
      tags: ['Flagship', 'Founding Night'],
      month: 6, year: 2026
    },
    {
      id: 'e2',
      title: 'Cuban Heritage Tasting Night',
      subtitle: 'A curated flight of the finest Habanos',
      date: '2026-07-12',
      time: '6:30 PM',
      endTime: '10:00 PM',
      location: 'Casa Fuente, Las Vegas',
      address: 'The Forum Shops at Caesars, Las Vegas, NV',
      description: 'An intimate evening celebrating the legacy of Cuban tobacco. We\'ll walk through a guided tasting of six exceptional Habanos cigars, paired with premium aged rum and single malt selections. Limited to 20 members.',
      dressCode: 'Smart Casual — No athleisure',
      featuredCigar: 'Cohiba Behike 56',
      host: 'Marcus Webb',
      isPrivate: false,
      isFeatured: false,
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80',
      rsvps: { going: ['u2','u4','u7','u9','u12'], interested: ['u1','u3'], notGoing: [] },
      tags: ['Tasting', 'Cuban'],
      month: 7, year: 2026
    },
    {
      id: 'e3',
      title: 'Monthly Smoke — July Edition',
      subtitle: 'The regular gathering of the Gold Label circle',
      date: '2026-07-19',
      time: '7:00 PM',
      endTime: '10:30 PM',
      location: 'The Carnegie Club, New York',
      address: '156 W 56th St, New York, NY 10019',
      description: 'Our monthly gathering at one of New York\'s finest private cigar clubs. This month\'s theme is "Aged & Rare" — members are encouraged to bring a special cigar to share. Good people, great smoke, honest conversation.',
      dressCode: 'Business Casual',
      featuredCigar: 'Padron 1964 Anniversary Series Maduro',
      host: 'Benjamin Meister',
      isPrivate: false,
      isFeatured: false,
      img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1200&q=80',
      rsvps: { going: ['u1','u2','u3','u5','u6','u8'], interested: ['u4','u9'], notGoing: ['u7'] },
      tags: ['Monthly', 'Member Night'],
      month: 7, year: 2026
    },
    {
      id: 'e4',
      title: 'Gold Label Gala — Summer Formal',
      subtitle: 'The signature event of the 2026 season',
      date: '2026-08-09',
      time: '8:00 PM',
      endTime: '1:00 AM',
      location: 'The Jefferson Hotel, Washington D.C.',
      address: '1200 16th St NW, Washington, DC 20036',
      description: 'The most anticipated evening on the Gold Label calendar. A black-tie affair featuring a live jazz quartet, a curated 7-course dinner, and an extraordinary selection of rare cigars from around the world. This is what the club was built for.',
      dressCode: 'Black Tie — White pocket square encouraged',
      featuredCigar: 'Davidoff Royal Release Robusto',
      host: 'Benjamin Meister',
      isPrivate: true,
      isFeatured: true,
      img: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1200&q=80',
      rsvps: { going: ['u1','u5','u10'], interested: ['u2','u3','u6','u8','u11'], notGoing: [] },
      tags: ['Gala', 'Black Tie', 'Flagship'],
      month: 8, year: 2026
    },
    {
      id: 'e5',
      title: 'Lounge Crawl — Miami Edition',
      subtitle: 'Three lounges, one unforgettable night',
      date: '2026-08-23',
      time: '5:00 PM',
      endTime: '11:00 PM',
      location: 'Starting at El Titan de Bronze, Miami',
      address: '1071 SW 8th St, Miami, FL 33130',
      description: 'We hit three of Miami\'s finest cigar establishments in a single evening. Start at El Titan de Bronze in Little Havana, continue to The Cigar Inn, and finish at a rooftop surprise venue. Transportation provided between stops.',
      dressCode: 'Smart Casual — Miami heat appropriate',
      featuredCigar: 'La Gloria Cubana — Serie R No. 6',
      host: 'Marcus Webb',
      isPrivate: false,
      isFeatured: false,
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      rsvps: { going: ['u2','u4','u9','u12'], interested: ['u1','u7'], notGoing: ['u3'] },
      tags: ['Lounge Crawl', 'Miami'],
      month: 8, year: 2026
    },
    {
      id: 'e6',
      title: 'Reserve Tasting — Aged Nicaraguans',
      subtitle: 'A rare vertical tasting of aged Nicaraguan puros',
      date: '2026-09-06',
      time: '6:00 PM',
      endTime: '9:30 PM',
      location: 'Private Residence — Chicago, IL',
      address: 'Location revealed 48 hours prior to approved RSVPs',
      description: 'A rare and intimate experience: a vertical tasting of aged Nicaraguan cigars spanning 15 years of production. Hosted at a private residence, this event is capped at 12 seats. A collector\'s evening not to be missed.',
      dressCode: 'Smart Casual',
      featuredCigar: 'Padron Family Reserve No. 45 Maduro (2009, 2014, 2019 vintages)',
      host: 'James Calloway',
      isPrivate: true,
      isFeatured: false,
      img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80',
      rsvps: { going: ['u5','u6'], interested: ['u1','u2','u8','u10','u11'], notGoing: [] },
      tags: ['Reserve', 'Tasting', 'Private'],
      month: 9, year: 2026
    }
  ],

  lounges: [
    {
      id: 'l9',
      name: 'The Royale Cigar Lounge',
      city: 'Tulsa', country: 'USA', state: 'OK',
      address: '4205 South Sheridan Road, Tulsa, Oklahoma 74145',
      phone: '(539) 525-0274',
      website: '',
      googleBusiness: 'https://maps.google.com/?q=The+Royale+Cigar+Lounge+Tulsa',
      lat: 36.0896, lng: -95.9268,
      img: '/images/Royale Cigar Lounge Tulsa/royale cigar lounge tulsa pic 1.jpeg',
      photos: [
        '/images/Royale Cigar Lounge Tulsa/royale cigar lounge tulsa pic 1.jpeg',
        '/images/Royale Cigar Lounge Tulsa/royale cigar lounge tulsa pic 2.jpeg',
        '/images/Royale Cigar Lounge Tulsa/royale cigar lounge pic 3.jpeg',
      ],
      video: '/videos/Royale%20CIgar%20lounge%20tulsa.mov',
      review: 'Royale is one of Tulsa\'s most underrated cigar lounges and stands out for its comfortable seating, upscale atmosphere, and strong bar experience.',
      reviewHtml: `<p>Royale is one of Tulsa's most underrated cigar lounges and stands out for its comfortable seating, upscale atmosphere, and strong bar experience. It feels more like a place built to relax and enjoy a cigar than a traditional retail cigar shop.</p><p>Royale has two humidors: a smaller curated humidor with quality cigars and The Vault, which holds specialty, aged, and harder-to-find selections.</p><p>The smaller selection makes more sense when you realize Royale sits directly next to Fogue and Bates — widely considered one of Oklahoma's top cigar destinations and a supplier for lounges across the state. Many guests grab cigars next door and bring them back to enjoy at Royale, creating a unique lounge-first experience.</p><p>There's no food, private lockers, or much separation for private groups, but for a date night, solo smoke, business meeting, or luxury lounge experience, Royale is an easy recommendation.</p>`,
      ratings: {
        overall: 8.6,
        humidor: 8.5,
        chairs: 9.0,
        service: 8.5,
        drinks: 8.2,
        food: 0,
        ventilation: 8.8,
        parking: 9.0,
      },
      features: { bar: true, outdoor: false, privateLounge: false, byo: true },
      noiseLevel: 'Low — Relaxed and refined',
      priceLevel: '$$$',
      bestFor: ['Date Night', 'Solo Smoke', 'Luxury Experience', 'Business Meeting'],
      isFeatured: true,
      visitedDate: 'June 2026'
    },
    {
      id: 'l11',
      name: 'The Mission Cigar & Social',
      city: 'Franklin', country: 'USA', state: 'TN',
      address: '121 3rd Ave N, Franklin, TN 37064',
      phone: '(615) 953-9495',
      website: 'https://franklin.missioncigar.com',
      googleBusiness: 'https://maps.google.com/?q=The+Mission+Cigar+%26+Social+Franklin+TN',
      lat: 35.9256, lng: -86.8689,
      img: '/images/Mission Cigars Franklin TN/mission cigar franklin 1.jpg',
      photos: [
        '/images/Mission Cigars Franklin TN/mission cigar franklin 1.jpg',
        '/images/Mission Cigars Franklin TN/mission cigars franklin 2.jpg',
        '/images/Mission Cigars Franklin TN/mission cigars franklin bar.jpg',
        '/images/Mission Cigars Franklin TN/mission cigars franklin patio.jpg',
        '/images/Mission Cigars Franklin TN/Mission cigars Franklin Humidor.jpg',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting The Mission Cigar & Social in Franklin, Tennessee.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l12',
      name: 'Helios Cigar Lounge',
      city: 'Riverside', country: 'USA', state: 'CA',
      address: '5225 Canyon Crest Dr, Ste 25, Riverside, CA 92507',
      phone: '(951) 784-3800',
      website: 'https://www.helioscigars.com/riverside',
      googleBusiness: 'https://maps.google.com/?q=Helios+Cigar+Lounge+Riverside+CA',
      lat: 33.9662, lng: -117.3730,
      img: '/images/Helios Cigar Lounge Riverside CA/helios cigar lounge front.png',
      photos: [
        '/images/Helios Cigar Lounge Riverside CA/helios cigar lounge front.png',
        '/images/Helios Cigar Lounge Riverside CA/helios cigar lounge 1.png',
        '/images/Helios Cigar Lounge Riverside CA/helios cigar lounge 2.png',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting Helios Cigar Lounge in Riverside, California.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l13',
      name: 'Casa de Montecristo',
      city: 'Nashville', country: 'USA', state: 'TN',
      address: '600 9th Ave S, Ste 130, Nashville, TN 37203',
      phone: '(615) 800-3397',
      website: 'https://www.casademontecristo.com/nashville/',
      googleBusiness: 'https://maps.google.com/?q=Casa+de+Montecristo+Nashville+TN',
      lat: 36.1487, lng: -86.7926,
      img: '/images/Casa De Montectristo Nashville/casa de montescristo nashville front.png',
      photos: [
        '/images/Casa De Montectristo Nashville/casa de montescristo nashville front.png',
        '/images/Casa De Montectristo Nashville/casa de montescristo nashville 1.jpg',
        '/images/Casa De Montectristo Nashville/casa de montescristo nashville 2.jpg',
        '/images/Casa De Montectristo Nashville/casa de montescristo nashville humidor.jpg',
        '/images/Casa De Montectristo Nashville/casa de montescristo nashville humidor 2.jpg',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting Casa de Montecristo in The Gulch, Nashville.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l14',
      name: 'Classic Cigars & Lounge',
      city: 'Tulsa', country: 'USA', state: 'OK',
      address: '118 N Boston Ave, Tulsa, OK 74103',
      phone: '(918) 960-2646',
      website: 'https://classiccigars.net',
      googleBusiness: 'https://maps.google.com/?q=Classic+Cigars+%26+Lounge+Tulsa+OK',
      lat: 36.1540, lng: -95.9928,
      img: '/images/Classic Cigars Tulsa/Classics cigars tulsa 1.jpg',
      photos: [
        '/images/Classic Cigars Tulsa/Classics cigars tulsa 1.jpg',
        '/images/Classic Cigars Tulsa/classic cigars tulsa 3.jpg',
        '/images/Classic Cigars Tulsa/Classic cigars tulsa humidor.jpg',
        '/images/Classic Cigars Tulsa/classic cigars tulsa humidor 2.jpg',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting Classic Cigars & Lounge in downtown Tulsa.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l15',
      name: "Shelly's Back Room",
      city: 'Washington', country: 'USA', state: 'DC',
      address: '1331 F Street NW, Washington, DC 20004',
      phone: '(202) 737-3003',
      website: 'https://shellysbackroom.com',
      googleBusiness: "https://maps.google.com/?q=Shelly's+Back+Room+Washington+DC",
      lat: 38.8979, lng: -77.0288,
      img: "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc front.jpg",
      photos: [
        "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc front.jpg",
        "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc 1.jpg",
        "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc 2.jpg",
        "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc 3.jpg",
        "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc humidor.jpg",
        "/images/Shelly's Backroom Washington DC/shelly's backroom washington dc menu.jpg",
      ],
      video: null,
      review: "Full review coming soon — Gold Label Club will be visiting Shelly's Back Room in Washington, D.C.",
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l16',
      name: 'Casa de Montecristo — Dallas',
      city: 'Dallas', country: 'USA', state: 'TX',
      address: '3878 Oak Lawn Ave, Ste 350, Dallas, TX 75219',
      phone: '(214) 256-4818',
      website: 'https://www.casademontecristo.com/dallas/',
      googleBusiness: 'https://maps.google.com/?q=Casa+de+Montecristo+Dallas+TX',
      lat: 32.8156, lng: -96.8008,
      img: '/images/Casa De Montecristo Dallas/Casa de montecristo dallas front.jpg',
      photos: [
        '/images/Casa De Montecristo Dallas/Casa de montecristo dallas front.jpg',
        '/images/Casa De Montecristo Dallas/Casa de montecristo dallas 1.jpg',
        '/images/Casa De Montecristo Dallas/Casa de montecristo dallas 2.jpg',
        '/images/Casa De Montecristo Dallas/Casa de montecristo dallas humidor.jpg',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting Casa de Montecristo in Dallas.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l17',
      name: 'Fair Oaks Cigar Lounge',
      city: 'Newport Beach', country: 'USA', state: 'CA',
      address: '1000 Bristol St N, Ste 7, Newport Beach, CA 92660',
      phone: '(949) 553-1891',
      website: 'https://www.cigaraficionado.com/article/fair-oaks-cigars-newport-beach-california-18995',
      googleBusiness: 'https://maps.google.com/?q=Fair+Oaks+Cigar+Lounge+Newport+Beach+CA',
      lat: 33.6673, lng: -117.8731,
      img: '/images/Fair Oaks Cigar Lounge Newport/fair oaks cigar lounge newport front.jpg',
      photos: [
        '/images/Fair Oaks Cigar Lounge Newport/fair oaks cigar lounge newport front.jpg',
        '/images/Fair Oaks Cigar Lounge Newport/fair oaks cigar lounge newport 1.jpg',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting Fair Oaks Cigar Lounge in Newport Beach.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l18',
      name: 'Cigars International Superstore',
      city: 'Fort Worth', country: 'USA', state: 'TX',
      address: '12853 Cabela Dr, Fort Worth, TX 76177',
      phone: '(817) 562-1150',
      website: 'https://www.cigarsinternational.com/retail/store/texas-fort-worth-super-store/2028253/',
      googleBusiness: 'https://maps.google.com/?q=Cigars+International+Superstore+Fort+Worth+TX',
      lat: 32.9560, lng: -97.3447,
      img: '/images/Cigars International the colony/cigars international the Colony front.jpg',
      photos: [
        '/images/Cigars International the colony/cigars international the Colony front.jpg',
        '/images/Cigars International the colony/cigars international the Colony 1.jpg',
        '/images/Cigars International the colony/cigars international the Colony 2.jpg',
        '/images/Cigars International the colony/cigars international the Colony Humidor.jpg',
        '/images/Cigars International the colony/cigars international the Colony humidor 2.jpg',
      ],
      video: null,
      review: 'Full review coming soon — Gold Label Club will be visiting Cigars International Superstore in Fort Worth.',
      reviewHtml: null,
      reviewPending: true,
      ratings: { overall: null, humidor: null, chairs: null, service: null, drinks: null, food: null, ventilation: null, parking: null },
      features: { bar: null, outdoor: null, privateLounge: null, byo: null },
      noiseLevel: 'TBD',
      priceLevel: '$$$',
      bestFor: [],
      isFeatured: false,
      visitedDate: 'Coming Soon'
    },
    {
      id: 'l19',
      name: 'The Outlaw Cigar Co.',
      city: 'Overland Park', country: 'USA', state: 'KS',
      address: '13700 Metcalf Ave, Overland Park, KS 66223',
      phone: '(913) 814-9000',
      website: 'https://www.outlawcigar.com',
      googleBusiness: 'https://maps.google.com/?q=The+Outlaw+Cigar+Co+Overland+Park+KS',
      lat: 38.8717, lng: -94.6722,
      img: '/images/Outlaw Cigar Co Overland Park KS/outlaw Cigar co front.png',
      photos: [
        '/images/Outlaw Cigar Co Overland Park KS/outlaw Cigar co front.png',
        '/images/Outlaw Cigar Co Overland Park KS/outlaw cigar co overland park.jpeg',
        '/images/Outlaw Cigar Co Overland Park KS/overland cigar co 2.webp',
        '/images/Outlaw Cigar Co Overland Park KS/overland cigar co 3.webp',
      ],
      video: '/images/Outlaw Cigar Co Overland Park KS/outlaw cigar co overland park.MOV',
      review: 'Outlaw Cigar Co. is a relaxed, welcoming lounge with excellent parking, a well-maintained humidor, and outstanding ventilation. The lounge features a bar, allows guests to bring their own beer, and also has a snack vending machine for added convenience. It\'s an easygoing spot that\'s ideal for spending a few hours enjoying a cigar with friends.',
      reviewHtml: null,
      reviewPending: false,
      ratings: { overall: 8.8, humidor: 9.3, chairs: 8.7, service: 7.0, drinks: 8.5, food: 0, ventilation: 9.5, parking: 10.0 },
      features: { bar: true, outdoor: null, privateLounge: null, byo: true },
      noiseLevel: 'Relaxed',
      priceLevel: '$$',
      bestFor: ['Friends', 'Relaxed Smoke'],
      isFeatured: false,
      visitedDate: 'July 2026'
    },
  ],

  announcements: [
    { id:'a1', title:'Welcome to the Gold Label Portal', text:'Your private member portal is now live. Explore upcoming events, browse our lounge directory, and connect with fellow members.', date:'June 1, 2026', pinned: true },
    { id:'a2', title:'Founding Member Badges Being Issued', text:'All founding members will receive their physical Gold Label membership cards by end of June. Cards are mailed to the address on file.', date:'June 3, 2026', pinned: false },
    { id:'a3', title:'Lounge Suggestion Feature Is Live', text:'Members can now submit cigar lounge suggestions directly through the portal. Our team reviews every submission for a potential club visit.', date:'June 5, 2026', pinned: false },
  ],

  featuredCigar: {
    name: 'Arturo Fuente Opus X — Fuente Fuente',
    origin: 'Dominican Republic',
    wrapper: 'Dominican Chateau de la Fuente Rosado',
    strength: 'Full',
    notes: 'Dark cherry, leather, espresso, dark chocolate with a long, complex finish',
    rating: 9.7,
    pairing: 'Aged Dominican rum or a well-peated Scotch whisky',
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
    review: 'One of the most sought-after cigars in the world, produced in extremely limited quantities. The Opus X remains the standard against which all premium Dominican cigars are measured. If you find one — smoke it slowly.'
  },

  memberSpotlight: {
    member: 'u5',
    text: 'Simone Laurent joined the club in March and has already attended four events, reviewed three lounges, and organized a private tasting evening for Chicago-area members. Her knowledge of aged Nicaraguan puros is remarkable.',
    achievement: 'Most Lounge Reviews — June 2026'
  },

  loungeOfMonth: 'l9',
  featuredEventId: 'e1',

  suggestedLounges: [
    { id:'s1', submittedBy:'u3', name:'The Monarch Cigar Lounge', city:'Charlotte, NC', notes:'Incredible selection, very friendly staff. Worth a visit on the next Charlotte trip.', status:'approved', submittedDate:'June 2, 2026' },
    { id:'s2', submittedBy:'u8', name:'Smoke & Barrel', city:'Nashville, TN', notes:'Whiskey and cigar pairing nights every Thursday. Great atmosphere.', status:'pending', submittedDate:'June 4, 2026' },
  ]
};

/* ── HELPER FUNCTIONS ─────────────────────────────────────────── */

GLC.getEventById    = id => GLC.events.find(e => e.id === id);
GLC.getLoungeById   = id => GLC.lounges.find(l => l.id === id);
GLC.getMemberById   = id => GLC.members.find(m => m.id === id);

GLC.formatDate = (dateStr) => {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });
};

GLC.formatDateShort = (dateStr) => {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
};

GLC.getDateParts = (dateStr) => {
  const d = new Date(dateStr + 'T12:00:00');
  return {
    day:   d.getDate(),
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    dow:   d.toLocaleString('en-US', { weekday: 'long' }),
    monthNum: d.getMonth(),
    year:  d.getFullYear()
  };
};

GLC.renderStars = (rating, outOf10 = true) => {
  const r = outOf10 ? rating / 2 : rating; // convert to 5-star
  let html = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    if (r >= i) html += '<i class="fa-solid fa-star filled"></i>';
    else if (r >= i - 0.5) html += '<i class="fa-solid fa-star-half-stroke filled"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  html += `</span><span class="rating-num">${rating}</span>`;
  return html;
};

GLC.getRsvpCounts = (event) => ({
  going:      event.rsvps.going.length,
  interested: event.rsvps.interested.length,
  notGoing:   event.rsvps.notGoing.length,
  total:      event.rsvps.going.length + event.rsvps.interested.length + event.rsvps.notGoing.length
});

GLC.getUserRsvp = (event) => {
  if (event.rsvps.going.includes(GLC.currentUser.id)) return 'going';
  if (event.rsvps.interested.includes(GLC.currentUser.id)) return 'interested';
  if (event.rsvps.notGoing.includes(GLC.currentUser.id)) return 'notGoing';
  return null;
};

GLC.upcomingEvents = () => {
  const today = new Date();
  return GLC.events.filter(e => new Date(e.date + 'T12:00:00') >= today)
    .sort((a,b) => new Date(a.date) - new Date(b.date));
};
