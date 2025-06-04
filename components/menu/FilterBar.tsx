import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Filter } from 'lucide-react-native';
import Colors from '@/constants/Colors';

const FILTERS = [
  { id: 'all', label: 'Semua' },
  { id: 'lowCalorie', label: 'Rendah Kalori' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'highProtein', label: 'Protein Tinggi' },
  { id: 'glutenFree', label: 'Bebas Gluten' },
];

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Filter Menu</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={Colors.light.text} />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}
      >
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterChip,
              activeFilter === filter.id && styles.activeFilterChip,
            ]}
            onPress={() => setActiveFilter(filter.id)}
          >
            <Text
              style={[
                styles.filterChipText,
                activeFilter === filter.id && styles.activeFilterChipText,
              ]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    backgroundColor: Colors.light.background,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  filtersContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  filterChip: {
    backgroundColor: Colors.light.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
  },
  activeFilterChip: {
    backgroundColor: Colors.light.primary,
  },
  filterChipText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.text,
  },
  activeFilterChipText: {
    color: 'white',
  },
});