import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

export default class TotalPrice extends Component {
  constructor() {
    super();
  }

  calculatePrice() {
    let price = 0;
    const items = this.props.items.map(item => {
      price += item.count * item.price;
    });
    return price;
  }
  render() {
    return (
      <View style={styles.priceContainer}>
        <Text> Total: </Text>
        <View style={styles.priceDisplay}>
          <Text style={styles.priceText}>${this.calculatePrice()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-end"
  },
  priceDisplay: {
    width: "15%",
    height: "125%",
    backgroundColor: "blue",
    alignItems: "center"
  },
  priceText: {
    color: "white"
  }
});
AppRegistry.registerComponent("TotalPrice", () => TotalPrice);
