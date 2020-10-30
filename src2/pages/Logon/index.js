import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from'@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import api from '../../services/api';

export default function Logon () {
  const [id, setId] = useState('');
  const navigation = useNavigation();

  async function handleLogin() {
    try {
      const response = await api.post('sessions', { id });

      await AsyncStorage.setItem('ongId', id.toString());
      await AsyncStorage.setItem('ongName', response.data.name);

      navigation.navigate('Profile');
      } catch(err) {
      alert('Falha no Login, tente novamente.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textWelcome}>Faça seu Logon</Text>
      </View>
      <TextInput placeholder="Seu ID" onChangeText={setId} style={styles.inputText}/>

      <TouchableOpacity 
        onPress={handleLogin}
        style={styles.button}
      >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Entrar </Text>
          <Feather name="arrow-right" size={28} color="#FFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {navigation.navigate('Register')}}
        style={styles.link} 
      >
        <View style={styles.linkView}>
          <Text style={styles.linkText}>Não tenho cadastro</Text>
          <Feather name="log-in" size={15} color="#488A57" />
        </View>
      </TouchableOpacity>
    </View>
  );
}