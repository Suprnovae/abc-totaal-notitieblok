import React, {
  Animated,
  Component,
  Dimensions,
  Image,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/Gauge';

class SemiGaugeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _level: props.result.gauge,
      _levelAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state._levelAnim, {toValue: this.state._level}).start();
  }

  render() {
    let changeRotation = this.state._levelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['-75deg', '75deg'],
    });

    let changeColor = this.state._levelAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'],
    });

    let result = this.props.result;
    let style = [styles.tab, styles.diff];
    let tags = result.tablets.map(
      (obj, key) => <Text key={key} style={style}>{obj.text}</Text>
    );

    return(
      <View style={styles.container}>
        <Text style={styles.title}>{result.description}</Text>
        <Text style={styles.value}>{result.actual}</Text>
        <View style={[styles.tabs, {width: Dimensions.get('window').width}]}>
          {tags}
        </View>
        <View style={styles.gauge}>
          <Image source={require('../img/bow.png')} style={styles.rainbow} />
          <Animated.Image source={require('../img/dial.png')} style={[styles.dial, { transform: [ { rotate: changeRotation, } ] }]} />
        </View>
      </View>
    );
  }
}

export default SemiGaugeView;

