import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import TagSelect from "../components/TagSelect";
import TaskList from "../components/TaskList";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";

const inputStyles = {
  margin: 30,
};

function CompletedPage() {
  const {
    tasks,
    setTasks,
    tags,
    setTags,
    inputText,
    setInputText,
    inputDesc,
    setInputDesc,
  } = useContext(TaskContext);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [initialTasks, setInitialTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.completed === true));
    setInitialTasks(tasks.filter((task) => task.completed === true));
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
          tags,
          setTags,
          inputText,
          setInputText,
          inputDesc,
          setInputDesc,
          filteredTasks,
          setFilteredTasks,
        }}
      >
        <TagSelect initialTasks={initialTasks} />
        <TaskList />
      </TaskContext.Provider>
    </Box>
  );
}

export default CompletedPage;
