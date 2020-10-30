import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from'@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Main () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textWelcome}>Olá, Seja Bem vindo.</Text>
        <Text style={styles.textInstruction}>Escolha uma opção entre Reportar um acidente ambiental ou entrar em contato para ajudar em alguma luta!</Text>
      </View>
      <TouchableOpacity 
        onPress={() => {navigation.navigate('Logon')}}
        style={styles.button}
      >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Reportar </Text>
          <Feather name="shield" size={28} color="#FFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {navigation.navigate('Incidents')}}
        style={styles.button}
      >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Vizualizar Casos </Text>
          <Feather name="award" size={28} color="#FFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}