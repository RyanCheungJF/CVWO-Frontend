import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import TagSelect from "../components/TagSelect";
import TaskList from "../components/TaskList";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";
import { Navigate } from "react-router-dom";

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

  if (userid !== -1 || userid === undefined) {
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
          />
          <TaskList />
        </TaskContext.Provider>
      </Box>
    );
  } else {
    return <Navigate to="/login-page" />;
  }
}

export default IncompletePage;
