import React, {
  Animated,
  Component,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/Initial';

class DialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _level: props.level,
      _levelAnim: new Animated.Value(props.initial || 0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state._levelAnim, {toValue: this.state._level}).start();
  }

  render() {
    const changeRotation = this.state._levelAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['-75deg', '75deg'],
    });

    const changeColor = this.state._levelAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'],
    });

    return(
      <TouchableOpacity onPress={() => { console.log("pressed");}}>
        <Animated.View style={[styles.dialframe, { backgroundColor: changeColor, }]}>
          <Animated.View style={[styles.dialpointer, { transform: [ { rotate: changeRotation, } ] }]} />
					<View style={styles.dialpointercover} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default DialView;
