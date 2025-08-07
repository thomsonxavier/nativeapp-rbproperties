import { Image } from 'expo-image';
import { ScrollView, TouchableOpacity, TextInput, Alert, View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ContactScreen() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Real Estate Agent',
      phone: '+91 98765 43210',
      email: 'sarah.johnson@rbproperties.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Property Manager',
      phone: '+91 98765 43211',
      email: 'rajesh.kumar@rbproperties.com',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    },
    {
      name: 'Priya Sharma',
      role: 'Mortgage Specialist',
      phone: '+91 98765 43212',
      email: 'priya.sharma@rbproperties.com',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    },
  ];

  const handleSubmit = () => {
    Alert.alert(
      'Message Sent!',
      'Thank you for contacting us. We will get back to you within 24 hours.',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen 
        options={{ 
          title: 'Contact Us',
          headerShown: true,
        }} 
      />
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="relative h-64">
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop' }}
            style={{ width: '100%', height: '100%' }}
            contentFit="cover"
            placeholder="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&blur=10"
            transition={200}
            cachePolicy="memory-disk"
          />
          <View className="absolute inset-0 bg-black/40 justify-center items-center px-5">
            <Text className="text-white text-3xl font-bold text-center mb-2">
              Get in Touch
            </Text>
            <Text className="text-white text-base text-center">
              We&apos;re here to help you find your perfect home in Chennai
            </Text>
          </View>
        </View>

        {/* Contact Form */}
        <View className="px-5 py-6">
          <Text className="text-2xl font-bold mb-2 text-gray-900">
            Send us a Message
          </Text>
          <View className="bg-white p-5 rounded-xl shadow-lg">
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2 text-gray-900">Full Name</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base bg-gray-50"
                placeholder="Enter your full name"
                placeholderTextColor="#666"
              />
            </View>
            
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2 text-gray-900">Email</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base bg-gray-50"
                placeholder="Enter your email address"
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
            </View>
            
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2 text-gray-900">Phone</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base bg-gray-50"
                placeholder="Enter your phone number"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
              />
            </View>
            
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2 text-gray-900">Subject</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base bg-gray-50"
                placeholder="What can we help you with?"
                placeholderTextColor="#666"
              />
            </View>
            
            <View className="mb-5">
              <Text className="text-base font-semibold mb-2 text-gray-900">Message</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base bg-gray-50 h-24"
                placeholder="Tell us more about your inquiry..."
                placeholderTextColor="#666"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
            
            <TouchableOpacity className="bg-blue-500 py-4 rounded-full" onPress={handleSubmit}>
              <Text className="text-white text-center font-semibold text-base">Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Office Information */}
        <View className="px-5 py-6">
          <Text className="text-2xl font-bold mb-2 text-gray-900">
            Office Information
          </Text>
          <View className="bg-white p-5 rounded-xl shadow-lg">
            <View className="space-y-5">
              <View className="flex-row items-start space-x-4">
                <IconSymbol name="house.fill" size={20} color="#007AFF" />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-900">Main Office</Text>
                  <Text className="text-sm text-gray-600">123 Real Estate Boulevard</Text>
                  <Text className="text-sm text-gray-600">Anna Nagar, Chennai - 600040</Text>
                  <Text className="text-sm text-gray-600">Tamil Nadu, India</Text>
                </View>
              </View>
              
              <View className="flex-row items-start space-x-4">
                <IconSymbol name="house.fill" size={20} color="#007AFF" />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-900">Phone</Text>
                  <Text className="text-sm text-gray-600">+91 44 1234 5678</Text>
                  <Text className="text-sm text-gray-600">+91 98765 43210</Text>
                </View>
              </View>
              
              <View className="flex-row items-start space-x-4">
                <IconSymbol name="house.fill" size={20} color="#007AFF" />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-900">Email</Text>
                  <Text className="text-sm text-gray-600">info@rbproperties.com</Text>
                  <Text className="text-sm text-gray-600">support@rbproperties.com</Text>
                </View>
              </View>
              
              <View className="flex-row items-start space-x-4">
                <IconSymbol name="house.fill" size={20} color="#007AFF" />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-900">Business Hours</Text>
                  <Text className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</Text>
                  <Text className="text-sm text-gray-600">Saturday: 10:00 AM - 6:00 PM</Text>
                  <Text className="text-sm text-gray-600">Sunday: 10:00 AM - 4:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Team Section */}
        <View className="px-5 py-6">
          <Text className="text-2xl font-bold mb-2 text-gray-900">
            Meet Our Team
          </Text>
          <Text className="text-base text-gray-600 mb-6">
            Our experienced professionals are here to help you find your dream property
          </Text>
          
          <View className="space-y-5">
            {teamMembers.map((member, index) => (
              <View key={index} className="bg-white p-5 rounded-xl shadow-lg">
                <Image 
                  source={{ uri: member.image }} 
                  style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 16 }}
                  contentFit="cover"
                  placeholder="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&blur=10"
                  transition={200}
                  cachePolicy="memory-disk"
                />
                <View className="space-y-2">
                  <Text className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {member.role}
                  </Text>
                  <View className="space-y-2">
                    <TouchableOpacity className="flex-row items-center space-x-2">
                      <IconSymbol name="house.fill" size={16} color="#007AFF" />
                      <Text className="text-sm text-blue-500">{member.phone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center space-x-2">
                      <IconSymbol name="house.fill" size={16} color="#007AFF" />
                      <Text className="text-sm text-blue-500">{member.email}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Services Offered */}
        <View className="px-5 py-6">
          <Text className="text-2xl font-bold mb-2 text-gray-900">
            Services We Offer
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] bg-white p-5 rounded-xl shadow-lg mb-4 items-center">
              <IconSymbol name="house.fill" size={32} color="#007AFF" />
              <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
                Property Buying
              </Text>
              <Text className="text-sm text-gray-600 text-center leading-5">
                Find your perfect home with our extensive listings across Chennai
              </Text>
            </View>
            <View className="w-[48%] bg-white p-5 rounded-xl shadow-lg mb-4 items-center">
              <IconSymbol name="house.fill" size={32} color="#007AFF" />
              <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
                Property Selling
              </Text>
              <Text className="text-sm text-gray-600 text-center leading-5">
                List your property and reach qualified buyers in Chennai
              </Text>
            </View>
            <View className="w-[48%] bg-white p-5 rounded-xl shadow-lg mb-4 items-center">
              <IconSymbol name="house.fill" size={32} color="#007AFF" />
              <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
                Property Renting
              </Text>
              <Text className="text-sm text-gray-600 text-center leading-5">
                Discover rental properties in prime Chennai locations
              </Text>
            </View>
            <View className="w-[48%] bg-white p-5 rounded-xl shadow-lg mb-4 items-center">
              <IconSymbol name="house.fill" size={32} color="#007AFF" />
              <Text className="text-base font-semibold mt-3 mb-2 text-center text-gray-900">
                Land Investment
              </Text>
              <Text className="text-sm text-gray-600 text-center leading-5">
                Invest in residential and commercial plots across Chennai
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


