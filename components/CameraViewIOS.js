import React, {
  Component,
  StyleSheet,Dimensions,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

class CameraViewIOS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={this.state.cameraType}
          torchMode={Camera.constants.FlashMode.off}
          aspect={Camera.constants.Aspect.fill}>
            <View style={styles.buttonBar}>
                <TouchableHighlight style={styles.button} onPress={this._switchCamera.bind(this)}>
                    <Icon name="refresh" size={50} style={{fontSize: 20, height: 22, color: 'white',}}/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this._takePicture.bind(this)}>
                    <Icon name="camera" size={50} style={{fontSize: 20, height: 22, color: 'white',}}/>
                </TouchableHighlight>
            </View>

        </Camera>
      </View>
    );
  }

  _switchCamera() {
    console.log('switching camera');
    var state = this.state;
    state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  }

  _takePicture() {
    console.log('taking picture');
    this.camera.capture()
        .then((data)=>console.log(data))
        .catch(err => console.log(err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  buttonBar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    right: 0,
    left: 0,
    justifyContent: "center"
  },
  button: {
    padding: 10,
    borderWidth: 0,
    borderColor: "black",
    margin: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFFFFF"
  }
});

module.exports = CameraViewIOS;
