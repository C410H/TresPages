// In App.js in a new project

import * as React from 'react';
import {ImageBackground, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({navigation}){
	

  return (
    <View style={styles.container}>
		  
	<TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
		  <Text>Sobre</Text>
	</TouchableOpacity>
		  
	<TouchableOpacity onPress={() => navigation.navigate('Ds')}>
		  <Text>Desenvolvimento de Sistemas</Text>
	</TouchableOpacity>
		  
	<TouchableOpacity onPress={() => navigation.navigate('Adm')}>
		  <Text>Admnistração</Text>
	</TouchableOpacity>
		  
    </View>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		fontWeight: 'bold',
		gap: 15,
		alignItems: 'center',
    	justifyContent: 'center',
	},
	Img: {
		backgroundColor:  '#000'
	},
	blocoImg: {
		alignItems: 'center',
	}
});