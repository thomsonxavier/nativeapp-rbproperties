import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const glowOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationSequence = Animated.sequence([
      // Initial logo scale and opacity animation
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      // Glow effect
      Animated.timing(glowOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      // Text fade in
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      // Hold for a moment
      Animated.delay(1000),
      // Fade out everything
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]);

    animationSequence.start(() => {
      onAnimationComplete();
    });
  }, [logoScale, logoOpacity, textOpacity, glowOpacity, onAnimationComplete]);

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 justify-center items-center">
        {/* Background gradient effect */}
        <View className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Glow effect behind logo
        <Animated.View
          style={{
            position: 'absolute',
            opacity: glowOpacity,
            transform: [{ scale: 1.2 }],
          }}
        >
          <View className="w-40 h-40 rounded-full bg-blue-500/30 blur-2xl" />
        </Animated.View> */}

        {/* Logo */}
        <Animated.View
          style={{
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }}
          className="mb-10"
        >
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 140, height: 140 }}
            contentFit="contain"
            transition={200}
          />
        </Animated.View>

        {/* App name */}
        <Animated.Text
          style={{
            opacity: textOpacity,
          }}
          className="text-white text-3xl font-bold tracking-wider mb-2"
        >
          RB PROPERTIES
        </Animated.Text>

        {/* Tagline */}
        <Animated.Text
          style={{
            opacity: textOpacity,
          }}
          className="text-gray-300 text-base tracking-wide"
        >
          Find Your Dream Home
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
}
