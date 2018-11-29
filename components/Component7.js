/** @format */

import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

export default class Component7 extends Component {
  render() {
    return (
      <View>
        <Text>This text comes from component 7!</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent("Component7", () => Component7);
