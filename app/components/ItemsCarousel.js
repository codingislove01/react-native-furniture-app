import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    name: 'Sebastian chairs',
    price: 349.99,
    image: require('@images/chair1.png'),
    color: '#F7F7F7',
    isNew: true,
    isLiked: true,
  },
  {
    name: 'Sebastian chairs',
    price: 349.99,
    image: require('@images/chair2.png'),
    color: '#FEF5EE',
    isNew: false,
    isLiked: true,
  },
  {
    name: 'Sebastian chairs',
    price: 349.99,
    image: require('@images/chair1.png'),
    color: '#F7F7F7',
    isNew: false,
    isLiked: false,
  },
  {
    name: 'Sebastian chairs',
    price: 349.99,
    image: require('@images/chair2.png'),
    color: '#FEF5EE',
    isNew: false,
    isLiked: true,
  },
];

const ItemsCarousel = () => {
  const [activeDotIndex, setActiveDotIndex] = React.useState(0);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Product')}
        style={[styles.item, { backgroundColor: item.color }]}>
        <View style={styles.itemHeader}>
          {item.isNew ? <Text style={styles.headerText}>New</Text> : <View />}
          <TouchableOpacity>
            <Ionicon
              name={item.isLiked ? 'heart' : 'heart-outline'}
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        activeSlideAlignment="start"
        data={items}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.56}
        inactiveSlideScale={0.72}
        onSnapToItem={index => setActiveDotIndex(index)}
      />
      <Pagination
        activeDotIndex={activeDotIndex}
        dotsLength={items.length}
        dotElement={<DotElement active={true} />}
        inactiveDotElement={<DotElement active={false} />}
      />
    </View>
  );
};

const DotElement = ({ active }) => (
  <View style={[styles.dotContainer, active && styles.activeDotContainer]}>
    <View style={[styles.dot, active && styles.activeDot]}></View>
  </View>
);

export default ItemsCarousel;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  item: {
    padding: 15,
    borderRadius: 15,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 12,
  },
  itemImage: {
    width: '70%',
    height: 'auto',
    aspectRatio: 2 / 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  dot: {
    backgroundColor: '#CACACA',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    backgroundColor: '#000000',
  },
  dotContainer: {
    marginHorizontal: 7,
  },
  activeDotContainer: {
    padding: 4,
    backgroundColor: '#909090',
    borderRadius: 10,
  },
  price: {
    fontSize: 13,
    fontWeight: '500',
    color: '#ACB1BE',
    marginTop: 3,
  },
});
