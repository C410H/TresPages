// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home.js';
import Sobre from './Pages/Sobre.js';
import Ds from './Pages/Ds.js';
import Adm from './Pages/Adm.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{  title: 'Etec de Itanhaém',  headerStyle: { backgroundColor: '#f4511e',}}}/>
		<Stack.Screen name="Sobre" component={Sobre} options={{  title: 'Sobre',  headerStyle: { backgroundColor: '#f4511e',}}}/>
		<Stack.Screen name="Ds" component={Ds}  options={{  title: 'Desenvolvimento de Sistema', headerStyle: { backgroundColor: '#f4511e',} }}/>
		<Stack.Screen name="Adm" component={Adm} options={{  title: 'Adnistração', headerStyle: { backgroundColor: '#f4511e',} }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

