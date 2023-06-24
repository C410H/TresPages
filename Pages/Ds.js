// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({navigation}){
	

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desenvolvimento de Sistemas</Text>
		  
	<View style={styles.texto}>
		  <Text>O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.</Text>
	
	</View>  
	
		  
    </View>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	titulo: {
		fontSize: 20,
		fontWeight: 'bold',
  },
	texto: {
		fontWeight: 'arial',
		alignItems: 'justify',
  },
});