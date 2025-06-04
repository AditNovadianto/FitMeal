import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Colors from '@/constants/Colors';
import CategoryList from '@/components/home/CategoryList';
import RecommendationCarousel from '@/components/home/RecommendationCarousel';
import FitCard from '@/components/ui/FitCard';
import { Bell } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hai, Amanda</Text>
            <Text style={styles.subGreeting}>Mau makan apa hari ini?</Text>
          </View>
          <View style={styles.notificationIcon}>
            <Bell size={24} color={Colors.light.text} />
          </View>
        </View>

        <FitCard style={styles.summaryCard}>
          <View style={styles.summaryContent}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>1500</Text>
              <Text style={styles.summaryLabel}>Kalori</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>75g</Text>
              <Text style={styles.summaryLabel}>Protein</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>2L</Text>
              <Text style={styles.summaryLabel}>Air</Text>
            </View>
          </View>
        </FitCard>

        <RecommendationCarousel />
        <CategoryList />

        <View style={styles.promoSection}>
          <Text style={styles.sectionTitle}>Promo Spesial</Text>
          <FitCard style={styles.promoCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600' }}
              style={styles.promoImage}
            />
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Diet Plan 30 Hari</Text>
              <Text style={styles.promoDescription}>
                Dapatkan rencana diet khusus dan konsultasi gratis dari ahli gizi
              </Text>
              <View style={styles.promoBadge}>
                <Text style={styles.promoBadgeText}>DISKON 20%</Text>
              </View>
            </View>
          </FitCard>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryCard: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Colors.light.primary,
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.light.mediumGray,
  },
  promoSection: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  promoCard: {
    padding: 0,
    overflow: 'hidden',
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  promoContent: {
    padding: 16,
  },
  promoTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  promoDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    marginBottom: 12,
  },
  promoBadge: {
    backgroundColor: Colors.light.secondary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  promoBadgeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: Colors.light.text,
  },
});