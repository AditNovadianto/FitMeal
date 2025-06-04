import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import FitCard from '@/components/ui/FitCard';
import FitButton from '@/components/ui/FitButton';

// Mock data for cart items
const CART_ITEMS = [
  {
    id: '1',
    name: 'Salad Bowl Protein',
    price: 45000,
    quantity: 1,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Smoothie Bowl',
    price: 35000,
    quantity: 2,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function CartScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(CART_ITEMS);

  const handleIncreaseQuantity = (id: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const deliveryFee = 10000;
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={Colors.light.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Keranjang</Text>
        <View style={{ width: 24 }} />
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/4439391/pexels-photo-4439391.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
            style={styles.emptyCartImage} 
          />
          <Text style={styles.emptyCartText}>Keranjang Anda kosong</Text>
          <Text style={styles.emptyCartSubtext}>
            Tambahkan makanan untuk melanjutkan pemesanan
          </Text>
          <FitButton 
            title="Lihat Menu" 
            onPress={() => router.push('/menu')}
            style={styles.browseButton}
          />
        </View>
      ) : (
        <>
          <ScrollView style={styles.cartItemsContainer}>
            {cartItems.map((item) => (
              <FitCard key={item.id} style={styles.cartItemCard}>
                <View style={styles.cartItem}>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                  <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>Rp {item.price.toLocaleString()}</Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity 
                        style={styles.quantityButton} 
                        onPress={() => handleDecreaseQuantity(item.id)}
                      >
                        <Minus size={16} color={Colors.light.text} />
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity 
                        style={styles.quantityButton} 
                        onPress={() => handleIncreaseQuantity(item.id)}
                      >
                        <Plus size={16} color={Colors.light.text} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={styles.removeButton}
                    onPress={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 size={20} color={Colors.light.error} />
                  </TouchableOpacity>
                </View>
              </FitCard>
            ))}
          </ScrollView>

          <View style={styles.summaryContainer}>
            <FitCard style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>Rp {subtotal.toLocaleString()}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Ongkos Kirim</Text>
                <Text style={styles.summaryValue}>Rp {deliveryFee.toLocaleString()}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>Rp {total.toLocaleString()}</Text>
              </View>
            </FitCard>
            <FitButton 
              title="Checkout" 
              onPress={() => {
                // Handle checkout logic
                // Navigate to confirmation screen or payment page
              }}
              style={styles.checkoutButton}
              size="large"
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  emptyCartText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    textAlign: 'center',
    marginBottom: 24,
  },
  browseButton: {
    width: '80%',
  },
  cartItemsContainer: {
    flex: 1,
    padding: 16,
  },
  cartItemCard: {
    marginBottom: 12,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.primary,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.light.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 12,
  },
  removeButton: {
    padding: 8,
  },
  summaryContainer: {
    padding: 16,
    backgroundColor: Colors.light.background,
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
  },
  summaryCard: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  summaryValue: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.border,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  totalValue: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Colors.light.primary,
  },
  checkoutButton: {
    width: '100%',
  },
});