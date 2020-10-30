import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  textContainer: {
    marginRight: 50,
    marginLeft: 50,
    alignItems: 'center' 
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textInstruction: {
    fontSize: 20,
    textAlign: 'justify'
  },
  button: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#488A57',
    elevation: 3,
    borderRadius: 25,
    width: 200,
    height: 50
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  }
});