import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@components/Navbar';
import CategoryTabs from '@components/CategoryTabs';
import ItemsCarousel from '@components/ItemsCarousel';
import Offers from '@components/Offers';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Chairs');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollInnerContainer}>
        <Navbar title="Furniture" />
        <View style={styles.categoriesContainer}>
          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelect={category => setSelectedCategory(category)}
          />
        </View>
        <ItemsCarousel />
        <View style={styles.offersContainer}>
          <Offers />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoriesContainer: {
    marginTop: 25,
    marginBottom: 20,
  },
  scrollInnerContainer: {
    paddingBottom: 70,
  },
});
