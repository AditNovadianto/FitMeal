import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '@/constants/Colors';
import FitCard from '@/components/ui/FitCard';
import { Star } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;

const RECOMMENDATIONS = [
  {
    id: '1',
    name: 'Salad Bowl Protein',
    description: 'Salad dengan ayam panggang dan alpukat',
    calories: 320,
    protein: 25,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Smoothie Bowl',
    description: 'Smoothie bowl dengan buah-buahan segar',
    calories: 250,
    protein: 12,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    name: 'Chicken Wrap',
    description: 'Wrap dengan ayam panggang dan sayuran',
    calories: 380,
    protein: 28,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function RecommendationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rekomendasi Hari Ini</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {RECOMMENDATIONS.map((item) => (
          <TouchableOpacity key={item.id} activeOpacity={0.9} style={styles.cardContainer}>
            <FitCard style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description} numberOfLines={1}>
                  {item.description}
                </Text>
                <View style={styles.detailsRow}>
                  <View style={styles.calories}>
                    <Text style={styles.caloriesText}>{item.calories} kal</Text>
                  </View>
                  <View style={styles.rating}>
                    <Star size={14} color={Colors.light.primary} />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </FitCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {RECOMMENDATIONS.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginRight: 16,
  },
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 16,
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
    marginBottom: 12,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calories: {
    backgroundColor: Colors.light.lightGray,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  caloriesText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.text,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 4,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.mediumGray,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: Colors.light.primary,
    width: 20,
  },
});