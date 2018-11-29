import React, { Component } from "react";
import Item from "./item";

class ListOfItems extends Component {
  state = {
    items: [
      { id: 1, count: 0, price: 4.2 },
      { id: 2, count: 0, price: 5.0 },
      { id: 3, count: 0, price: 2.0 },
      { id: 4, count: 0, price: 4.0 }
    ],
    sum: "0"
  };

  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].count++;
    let sum = (Number(this.state.sum) + items[index].price).toFixed(2);

    // let sum = Number(this.state.sum);
    // sum += items[index].price;
    // sum = sum.toFixed(2);
    this.setState({ items, sum });
  };

  handleDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (items[index].count > 0) {
      items[index].count--;
      let sum = (Number(this.state.sum) - items[index].price).toFixed(2);
      // sum = sum.toFixed(2);
      this.setState({ items, sum });
    }
  };

  handleReset = () => {
    const items = this.state.items.map(item => {
      item.count = 0;
      return item;
    });
    let sum = this.state.sum;
    sum = "0";
    this.setState({ items, sum });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-small m-2"
        >
          Next Order
        </button>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            count={item.count}
            onIncrement={this.handleIncrement}
            item={item}
            price={item.price}
            onDecrement={this.handleDecrement}
          />
        ))}
        <span className="badge badge-primary m-2">{this.state.sum}</span>
      </React.Fragment>
    );
  }
}

export default ListOfItems;
