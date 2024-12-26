import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItem from '../components/ProductItem';
import {PRODUCTS_LIST} from '../data/constants';
import Header from '../components/Header';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {product: item})}>
            <ProductItem product={item} />
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
