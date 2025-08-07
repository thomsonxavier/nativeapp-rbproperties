import { Image } from 'expo-image';
import { ScrollView, TouchableOpacity, View, Text, RefreshControl, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { getPropertyById } from '@/data/properties';
import * as Linking from 'expo-linking';
import * as MailComposer from 'expo-mail-composer';

export default function PropertyDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  
  // Get property data from centralized data
  const property = getPropertyById(Number(id));

  const handlePhoneCall = async () => {
    if (!property?.agent?.phone) {
      Alert.alert('Error', 'Phone number not available');
      return;
    }

    try {
      const phoneNumber = property.agent.phone.replace(/\s+/g, '');
      const url = `tel:${phoneNumber}`;
      const canOpen = await Linking.canOpenURL(url);
      
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Cannot make phone calls on this device');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to make phone call');
    }
  };

  const handleEmail = async () => {
    if (!property?.agent?.email) {
      Alert.alert('Error', 'Email address not available');
      return;
    }

    try {
      const isAvailable = await MailComposer.isAvailableAsync();
      
      if (isAvailable) {
        await MailComposer.composeAsync({
          recipients: [property.agent.email],
          subject: `Inquiry about ${property.title}`,
          body: `Hi ${property.agent.name},\n\nI'm interested in the property: ${property.title}\n\nPlease provide more information about this property.\n\nBest regards,\n[Your Name]`,
        });
      } else {
        // Fallback to opening email app with mailto link
        const mailtoUrl = `mailto:${property.agent.email}?subject=Inquiry about ${encodeURIComponent(property.title)}&body=${encodeURIComponent(`Hi ${property.agent.name},\n\nI'm interested in the property: ${property.title}\n\nPlease provide more information about this property.\n\nBest regards,\n[Your Name]`)}`;
        await Linking.openURL(mailtoUrl);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open email app');
    }
  };
  
  if (!property) {
    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
        <View className="flex-1 justify-center items-center px-6">
          <IconSymbol name="exclamationmark.triangle" size={64} color={isDark ? '#ccc' : '#666'} />
          <Text className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
            Property Not Found
          </Text>
          <Text className="text-center mt-2 text-gray-600 dark:text-gray-300">
            The property you&apos;re looking for doesn&apos;t exist.
          </Text>
          <TouchableOpacity 
            className="bg-blue-500 px-6 py-3 rounded-full mt-6"
            onPress={() => router.back()}
          >
            <Text className="text-white font-semibold">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (!property.images) return;
    
    if (direction === 'prev' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (direction === 'next' && currentImageIndex < property.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Use the main image if no images array, or current image from array
  const currentImage = property.images && property.images.length > 0 
    ? property.images[currentImageIndex] 
    : property.image;
  
  const fallbackImage = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop';
  const hasMultipleImages = property.images && property.images.length > 1;

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      {/* Navigation Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <TouchableOpacity 
          className="flex-row items-center"
          onPress={() => router.back()}
        >
          <IconSymbol name="chevron.left" size={20} color={isDark ? '#007AFF' : '#007AFF'} />
          <Text className="ml-2 font-medium text-base" style={{ color: isDark ? '#007AFF' : '#007AFF' }}>
            Back
          </Text>
        </TouchableOpacity>
        <Text className="flex-1 font-semibold text-center text-base mx-4" numberOfLines={1} style={{ color: isDark ? '#000' : '#000' }}>
          {property.beds}BHK {property.type}
        </Text>
        <TouchableOpacity className="p-2">
          <IconSymbol name="heart" size={24} color={isDark ? '#007AFF' : '#007AFF'} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={isDark ? "#007AFF" : "#007AFF"}
            colors={["#007AFF"]}
          />
        }
      >
        {/* Hero Image */}
        <View className="relative h-80">
          <Image 
            source={{ uri: currentImage }} 
            style={{ width: '100%', height: '100%' }}
            contentFit="cover"
            placeholder={fallbackImage}
            transition={200}
            cachePolicy="memory-disk"
          />
          
          {/* Image Navigation - Always show if there are multiple images */}
          {hasMultipleImages && (
            <>
              <TouchableOpacity 
                className="absolute top-1/2 left-4 bg-black/70 p-3 rounded-full"
                style={{ transform: [{ translateY: -20 }] }}
                onPress={() => handleImageNavigation('prev')}
                disabled={currentImageIndex === 0}
              >
                <IconSymbol 
                  name="chevron.left" 
                  size={20} 
                  color={currentImageIndex === 0 ? '#999' : 'white'} 
                />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="absolute top-1/2 right-4 bg-black/70 p-3 rounded-full"
                style={{ transform: [{ translateY: -20 }] }}
                onPress={() => handleImageNavigation('next')}
                disabled={currentImageIndex === property.images!.length - 1}
              >
                <IconSymbol 
                  name="chevron.right" 
                  size={20} 
                  color={currentImageIndex === property.images!.length - 1 ? '#999' : 'white'} 
                />
              </TouchableOpacity>
            </>
          )}

          {/* Image Counter - Always show if there are multiple images */}
          {hasMultipleImages && (
            <View className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-full">
              <Text className="text-white text-sm font-semibold">
                {currentImageIndex + 1} / {property.images!.length}
              </Text>
            </View>
          )}
        </View>

        {/* Property Info */}
        <View className="px-6 py-6">
          <Text className="text-2xl font-bold mb-2 text-gray-900">
            {property.title}
          </Text>
          <Text className="text-3xl font-bold text-blue-500 mb-1">
            {property.price}
          </Text>
          <Text className="text-base mb-4 text-gray-600">
            {property.ratePerSqft}
          </Text>
          
          <View className="flex-row items-center mb-6">
            <IconSymbol name="location.fill" size={16} color="#666" />
            <Text className="text-base ml-2 flex-1 text-gray-600">
              {property.address}
            </Text>
          </View>

          {/* Property Stats */}
          <View className="p-6 rounded-2xl mb-8 bg-gray-50">
            <View className="flex-row justify-between">
              <View className="items-center flex-1">
                <IconSymbol name="bed.double.fill" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold mt-2 text-gray-900">
                  {property.beds}
                </Text>
                <Text className="text-xs text-center text-gray-600">
                  Bedrooms
                </Text>
              </View>
              <View className="items-center flex-1">
                <IconSymbol name="shower.fill" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold mt-2 text-gray-900">
                  {property.baths}
                </Text>
                <Text className="text-xs text-center text-gray-600">
                  Bathrooms
                </Text>
              </View>
              <View className="items-center flex-1">
                <IconSymbol name="square.fill" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold mt-2 text-gray-900">
                  {property.sqft}
                </Text>
                <Text className="text-xs text-center text-gray-600">
                  Sq Ft
                </Text>
              </View>
              <View className="items-center flex-1">
                <IconSymbol name="house.fill" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold mt-2 text-gray-900">
                  {property.type}
                </Text>
                <Text className="text-xs text-center text-gray-600">
                  Type
                </Text>
              </View>
            </View>
          </View>

          {/* Project Details */}
          <View className="mb-8">
            <Text className={`text-xl font-bold mb-4 ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
              Project Details
            </Text>
            <View className={`p-6 rounded-2xl ${isDark ? 'bg-gray-50' : 'bg-gray-50'}`}>
              <View className="space-y-4">
                <View className="flex-row justify-between items-center">
                  <Text className={`font-semibold ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                    Society
                  </Text>
                  <Text className={`text-right flex-1 ml-4 ${isDark ? 'text-gray-600' : 'text-gray-600'}`}>
                    {property.society}
                  </Text>
                </View>
                {property.builder && (
                  <View className="flex-row justify-between items-center">
                    <Text className={`font-semibold ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                      Builder
                    </Text>
                    <Text className={`text-right flex-1 ml-4 ${isDark ? 'text-gray-600' : 'text-gray-600'}`}>
                      {property.builder}
                    </Text>
                  </View>
                )}
                <View className="flex-row justify-between items-center">
                  <Text className={`font-semibold ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                    Status
                  </Text>
                  <Text className={`text-right flex-1 ml-4 ${isDark ? 'text-gray-600' : 'text-gray-600'}`}>
                    {property.status}
                  </Text>
                </View>
                {property.pincode && (
                  <View className="flex-row justify-between items-center">
                    <Text className={`font-semibold ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                      Pincode
                    </Text>
                    <Text className={`text-right flex-1 ml-4 ${isDark ? 'text-gray-600' : 'text-gray-600'}`}>
                      {property.pincode}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* Description */}
          {property.description && (
            <View className="mb-8">
              <Text className={`text-xl font-bold mb-4 ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                Description
              </Text>
              <Text className={`text-base leading-6 ${isDark ? 'text-gray-700' : 'text-gray-700'}`}>
                {property.description}
              </Text>
            </View>
          )}

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <View className="mb-8">
              <Text className={`text-xl font-bold mb-4 ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                Key Features
              </Text>
              <View className="flex-row flex-wrap">
                {property.features.map((feature, index) => (
                  <View key={index} className="flex-row items-center w-1/2 mb-3">
                    <IconSymbol name="checkmark.circle.fill" size={16} color="#4CAF50" />
                    <Text className={`text-sm ml-2 flex-1 ${isDark ? 'text-gray-700' : 'text-gray-700'}`}>
                      {feature}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <View className="mb-8">
              <Text className={`text-xl font-bold mb-4 ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                Amenities & Facilities
              </Text>
              <View className="flex-row flex-wrap">
                {property.amenities.map((amenity, index) => (
                  <View key={index} className="flex-row items-center w-1/2 mb-3">
                    <IconSymbol name="star.fill" size={16} color="#FFD700" />
                    <Text className={`text-sm ml-2 flex-1 ${isDark ? 'text-gray-700' : 'text-gray-700'}`}>
                      {amenity}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Agent Info */}
          {property.agent && (
            <View className="mb-8">
              <Text className={`text-xl font-bold mb-4 ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                Contact Agent
              </Text>
              <View className={`p-6 rounded-2xl ${isDark ? 'bg-gray-50' : 'bg-gray-50'}`}>
                <View className="flex-row items-center">
                  <Image 
                    source={{ uri: property.agent.image }} 
                    className="w-16 h-16 rounded-full mr-4"
                    contentFit="cover"
                    placeholder="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  />
                  <View className="flex-1">
                    <Text className={`text-lg font-semibold mb-1 ${isDark ? 'text-gray-900' : 'text-gray-900'}`}>
                      {property.agent.name}
                    </Text>
                    <TouchableOpacity onPress={handleEmail} className="flex-row items-center mb-1">
                      <IconSymbol name="envelope.fill" size={14} color="#007AFF" />
                      <Text className={`text-sm ml-2 ${isDark ? 'text-blue-600' : 'text-blue-600'}`}>
                        {property.agent.email}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePhoneCall} className="flex-row items-center">
                      <IconSymbol name="phone.fill" size={14} color="#007AFF" />
                      <Text className={`text-sm ml-2 ${isDark ? 'text-blue-600' : 'text-blue-600'}`}>
                        {property.agent.phone}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}

          {/* Action Buttons */}
          <View className="flex-row gap-4 mb-8">
            <TouchableOpacity 
              className="flex-1 bg-blue-500 flex-row items-center justify-center py-4 rounded-full"
              onPress={handlePhoneCall}
            >
              <IconSymbol name="phone.fill" size={20} color="white" />
              <Text className="text-white font-semibold text-lg ml-2">
                Call Agent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-1 border border-blue-500 flex-row items-center justify-center py-4 rounded-full bg-white"
              onPress={handleEmail}
            >
              <IconSymbol name="envelope.fill" size={20} color="#007AFF" />
              <Text className="text-blue-500 font-semibold text-lg ml-2">
                Email Agent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
