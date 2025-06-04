import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PlusCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import FitCard from '@/components/ui/FitCard';
import { useRouter } from 'expo-router';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  calories: number;
  price: number;
  image: string;
}

export default function MenuCard({ id, name, description, calories, price, image }: MenuItemProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/menu/${id}`);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <FitCard style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
            <View style={styles.footer}>
              <View style={styles.infoContainer}>
                <View style={styles.calorieBadge}>
                  <Text style={styles.calorieText}>{calories} kal</Text>
                </View>
                <Text style={styles.price}>Rp {price.toLocaleString()}</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <PlusCircle size={24} color={Colors.light.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </FitCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardContent: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  calorieBadge: {
    backgroundColor: Colors.light.lightGray,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  calorieText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.light.primary,
  },
  addButton: {
    padding: 4,
  },
});