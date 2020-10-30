import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from'@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import api from '../../services/api';

export default function Profile () {
  const [incidents, setIncidents] = useState([]);
  const [ongId, setOngId] = useState();
  const [ongName, setOngName] = useState();
  const navigation = useNavigation();

  
  useEffect(() => {

    async function getCredentials() {
      const ongId = await AsyncStorage.getItem('ongId');
      const ongName = await AsyncStorage.getItem('ongName');

      setOngId(ongId);
      setOngName(ongName);
    }

    getCredentials();

    async function handleProfile() {
      if(ongId !== undefined) {
        console.log(ongId)

        const response = await api.get('profile', {
          headers: {
            Authorization: ongId,
          }
        });
        
        setIncidents(response.data);
      }
    }
    handleProfile();
  }, [ongId]);

  async function handleDeleteReport(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text>Bem Vindo(a), {ongName}</Text>
        </View>

        <TouchableOpacity 
          onPress={() => {navigation.navigate('NewIncident')}}
          style={styles.link} 
        >
          <View style={styles.linkView}>
            <Feather name="plus" size={15} color="#488A57" />
            <Text style={styles.linkText}>Cadastrar novo report</Text>
          </View>
        </TouchableOpacity>
        <FlatList 
          style={styles.incidentList}
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: incident }) => (
              <View style={styles.incident}>
                <Text style={styles.incidentProperty}>REPORT: </Text>
                <Text style={styles.incidentValue}>{ incident.title }</Text>
                
                <Text style={styles.incidentProperty}>DESCRIÇÃO: </Text>
                <Text style={styles.incidentValue}>{ incident.description }</Text>

                <Text style={styles.incidentProperty}>ENDEREÇO: </Text>
                <Text style={styles.incidentValue}>{ incident.adress }</Text>

                <TouchableOpacity 
                  style={styles.detailsButton} 
                  onPress={() => handleDeleteReport(incident.id)}
                >
                  <Text style={styles.detailsButtonText}>Deletar Report</Text>
                  <Feather name="trash-2" size={16} color="#488A57" />
                </TouchableOpacity>
              </View>
            )}
          />
      </View>
    </View>
  );
}