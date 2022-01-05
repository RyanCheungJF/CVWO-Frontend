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

function AllPage() {
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
  
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks, userid]);

  if (userid !== -1 || userid === undefined) {
    return (
      <Box>
        <Header />
        <Typography style={inputStyles} variant="h4" gutterBottom>
          View All Tasks!
        </Typography>
        <TaskContext.Provider
          value={{
            userid,
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
          <TagSelect initialTasks={tasks} />
          <TaskList />
        </TaskContext.Provider>
      </Box>
    );
  } else {
    return (
      <Navigate to='/login-page' />
    );
  }
}

export default AllPage;
