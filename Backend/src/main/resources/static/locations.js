// Location data for all destinations
const locationsData = [
  {
    name: "Santorini",
    description: "Santorini is a Greek island in the Aegean Sea, famous for its stunning sunsets, white-washed buildings, and blue-domed churches. This volcanic island offers breathtaking views, beautiful beaches, and a rich history dating back to ancient times. The island's unique geology creates dramatic landscapes that have captivated travelers for centuries.",
    pricePerPerson: "₹85,000",
    bestTimeToVisit: "May - June, September - October",
    weather: "Mediterranean climate, 25-30°C in summer",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6"
    ],
    placesToVisit: [
      {
        name: "Oia Village",
        description: "Famous for its blue-domed churches and stunning sunset views",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff"
      },
      {
        name: "Fira Town",
        description: "The bustling capital with caldera views and vibrant nightlife",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e"
      },
      {
        name: "Red Beach",
        description: "Unique red volcanic sand beach with crystal clear waters",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6"
      },
      {
        name: "Akrotiri Archaeological Site",
        description: "Ancient Minoan settlement preserved by volcanic ash",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6"
      }
    ],
    travelTips: [
      "Book accommodation well in advance, especially during peak season",
      "Rent a car or ATV to explore the island freely",
      "Try local wines at family-owned vineyards",
      "Visit during shoulder season for fewer crowds and better prices",
      "Pack comfortable walking shoes for the caldera paths"
    ]
  },
  {
    name: "Amalfi Coast",
    description: "The Amalfi Coast is a stretch of coastline on the Tyrrhenian Sea in southern Italy, renowned for its dramatic scenery, colorful villages, and luxurious lifestyle. This UNESCO World Heritage site features steep cliffs, crystal-clear waters, and historic towns that have inspired artists and writers for centuries.",
    pricePerPerson: "₹1,20,000",
    bestTimeToVisit: "April - June, September - October",
    weather: "Mediterranean climate, 20-28°C in summer",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de"
    ],
    placesToVisit: [
      {
        name: "Positano",
        description: "Iconic cliffside village with colorful houses and pebbled beaches",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6"
      },
      {
        name: "Amalfi Cathedral",
        description: "Stunning 9th-century cathedral with beautiful architecture",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Ravello",
        description: "Hilltop town famous for its gardens and panoramic views",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de"
      },
      {
        name: "Grotta dello Smeraldo",
        description: "Emerald Grotto with stunning underwater caves",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6"
      }
    ],
    travelTips: [
      "Use public buses or boats to navigate the coastal roads safely",
      "Book restaurants in advance during peak season",
      "Pack light as many paths involve stairs and walking",
      "Visit in spring or fall for milder weather and fewer tourists",
      "Try the local limoncello and fresh seafood"
    ]
  },
  {
    name: "Banff",
    description: "Banff is a resort town in the Canadian Rocky Mountains, located within Banff National Park. Known for its stunning turquoise lakes, majestic mountains, and abundant wildlife, it's a paradise for outdoor enthusiasts and nature lovers seeking adventure in one of Canada's most beautiful landscapes.",
    pricePerPerson: "₹95,000",
    bestTimeToVisit: "June - September",
    weather: "Alpine climate, 15-25°C in summer",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1464822759844-d150baec93d5",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    ],
    placesToVisit: [
      {
        name: "Lake Louise",
        description: "Iconic turquoise lake with stunning mountain backdrop",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      },
      {
        name: "Moraine Lake",
        description: "Another breathtaking glacial lake in the Valley of the Ten Peaks",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec93d5"
      },
      {
        name: "Banff Gondola",
        description: "Ride to the top of Sulphur Mountain for panoramic views",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Johnston Canyon",
        description: "Scenic canyon with waterfalls and hiking trails",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
      }
    ],
    travelTips: [
      "Book park accommodations well in advance",
      "Carry bear spray and know wildlife safety protocols",
      "Dress in layers as mountain weather changes quickly",
      "Book shuttles or tours for popular attractions",
      "Respect wildlife and maintain safe distances"
    ]
  },
  {
    name: "Bali",
    description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is also home to religious sites such as cliffside Uluwatu Temple and has a rich cultural heritage that blends Hindu and Buddhist influences with local traditions.",
    pricePerPerson: "₹65,000",
    bestTimeToVisit: "April - October (dry season)",
    weather: "Tropical climate, 26-30°C year-round",
    images: [
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    ],
    placesToVisit: [
      {
        name: "Ubud Rice Terraces",
        description: "Stunning stepped rice paddies and traditional villages",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2"
      },
      {
        name: "Uluwatu Temple",
        description: "Ancient cliffside temple with traditional Kecak fire dances",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1"
      },
      {
        name: "Tanah Lot",
        description: "Iconic sea temple perched on a rock formation",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Mount Batur",
        description: "Active volcano with sunrise trekking opportunities",
        image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
      }
    ],
    travelTips: [
      "Respect local customs and dress modestly at temples",
      "Use ride-sharing apps for safe and affordable transportation",
      "Try authentic Balinese cuisine and cooking classes",
      "Stay hydrated in the tropical climate",
      "Book accommodations with pools during hot season"
    ]
  },
  {
    name: "Rome",
    description: "Rome, the Eternal City, is the capital of Italy and one of the world's most historically significant cities. Home to ancient ruins, Renaissance art, and world-class cuisine, Rome offers an unparalleled blend of history, culture, and modern Italian life. From the Colosseum to the Vatican, every corner tells a story spanning over 2,000 years.",
    pricePerPerson: "₹50,000",
    bestTimeToVisit: "April - June, September - October",
    weather: "Mediterranean climate, 15-28°C",
    images: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6",
      "https://images.unsplash.com/photo-1555992336-fb1d29d3b2dd",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de"
    ],
    placesToVisit: [
      {
        name: "Colosseum",
        description: "Ancient amphitheater and iconic symbol of Imperial Rome",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb6"
      },
      {
        name: "Vatican City",
        description: "Independent city-state with St. Peter's Basilica and Sistine Chapel",
        image: "https://images.unsplash.com/photo-1555992336-fb1d29d3b2dd"
      },
      {
        name: "Trevi Fountain",
        description: "Baroque fountain where visitors toss coins for good luck",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de"
      },
      {
        name: "Roman Forum",
        description: "Ancient ruins of the center of Roman public life",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
      }
    ],
    travelTips: [
      "Book tickets for popular attractions in advance to avoid long queues",
      "Use public transportation or walk - Rome is very pedestrian-friendly",
      "Try authentic Roman cuisine like pasta carbonara and gelato",
      "Visit during spring or fall for milder weather and fewer crowds",
      "Carry a water bottle and stay hydrated during summer months"
    ]
  },
  {
    name: "New York",
    description: "New York City, the Big Apple, is America's most iconic metropolis. A global hub for finance, fashion, art, and culture, NYC offers an electrifying mix of skyscrapers, diverse neighborhoods, world-class museums, and endless entertainment options. From Times Square to Central Park, the city never sleeps.",
    pricePerPerson: "₹60,000",
    bestTimeToVisit: "April - June, September - November",
    weather: "Humid continental climate, 0-30°C",
    images: [
      "https://images.unsplash.com/photo-1471623432079-b009d30b6729",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee"
    ],
    placesToVisit: [
      {
        name: "Central Park",
        description: "Massive urban park offering respite from the city bustle",
        image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729"
      },
      {
        name: "Times Square",
        description: "Bright lights and billboards in the heart of Manhattan",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9"
      },
      {
        name: "Statue of Liberty",
        description: "Iconic symbol of freedom on Liberty Island",
        image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25"
      },
      {
        name: "Brooklyn Bridge",
        description: "Historic suspension bridge with stunning city views",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee"
      }
    ],
    travelTips: [
      "Use the subway system - it's efficient and covers the entire city",
      "Book Broadway shows and popular attractions well in advance",
      "Try diverse cuisine from food trucks and ethnic neighborhoods",
      "Walk or rent a bike in Central Park for a more intimate experience",
      "Visit during fall for beautiful foliage and comfortable weather"
    ]
  }
];

// Function to get location data by name
function getLocationByName(name) {
  return locationsData.find(location =>
    location.name.toLowerCase() === name.toLowerCase()
  );
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { locationsData, getLocationByName };
}
