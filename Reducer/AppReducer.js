import {
  ADD_TASK,
  FINISH_TASK,
  SET_TASKS,
  ADD_PROJECT,
  SET_PROJECTS,
  SELECT_PROJECT,
  DELETE_PROJECT,
} from "./types";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      localStorage.setItem(
        "cr-tasks",
        JSON.stringify([...state.tasks, action.payload])
      );
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case FINISH_TASK:
      // Crear nuevo arreglo dado el filtro aplicado
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      // Actualizar LocalStorage
      localStorage.setItem("cr-tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case ADD_PROJECT:
      localStorage.setItem(
        "cr-projects",
        JSON.stringify([...state.projects, action.payload])
      );
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      };
    case DELETE_PROJECT:
      // Eliminar tareas
      let newTasks = state.tasks.filter(
        (task) => task.projectId !== action.payload
      );

      // Elimar el proyecto
      let newProjects = state.projects.filter(
        (project) => project.id !== action.payload
      );

      // Actualizar localstorage
      localStorage.setItem("cr-tasks", JSON.stringify(newTasks));
      localStorage.setItem("cr-projects", JSON.stringify(newProjects));
      return {
        ...state,
        tasks: newTasks,
        projects: newProjects,
        selectedProject: handleSelection(
          state.selectedProject,
          action.payload,
          newProjects.lenght
        ),
      };
    default:
      break;
  }
};

const handleSelection = (selectedProject, id, lenght) => {
  if (selectedProject.id === id) {
    return null;
  } else if (lenght === 0) {
    return null;
  } else {
    return selectedProject;
  }
};
