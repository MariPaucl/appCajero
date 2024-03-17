import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/home';
import { VentasScreen } from './src/Presentation/views/ventas/Ventas';
import { InformScreen } from './src/Presentation/views/inform/Inform';

export type RootStackParamList = {
  HomeScreen: undefined;
  VentasScreen: undefined;
  InformScreen: undefined;
};

const Stack = createNativeStackNavigator <RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
        />
        <Stack.Screen
        name="VentasScreen"
        component={VentasScreen}
        options={{
          headerShown: true,
          title: "Ventas",
        }}/>
          <Stack.Screen
        name="InformScreen"
        component={InformScreen}
        options={{
          headerShown: true,
          title: "Informe Ventas",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;