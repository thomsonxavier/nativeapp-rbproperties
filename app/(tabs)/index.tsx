import { Image } from 'expo-image';
import { ScrollView, TouchableOpacity, View, Text, RefreshControl, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { useState, useCallback } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  // const [rentOrBuy, setRentOrBuy] = useState<'Rent' | 'Buy'>('Buy');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const featuredProperties = [
    {
      id: 1,
      title: '4 BHK House For Sale In DAC Silicon Valley Phase 2',
      price: '₹2.31 Cr',
      location: 'Gandhi Nagar Main Road, Navalur, Chennai',
      beds: 4,
      baths: 3,
      sqft: '2,389',
      type: 'House',
      status: 'Under Construction',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      ratePerSqft: '₹9,620 / sqft',
    },
    {
      id: 2,
      title: 'Luxury Villa For Sale In OMR',
      price: '₹3.5 Cr',
      location: 'OMR Road, Sholinganallur, Chennai',
      beds: 5,
      baths: 4,
      sqft: '3,500',
      type: 'Villa',
      status: 'Ready to Move',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      ratePerSqft: '₹10,000 / sqft',
    },
    {
      id: 3,
      title: '2 BHK Flat For Sale In Vadapalani',
      price: '₹1.1 Cr',
      location: 'SIMS HOSPITAL, Vadapalani, Chennai',
      beds: 2,
      baths: 2,
      sqft: '1,100',
      type: 'Apartment',
      status: 'Ready to Occupy',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      ratePerSqft: '₹10,000 / sqft',
    },
    {
      id: 4,
      title: '3 BHK Apartment For Sale In TNHB Colony',
      price: '₹85 L',
      location: 'Anna Nagar West, Chennai',
      beds: 3,
      baths: 2,
      sqft: '1,200',
      type: 'Apartment',
      status: 'Ready to Move',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      ratePerSqft: '₹7,083 / sqft',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">    
    <ScrollView 
      className="flex-1"
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#007AFF"
          colors={["#007AFF"]}
        />
      }
    >
      {/* Hero Section */}
      <View className="relative h-96">
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop' }}
            style={{ width: '100%', height: '100%' }}
          contentFit="cover"
          placeholder="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&blur=10"
          transition={200}
          cachePolicy="memory-disk"
        />
        <View className="absolute inset-0 bg-black/40 justify-center items-center px-5">
          <Text className="text-white text-3xl font-bold text-center mb-2">
            Find Your Dream Home
          </Text>
          <Text className="text-white text-base text-center mb-8">
            Discover the perfect property in Chennai&apos;s finest neighborhoods
          </Text>
          
          {/* Rent or Buy Toggle
          <View className="flex-row bg-white/20 rounded-full p-1 mb-6 w-48">
            <TouchableOpacity
              className={`flex-1 py-3 px-6 rounded-full ${rentOrBuy === 'Rent' ? 'bg-white' : ''}`}
              onPress={() => setRentOrBuy('Rent')}
            >
              <Text className={`text-center font-semibold text-base ${rentOrBuy === 'Rent' ? 'text-blue-500' : 'text-white'}`}>
                Rent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 px-6 rounded-full ${rentOrBuy === 'Buy' ? 'bg-white' : ''}`}
              onPress={() => setRentOrBuy('Buy')}
            >
              <Text className={`text-center font-semibold text-base ${rentOrBuy === 'Buy' ? 'text-blue-500' : 'text-white'}`}>
                Buy
              </Text>
            </TouchableOpacity>
          </View> */}
          
          <TouchableOpacity 
            className="bg-blue-500 px-8 py-4 rounded-full mb-4"
            onPress={() => router.push('/explore')}
          >
            <Text className="text-white text-base font-semibold">Search Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-transparent border-2 border-white px-8 py-4 rounded-full"
            onPress={() => router.push('/contact')}
          >
            <Text className="text-white text-base font-semibold">Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Properties */}
      <View className="px-5 py-6 my-2">
        <Text className="text-2xl font-bold mb-2 text-gray-900">
          Featured Properties
        </Text>
        <Text className="text-base text-gray-600 mb-6">
          Handpicked properties in prime locations
        </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row  p-2">
          {featuredProperties.map((property) => (
            <TouchableOpacity 
              key={property.id} 
              className="w-72 mr-4 bg-white rounded-xl shadow-lg"
              onPress={() => router.push(`/property/${property.id}`)}
            >
              <Image 
                source={{ uri: property.image }} 
                style={{ width: 'auto'  , height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                contentFit="cover"
                placeholder="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&blur=10"
                transition={200}
                cachePolicy="memory-disk"
              />
              <View className="absolute top-3 left-3 bg-blue-500 px-3 py-1 rounded-lg">
                <Text className="text-white text-xs font-semibold">{property.status}</Text>
              </View>
              <View className="p-4">
                <Text className="text-base font-semibold mb-2 text-gray-900 leading-5" numberOfLines={2}>
                  {property.title}
                </Text>
                <Text className="text-lg font-bold text-blue-500 mb-1">
                  {property.price}
                </Text>
                <Text className="text-sm text-gray-600 mb-2">
                  {property.location}
                </Text>
                <Text className="text-xs text-gray-500 mb-3">
                  {property.ratePerSqft}
                </Text>
                <View className="flex-row justify-between">
                  <View className="flex-row items-center">
                    <IconSymbol name="bed.double.fill" size={16} color="#666" />
                    <Text className="text-xs text-gray-600 ml-1">{property.beds}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <IconSymbol name="shower.fill" size={16} color="#666" />
                    <Text className="text-xs text-gray-600 ml-1">{property.baths}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <IconSymbol name="square.fill" size={16} color="#666" />
                    <Text className="text-xs text-gray-600 ml-1">{property.sqft} sqft</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Services Section */}
      <View className="px-5 py-6">
        <Text className="text-2xl font-bold mb-2 text-gray-900">
          Our Services
        </Text>
        <View className="flex-row flex-wrap justify-between">
          <View className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center">
            <IconSymbol name="house.fill" size={32} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
              Buy Property
            </Text>
            <Text className="text-sm text-gray-600 text-center leading-5">
              Find your perfect home with our extensive listings across Chennai
            </Text>
          </View>
          <View className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center">
            <IconSymbol name="key.fill" size={32} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
              Sell Property
            </Text>
            <Text className="text-sm text-gray-600 text-center leading-5">
              List your property and reach qualified buyers in Chennai
            </Text>
          </View>
          <View className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center">
            <IconSymbol name="building.2.fill" size={32} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
              Rent Property
            </Text>
            <Text className="text-sm text-gray-600 text-center leading-5">
              Discover rental properties in prime Chennai locations
            </Text>
          </View>
          <View className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center">
            <IconSymbol name="map.fill" size={32} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
              Land Investment
            </Text>
            <Text className="text-sm text-gray-600 text-center leading-5">
              Invest in residential and commercial plots across Chennai
            </Text>
          </View>
        </View>
      </View>

      {/* Property Types */}
      <View className="px-5 py-6">
        <Text className="text-2xl font-bold mb-2 text-gray-900">
          Property Types
        </Text>
        <View className="flex-row flex-wrap justify-between">
          <TouchableOpacity 
            className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center"
            onPress={() => router.push('/explore')}
          >
            <IconSymbol name="house.fill" size={40} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-1 text-center text-gray-900">
              Houses
            </Text>
            <Text className="text-xs text-gray-600 text-center">25+ Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center"
            onPress={() => router.push('/explore')}
          >
            <IconSymbol name="building.2.fill" size={40} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-1 text-center text-gray-900">
              Apartments
            </Text>
            <Text className="text-xs text-gray-600 text-center">50+ Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center"
            onPress={() => router.push('/explore')}
          >
            <IconSymbol name="building.columns.fill" size={40} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-1 text-center text-gray-900">
              Villas
            </Text>
            <Text className="text-xs text-gray-600 text-center">15+ Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="w-[48%] bg-white p-5 rounded-xl shadow-sm mb-4 items-center"
            onPress={() => router.push('/explore')}
          >
            <IconSymbol name="map.fill" size={40} color="#007AFF" />
            <Text className="text-base font-semibold mt-3 mb-1 text-center text-gray-900">
              Land
            </Text>
            <Text className="text-xs text-gray-600 text-center">30+ Properties</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
