import React, { useContext } from "react";
import TaskIcon from "@mui/icons-material/LabelImportant";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ProjectIcon from "@mui/icons-material/DriveFileMove";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import short from "short-uuid";
import AppContext from "../../Context/AppContext";

const initialValues = {
  name: "",
};

const index = () => {
  const { addProject, projects, selectProject, deleteProject } =
    useContext(AppContext);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required(),
    }),
    onSubmit: (values) => {
      addProject({
        ...values,
        id: short.generate(),
      });
      formik.resetForm();
    },
  });

  return (
    <div>
      <Toolbar />
      <Divider />
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          padding: "1rem 0.75rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="name"
          label="Nombre del proyecto"
          variant="filled"
          fullWidth
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name && formik.touched.name}
          helperText={
            formik.errors.name && formik.touched.name ? "Campo requerido" : " "
          }
        />
        <Button variant="text" type="submit">
          Agregar
        </Button>
      </Box>
      <Divider />
      {projects.length === 0 ? (
        <Typography
          variant="subtitle1"
          sx={{ padding: "1rem", textAlign: "center" }}
        >
          No tienes proyectos
        </Typography>
      ) : (
        <List>
          {projects.map((project) => (
            <ListItem
              key={project.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => deleteProject(project.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton onClick={() => selectProject(project)}>
                <ListItemIcon>
                  <ProjectIcon edge="start" />
                </ListItemIcon>
                <ListItemText primary={project.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default index;
