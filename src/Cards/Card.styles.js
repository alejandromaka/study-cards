// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 100,
    padding: 10,
    minWidth: 120,
    width: '50%',
  },
  card: {
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'System',
    backgroundColor: 'transparent'
  },
  image: {
    height: '100%',
    left: 10,
    position: 'absolute',
    top: 10,
    width: '100%'
  }
});

export default styles;
