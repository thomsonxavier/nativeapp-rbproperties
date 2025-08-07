import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';

interface FilterDrawerProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

export interface FilterState {
  rentOrBuy: 'Rent' | 'Buy';
  propertyTypes: string[];
  priceRange: [number, number];
  bedrooms: (number | string)[];
  bathrooms: (number | string)[];
}

export default function FilterDrawer({ visible, onClose, onApply, initialFilters }: FilterDrawerProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters || {
    rentOrBuy: 'Buy',
    propertyTypes: [],
    priceRange: [0, 100000000], // 0 to 10 crore
    bedrooms: [],
    bathrooms: [],
  });

  const propertyTypeOptions = [
    'House', 'Apartment', 'Villa', 'Land', 'Project', 'Office'
  ];

  const bedroomOptions = [1, 2, 3, 4, 5, '5+'];
  const bathroomOptions = [1, 2, 3, 4, '4+'];

  const togglePropertyType = (type: string) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type]
    }));
  };

  const toggleBedroom = (bedroom: number | string) => {
    setFilters(prev => ({
      ...prev,
      bedrooms: prev.bedrooms.includes(bedroom)
        ? prev.bedrooms.filter(b => b !== bedroom)
        : [...prev.bedrooms, bedroom]
    }));
  };

  const toggleBathroom = (bathroom: number | string) => {
    setFilters(prev => ({
      ...prev,
      bathrooms: prev.bathrooms.includes(bathroom)
        ? prev.bathrooms.filter(b => b !== bathroom)
        : [...prev.bathrooms, bathroom]
    }));
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      rentOrBuy: 'Buy',
      propertyTypes: [],
      priceRange: [0, 100000000],
      bedrooms: [],
      bathrooms: [],
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
          <TouchableOpacity onPress={onClose}>
            <Text className="text-2xl font-bold text-gray-900">×</Text>
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-gray-900">
            Filters
          </Text>
          <TouchableOpacity onPress={handleReset}>
            <Text className="text-blue-500 font-medium">Reset</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-6 py-4">
          {/* Rent or Buy Toggle */}
          <View className="mb-6">
            <Text className="text-lg font-semibold mb-3 text-gray-900">
              Rent or Buy
            </Text>
            <View className="flex-row rounded-full p-1 border bg-gray-100 border-gray-300">
              <TouchableOpacity
                className={`flex-1 py-3 px-4 rounded-full ${filters.rentOrBuy === 'Rent' ? 'bg-white shadow-sm' : ''}`}
                onPress={() => setFilters(prev => ({ ...prev, rentOrBuy: 'Rent' }))}
              >
                <Text className={`text-center font-medium ${filters.rentOrBuy === 'Rent' ? 'text-gray-900' : 'text-gray-600'}`}>
                  Rent
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 py-3 px-4 rounded-full ${filters.rentOrBuy === 'Buy' ? 'bg-white shadow-sm' : ''}`}
                onPress={() => setFilters(prev => ({ ...prev, rentOrBuy: 'Buy' }))}
              >
                <Text className={`text-center font-medium ${filters.rentOrBuy === 'Buy' ? 'text-gray-900' : 'text-gray-600'}`}>
                  Buy
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Property Type Filter */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-lg font-semibold text-gray-900">
                Property Type
              </Text>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {propertyTypeOptions.map((type) => (
                <TouchableOpacity
                  key={type}
                  className={`px-4 py-2 rounded-full border ${
                    filters.propertyTypes.includes(type)
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                  onPress={() => togglePropertyType(type)}
                >
                  <Text className={`font-medium ${
                    filters.propertyTypes.includes(type)
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Price Range Filter */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-lg font-semibold text-gray-900">
                Price Range
              </Text>
            </View>
            <View className="p-4 rounded-lg bg-gray-50">
              <View className="flex-row justify-between mb-2">
                <Text className="text-sm text-gray-600">
                  {formatPrice(filters.priceRange[0])}
                </Text>
                <Text className="text-sm text-gray-600">
                  {formatPrice(filters.priceRange[1])}
                </Text>
              </View>
              <View className="h-2 rounded-full bg-gray-200">
                <View 
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${((filters.priceRange[1] - filters.priceRange[0]) / 10000000) * 100}%` }}
                />
              </View>
              <View className="flex-row justify-between mt-2">
                <TouchableOpacity
                  className="px-3 py-1 rounded-full bg-gray-200"
                  onPress={() => setFilters(prev => ({ ...prev, priceRange: [0, 5000000] }))}
                >
                  <Text className="text-xs text-gray-600">Under 50L</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="px-3 py-1 rounded-full bg-gray-200"
                  onPress={() => setFilters(prev => ({ ...prev, priceRange: [5000000, 10000000] }))}
                >
                  <Text className="text-xs text-gray-600">50L - 1Cr</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="px-3 py-1 rounded-full bg-gray-200"
                  onPress={() => setFilters(prev => ({ ...prev, priceRange: [10000000, 20000000] }))}
                >
                  <Text className="text-xs text-gray-600">1Cr+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Bedrooms Filter */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-lg font-semibold text-gray-900">
                Bedrooms
              </Text>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {bedroomOptions.map((bedroom) => (
                <TouchableOpacity
                  key={bedroom}
                  className={`px-4 py-2 rounded-full border ${
                    filters.bedrooms.includes(bedroom)
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                  onPress={() => toggleBedroom(bedroom)}
                >
                  <Text className={`font-medium ${
                    filters.bedrooms.includes(bedroom)
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}>
                    {bedroom}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Bathrooms Filter */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-lg font-semibold text-gray-900">
                Bathrooms
              </Text>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {bathroomOptions.map((bathroom) => (
                <TouchableOpacity
                  key={bathroom}
                  className={`px-4 py-2 rounded-full border ${
                    filters.bathrooms.includes(bathroom)
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                  onPress={() => toggleBathroom(bathroom)}
                >
                  <Text className={`font-medium ${
                    filters.bathrooms.includes(bathroom)
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}>
                    {bathroom}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Apply Button */}
        <View className="px-6 py-4 border-t border-gray-200">
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-full"
            onPress={handleApply}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Apply Filters
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
