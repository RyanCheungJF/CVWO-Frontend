import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import TagSelect from "../components/TagSelect";
import TaskList from "../components/TaskList";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";
import { useNavigate } from "react-router-dom";

const inputStyles = {
  margin: 30,
};

function IncompletePage() {
  const {
    userid,
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
    setFilteredTasks(tasks.filter((task) => task.completed === false));
    setInitialTasks(tasks.filter((task) => task.completed === false));
  }, [tasks]);

  const navigate = useNavigate();
  if (userid === -1 || userid === undefined) {
    navigate("/login-page");
  }

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
        <TagSelect
          initialTasks={initialTasks}
          setInitialTasks={setInitialTasks}
        />
        <TaskList />
      </TaskContext.Provider>
    </Box>
  );
}

export default IncompletePage;
