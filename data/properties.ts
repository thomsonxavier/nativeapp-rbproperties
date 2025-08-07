export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  status: string;
  image: string;
  ratePerSqft: string;
  society: string;
  builder?: string;
  description?: string;
  features?: string[];
  amenities?: string[];
  agent?: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  pincode?: string;
  state?: string;
  city?: string;
  locality?: string;
  road?: string;
  images?: string[];
  rating?: number;
}

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: '4 BHK House For Sale In DAC Silicon Valley Phase 2',
    price: '₹2.31 Cr',
    location: 'Gandhi Nagar Main Road, Navalur, Chennai',
    address: 'Gandhi Nagar Main Road, Navalur, Chennai - 600130, Tamil Nadu',
    beds: 4,
    baths: 3,
    sqft: '2,389',
    type: 'House',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    ratePerSqft: '₹9,620 / sqft',
    society: 'DAC Silicon Valley Phase 2',
    builder: 'DAC Developers',
    description: 'Freedom Begins at Your Doorstep at DAC Silicon Valley Phase 2, brought by DAC Developers. This prestigious project offers a limited number of exquisitely styled 4 BHK individual homes in the rapidly developing Navalur, Chennai.',
    features: [
      'Near by Sri Oragandi Yellai Amman Temple',
      'No Brokerage',
      'Clear Title',
      'Ready to Move',
      'Modern Design',
      'Spacious Living Areas'
    ],
    amenities: [
      'Garden',
      'Parking',
      'Security',
      'Balcony',
      'Power Backup',
      'Water Supply'
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '+91 98765 43210',
      email: 'sarah.johnson@rbproperties.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    },
    pincode: '600130',
    state: 'Tamil Nadu',
    city: 'Chennai',
    locality: 'Navalur',
    road: 'Gandhi Nagar Main Road',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
    ],
    rating: 4.9
  },
  {
    id: 3,
    title: 'DAC SILICON VALLEY PHASE 2',
    price: '₹2.32 Cr',
    location: 'Near by Sri Oragandi Yellai Amman Temple, Navalur, Chennai',
    address: 'Near by Sri Oragandi Yellai Amman Temple, Navalur, Chennai - 600130, Tamil Nadu',
    beds: 4,
    baths: 3,
    sqft: '2,389',
    type: 'Project',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    ratePerSqft: '₹9,620',
    society: 'DAC Silicon Valley Phase 2',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    ],
    rating: 4.8
  },
  {
    id: 16,
    title: '1 BHK Apartment For Sale In Kilpauk',
    price: '₹75 L',
    location: 'Kilpauk Garden Road, Chennai',
    address: 'Kilpauk Garden Road, Chennai - 600010, Tamil Nadu',
    beds: 1,
    baths: 1,
    sqft: '750',
    type: 'Apartment',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    ratePerSqft: '₹10,000 / sqft',
    society: 'Kilpauk Residency',
    description: 'Compact 1 BHK apartment in a well-maintained society with good connectivity to hospitals and schools.',
    features: [
      'Compact Design',
      'Good Connectivity',
      'Well Maintained',
      'Clear Title',
      'Ready to Move',
      'Affordable Price'
    ],
    amenities: [
      'Garden',
      'Security',
      'Parking',
      'Power Backup',
      'Water Supply',
      'Lift'
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    ],
    rating: 4.4
  },
  {
    id: 17,
    title: 'Commercial Space For Sale In T Nagar',
    price: '₹5.5 Cr',
    location: 'Usman Road, T Nagar, Chennai',
    address: 'Usman Road, T Nagar, Chennai - 600017, Tamil Nadu',
    beds: 0,
    baths: 2,
    sqft: '2,500',
    type: 'Office',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    ratePerSqft: '₹22,000 / sqft',
    society: 'T Nagar Commercial Hub',
    description: 'Prime commercial space in the heart of T Nagar shopping district. Perfect for retail or office use.',
    features: [
      'Prime Location',
      'High Footfall',
      'Commercial Hub',
      'Ready to Move',
      'Good Investment',
      'High Rental Yield'
    ],
    amenities: [
      'Security',
      'Parking',
      'Power Backup',
      'Lift',
      'Fire Safety',
      'CCTV'
    ],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    ],
    rating: 4.6
  },
  {
    id: 18,
    title: 'Residential Plot For Sale In Tambaram',
    price: '₹1.2 Cr',
    location: 'Tambaram Main Road, Chennai',
    address: 'Tambaram Main Road, Chennai - 600045, Tamil Nadu',
    beds: 0,
    baths: 0,
    sqft: '2,400',
    type: 'Land',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1545324418-cc1b3fa10c6?w=400&h=300&fit=crop',
    ratePerSqft: '₹5,000 / sqft',
    society: 'Tambaram Greens',
    description: 'Residential plot in developing area with good connectivity to railway station and schools.',
    features: [
      'Residential Plot',
      'Good Connectivity',
      'Clear Title',
      'Ready for Construction',
      'Good Investment',
      'Future Development'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1b3fa10c6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
    ],
    rating: 4.3
  },
  {
    id: 19,
    title: 'Luxury Apartment Project - Marina Heights',
    price: '₹2.8 Cr',
    location: 'Marina Beach Road, Chennai',
    address: 'Marina Beach Road, Chennai - 600005, Tamil Nadu',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    type: 'Project',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    ratePerSqft: '₹15,556 / sqft',
    society: 'Marina Heights',
    description: 'Premium apartment project with sea views and world-class amenities. Expected completion in 2025.',
    features: [
      'Sea View',
      'Premium Amenities',
      'Under Construction',
      'Good Investment',
      'World Class Design',
      'High Appreciation'
    ],
    amenities: [
      'Swimming Pool',
      'Gym',
      'Garden',
      'Security',
      'Parking',
      'Power Backup'
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    ],
    rating: 4.8
  },
  {
    id: 20,
    title: '2 BHK House For Sale In Chromepet',
    price: '₹95 L',
    location: 'Chromepet Main Road, Chennai',
    address: 'Chromepet Main Road, Chennai - 600044, Tamil Nadu',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    type: 'House',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=400&h=300&fit=crop',
    ratePerSqft: '₹8,636 / sqft',
    society: 'Chromepet Residency',
    description: 'Independent house with garden in a peaceful residential area. Close to schools and hospitals.',
    features: [
      'Independent House',
      'Garden',
      'Peaceful Area',
      'Ready to Move',
      'Good Connectivity',
      'Family Friendly'
    ],
    amenities: [
      'Garden',
      'Security',
      'Parking',
      'Power Backup',
      'Water Supply',
      'Servant Quarters'
    ],
    images: [
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
    ],
    rating: 4.5
  }
];

