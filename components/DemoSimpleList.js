import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native'

import styles from '../styles/Initial';

export default class DemoCardList extends Component {
  render() {
    return(
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
    )
  }
}
