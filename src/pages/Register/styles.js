import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    marginRight: 15,
    marginLeft: 15,
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
    fontSize: 14,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#488A57',
    elevation: 3,
    borderRadius: 15,
    width: 200,
    height: 60
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
    width: '100%',
    height: 60,
    fontSize: 20,
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
  },
  adress: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-around'
  },
  inputTextCity: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#488A57',
    width: '60%',
    height: 60,
    fontSize: 20,
    backgroundColor: '#FFF',
    borderRadius: 15
  },
  inputTextUF: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#488A57',
    width: '40%',
    height: 60,
    fontSize: 20,
    backgroundColor: '#FFF',
    borderRadius: 15
  },
});