export const allProperties: Property[] = [
  ...featuredProperties,
  {
    id: 4,
    title: '2 BHK Flat For Sale In Vadapalani',
    price: '₹1.1 Cr',
    location: 'SIMS HOSPITAL, Vadapalani, Chennai',
    address: 'SIMS HOSPITAL, Vadapalani, Chennai - 600026, Tamil Nadu',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    type: 'Apartment',
    status: 'Ready to Occupy',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    ratePerSqft: '₹10,000 / sqft',
    society: 'Vadapalani Residency',
    description: 'Well-maintained 2 BHK apartment in a prime location near SIMS Hospital. Perfect for families with good connectivity.',
    features: [
      'Near Hospital',
      'Good Connectivity',
      'Well Maintained',
      'Ready to Occupy',
      'Clear Title',
      'Family Friendly'
    ],
    amenities: [
      'Garden',
      'Security',
      'Parking',
      'Power Backup',
      'Water Supply',
      'Lift'
    ],
    agent: {
      name: 'Meera Patel',
      phone: '+91 98765 43214',
      email: 'meera.patel@rbproperties.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    },
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    ],
    rating: 4.6
  },
  {
    id: 5,
    title: '3 BHK Apartment For Sale In TNHB Colony',
    price: '₹85 L',
    location: 'Anna Nagar West, Chennai',
    address: 'Anna Nagar West, Chennai - 600040, Tamil Nadu',
    beds: 3,
    baths: 2,
    sqft: '1,200',
    type: 'Apartment',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    ratePerSqft: '₹7,083 / sqft',
    society: 'TNHB Colony',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    ],
    rating: 4.5
  },
  {
    id: 6,
    title: 'Luxury Villa For Sale In OMR',
    price: '₹1 Cr',
    location: 'OMR Road, Sholinganallur, Chennai',
    address: 'OMR Road, Sholinganallur, Chennai - 600119, Tamil Nadu',
    beds: 5,
    baths: 4,
    sqft: '3,500',
    type: 'Villa',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    ratePerSqft: '₹10,000 / sqft',
    society: 'OMR Luxury Villas',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop',
    ],
    rating: 4.9
  },
  {
    id: 7,
    title: 'Office Space For Rent In Tidel Park',
    price: '₹2.5 L',
    location: 'Tidel Park, Taramani, Chennai',
    address: 'Tidel Park, Taramani, Chennai - 600113, Tamil Nadu',
    beds: 0,
    baths: 2,
    sqft: '2,000',
    type: 'Office',
    status: 'Available for Rent',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    ratePerSqft: '₹125 / sqft',
    society: 'Tidel Park',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    ],
    rating: 4.7
  },
  {
    id: 8,
    title: '2 BHK House For Sale In Velachery',
    price: '₹1.2 Cr',
    location: 'Velachery Main Road, Chennai',
    address: 'Velachery Main Road, Chennai - 600042, Tamil Nadu',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    type: 'House',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=400&h=300&fit=crop',
    ratePerSqft: '₹10,909 / sqft',
    society: 'Velachery Residency',
    images: [
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-6032f02e92d8?w=800&h=600&fit=crop',
    ],
    rating: 4.4
  },
  {
    id: 9,
    title: 'Commercial Land For Sale In ECR',
    price: '₹1 Cr',
    location: 'ECR Road, Thiruvanmiyur, Chennai',
    address: 'ECR Road, Thiruvanmiyur, Chennai - 600041, Tamil Nadu',
    beds: 0,
    baths: 0,
    sqft: '5,000',
    type: 'Land',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    ratePerSqft: '₹5,000 / sqft',
    society: 'ECR Commercial Hub',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    ],
    rating: 4.6
  },
  {
    id: 10,
    title: 'Premium Apartment Project - Marina Bay',
    price: '₹1 Cr',
    location: 'Marina Beach Road, Chennai',
    address: 'Marina Beach Road, Chennai - 600005, Tamil Nadu',
    beds: 3,
    baths: 2,
    sqft: '1,500',
    type: 'Project',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1545324418-cc1b2fa10c6?w=400&h=300&fit=crop',
    ratePerSqft: '₹12,000',
    society: 'Marina Bay Residences',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1b2fa10c6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1b2fa10c6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1b2fa10c6?w=800&h=600&fit=crop',
    ],
    rating: 4.8
  },
  {
    id: 11,
    title: '1 BHK Apartment For Sale In T Nagar',
    price: '₹65 L',
    location: 'T Nagar Main Road, Chennai',
    address: 'T Nagar Main Road, Chennai - 600017, Tamil Nadu',
    beds: 1,
    baths: 1,
    sqft: '650',
    type: 'Apartment',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    ratePerSqft: '₹10,000 / sqft',
    society: 'T Nagar Residency',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    ],
    rating: 4.3
  },
  {
    id: 12,
    title: '4 BHK Apartment For Sale In Adyar',
    price: '₹1 Cr',
    location: 'Adyar Main Road, Chennai',
    address: 'Adyar Main Road, Chennai - 600020, Tamil Nadu',
    beds: 4,
    baths: 3,
    sqft: '1,800',
    type: 'Apartment',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    ratePerSqft: '₹13,889 / sqft',
    society: 'Adyar Luxury Apartments',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    ],
    rating: 4.9
  },
  {
    id: 13,
    title: 'Luxury Penthouse For Sale In Besant Nagar',
    price: '₹1 Cr',
    location: 'Beach Road, Besant Nagar, Chennai',
    address: 'Beach Road, Besant Nagar, Chennai - 600090, Tamil Nadu',
    beds: 5,
    baths: 4,
    sqft: '3,200',
    type: 'Apartment',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=300&fit=crop',
    ratePerSqft: '₹13,125 / sqft',
    society: 'Beach View Residences',
    description: 'Exclusive penthouse with panoramic sea views, private terrace, and premium amenities. Located in the heart of Besant Nagar with easy access to beaches and shopping.',
    features: [
      'Sea View',
      'Private Terrace',
      'Premium Amenities',
      '24/7 Security',
      'Underground Parking',
      'Swimming Pool'
    ],
    amenities: [
      'Gym',
      'Swimming Pool',
      'Garden',
      'Security',
      'Parking',
      'Power Backup'
    ],
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98765 43213',
      email: 'priya.sharma@rbproperties.com',
      image: 'https://images.unsplash.com/photo-3777943/pexels-photo-3777943.jpeg?w=200&h=200&fit=crop&crop=face',
    },
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop',
    ],
    rating: 4.9
  },
  {
    id: 14,
    title: '2 BHK Apartment For Sale In Mylapore',
    price: '₹1.8 Cr',
    location: 'Luz Corner, Mylapore, Chennai',
    address: 'Luz Corner, Mylapore, Chennai - 600004, Tamil Nadu',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    type: 'Apartment',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    ratePerSqft: '₹15,000 / sqft',
    society: 'Mylapore Heritage',
    description: 'Heritage area apartment with traditional charm and modern amenities. Close to Kapaleeshwarar Temple and Marina Beach.',
    features: [
      'Heritage Location',
      'Temple View',
      'Modern Amenities',
      'Clear Title',
      'Ready to Move',
      'Good Connectivity'
    ],
    amenities: [
      'Garden',
      'Security',
      'Parking',
      'Power Backup',
      'Water Supply',
      'Lift'
    ],
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    ],
    rating: 4.7
  },
  {
    id: 15,
    title: '3 BHK Villa For Sale In Alwarpet',
      price: '₹1 Cr',
    location: 'Alwarpet Main Road, Chennai',
    address: 'Alwarpet Main Road, Chennai - 600018, Tamil Nadu',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    type: 'Villa',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    ratePerSqft: '₹13,571 / sqft',
    society: 'Alwarpet Greens',
    description: 'Independent villa with private garden and modern amenities. Located in the prestigious Alwarpet area.',
    features: [
      'Independent Villa',
      'Private Garden',
      'Modern Design',
      'Premium Location',
      'Ready to Move',
      'Good Investment'
    ],
    amenities: [
      'Garden',
      'Security',
      'Parking',
      'Power Backup',
      'Water Supply',
      'Servant Quarters'
    ],
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43211',
      email: 'rajesh.kumar@rbproperties.com',
      image: 'https://images.unsplash.com/photo-2379004/pexels-photo-2379004.jpeg?w=200&h=200&fit=crop&crop=face',
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop',
    ],
    rating: 4.8
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return allProperties.find(property => property.id === id);
};

