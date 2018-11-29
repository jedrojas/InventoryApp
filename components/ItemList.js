import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet, FlatList } from "react-native";
import Counter from "./Counter";
import NavButtons from "./NavButtons";
import TotalPrice from "./TotalPrice";
import AddNewItem from "./AddNewItem";

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "burger",
          price: 5,
          count: 0
        },
        {
          name: "large popcorn",
          price: 5.5,
          count: 0
        },
        {
          name: "gatorade (red)",
          price: 2,
          count: 0
        },
        {
          name: "gatorade (blue)",
          price: 2,
          count: 0
        }
      ]
    };
  }

  handleDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (items[index].count > 0) items[index].count--;
    this.setState({ items });
  };

  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].count++;
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map(item => {
      item.count = 0;
      return item;
    });
    this.setState({ items });
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <View style={styles.itemNameContainer}>
          <Text style={styles.rowText}>
            {item.name} (${item.price})
          </Text>
        </View>
        <Counter
          item={item}
          count={item.count}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </View>
    );
  };

  handleSubmit = (name, price) => {
    const newItem = {
      name: name,
      price: price,
      count: 0
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  render() {
    return (
      <View>
        <NavButtons onReset={this.handleReset} />
        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <TotalPrice items={this.state.items} />
        <AddNewItem onSubmit={this.handleSubmit} />
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
    marginBottom: 3,
    justifyContent: "space-between"
  },
  itemNameContainer: {
    alignItems: "center",
    padding: 10
  },
  rowText: {
    flex: 1
  }
});
AppRegistry.registerComponent("ItemList", () => ItemList);
