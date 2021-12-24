import React, { useContext, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";

function TagSelect({ initialTasks }) {
  const { setFilteredTasks } = useContext(TaskContext);
  const [tagFilter, setTagFilter] = useState("");
  
  const modifiedTags = () => {
    let temp = [];
    for (let i = 0; i < initialTasks.length; i++) {
      temp = temp.concat(initialTasks[i].tags);
    }
    return [...new Set(temp)];
  };
 
  const handleChange = (e) => {
    setTagFilter(e.target.value);
    e.target.value === ""
      ? setFilteredTasks(initialTasks)
      : setFilteredTasks(
          initialTasks.filter((task) => task.tags.includes(e.target.value))
        );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, marginBottom: "30px" }}>
      <InputLabel>Tag</InputLabel>
      <Select value={tagFilter} onChange={handleChange}>
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {modifiedTags().map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default TagSelect;
