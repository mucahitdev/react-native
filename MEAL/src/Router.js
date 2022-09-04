import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoriesScreen, MealsScreen, DetailScreen} from './pages';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FFA500',
            },
            headerStyle: {
                backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FFA500',
            },
            headerTintColor: '#FFA500',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FFA500',
            },
            headerTintColor: '#FFA500',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
