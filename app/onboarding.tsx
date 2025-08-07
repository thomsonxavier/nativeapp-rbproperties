import { Image } from 'expo-image';
import { ScrollView, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import { Stack, router } from 'expo-router';
import { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/IconSymbol';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const onboardingSlides = [
    {
      id: 1,
      title: 'Explore Amazing Real Estate',
      subtitle: 'Find your dream property in Chennai\'s finest locations',
      description: 'Discover luxury apartments, villas, and plots across prime locations in Chennai with world-class amenities.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      location: 'DAC Silicon Valley, Navalur',
      price: '₹2.31 Cr',
    },
    {
      id: 2,
      title: 'Compare and Choose',
      subtitle: 'Find the perfect property that matches your lifestyle',
      description: 'Compare properties side by side with detailed information, amenities, and pricing to make informed decisions.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      location: 'OMR Luxury Villas, Sholinganallur',
      price: '₹3.5 Cr',
    },
    {
      id: 3,
      title: 'Choose More Comfort',
      subtitle: 'Experience luxury living with premium amenities',
      description: 'From swimming pools to 24/7 security, enjoy world-class facilities and comfort in your new home.',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
      location: 'Marina Bay Residences, Chennai',
      price: '₹1.8 Cr',
    },
  ];

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleSkip = () => {
    router.replace('/(tabs)');
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setCurrentIndex(index);
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: false,
        }} 
      />
      <SafeAreaView className="flex-1 bg-black">
        {/* Header */}
        <View className="flex-row justify-between items-center px-5 py-4">
          <Text className="text-gray-400 text-sm lowercase">onboarding</Text>
          <TouchableOpacity onPress={handleSkip}>
            <Text className="text-white text-base font-medium">Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Slides */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          className="flex-1"
        >
          {onboardingSlides.map((slide, index) => (
            <View key={slide.id} className="w-screen h-full">
              <View className="flex-1 relative">
                <Image 
                  source={{ uri: slide.image }} 
                  style={{ width: '100%', height: '100%' }} 
                  contentFit="cover"
                  placeholder="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
                  transition={200}
                />
                <View className="absolute inset-0 bg-black/40" />
                
                {/* Property Info Overlay */}
                <View className="absolute top-6 right-5 bg-black/80 px-4 py-3 rounded-xl">
                  <Text className="text-white text-xs mb-1 font-medium">{slide.location}</Text>
                  <Text className="text-blue-400 text-lg font-bold">{slide.price}</Text>
                </View>
              </View>

              {/* Content Overlay */}
              <View className="absolute bottom-0 left-0 right-0 px-8 pb-20">
                <Text className="text-white text-4xl font-bold mb-3 leading-tight">
                  {slide.title}
                </Text>
                <Text className="text-white text-xl mb-4 opacity-90 font-medium">
                  {slide.subtitle}
                </Text>
                <Text className="text-white text-base leading-7 opacity-80 mb-8">
                  {slide.description}
                </Text>

                {/* Navigation */}
                <View className="items-end">
                  {index < onboardingSlides.length - 1 ? (
                    <TouchableOpacity 
                      className="bg-white/20 p-4 rounded-full backdrop-blur-sm" 
                      onPress={handleNext}
                    >
                      <IconSymbol name="chevron.right" size={28} color="white" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity 
                      className="bg-blue-500 px-10 py-4 rounded-full shadow-lg" 
                      onPress={handleNext}
                    >
                      <Text className="text-white text-lg font-bold">Get Started</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Pagination Dots */}
        <View className="flex-row justify-center items-center pb-8 gap-3">
          {onboardingSlides.map((_, index) => (
            <View
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8 h-2' 
                  : 'bg-white/40 w-2 h-2'
              }`}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
