import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronRight, Settings, Award, CreditCard, User2, HelpCircle, LogOut } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import FitCard from '@/components/ui/FitCard';
import FitButton from '@/components/ui/FitButton';

export default function AccountScreen() {
  const menuItems = [
    {
      id: 'profile',
      title: 'Edit Profil',
      icon: <User2 size={20} color={Colors.light.text} />,
    },
    {
      id: 'premium',
      title: 'Upgrade ke Premium',
      icon: <Award size={20} color={Colors.light.primary} />,
      highlight: true,
    },
    {
      id: 'payment',
      title: 'Metode Pembayaran',
      icon: <CreditCard size={20} color={Colors.light.text} />,
    },
    {
      id: 'settings',
      title: 'Pengaturan Aplikasi',
      icon: <Settings size={20} color={Colors.light.text} />,
    },
    {
      id: 'help',
      title: 'Bantuan & Dukungan',
      icon: <HelpCircle size={20} color={Colors.light.text} />,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Akun Saya</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
            style={styles.profileImage} 
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Amanda Wijaya</Text>
            <View style={styles.membershipBadge}>
              <Text style={styles.membershipText}>Basic Member</Text>
            </View>
          </View>
        </View>

        <FitCard style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Pesanan</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Konsultasi</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Favorit</Text>
            </View>
          </View>
        </FitCard>

        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[
                styles.menuItem,
                item.highlight && styles.highlightedMenuItem,
              ]}
            >
              <View style={styles.menuItemLeft}>
                {item.icon}
                <Text style={[
                  styles.menuItemText,
                  item.highlight && styles.highlightedMenuItemText,
                ]}>
                  {item.title}
                </Text>
              </View>
              <ChevronRight size={20} color={item.highlight ? 'white' : Colors.light.darkGray} />
            </TouchableOpacity>
          ))}
        </View>

        <FitCard style={styles.goalCard}>
          <Text style={styles.goalTitle}>Target Diet Anda</Text>
          <View style={styles.goalProgress}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%' }]} />
            </View>
            <Text style={styles.progressText}>75% tercapai</Text>
          </View>
          <Text style={styles.goalDescription}>
            Anda telah konsisten mengikuti diet rendah kalori selama 3 minggu. Lanjutkan!
          </Text>
          <FitButton 
            title="Lihat Detail" 
            variant="outline"
            onPress={() => {}}
            style={styles.goalButton}
          />
        </FitCard>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.light.error} />
          <Text style={styles.logoutText}>Keluar</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  membershipBadge: {
    backgroundColor: Colors.light.secondary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  membershipText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  statsCard: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Colors.light.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  verticalDivider: {
    width: 1,
    height: '60%',
    backgroundColor: Colors.light.border,
    alignSelf: 'center',
  },
  menuSection: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  highlightedMenuItem: {
    backgroundColor: Colors.light.primary,
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 12,
  },
  highlightedMenuItemText: {
    color: 'white',
  },
  goalCard: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  goalTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
  },
  goalProgress: {
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.light.lightGray,
    borderRadius: 4,
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.light.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.primary,
    alignSelf: 'flex-end',
  },
  goalDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    marginBottom: 16,
    lineHeight: 20,
  },
  goalButton: {
    alignSelf: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 30,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.error,
    marginLeft: 8,
  },
});