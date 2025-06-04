import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import FitCard from '@/components/ui/FitCard';

// Mock data for articles
const ARTICLES = [
  {
    id: '1',
    title: 'Panduan Diet Sehat untuk Pemula',
    summary: 'Pelajari langkah-langkah dasar untuk memulai perjalanan diet sehat yang berkelanjutan.',
    category: 'Tips Gizi',
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '5 menit',
  },
  {
    id: '2',
    title: 'Resep Smoothie Bowl untuk Sarapan',
    summary: 'Variasi smoothie bowl yang lezat dan bergizi untuk memulai hari Anda dengan energi.',
    category: 'Resep Harian',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '3 menit',
  },
  {
    id: '3',
    title: 'Manfaat Protein untuk Pembentukan Otot',
    summary: 'Ketahui pentingnya protein dalam diet Anda untuk pembentukan dan pemeliharaan massa otot.',
    category: 'Hidup Sehat',
    image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 menit',
  },
  {
    id: '4',
    title: '10 Makanan untuk Meningkatkan Imunitas',
    summary: 'Daftar makanan yang dapat membantu meningkatkan sistem kekebalan tubuh Anda secara alami.',
    category: 'Tips Gizi',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '4 menit',
  },
];

// Categories for filtering
const CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'tips', label: 'Tips Gizi' },
  { id: 'recipes', label: 'Resep Harian' },
  { id: 'lifestyle', label: 'Hidup Sehat' },
];

export default function ArticlesScreen() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(article => {
        if (activeCategory === 'tips' && article.category === 'Tips Gizi') return true;
        if (activeCategory === 'recipes' && article.category === 'Resep Harian') return true;
        if (activeCategory === 'lifestyle' && article.category === 'Hidup Sehat') return true;
        return false;
      });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Artikel & Resep</Text>
      </View>

      <View style={styles.categoryFilterContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {CATEGORIES.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryItem,
                activeCategory === category.id && styles.activeCategoryItem,
              ]}
              onPress={() => setActiveCategory(category.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === category.id && styles.activeCategoryText,
                ]}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.articlesContainer}>
        {filteredArticles.map(article => (
          <TouchableOpacity key={article.id} activeOpacity={0.9}>
            <FitCard style={styles.articleCard}>
              <Image source={{ uri: article.image }} style={styles.articleImage} />
              <View style={styles.articleContent}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryBadgeText}>{article.category}</Text>
                </View>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleSummary}>{article.summary}</Text>
                <View style={styles.articleFooter}>
                  <Text style={styles.readTime}>{article.readTime} baca</Text>
                  <TouchableOpacity>
                    <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </FitCard>
          </TouchableOpacity>
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
  categoryFilterContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  categoryList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: Colors.light.lightGray,
  },
  activeCategoryItem: {
    backgroundColor: Colors.light.primary,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.text,
  },
  activeCategoryText: {
    color: 'white',
  },
  articlesContainer: {
    flex: 1,
    padding: 16,
  },
  articleCard: {
    marginBottom: 16,
    padding: 0,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 180,
  },
  articleContent: {
    padding: 16,
  },
  categoryBadge: {
    backgroundColor: Colors.light.secondary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  articleTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  articleSummary: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    marginBottom: 16,
    lineHeight: 20,
  },
  articleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readTime: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
  },
  readMoreText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.light.primary,
  },
});