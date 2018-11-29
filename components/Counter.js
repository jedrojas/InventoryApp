import React, { Component } from "react";
import { AppRegistry, Text, View, Button, StyleSheet } from "react-native";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderCount() {
    let val = this.props.count == 0 ? "0" : this.props.count;
    return val;
  }

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="-"
            onPress={() => this.props.onDecrement(this.props.item)}
          />
        </View>
        <View style={styles.countContainer}>
          <Text>{this.renderCount()}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="+"
            onPress={() => this.props.onIncrement(this.props.item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f4f4f4"
  },
  buttonContainer: {
    paddingHorizontal: 10
  },
  countContainer: {
    alignItems: "center",
    paddingVertical: 10
  }
});

AppRegistry.registerComponent("Counter", () => Counter);
