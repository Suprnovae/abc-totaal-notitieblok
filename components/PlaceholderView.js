import React, {
  Component,
  View,
  Image,
  Text,
} from 'react-native'

const styles = require('../styles/Initial');

export default class PlaceholderView extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to NotitieBlok!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Image source={require('image!app_logo')} />
        <Text style={styles.instructions}>bullshit</Text>
      </View>
    )
  }
}
