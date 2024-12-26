import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    // <SafeAreaView style={styles.mainHeaderStyle}>
    //   <Text style={styles.cartTextStyle}>
    //     🛒{cartItems.reduce((total, item) => (total += item.quantity), 0)}
    //   </Text>
    // </SafeAreaView>
    <Text style={styles.cartTextStyle}>
      🛒{cartItems.reduce((total, item) => (total += item.quantity), 0)}
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainHeaderStyle: {backgroundColor: '#ffffff'},
  cartTextStyle: {textAlign: 'right', fontSize: 24, marginRight: 10},
});
