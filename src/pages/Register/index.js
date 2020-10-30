import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from'@react-navigation/native';

import styles from './styles';

import api from '../../services/api';

export default function Register () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const navigation = useNavigation();

  async function handleRegister() {

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de Acesso ${response.data.id}`);

      navigation.navigate('Logon');
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textWelcome}>Faça seu Cadastro</Text>
        <Text style={styles.textInstruction}>Entre na plataforma e ajude a salvar o meio ambiente.</Text>
      </View>

      <TextInput placeholder="Seu Nome" onChangeText={setName} style={styles.inputText}/>
      <TextInput placeholder="Seu Email" onChangeText={setEmail} style={styles.inputText} keyboardType='email-address'/>
      <TextInput placeholder="+55999999999" onChangeText={setWhatsapp} style={styles.inputText}/>
      <View style={styles.adress} >
        <TextInput placeholder="Sua Cidade" onChangeText={setCity} style={styles.inputTextCity}/>
        <TextInput placeholder="Seu UF" onChangeText={setUf} style={styles.inputTextUF} maxLength={2}/>
      </View>

      <TouchableOpacity 
        onPress={handleRegister}
        style={styles.button}
      >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Registrar </Text>
          <Feather name="user" size={28} color="#FFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {navigation.navigate('Logon')}}
        style={styles.link} 
      >
        <View style={styles.linkView}>
          <Feather name="arrow-left" size={15} color="#488A57" />
          <Text style={styles.linkText}>Voltar para Logon</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}