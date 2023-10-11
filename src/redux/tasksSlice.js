import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "id-1",
    name: "Create basic template",
    description: "Create the foundational layout of the application",
    status: "Completed",
  },
  {
    id: "id-2",
    name: "Add components",
    description: "Incorporate necessary components into the application",
    status: "Not completed",
  },
  {
    id: "id-3",
    name: "Check status",
    description: "Verify and set the task statuses",
    status: "Completed",
  },
  {
    id: "id-4",
    name: "fix components",
    description:
      "Address errors and deficiencies in the application components",
    status: "Not completed",
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
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
