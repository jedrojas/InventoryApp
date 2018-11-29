// WHEN DO I USE ARROW FUNCTIONS WHAT THE
import React, { Component } from "react";
import { AppRegistry, Text, View, Button, ScrollView } from "react-native";
import ItemList from "./components/ItemList";
import NavigationBar from "react-native-navbar";
import Settings from "./components/Settings";
import HomeScreen from "./components/HomeScreen";
import AddNewItem from "./components/AddNewItem";

export default class InventoryApp extends Component {
  render() {
    return (
      <ScrollView>
        <HomeScreen />
        {/* <AddNewItem /> */}
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent("InventoryApp", () => InventoryApp);
