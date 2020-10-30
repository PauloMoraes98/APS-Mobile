import React from 'react';
import { View, Button } from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function Main () {
  return (
    <View style={styles.container}>
      <Button>OngRoutes</Button>
      <Button>UserRoutes</Button>
    </View>
  );
}