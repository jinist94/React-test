import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Habits from "./components/Habits";
import Anonymous from "./components/Anonymous";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncreament = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        return { ...habit, count: item.count + 1 };
      } else {
        return item;
      }
    });
    console.log(habits, "결과");
    this.setState({ habits });
  };

  handleDecreament = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [{ id: Date.now(), name, count: 0 }, ...this.state.habits];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    console.log(habits);
    this.setState({ habits });
  };

  render() {
    console.log(this.state, "app - state");
    return (
      <div>
        <Navbar
          state={this.state}
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncreament}
          onDecrement={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
