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
    borderRadius: 15,
    width: 200,
    height: 80
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
  inputText: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#488A57',
    width: 250,
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF',
    borderRadius: 15
  },
  linkView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#488A57',
    marginRight: 3
  }
});