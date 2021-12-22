import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "../components/TaskList";

const inputStyles = {
  margin: 30,
};

function IncompletePage() {
  const { tasks, setTasks, inputText, setInputText, inputDesc, setInputDesc } = useContext(TaskContext);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.completed === false));
  }, [tasks]);

  return (
    <Box>
      <Header />
      <Typography style={inputStyles} variant="h4" gutterBottom>
        Incomplete Tasks!
      </Typography>
      <TaskContext.Provider
        value={{
          tasks,
          setTasks,
          inputText,
          setInputText,
          inputDesc,
          setInputDesc,
          filteredTasks,
        }}
      >
        <TaskList />
      </TaskContext.Provider>
    </Box>
  );
}

export default IncompletePage;
