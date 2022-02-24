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

const tasks = [
  {
    id: "465as4d5a64sda",
    name: "Limpiar la casa",
    level: 1,
    date: new Date(),
  },
  {
    id: "465as4d5a64sda",
    name: "Limpiar la casa 2",
    level: 1,
    date: new Date(),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Paper
        sx={{
          padding: "1rem",
          margin: "0 auto",
          mb: "2rem",
        }}
      >
        <Typography variant="h5" component="h5">
          Agrega una lista de tareas
        </Typography>
        <Form />
      </Paper>
      {tasks.map((task) => (
        <Paper
          sx={{
            padding: "1rem",
            mb: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "success.light",
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
            <Typography
              variant="subtitle2"
              component="p"
              color="text.secondary"
            >
              2022-02-23
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Tooltip title="Marcar como terminada">
              <IconButton>
                <DoneAllIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
      ))}
    </>
  );
}
