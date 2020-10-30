import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from'@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


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
        const response = await api.get('profile', {
          headers: {
            Atuthorization: ongId,
          }
        });
        
        setIncidents(response.data);
      }
    }
    handleProfile();
  }, [ongId]);


  return (
    <View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}