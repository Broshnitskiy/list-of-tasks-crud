import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "id-1",
    name: "Create basic template",
    description: "Create the foundational layout of the application",
    status: "сompleted",
  },
  {
    id: "id-2",
    name: "Add components",
    description: "Incorporate necessary components into the application",
    status: "сompleted",
  },
  {
    id: "id-3",
    name: "Check status",
    description: "Verify and set the task statuses",
    status: "сompleted",
  },
  {
    id: "id-4",
    name: "fix components",
    description:
      "Address errors and deficiencies in the application components",
    status: "сompleted",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.unshift(action.payload);
    },

    editTask: (state, action) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state[taskIndex] = action.payload.updatedTask;
      }
    },

    deleteTask: (state, action) => {
      state = state.filter((task) => task.id !== action.payload);
      return state;
    },

    toggleTaskStatus: (state, action) => {
      const taskToToggle = state.find((task) => task.id === action.payload);
      if (taskToToggle) {
        taskToToggle.status = !taskToToggle.status;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
