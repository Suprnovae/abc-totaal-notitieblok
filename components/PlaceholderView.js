import React, {
  Component,
  View,
  Image,
  ListView,
	ScrollView,
  Text,
} from 'react-native'

import ExtraDimensions from 'react-native-extra-dimensions-android'
import ListElementView from './ListElementView';
import DemoCardList from './DemoCardList';
import DemoSimpleList from './DemoSimpleList';

import styles from '../styles/Initial';

export default class PlaceholderView extends Component {
  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['paramaribo', 'rotterdam', 'berlin', 'new york city', 'amsterdam', 'delft', 'munich', 'london', 'osaka', 'tokyo', 'shangai']),
    }
  }
  render() {
		const height = 400; //ExtraDimensions.get('REAL_WINDOW_HEIGHT'); //-(ExtraDimensions.get('STATUS_BAR_HEIGHT')+ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'));
		const hSoftMenuBar = ExtraDimensions.get("SOFT_MENU_BAR_HEIGHT");
		const hStatusBar = ExtraDimensions.get("STATUS_BAR_HEIGHT");
		const hWindow = ExtraDimensions.get("REAL_WINDOW_HEIGHT");
		const hAvailable = hWindow-(hStatusBar+hSoftMenuBar+styles.toolbar.height);
    return(
      <View style={styles.container}>
				<ScrollView style={{height: hAvailable}}>
					<DemoCardList dataSource={this.state.dataSource} />
				</ScrollView>
      </View>
    )
  }
}
