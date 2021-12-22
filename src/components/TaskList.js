import React, { useContext } from "react";
import Task from "./Task";
import { Container, Grid } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";

function TaskList() {
  const { tasks, setTasks, filteredTasks } = useContext(TaskContext);

  // Screen can be separated into 12 parts, there are xtra small, small and medium and up sized screens
  return (
    <Container>
      <Grid container spacing={3}>
        {filteredTasks.map((taskObj) => {
          return (
            <Grid item key={taskObj.name} xs={12} md={6} lg={4}>
              <Task taskObj={taskObj} tasks={tasks} setTasks={setTasks} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default TaskList;
