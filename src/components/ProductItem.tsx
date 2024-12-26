import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Separator from './Separator';
import {addItemToCart, CartProduct} from '../redux/slices/cartSlice';

import {useDispatch} from 'react-redux';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

const ProductItem = ({product}: ProductProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: Product) => {
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
      <Separator />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 8,
  },
  mainRowStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
  },
  productImageStyle: {
    height: 200,
    width: 150,
    resizeMode: 'contain',
    marginHorizontal: 8,
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
