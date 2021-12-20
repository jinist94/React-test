import React, { Component } from "react";
import Habit from "./Habit";
import HabitAddForm from "./HabitAddForm";

class Habits extends Component {
  render() {
    console.log(this.props.habits, "habits render");
    return (
      <div>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          리셋버튼
        </button>
      </div>
    );
  }
}

export default Habits;
