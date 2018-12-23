export default [
  `
  type ApartmentsWithPagination {
    total: Int
    items: [Apartments]
  }
  
  type Apartments {
    _id: String!
    owner: Users
    title: String
    location: Locations
    size: Int
    price: Int
    images: [String]
    amenities: [String]
    details: Detail
    services: [String]
  }
  
  type Detail {
    rooms: Int
    bedrooms: Int
    floor: Int
    bathrooms: Int
  }
`,
];
