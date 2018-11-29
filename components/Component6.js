/** @format */

import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  //   ListView,
  StyleSheet,
  FlatList
} from "react-native";

const users = [
  { name: "John Doe" },
  { name: "Brad Pitt" },
  { name: "Steve Smith" },
  { name: "Janet Jackson" }
];
export default class Component6 extends Component {
  constructor() {
    super();
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    this.state = {
      //   userDataSource: ds.cloneWithRows(users),
      dataSource: []
    };
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>
          {item.book_title}: {item.author}
        </Text>
      </View>
    );
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    // const url = "https://jsonplaceholder.typicode.com/users";
    const url =
      "http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.book_array
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text>From component 6</Text>
        {/* <Text>ListView:</Text>
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
        /> */}
        <Text>FlatList:</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
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
AppRegistry.registerComponent("Component6", () => Component6);
