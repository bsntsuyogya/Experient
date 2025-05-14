/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './source/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './source/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const safePadding = '5%';

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


export default App;
