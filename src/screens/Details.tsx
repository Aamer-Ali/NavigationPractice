import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {product} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image src={product.imageUrl} style={styles.productImageStyle} />
      <View style={styles.ratingRowStyle}>
        <Text style={styles.ratingTextStyle}>{product.rating} ★</Text>
        <Text style={styles.ratingCountTextStyle}>
          {product.ratingCount.toLocaleString()} ratings
        </Text>
      </View>

      <View style={styles.priceRowStyle}>
        <Text style={styles.offerPercentageTextStyle}>
          % {product.offerPercentage} off
        </Text>
        <Text style={styles.originalPriceTextStyle}>
          ₹{product.originalPrice.toLocaleString()} ratings
        </Text>
        <Text style={styles.discountedPriceTextStyle}>
          ₹{product.discountPrice.toLocaleString()} ratings
        </Text>
      </View>
      <View style={styles.tagsRowStyle}>
        {product.tags.map(tag => (
          <Text>{tag}</Text>
        ))}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  productImageStyle: {
    alignSelf: 'center',
    marginVertical: 16,
    height: 400,
    width: 300,
    resizeMode: 'contain',
  },
  ratingRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
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
  priceRowStyle: {
    marginTop: 24,
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 8,
    backgroundColor: 'lightgreen',
  },
  originalPriceTextStyle: {
    color: 'gray',
    marginRight: 8,
    textDecorationLine: 'line-through',
  },
  discountedPriceTextStyle: {
    marginRight: 8,
    fontWeight: 'bold',
  },
  offerPercentageTextStyle: {
    color: 'green',
    marginRight: 8,
  },
  tagsRowStyle: {
    marginTop: 24,
  },
});
