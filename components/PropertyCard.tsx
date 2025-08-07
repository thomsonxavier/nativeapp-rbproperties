import { Image } from 'expo-image';
import { TouchableOpacity, View, Text } from 'react-native';
import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

// Reusable Badge Component
const Badge = ({ 
  children, 
  className = "", 
  isDark = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  isDark?: boolean; 
}) => (
  <View className={`px-2.5 py-1 rounded-lg ${className}`}>
    <Text className="text-white text-xs font-semibold">
      {children}
    </Text>
  </View>
);

// Reusable Property Detail Item Component
const PropertyDetailItem = ({ 
  icon, 
  value, 
  isDark 
}: { 
  icon: 'square.fill' | 'bed.double.fill' | 'shower.fill'; 
  value: string | number; 
  isDark: boolean; 
}) => (
  <View className="flex-row items-center">
    <IconSymbol 
      name={icon} 
      size={14} 
      color={isDark ? '#d1d5db' : '#6b7280'} 
    />
    <Text className={`text-xs ml-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
      {value}
    </Text>
  </View>
);

// Property details configuration
const propertyDetails = [
  { icon: 'square.fill' as const, key: 'sqft' },
  { icon: 'bed.double.fill' as const, key: 'beds' },
  { icon: 'shower.fill' as const, key: 'baths' }
] as const;

export default function PropertyCard({ property }: PropertyCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity 
      className={`rounded-2xl mb-5 shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
      style={{
        shadowColor: isDark ? '#000' : '#000',
        shadowOpacity: isDark ? 0.3 : 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
      }}
      onPress={() => router.push(`/property/${property.id}`)}
    >
      {/* Image Section */}
      <View className="relative h-48">
        <Image 
          source={{ uri: property.image }} 
          style={{ width: '100%', height: '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          contentFit="cover"
          placeholder="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&blur=10"
          transition={200}
          cachePolicy="memory-disk"
        />
        
        {/* Rating Badge */}
        <View className="absolute top-3 left-3 bg-black/70 flex-row items-center px-2 py-1 rounded-xl">
          <IconSymbol name="star.fill" size={14} color="#FFD700" />
          <Text className="text-white text-xs font-semibold ml-1">
            {property.rating || 4.9}
          </Text>
        </View>

        {/* Property Type Tag */}
        <View className={`absolute top-3 right-3 px-3 py-1.5 rounded-xl ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <Text className="text-blue-500 text-xs font-semibold">
            {property.type}
          </Text>
        </View>

        {/* Status Badge */}
        <Badge className="absolute bottom-3 left-3 bg-blue-500">
          {property.status}
        </Badge>
      </View>

      {/* Content Section */}
      <View className="p-4">
        {/* Title */}
        <Text className={`text-lg font-bold mb-2 leading-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`} numberOfLines={2}>
          {property.title}
        </Text>

        {/* Location */}
        <View className="flex-row items-center mb-1.5">
          <IconSymbol 
            name="location.fill" 
            size={14} 
            color={isDark ? '#d1d5db' : '#6b7280'} 
          />
          <Text 
            className={`text-sm flex-1 ml-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} 
            numberOfLines={1}
          >
            {property.location}
          </Text>
        </View>

        {/* Society */}
        <Text 
          className="text-xs text-gray-500 mb-3" 
          numberOfLines={1}
        >
          {property.society}
        </Text>

        {/* Property Details - Mapped over configuration */}
        <View className="flex-row justify-between mb-3">
          {propertyDetails.map(({ icon, key }) => (
            <PropertyDetailItem
              key={key}
              icon={icon}
              value={property[key]}
              isDark={isDark}
            />
          ))}
        </View>

        {/* Price and Rate per Sqft */}
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-bold text-blue-500">
            {property.price}
          </Text>
          <Text className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {property.ratePerSqft}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
