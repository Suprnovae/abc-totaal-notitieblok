import React, {
  Component,
  View,
  Image,
  ListView,
  ScrollView,
  Text,
} from 'react-native';

import ListElementView from './ListElementView';
import DemoSimpleList from './DemoSimpleList';

import styles from '../styles/Initial';

export default class iOSPlaceholderView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['morgan', 'barclays', 'rabo', 'roth', 'rocker', 'london', 'new york', 'carnegie', 'lehman', 'v/d bilt', 'chase', 'hartman', 'stilman'])
    };
  }

  render() {
    return (
      <ScrollView style={styles.list}>
        <DemoSimpleList dataSource={this.state.dataSource} />
      </ScrollView>
    );
  }
}
