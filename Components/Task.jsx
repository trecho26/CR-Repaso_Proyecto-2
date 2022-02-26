import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { formatDate, getColorByPriority } from "../helpers";
import AppContext from "../Context/AppContext";

const Task = ({ task }) => {
  const { handleFinishTask } = useContext(AppContext);
  return (
    <Paper
      key={task.id}
      sx={{
        padding: "1rem",
        mb: "1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: getColorByPriority(task.priority),
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          margin: "0 1rem",
        }}
      >
        <Typography variant="subtitle1" component="p">
          {task.name}
        </Typography>
        <Typography variant="subtitle2" component="p" color="text.secondary">
          {formatDate(task.date)}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Tooltip title="Marcar como terminada">
          <IconButton onClick={() => handleFinishTask(task.id)}>
            <DoneAllIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default Task;
