
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      tasks: [],
      groups: [],

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

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, done: !task.done }
              : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      clearDoneTasks: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.done),
        })),

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
