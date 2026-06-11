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
    favoriteLounge: 'l1',
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
      id: 'l1',
      name: 'The Carnegie Club',
      city: 'New York', country: 'USA', state: 'NY',
      address: '156 W 56th St, New York, NY 10019',
      phone: '+1 (212) 957-9676',
      website: 'https://www.carnegieclubnyc.com',
      googleBusiness: 'https://maps.google.com',
      lat: 40.7650, lng: -73.9794,
      img: 'https://images.unsplash.com/photo-1679419860191-278d0720bc1b?w=800&q=80',
      photos: [
        'https://images.unsplash.com/photo-1679419860191-278d0720bc1b?w=800&q=80',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
      ],
      review: 'The Carnegie Club is the gold standard of New York cigar lounges. Housed in a landmark building with soaring ceilings, live jazz on weekends, and one of the most impressive humidors in the country. The staff knows every regular by name, the scotch selection is impeccable, and the leather club chairs are the most comfortable you\'ll find anywhere. A true institution.',
      ratings: { overall: 9.4, humidor: 9.5, atmosphere: 9.8, chairs: 9.2, service: 9.3, drinks: 9.1, food: 8.2, cigarSelection: 9.6, ventilation: 8.8, parking: 6.5, memberFriendliness: 9.5 },
      features: { bar: true, outdoor: false, privateLounge: true, byo: true },
      noiseLevel: 'Low — Ambient jazz',
      priceLevel: '$$$$',
      bestFor: ['Business Meeting', 'Solo Smoke', 'Luxury Experience', 'Date Night'],
      isFeatured: true,
      visitedDate: 'March 2026'
    },
    {
      id: 'l2',
      name: 'Grand Havana Room',
      city: 'New York', country: 'USA', state: 'NY',
      address: '301 Park Ave, New York, NY 10022',
      phone: '+1 (212) 980-9393',
      website: 'https://grandhavanroom.com',
      googleBusiness: 'https://maps.google.com',
      lat: 40.7588, lng: -73.9760,
      img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80'],
      review: 'By-invitation-only membership club on the 39th floor of 301 Park Avenue. The view alone is worth the membership fee. Deep leather couches, an extraordinary humidor walk-in, and a kitchen that actually delivers. This is where deals are made and secrets are kept. A bit members-only old-boys-club but that\'s part of the charm.',
      ratings: { overall: 9.2, humidor: 9.4, atmosphere: 9.7, chairs: 9.5, service: 9.0, drinks: 8.8, food: 8.6, cigarSelection: 9.3, ventilation: 9.1, parking: 5.0, memberFriendliness: 8.5 },
      features: { bar: true, outdoor: false, privateLounge: true, byo: false },
      noiseLevel: 'Very Low — Library quiet',
      priceLevel: '$$$$',
      bestFor: ['Business Meeting', 'Solo Smoke', 'Luxury Experience'],
      isFeatured: false,
      visitedDate: 'April 2026'
    },
    {
      id: 'l3',
      name: 'Casa Fuente',
      city: 'Las Vegas', country: 'USA', state: 'NV',
      address: 'The Forum Shops, 3500 Las Vegas Blvd S, Las Vegas, NV 89109',
      phone: '+1 (702) 731-5051',
      website: 'https://casafuente.com',
      googleBusiness: 'https://maps.google.com',
      lat: 36.1255, lng: -115.1699,
      img: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&q=80'],
      review: 'The Arturo Fuente experience in the heart of Las Vegas. Inside Caesars Forum Shops, this is as glamorous as cigar lounges get. The entire space is dedicated to the Fuente family legacy, with an extraordinary selection of Fuente cigars including some of the rarest Opus X variants. Las Vegas energy with old Cuba soul.',
      ratings: { overall: 9.0, humidor: 9.7, atmosphere: 9.2, chairs: 8.5, service: 9.2, drinks: 9.4, food: 8.0, cigarSelection: 9.8, ventilation: 8.6, parking: 7.0, memberFriendliness: 9.3 },
      features: { bar: true, outdoor: false, privateLounge: false, byo: false },
      noiseLevel: 'Moderate — Casino adjacent',
      priceLevel: '$$$',
      bestFor: ['Solo Smoke', 'Group Hang', 'Luxury Experience'],
      isFeatured: false,
      visitedDate: 'February 2026'
    },
    {
      id: 'l4',
      name: 'El Titan de Bronze',
      city: 'Miami', country: 'USA', state: 'FL',
      address: '1071 SW 8th St, Miami, FL 33130',
      phone: '+1 (305) 860-1412',
      website: 'https://eltitandebronze.com',
      googleBusiness: 'https://maps.google.com',
      lat: 25.7664, lng: -80.2194,
      img: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80'],
      review: 'Authentic Little Havana cigar factory and lounge. You watch master rollers hand-craft cigars right in front of you, then smoke one immediately. The authenticity here is unmatched anywhere in the continental US. This is old Cuba preserved in the heart of Miami. No pretension, no dress code, just exceptional cigars and real Cuban culture.',
      ratings: { overall: 8.8, humidor: 8.2, atmosphere: 9.5, chairs: 7.8, service: 9.0, drinks: 7.5, food: 7.0, cigarSelection: 8.5, ventilation: 7.8, parking: 8.5, memberFriendliness: 9.8 },
      features: { bar: false, outdoor: true, privateLounge: false, byo: true },
      noiseLevel: 'Moderate — Lively street',
      priceLevel: '$$',
      bestFor: ['Casual Stop', 'Solo Smoke', 'Group Hang'],
      isFeatured: false,
      visitedDate: 'January 2026'
    },
    {
      id: 'l5',
      name: 'La Casa del Habano — Geneva',
      city: 'Geneva', country: 'Switzerland',
      address: '9 Rue de Rive, 1204 Geneva, Switzerland',
      phone: '+41 22 310 7070',
      website: 'https://lacasadelhabano.com',
      googleBusiness: 'https://maps.google.com',
      lat: 46.2044, lng: 6.1432,
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'],
      review: 'Arguably the finest La Casa del Habano in Europe. Located steps from Lac Léman, this Geneva outpost combines Swiss precision with Havana soul. The humidor is a cathedral of Cuban tobacco — perfectly maintained and exhaustively stocked. An international financial hub lounge that attracts the world\'s most discerning smokers.',
      ratings: { overall: 9.3, humidor: 9.8, atmosphere: 9.2, chairs: 8.8, service: 9.4, drinks: 9.0, food: 8.5, cigarSelection: 9.9, ventilation: 9.2, parking: 6.0, memberFriendliness: 8.8 },
      features: { bar: true, outdoor: true, privateLounge: true, byo: false },
      noiseLevel: 'Low — Very refined',
      priceLevel: '$$$$',
      bestFor: ['Business Meeting', 'Luxury Experience', 'Solo Smoke', 'Date Night'],
      isFeatured: true,
      visitedDate: 'May 2026'
    },
    {
      id: 'l6',
      name: 'Dunhill & Co. — London',
      city: 'London', country: 'UK',
      address: '2 Davies St, London W1K 3DL',
      phone: '+44 20 7629 4160',
      website: 'https://dunhill.com',
      googleBusiness: 'https://maps.google.com',
      lat: 51.5127, lng: -0.1445,
      img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80'],
      review: 'Dunhill\'s Mayfair flagship is unlike anything else. Part luxury goods store, part private members club, all gentleman\'s institution. The Cellar Bar in the basement is where London\'s old money comes to smoke. Impeccable service, a wine list that could embarrass a Michelin-starred restaurant, and a humidor stocked with every aged Davidoff variant you\'ve ever wanted.',
      ratings: { overall: 9.6, humidor: 9.6, atmosphere: 9.9, chairs: 9.6, service: 9.8, drinks: 9.5, food: 9.2, cigarSelection: 9.5, ventilation: 9.0, parking: 5.5, memberFriendliness: 8.9 },
      features: { bar: true, outdoor: false, privateLounge: true, byo: false },
      noiseLevel: 'Very Low — Hushed luxury',
      priceLevel: '$$$$',
      bestFor: ['Business Meeting', 'Luxury Experience', 'Date Night', 'Solo Smoke'],
      isFeatured: false,
      visitedDate: 'April 2026'
    },
    {
      id: 'l7',
      name: 'Nat Sherman Townhouse',
      city: 'New York', country: 'USA', state: 'NY',
      address: '12 E 42nd St, New York, NY 10017',
      phone: '+1 (212) 764-5000',
      website: 'https://natsherman.com',
      googleBusiness: 'https://maps.google.com',
      lat: 40.7519, lng: -73.9796,
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80'],
      review: 'The legendary Nat Sherman Townhouse near Grand Central is a New York institution. Four floors of tobacco paradise, including a walk-in humidor floor that you could spend an hour in. The staff knowledge is encyclopedic and refreshingly un-snobbish. A cornerstone of New York tobacco culture for generations.',
      ratings: { overall: 8.7, humidor: 9.3, atmosphere: 8.8, chairs: 8.2, service: 9.1, drinks: 7.8, food: 7.0, cigarSelection: 9.4, ventilation: 8.5, parking: 5.5, memberFriendliness: 9.2 },
      features: { bar: false, outdoor: false, privateLounge: false, byo: true },
      noiseLevel: 'Low — Midtown energy',
      priceLevel: '$$$',
      bestFor: ['Solo Smoke', 'Casual Stop'],
      isFeatured: false,
      visitedDate: 'March 2026'
    },
    {
      id: 'l9',
      name: 'The Royale Cigar Lounge',
      city: 'Tulsa', country: 'USA', state: 'OK',
      address: '4205 South Sheridan Road, Tulsa, Oklahoma 74145',
      phone: '(539) 525-0274',
      website: '',
      googleBusiness: 'https://maps.google.com/?q=The+Royale+Cigar+Lounge+Tulsa',
      lat: 36.0896, lng: -95.9268,
      img: '/images/royale%20cigar%20lounge%20tulsa%20pic%201.jpeg',
      photos: [
        '/images/royale%20cigar%20lounge%20tulsa%20pic%201.jpeg',
        '/images/royale%20cigar%20lounge%20tulsa%20pic%202.jpeg',
        '/images/royale%20cigar%20lounge%20pic%203.jpeg',
      ],
      video: '/videos/Royale%20CIgar%20lounge%20tulsa.mov',
      review: 'The Royale Cigar Lounge is a genuine discovery in Tulsa — a refined, thoughtfully designed space that punches well above its weight for a mid-size American city. The interior strikes an immediate impression: deep leather seating, warm lighting, and a layout that encourages lingering without crowding. The ventilation system is exceptional, one of the quietest and most effective we\'ve encountered, keeping the air clean without the industrial hum you often find in lesser establishments. The humidor is curated rather than exhaustive — every selection earns its shelf space. The staff here is knowledgeable without being pretentious, willing to make recommendations but equally comfortable letting you browse in peace. No kitchen, which they own confidently, keeping the focus entirely on the smoke. The Royale doesn\'t try to be everything — it tries to be exceptional at what it does. It largely succeeds.',
      ratings: {
        overall: 8.6,
        humidor: 8.5,
        atmosphere: 9.2,
        chairs: 9.0,
        service: 8.5,
        drinks: 8.2,
        food: 0,
        cigarSelection: 7.6,
        ventilation: 8.8,
        parking: 9.0,
        memberFriendliness: 9.0
      },
      features: { bar: true, outdoor: false, privateLounge: false, byo: true },
      noiseLevel: 'Low — Relaxed and refined',
      priceLevel: '$$$',
      bestFor: ['Date Night', 'Solo Smoke', 'Luxury Experience', 'Business Meeting'],
      isFeatured: false,
      visitedDate: 'June 2026'
    },
    {
      id: 'l8',
      name: 'Havana 1957 — Miami Beach',
      city: 'Miami Beach', country: 'USA', state: 'FL',
      address: '405 Washington Ave, Miami Beach, FL 33139',
      phone: '+1 (786) 391-3885',
      website: 'https://havana1957.com',
      googleBusiness: 'https://maps.google.com',
      lat: 25.7766, lng: -80.1342,
      img: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80',
      photos: ['https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80'],
      review: 'A Cuban restaurant and cigar bar in the heart of South Beach with authentic 1950s Havana decor. The outdoor terrace facing Washington Avenue is ideal for people-watching with a premium cigar. Great mojitos, better ropa vieja, and an underrated cigar selection. Perfect for a relaxed evening that doesn\'t take itself too seriously.',
      ratings: { overall: 8.2, humidor: 7.8, atmosphere: 9.0, chairs: 8.4, service: 8.5, drinks: 9.2, food: 9.1, cigarSelection: 7.8, ventilation: 8.0, parking: 7.0, memberFriendliness: 9.4 },
      features: { bar: true, outdoor: true, privateLounge: false, byo: true },
      noiseLevel: 'Lively — South Beach vibe',
      priceLevel: '$$$',
      bestFor: ['Date Night', 'Group Hang', 'Casual Stop'],
      isFeatured: false,
      visitedDate: 'January 2026'
    }
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

  loungeOfMonth: 'l1',
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
