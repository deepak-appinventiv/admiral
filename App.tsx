/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import Store from "./src/store";
import { Home } from "./src/modules/home";
import Router from "./src/router";
import Utils from './src/utils';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Utils.Constant.color.primaryColor} />
        {/*
         provide store to the router
        */}
        <Provider store={Store}>
          <Router />
        </Provider>
      
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
