import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import FilterBar from '@/components/menu/FilterBar';
import MenuCard from '@/components/menu/MenuCard';

const MENU_ITEMS = [
  {
    id: '1',
    name: 'Salad Bowl Protein',
    description: 'Salad dengan ayam panggang, alpukat, dan dressing rendah lemak.',
    calories: 320,
    price: 45000,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Smoothie Bowl',
    description: 'Smoothie bowl dengan buah-buahan segar, granola, dan biji chia.',
    calories: 250,
    price: 35000,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    name: 'Chicken Wrap',
    description: 'Wrap dengan ayam panggang dan sayuran, saus yogurt.',
    calories: 380,
    price: 40000,
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '4',
    name: 'Quinoa Bowl',
    description: 'Quinoa dengan sayuran panggang, tofu, dan saus tahini.',
    calories: 290,
    price: 42000,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '5',
    name: 'Salmon Panggang',
    description: 'Salmon panggang dengan asparagus dan kentang manis.',
    calories: 410,
    price: 55000,
    image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Menu Makanan</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={Colors.light.darkGray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari menu..."
            placeholderTextColor={Colors.light.darkGray}
          />
        </View>
      </View>
      <FilterBar />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.menuList}>
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.lightGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  menuList: {
    flex: 1,
  },
});