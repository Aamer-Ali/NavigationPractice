import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {CartProduct} from '../redux/slices/cartSlice';

const Header = () => {
  const cartItems: [CartProduct] = useSelector(state => state.cart.cartItem);

  return (
    <View>
      <Text style={styles.cartTextStyle}>
        Cart 🛒{' '}
        {cartItems.map(item => {
          return item.quantity;
        })}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  cartTextStyle: {textAlign: 'right', fontSize: 24, marginRight: 10},
});
