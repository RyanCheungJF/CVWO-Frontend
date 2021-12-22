import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";

const inputStyles = {
  margin: 30,
};

function CompletedPage() {
  const { tasks, setTasks, inputText, setInputText, inputDesc, setInputDesc } =
    useContext(TaskContext);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.completed === true));
  }, [tasks]);

  return (
    <Box>
      <Header />
      <Typography style={inputStyles} variant="h4" gutterBottom>
        Completed Tasks!
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

export default CompletedPage;
