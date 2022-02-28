import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ title, showBack = false }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image
            source={require('@images/menu-icon.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Image
          source={require('@images/shopping-bag.png')}
          style={styles.shoppingBagIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  menuIcon: {
    width: 25,
    height: 12,
  },
  shoppingBagIcon: {
    width: 19,
    height: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
});
