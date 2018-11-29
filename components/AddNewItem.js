import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from "react-native";

export default class AddNewItem extends Component {
  constructor() {
    super();
    this.state = {
      itemNameTextFieldValue: "",
      itemPriceTextFieldValue: "",
      status: false
    };
  }

  toggleStatus = status => {
    this.setState({
      status: !status
    });
  };

  onAddNewItem() {
    alert("AddNewItem hit");
  }

  onChangeNameText(value) {
    this.setState({
      itemNameTextFieldValue: value
    });
  }

  onChangePriceText(value) {
    this.setState({
      itemPriceTextFieldValue: value
    });
  }

  renderComponent() {
    if (this.state.status)
      return (
        <View>
          <View style={styles.container}>
            {/* <TouchableOpacity style={styles.button} onPress={this.onAddNewItem}>
              <View>
                <Text style={styles.buttonText}>Add New Item</Text>
              </View>
            </TouchableOpacity> */}
            <Text> Item Name:</Text>
            <TextInput
              value={this.state.itemNameTextFieldValue}
              onChangeText={value => this.onChangeNameText(value)}
            />
            <Text>Item Price:</Text>
            <TextInput
              value={this.state.itemPriceTextFieldValue}
              onChangeText={value => this.onChangePriceText(value)}
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() =>
                this.props.onSubmit(
                  this.state.itemNameTextFieldValue,
                  this.state.itemPriceTextFieldValue
                )
              }
            >
              <View>
                <Text>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
  }

  render() {
    return (
      <View>
        <Button
          title="Add New Item"
          onPress={() => this.toggleStatus(this.state.status)}
        />
        <View>{this.renderComponent()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    padding: 10
  },
  buttonText: {
    color: "black"
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 10
  },
  submitButtonContainer: {
    flexDirection: "column",
    padding: 10
  }
});
AppRegistry.registerComponent("AddNewItem", () => AddNewItem);
