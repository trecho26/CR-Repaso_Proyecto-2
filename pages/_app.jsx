import Head from "next/head";
import Layout from "../Components/Layout";
import "../styles/globals.css";
import AppContext from "../Context/AppContext";
import { AppReducer } from "../Reducer/AppReducer";
import { useReducer, useEffect } from "react";
import {
  ADD_PROJECT,
  ADD_TASK,
  DELETE_PROJECT,
  FINISH_TASK,
  SELECT_PROJECT,
  SET_PROJECTS,
  SET_TASKS,
} from "../Reducer/types";

const initialValues = {
  tasks: [],
  projects: [],
  isProjectFormShow: false,
  selectedProject: null,
};

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(AppReducer, initialValues);

  const addTask = (values) => {
    dispatch({
      type: ADD_TASK,
      payload: values,
    });
  };

  const handleFinishTask = (id) => {
    dispatch({
      type: FINISH_TASK,
      payload: id,
    });
  };

  const addProject = (values) => {
    dispatch({
      type: ADD_PROJECT,
      payload: values,
    });
  };

  const selectProject = (project) => {
    dispatch({
      type: SELECT_PROJECT,
      payload: project,
    });
  };

  const deleteProject = (id) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  };

  useEffect(() => {
    const tasksLS = localStorage.getItem("cr-tasks");
    const projectsLS = localStorage.getItem("cr-projects");

    if (tasksLS) {
      let parsedTasks = JSON.parse(tasksLS);
      dispatch({
        type: SET_TASKS,
        payload: parsedTasks,
      });
    }

    if (projectsLS) {
      let parsedProjects = JSON.parse(projectsLS);
      dispatch({
        type: SET_PROJECTS,
        payload: parsedProjects,
      });
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          tasks: state.tasks,
          projects: state.projects,
          isProjectFormShow: state.isProjectFormShow,
          selectedProject: state.selectedProject,
          addTask,
          handleFinishTask,
          addProject,
          selectProject,
          deleteProject,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
