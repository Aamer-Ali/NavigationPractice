import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import ProductItem from '../components/ProductItem';
import {PRODUCTS_LIST} from '../data/constants';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {product: item})}>
            <ProductItem key={item.id} product={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
});
