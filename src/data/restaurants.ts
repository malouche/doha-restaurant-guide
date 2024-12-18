export interface Restaurant {
  name: string;
  rating: number;
  cuisine: string;
  location: string;
  phone: string;
  hours: string;
  priceRange: string;
  description: string;
  highlights: string[];
  specialties: string;
  atmosphere: string;
}

export interface RestaurantsByType {
  [key: string]: Restaurant[];
}

export const restaurants: RestaurantsByType = {
  "Middle Eastern": [
    {
      name: "Babel Qatar",
      rating: 4.7,
      cuisine: "Lebanese Fine Dining",
      location: "The St.Regis Marsa Arabia Island, The Pearl-Qatar",
      phone: "+974 3995 6255",
      hours: "1:00 PM – 12:00 AM (Daily)",
      priceRange: "$$$$",
      description: "Babel represents the pinnacle of Lebanese fine dining in Doha. The restaurant offers a sophisticated blend of traditional and contemporary Lebanese cuisine.",
      highlights: [
        "Live jazz music and entertainment",
        "Outdoor terrace with Pearl views",
        "Extensive wine collection",
        "Private dining rooms available"
      ],
      specialties: "Known for their fresh seafood selections, traditional mezze platters, and premium grilled meats.",
      atmosphere: "Elegant and sophisticated with modern Arabic design elements"
    }
  ],
  "Italian": [
    {
      name: "Scarpetta",
      rating: 4.9,
      cuisine: "Modern Italian",
      location: "Damsa Boulevard - Entertainment District, Lusail",
      phone: "+974 4498 8847",
      hours: "12:00 PM – 11:30 PM (Daily)",
      priceRange: "$$$$",
      description: "A contemporary interpretation of classic Italian cuisine, bringing sophisticated dining to Lusail.",
      highlights: [
        "Hand-made pasta daily",
        "Extensive Italian wine list",
        "Chef's tasting menu available",
        "Theatrical open kitchen"
      ],
      specialties: "Famous for their spaghetti with tomato and basil, fresh pasta dishes, and modern takes on Italian classics.",
      atmosphere: "Modern and elegant with an open kitchen concept"
    }
  ]
};