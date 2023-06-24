import * as React from 'react';
import { View, Text, StyleSheet, TouchbleOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Sobre({navigation}){
	

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>
		   
		<View style={styles.texto}>
			
			<Text>A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC “Adolpho Berezin” de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.</Text>
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