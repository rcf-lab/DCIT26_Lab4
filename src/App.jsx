
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";
import Groups from "./pages/Groups.jsx";
import GroupTasks from "./pages/GroupTasks.jsx";
import Guide from "./pages/Guide.jsx";
import Developers from "./pages/Developers.jsx";
import Users from "./pages/Users.jsx";

import useTodoStore from "./store/useTodoStore.js";

function App() {
  // Get shared data from Zustand
  const tasks = useTodoStore((state) => state.tasks);
  const groups = useTodoStore((state) => state.groups);

  // Get task and group functions from Zustand
  const addTask = useTodoStore((state) => state.addTask);
  const updateTask = useTodoStore((state) => state.updateTask);
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const clearDoneTasks = useTodoStore((state) => state.clearDoneTasks);

  const addGroup = useTodoStore((state) => state.addGroup);
  const deleteGroup = useTodoStore((state) => state.deleteGroup);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F2F2F7]">
        <Routes>
          {/* Home / Dashboard */}
          <Route
            path="/"
            element={<Home tasks={tasks} groups={groups} />}
          />

          {/* All Tasks */}
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                groups={groups}
                onAddTask={addTask}
                onUpdateTask={updateTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onClearDone={clearDoneTasks}
              />
            }
          />

          {/* Task Groups */}
          <Route
            path="/groups"
            element={
              <Groups
                tasks={tasks}
                groups={groups}
                onAddGroup={addGroup}
                onDeleteGroup={deleteGroup}
              />
            }
          />

          {/* Tasks inside a selected group */}
          <Route
            path="/groups/:groupId"
            element={
              <GroupTasks
                tasks={tasks}
                groups={groups}
                onAddTask={addTask}
                onUpdateTask={updateTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />

          {/* User Guide */}
          <Route path="/guide" element={<Guide />} />

          {/* User Information */}
          <Route path="/users" element={<Users />} />

          {/* Developers */}
          <Route path="/developers" element={<Developers />} />

          {/* Page Not Found */}
          <Route
            path="*"
            element={
              <div className="p-5 pb-28">
                <div className="max-w-2xl mx-auto">
                  <h1 className="text-4xl font-bold text-black mt-6">
                    Page not found
                  </h1>
                  <p className="text-gray-500 mb-6">
                    Use the tabs below to go back.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>

        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;