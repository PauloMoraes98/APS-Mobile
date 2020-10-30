import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWelcome: {
    fontSize: 20
  },
  linkView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#488A57',
    marginRight: 3
  },
  incidentList: {
    marginTop: 32,
    marginBottom: 35,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  detailsButton: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },
  detailsButtonText: {
    color: '#488A57',
    fontSize: 15,
    fontWeight: 'bold',
  }
});