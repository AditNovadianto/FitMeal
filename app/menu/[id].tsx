import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Star, Clock, Heart } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import FitButton from '@/components/ui/FitButton';

// Mock data - in a real app, this would be fetched from an API
const MENU_DETAILS = {
  '1': {
    id: '1',
    name: 'Salad Bowl Protein',
    description: 'Salad dengan ayam panggang, alpukat, telur rebus, dan dressing rendah lemak. Direkomendasikan untuk program penurunan berat badan dan peningkatan massa otot.',
    calories: 320,
    protein: 25,
    carbs: 20,
    fat: 15,
    price: 45000,
    prepTime: '15 menit',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  '2': {
    id: '2',
    name: 'Smoothie Bowl',
    description: 'Smoothie bowl dengan buah-buahan segar, granola, dan biji chia. Sempurna untuk sarapan atau camilan sehat yang kaya akan vitamin dan serat.',
    calories: 250,
    protein: 12,
    carbs: 45,
    fat: 8,
    price: 35000,
    prepTime: '10 menit',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  '3': {
    id: '3',
    name: 'Chicken Wrap',
    description: 'Wrap dengan ayam panggang dan sayuran, saus yogurt. Pilihan makanan sehat yang praktis dan mengenyangkan.',
    calories: 380,
    protein: 28,
    carbs: 35,
    fat: 12,
    price: 40000,
    prepTime: '12 menit',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  '4': {
    id: '4',
    name: 'Quinoa Bowl',
    description: 'Quinoa dengan sayuran panggang, tofu, dan saus tahini. Pilihan vegan yang kaya akan protein nabati dan nutrisi penting.',
    calories: 290,
    protein: 14,
    carbs: 40,
    fat: 10,
    price: 42000,
    prepTime: '20 menit',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  '5': {
    id: '5',
    name: 'Salmon Panggang',
    description: 'Salmon panggang dengan asparagus dan kentang manis. Sumber omega-3 yang baik untuk kesehatan jantung dan otak.',
    calories: 410,
    protein: 32,
    carbs: 25,
    fat: 18,
    price: 55000,
    prepTime: '25 menit',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
};

export default function MenuDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get menu item details
  const menuItem = MENU_DETAILS[id as string];

  if (!menuItem) {
    return (
      <View style={styles.container}>
        <Text>Menu tidak ditemukan</Text>
      </View>
    );
  }

  const handleBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    // Logic to add to cart
    router.push('/menu/cart');
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: menuItem.image }} style={styles.image} />
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]} 
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              size={20} 
              color={isFavorite ? 'white' : Colors.light.primary} 
              fill={isFavorite ? Colors.light.primary : 'transparent'} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{menuItem.name}</Text>
            <View style={styles.ratingContainer}>
              <Star size={16} color="#FFD700" fill="#FFD700" />
              <Text style={styles.rating}>{menuItem.rating}</Text>
            </View>
          </View>

          <View style={styles.prepTimeContainer}>
            <Clock size={16} color={Colors.light.darkGray} />
            <Text style={styles.prepTime}>Prep time: {menuItem.prepTime}</Text>
          </View>

          <Text style={styles.price}>Rp {menuItem.price.toLocaleString()}</Text>

          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.description}>{menuItem.description}</Text>

          <Text style={styles.sectionTitle}>Informasi Nutrisi</Text>
          <View style={styles.nutritionContainer}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{menuItem.calories}</Text>
              <Text style={styles.nutritionLabel}>Kalori</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{menuItem.protein}g</Text>
              <Text style={styles.nutritionLabel}>Protein</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{menuItem.carbs}g</Text>
              <Text style={styles.nutritionLabel}>Karbo</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{menuItem.fat}g</Text>
              <Text style={styles.nutritionLabel}>Lemak</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.quantitySelector}>
          <TouchableOpacity 
            style={styles.quantityButton} 
            onPress={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Text style={[styles.quantityButtonText, quantity <= 1 && styles.quantityButtonDisabled]}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionButtons}>
          <FitButton 
            title="Tambah ke Keranjang"
            onPress={handleAddToCart}
            style={styles.addToCartButton}
          />
          <FitButton 
            title="Pesan Sekarang" 
            onPress={() => router.push('/menu/cart')}
            variant="primary"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    padding: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  favoriteButtonActive: {
    backgroundColor: Colors.light.primary,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  prepTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  prepTime: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  price: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: Colors.light.primary,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 22,
    color: Colors.light.darkGray,
    marginBottom: 20,
  },
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.light.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.light.primary,
    marginBottom: 4,
  },
  nutritionLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    marginBottom: 16,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.light.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  quantityButtonDisabled: {
    color: Colors.light.mediumGray,
  },
  quantityText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    flex: 1,
    marginRight: 12,
  },
});