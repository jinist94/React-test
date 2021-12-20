import React, { useState } from "react";

export default function Anonymous({ habitList, setHabitList }) {
  const [habitKeyword, setHabitKeyword] = useState("");

  const handleChange = (e) => {
    setHabitKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random() * 100000;
    const name = habitKeyword;
    setHabitList([{ id, name, count: 0 }, ...habitList]);
    setHabitKeyword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Habit"
          value={habitKeyword}
          onChange={(e) => handleChange(e)}
        />
        <button> Add </button>
      </form>
    </div>
  );
}
