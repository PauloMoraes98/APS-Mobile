import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  textInstruction: {
    fontSize: 20,
    textAlign: 'justify'
  },
});