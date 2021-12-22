import React, { useContext, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";

function TagSelect() {
  const { tags } = useContext(TaskContext);
  const [tagFilter, setTagFilter] = useState("");

  const handleChange = (e) => {
    setTagFilter(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, marginBottom: "30px" }}>
      <InputLabel>Tag</InputLabel>
      <Select value={tagFilter} onChange={handleChange}>
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {tags.map((item) => {
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
