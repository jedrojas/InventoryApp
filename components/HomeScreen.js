import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import NavigationBar from "react-native-navbar";
import Settings from "./Settings";
import ItemList from "./ItemList";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <NavigationBar tintColor="red" leftButton={<Settings />} />
        <ItemList />
      </View>
    );
  }
}
AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
