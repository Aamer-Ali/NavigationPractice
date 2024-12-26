import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';
import {Provider} from 'react-redux';
import store from './redux/store';

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Trending Products'}}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
