import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Separator from './Separator';
import {addItemToCart} from '../redux/slices/cartSlice';

import {useDispatch} from 'react-redux';

const ProductItem = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addItemToCart(item));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainRowStyle}>
        <Image src={product.imageUrl} style={styles.productImageStyle} />
        <View style={styles.descriptionColumnStyle}>
          <View style={styles.ratingRowStyle}>
            <Text style={styles.ratingTextStyle}>{product.rating} ★</Text>
            <Text style={styles.ratingCountTextStyle}>
              ({product.ratingCount})
            </Text>
          </View>
          <View style={styles.ratingRowStyle}>
            <Text style={styles.originalPriceTextStyle}>
              Rs.{product.originalPrice}
            </Text>
            <Text style={styles.discountedPriceTextStyle}>
              Rs.{product.discountPrice}
            </Text>
            <Text style={styles.offerPercentageTextStyle}>
              % {product.offerPercentage} off
            </Text>
          </View>
          <Button
            title="Add to cart"
            onPress={() => handleAddToCart(product)}
          />
        </View>
      </View>
      {/* <Separator /> */}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  mainRowStyle: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  productImageStyle: {
    height: 200,
    width: 150,
    resizeMode: 'contain',
    marginHorizontal: 8,
    borderRadius: 8,
  },
  descriptionColumnStyle: {
    flexDirection: 'column',
  },
  ratingRowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingTextStyle: {
    backgroundColor: 'green',
    padding: 4,
    borderRadius: 4,
    marginRight: 8,
    color: 'white',
  },
  ratingCountTextStyle: {
    color: 'gray',
  },
  originalPriceTextStyle: {
    color: 'gray',
    marginRight: 8,
    textDecorationLine: 'line-through',
  },
  discountedPriceTextStyle: {
    marginRight: 8,
  },
  offerPercentageTextStyle: {
    color: 'green',
  },
});
