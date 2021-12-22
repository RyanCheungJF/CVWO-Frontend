import React from "react";
import Tag from "./Tag";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

const tagStyles = {
  margin: 10,
  justifyContent: "center",
};

function Task({ taskObj, tasks, setTasks }) {
  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.name === taskObj.name) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setTasks(tasks.filter((item) => item.name !== taskObj.name));
  };

  return (
    <div>
      <Card>
        <CardHeader title={taskObj.name} />
        <Container>
          <IconButton onClick={() => console.log("edit")}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={completeHandler}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={deleteHandler}>
            <DeleteIcon />
          </IconButton>
        </Container>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {taskObj.desc}
          </Typography>
        </CardContent>
        <Stack style={tagStyles} direction="row">
          {taskObj.tags.map((tag) => {
            return <Tag key={tag} tag={tag} />;
          })}
        </Stack>
      </Card>
    </div>
  );
}

export default Task;
