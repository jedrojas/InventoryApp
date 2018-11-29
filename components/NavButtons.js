import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class NavButtons extends Component {
  onCheckout() {
    alert("checkout hit");
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.props.onReset}>
            <View>
              <Text>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity style={styles.button2} onPress={this.onCheckout}>
            <Text style={styles.button2Text}>Checkout</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10
  },
  button2: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10
  },
  button2Text: {
    color: "white"
  }
});
AppRegistry.registerComponent("NavButtons", () => NavButtons);