export const filterPropertiesByType = (type: string): Property[] => {
  if (type === 'All') return allProperties;
  return allProperties.filter(property => property.type === type);
};

export const searchProperties = (query: string): Property[] => {
  const lowercaseQuery = query.toLowerCase();
  return allProperties.filter(property => 
    property.title.toLowerCase().includes(lowercaseQuery) ||
    property.location.toLowerCase().includes(lowercaseQuery) ||
    property.society.toLowerCase().includes(lowercaseQuery) ||
    property.type.toLowerCase().includes(lowercaseQuery) ||
    property.status.toLowerCase().includes(lowercaseQuery) ||
    (property.description && property.description.toLowerCase().includes(lowercaseQuery)) ||
    (property.features && property.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)))
  );
};

export const getPropertiesByLocation = (location: string): Property[] => {
  const lowercaseLocation = location.toLowerCase();
  return allProperties.filter(property => 
    property.location.toLowerCase().includes(lowercaseLocation) ||
    property.address.toLowerCase().includes(lowercaseLocation)
  );
};

export const getPropertiesByPriceRange = (minPrice: number, maxPrice: number): Property[] => {
  return allProperties.filter(property => {
    const price = parseFloat(property.price.replace(/[^\d.]/g, ''));
    const priceInLakhs = property.price.includes('Cr') ? price * 100 : price;
    const priceInRupees = priceInLakhs * 100000;
    return priceInRupees >= minPrice && priceInRupees <= maxPrice;
  });
};

export const getPropertiesByBedrooms = (bedrooms: number): Property[] => {
  return allProperties.filter(property => property.beds === bedrooms);
};

export const getFeaturedProperties = (): Property[] => {
  return featuredProperties;
};

export const getNewestProperties = (limit: number = 5): Property[] => {
  return allProperties.slice(0, limit);
};

export const getPropertyCountByType = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  allProperties.forEach(property => {
    counts[property.type] = (counts[property.type] || 0) + 1;
  });
  return counts;
};

export const getPropertyTypes = (): string[] => {
  return [...new Set(allProperties.map(property => property.type))];
};
