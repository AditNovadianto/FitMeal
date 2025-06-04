import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Leaf, Dumbbell, Flame } from 'lucide-react-native';
import Colors from '@/constants/Colors';

const CATEGORIES = [
  {
    id: '1',
    name: 'Rendah Kalori',
    icon: (color: string) => <Flame size={24} color={color} />,
  },
  {
    id: '2',
    name: 'Vegan',
    icon: (color: string) => <Leaf size={24} color={color} />,
  },
  {
    id: '3',
    name: 'Protein Tinggi',
    icon: (color: string) => <Dumbbell size={24} color={color} />,
  },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategori</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {CATEGORIES.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              {category.icon(Colors.light.primary)}
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});