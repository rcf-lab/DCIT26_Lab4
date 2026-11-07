
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      // Shared task and group data
      tasks: [],
      groups: [],

      // Add a new task
      addTask: (data) =>
        set((state) => ({
          tasks: [
            {
              id: Date.now().toString(),
              title: data.title,
              deadline: data.deadline,
              groupId: data.groupId || null,
              priority: data.priority,
              done: false,
            },
            ...state.tasks,
          ],
        })),

      // Update an existing task
      updateTask: (id, data) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  title: data.title,
                  deadline: data.deadline,
                  groupId: data.groupId || null,
                  priority: data.priority,
                }
              : task
          ),
        })),

      // Toggle a task between Done and Not Done
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, done: !task.done }
              : task
          ),
        })),

      // Delete one task
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      // Delete all completed tasks
      clearDoneTasks: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.done),
        })),

      // Create a new task group
      addGroup: (name) =>
        set((state) => ({
          groups: [
            ...state.groups,
            {
              id: Date.now().toString(),
              name: name,
            },
          ],
        })),

      // Delete a group and its associated tasks
      deleteGroup: (id) =>
        set((state) => ({
          groups: state.groups.filter((group) => group.id !== id),
          tasks: state.tasks.filter((task) => task.groupId !== id),
        })),
    }),
    {
      name: "todo-list-lab4-storage",
    }
  )
);

export default useTodoStore;