import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const items = [
  {
    name: 'Blue sofa',
    category: 'Sofas',
    price: 25.99,
    image: require('@images/sofa.png'),
    color: '#E0EEF2',
    isNew: true,
    isLiked: true,
  },
  {
    name: 'Yellow sofa',
    category: 'Sofas',
    price: 35.99,
    image: require('@images/sofa.png'),
    color: '#FEF5EE',
    isNew: true,
    isLiked: true,
  },
];

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Offers for Sofas</Text>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.offerContainer}>
          <View style={styles.offerDetails}>
            <View
              style={[styles.imageContainer, { backgroundColor: item.color }]}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginBottom: 25,
  },
  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  offerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 77,
    height: 34,
  },
  imageContainer: {
    paddingVertical: 20,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  category: {
    fontSize: 12,
    color: '#ACB1BE',
    fontWeight: '500',
  },
});
