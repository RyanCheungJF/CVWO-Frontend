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
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

const tagStyles = {
  margin: 10,
  justifyContent: "center",
};

function Task({ taskObj, tasks, setTasks, tags, setTags }) {
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
    setTags(removeTags());
  };

  const removeTags = () => {
    let temp = [...tags];
    for (let i = 0; i < taskObj.tags.length; i++) {
      let pos = temp.indexOf(taskObj.tags[i]);
      if (pos !== -1) {
        temp.splice(pos, 1);
      }
    }
    return temp;
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
            {taskObj.completed ? <CancelIcon /> : <DoneIcon />}
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
