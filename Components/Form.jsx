import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Form = () => {
  return (
    <Box
      component="form"
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
        >
          <MenuItem value={1}>Baja</MenuItem>
          <MenuItem value={2}>Media</MenuItem>
          <MenuItem value={3}>Alta</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" endIcon={<AddIcon />}>
        Agregar
      </Button>
    </Box>
  );
};

export default Form;
