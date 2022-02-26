import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import * as Yup from "yup";
import short from "short-uuid";
import AppContext from "../Context/AppContext";

const initialValues = {
  name: "",
  priority: "",
};

const Form = () => {
  const { addTask, selectedProject } = useContext(AppContext);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required(),
      priority: Yup.string().required(),
    }),
    onSubmit: (values) => {
      let id = short.generate();
      let date = new Date();
      let newTask = {
        ...values,
        id,
        date,
        projectId: selectedProject.id,
      };
      addTask(newTask);
      formik.resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        mt: "1rem",
      }}
    >
      <TextField
        id="task"
        label="Tarea"
        variant="standard"
        sx={{ marginRight: "1rem", width: "90%" }}
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <FormControl
        variant="standard"
        sx={{ marginRight: "1rem", minWidth: 120 }}
      >
        <InputLabel id="demo-simple-select-standard-label">Urgencia</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Urgencia"
          name="priority"
          value={formik.values.priority}
          onChange={formik.handleChange}
        >
          <MenuItem value={1}>Baja</MenuItem>
          <MenuItem value={2}>Media</MenuItem>
          <MenuItem value={3}>Alta</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" endIcon={<AddIcon />} type="submit">
        Agregar
      </Button>
    </Box>
  );
};

export default Form;
