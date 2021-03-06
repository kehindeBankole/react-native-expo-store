import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/Landing'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './screens/Products';
import Cart from './screens/Cart';
import { NativeBaseProvider, Box } from 'native-base';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <NativeBaseProvider>
      <StatusBar backgroundColor="#E5E5E5" />
      <Stack.Navigator  screenOptions={{
          headerShown: false,
        }}>
      <Stack.Screen name="Home" component={Landing} />
      <Stack.Screen name="Product" component={Products} />
      <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator> 
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
