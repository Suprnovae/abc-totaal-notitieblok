import React, {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(74, 74, 74)',
  },
  gauge: {
    width: 260,
    height: 125,
    bottom: 0,
  },
  rainbow: {
    margin: 5,
    marginTop: 0,
    bottom: 0,
  },
  dial: {
    position: 'absolute',
    bottom: -90,
    left: 90,
  },
  title: {
    paddingTop: 10,
    color: '#2196F3',
    fontSize: 36,
  },
  value: {
    paddingTop: 10,
    color: '#2196F3',
    fontSize: 28,
    paddingBottom: 20,
  }
});
