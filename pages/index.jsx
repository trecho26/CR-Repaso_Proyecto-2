import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Head from "next/head";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Form from "../Components/Form";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { formatDate, getColorByPriority } from "../helpers";
import AppContext from "../Context/AppContext";
import Task from "../Components/Task";

export default function Home() {
  const { tasks, selectedProject } = useContext(AppContext);

  const filteredTasks = tasks.filter(
    (task) => task.projectId === selectedProject?.id
  );

  return (
    <>
      <Head>
        <title>Todo App - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {selectedProject ? (
        <>
          <Paper
            sx={{
              padding: "1rem",
              margin: "0 auto",
              mb: "2rem",
            }}
          >
            <Typography sx={{ fontSize: "16px" }} variant="h5" component="h5">
              Agrega una tarea para: {selectedProject.name}
            </Typography>
            {/* FORMULARIO */}
            <Form />
          </Paper>
          {filteredTasks.length === 0 && (
            <Typography variant="h5" component="h5">
              No tienes tareas
            </Typography>
          )}
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </>
      ) : (
        <Typography variant="h4" component="h5">
          Selecciona un proyecto
        </Typography>
      )}
    </>
  );
}
