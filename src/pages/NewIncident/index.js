import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from'@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';


import styles from './styles';

import api from '../../services/api';

export default function NewIncident () {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [adress, setAdress] = useState('');
  const [ongId, setOngId] = useState();
  const navigation = useNavigation();

  useEffect(() => {

    async function getCredentials() {
      const newongId = await AsyncStorage.getItem('ongId');
      setOngId(newongId);
    }

    getCredentials();
  }, [ongId]);

  async function handleNewIncident() {
    const data = {
      title,
      description,
      adress
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      navigation.navigate('Profile');
    } catch (err) {
      alert(`Erro no cadastro do caso, tente novamente.`);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text>Faça seu Report!</Text>
        </View>
        <TouchableOpacity 
          onPress={() => {navigation.navigate('Profile')}}
          style={styles.link} 
        >
          <View style={styles.linkView}>
            <Feather name="arrow-left" size={15} color="#488A57" />
            <Text style={styles.linkText}>Voltar</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textInstruction}>
            Descreva a causa com detalhes, para achar alguem que possa te ajudar!
          </Text>
        </View>
        <TextInput placeholder="Título" onChangeText={setTitle} style={styles.inputText}/>
        <TextInput placeholder="Descrição" onChangeText={setDescription} style={styles.inputText} keyboardType='email-address'/>
        <TextInput placeholder="Endereço" onChangeText={setAdress} style={styles.inputText}/>

        <TouchableOpacity 
          onPress={handleNewIncident}
          style={styles.button}
        >
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Cadastrar </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}