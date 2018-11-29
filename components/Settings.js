import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class NavButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.props.onReset}>
            <View>
              <Text style={styles.text}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10
  },
  text: {
    color: "white"
  }
});
AppRegistry.registerComponent("NavButtons", () => NavButtons);
