// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  image: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  card: {
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    position: 'relative'
  },
  input: {
    fontFamily: 'System',
    fontSize: 30,
    height: 50,
    textAlign: 'center',
    width: '100%'
  }
});

export default styles;
