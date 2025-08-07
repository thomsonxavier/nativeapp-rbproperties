
import { ScrollView, TouchableOpacity, TextInput, View, Text, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useMemo, useCallback } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import PropertyCard from '@/components/PropertyCard';
import FilterDrawer, { FilterState } from '@/components/FilterDrawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import { allProperties, searchProperties, getPropertyCountByType, getPropertyTypes } from '@/data/properties';

// Mapping between display names and actual property types
const FILTER_TYPE_MAPPING: Record<string, string> = {
  'All': 'All',
  'House': 'House',
  'Apartment': 'Apartment',
  'Villa': 'Villa',
  'Land': 'Land',
  'Project': 'Project',
  'Office': 'Office'
};

export default function PropertiesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh - reset filters and search
    setTimeout(() => {
      setSelectedFilter('All');
      setSearchQuery('');
      setAppliedFilters({
        rentOrBuy: 'Buy',
        propertyTypes: [],
        priceRange: [0, 100000000],
        bedrooms: [],
        bathrooms: [],
      });
      setRefreshing(false);
    }, 1500);
  }, []);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    rentOrBuy: 'Buy',
    propertyTypes: [],
    priceRange: [0, 100000000],
    bedrooms: [],
    bathrooms: [],
  });

  // Memoized filtered properties
  const filteredProperties = useMemo(() => {
    let filtered = allProperties;
    
    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchProperties(searchQuery);
    }
    
    // Apply property type filter (quick filters take priority)
    if (selectedFilter !== 'All') {
      const actualPropertyType = FILTER_TYPE_MAPPING[selectedFilter];
      filtered = filtered.filter(property => property.type === actualPropertyType);
    } else if (appliedFilters.propertyTypes.length > 0) {
      // Only apply drawer filters if no quick filter is selected
      filtered = filtered.filter(property => 
        appliedFilters.propertyTypes.includes(property.type)
      );
    }
    
    if (appliedFilters.bedrooms.length > 0) {
      filtered = filtered.filter(property => 
        appliedFilters.bedrooms.includes(property.beds)
      );
    }
    
    if (appliedFilters.bathrooms.length > 0) {
      filtered = filtered.filter(property => 
        appliedFilters.bathrooms.includes(property.baths)
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(property => {
      const price = parseFloat(property.price.replace(/[^\d.]/g, ''));
      const priceInLakhs = property.price.includes('Cr') ? price * 100 : price;
      const priceInRupees = priceInLakhs * 100000;
      return priceInRupees >= appliedFilters.priceRange[0] && 
             priceInRupees <= appliedFilters.priceRange[1];
    });
    
    return filtered;
  }, [selectedFilter, searchQuery, appliedFilters]);

  const propertyCounts = getPropertyCountByType();
  
  const filterOptions = [
    { id: 'all', name: 'All', icon: 'house.fill' as const, count: allProperties.length },
    { id: 'house', name: 'House', icon: 'house.fill' as const, count: propertyCounts['House'] || 0 },
    { id: 'apartment', name: 'Apartment', icon: 'building.2.fill' as const, count: propertyCounts['Apartment'] || 0 },
    { id: 'villa', name: 'Villa', icon: 'building.columns.fill' as const, count: propertyCounts['Villa'] || 0 },
    { id: 'land', name: 'Land', icon: 'map.fill' as const, count: propertyCounts['Land'] || 0 },
    { id: 'project', name: 'Project', icon: 'building.2.crop.circle.fill' as const, count: propertyCounts['Project'] || 0 },
    { id: 'office', name: 'Office', icon: 'building.2.fill' as const, count: propertyCounts['Office'] || 0 },
  ];

  const handleFilterApply = (filters: FilterState) => {
    setAppliedFilters(filters);
  };

  const handleQuickFilterSelect = (filterName: string) => {
    setSelectedFilter(filterName);
    // Reset applied filters when using quick filters
    if (filterName !== 'All') {
      setAppliedFilters({
        rentOrBuy: 'Buy',
        propertyTypes: [],
        priceRange: [0, 100000000],
        bedrooms: [],
        bathrooms: [],
      });
    }
  };



  const getActiveFiltersCount = () => {
    let count = 0;
    if (appliedFilters.propertyTypes.length > 0) count++;
    if (appliedFilters.bedrooms.length > 0) count++;
    if (appliedFilters.bathrooms.length > 0) count++;
    if (appliedFilters.priceRange[0] > 0 || appliedFilters.priceRange[1] < 10000000) count++;
    return count;
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
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
        {/* Search Header */}
        <View className={`px-6 py-6 border-b ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <Text className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Find Your Perfect Home
          </Text>
          <Text className={`text-base mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Browse our extensive collection of properties in Chennai
          </Text>
          
          {/* Search Bar */}
          <View className="flex-row items-center mb-6">
            <View className={`flex-1 flex-row items-center rounded-full px-4 py-3 mr-3 ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <IconSymbol name="magnifyingglass" size={20} color={isDark ? '#ccc' : '#666'} />
              <TextInput
                className={`flex-1 ml-3 text-base ${isDark ? 'text-white' : 'text-gray-900'}`}
                placeholder="Search by location, property type..."
                placeholderTextColor={isDark ? '#999' : '#666'}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            <TouchableOpacity 
              className={`p-3 rounded-full ${getActiveFiltersCount() > 0 ? 'bg-blue-500' : isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
              onPress={() => setFilterDrawerVisible(true)}
            >
              <IconSymbol 
                name="slider.horizontal.3" 
                size={20} 
                color={getActiveFiltersCount() > 0 ? 'white' : (isDark ? '#ccc' : '#666')} 
              />
              {getActiveFiltersCount() > 0 && (
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                  <Text className="text-white text-xs font-bold">{getActiveFiltersCount()}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Quick Filters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {filterOptions.map((filter) => (
              <TouchableOpacity
                key={filter.id}
                className={`mr-3 px-4 py-2 rounded-full flex-row items-center ${
                  selectedFilter === filter.name
                    ? 'bg-blue-500'
                    : isDark ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                onPress={() => handleQuickFilterSelect(filter.name)}
              >
                <IconSymbol 
                  name={filter.icon} 
                  size={16} 
                  color={selectedFilter === filter.name ? 'white' : (isDark ? '#ccc' : '#666')} 
                />
                <Text 
                  className={`ml-2 font-medium ${
                    selectedFilter === filter.name 
                      ? 'text-white' 
                      : isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {filter.name}
                </Text>
                <Text 
                  className={`ml-1 text-xs ${
                    selectedFilter === filter.name 
                      ? 'text-white/80' 
                      : isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  ({filter.count})
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Properties List */}
        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {filteredProperties.length} Properties Found
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <IconSymbol name="arrow.up.arrow.down" size={16} color={isDark ? '#ccc' : '#666'} />
              <Text className={`ml-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Sort
              </Text>
            </TouchableOpacity>
          </View>

          {filteredProperties.length === 0 ? (
            <View className="flex-1 items-center justify-center py-20">
              <IconSymbol name="magnifyingglass" size={64} color={isDark ? '#666' : '#ccc'} />
              <Text className={`text-lg font-semibold mt-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                No properties found
              </Text>
              <Text className={`text-center mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Try adjusting your search or filter criteria
              </Text>
            </View>
          ) : (
            <View className="space-y-0">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Filter Drawer */}
      <FilterDrawer
        visible={filterDrawerVisible}
        onClose={() => setFilterDrawerVisible(false)}
        onApply={handleFilterApply}
        initialFilters={appliedFilters}
      />
    </SafeAreaView>
  );
}
