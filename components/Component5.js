/** @format */

import React, { Component } from "react";
import { AppRegistry, Text, View, ListView, StyleSheet } from "react-native";

export default class Component5 extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      userDataSource: ds
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch("http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1")
      .then(response => response.json())
      .then(response => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderRow(user) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }

  render() {
    console.log("Yo");
    return (
      <View>
        <Text>List View:</Text>
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
AppRegistry.registerComponent("Component5", () => Component5);
