// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({navigation}){
	

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Admnistração</Text>
		  
		<View  style={styles.texto}>
			
		  <Text>
O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.</Text>
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