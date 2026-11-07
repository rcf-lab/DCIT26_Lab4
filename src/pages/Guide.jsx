import { Link } from "react-router-dom";

const steps = [
  {
    title: "Getting Started",
    text: "The Home page is your dashboard. It provides an overview of your tasks, including the total number of tasks, completed tasks, and pending tasks. Use the bottom navigation to access the different features.",
    link: "/",
    linkText: "Go to Dashboard",
  },
  {
    title: "Creating Task Groups",
    text: "Go to the Groups page and enter a group name, such as School Activities, Personal Tasks, or Projects. Click the create button to add your group. You can open a group to view its assigned tasks.",
    link: "/groups",
    linkText: "Go to Groups",
  },
  {
    title: "Adding and Organizing Tasks",
    text: "Open the Tasks page or a specific task group. Enter a task title, choose a deadline and priority, then click Add Task. Group assignment is optional. You can leave the group selection empty to create an ungrouped task.",
    link: "/tasks",
    linkText: "Go to Tasks",
  },
  {
    title: "Managing Task Status",
    text: "Each task can have two statuses: Done or Not Done. Click Mark as Done to complete a task. Completed tasks will be visually distinguished. You can also mark a completed task as Not Done if you need to work on it again.",
    link: "/tasks",
    linkText: "Manage Task Status",
  },
  {
    title: "Deleting Tasks",
    text: "Use the Delete button on a task to remove it. If a confirmation message appears, confirm the deletion. You can also use Clear Done Tasks to remove all completed tasks at once.",
    link: "/tasks",
    linkText: "Manage Tasks",
  },
  {
    title: "Navigating the System",
    text: "Use the bottom navigation to move between Home, Tasks, Groups, Guide, User Info, and Developers. Open a group from the Groups page to view only the tasks assigned to it. The All Groups filter on the Tasks page lets you view tasks from all groups or select a specific group.",
    link: "/groups",
    linkText: "Explore Task Groups",
  },
  {
    title: "Understanding User Information",
    text: "The User Information page displays sample user details retrieved from DummyJSON through Axios. The information includes a user's full name, email address, username, and profile picture. A loading message appears while the request is processing, and an error message appears if the request fails.",
    link: "/users",
    linkText: "View User Information",
  },
  {
    title: "Understanding Task Data Management",
    text: "The system uses Zustand to manage and share task and group information across different pages. When you add, edit, complete, or delete a task, the changes are reflected throughout the application. Zustand's persistence feature also saves task and group data in your browser's local storage, allowing them to remain after refreshing the page.",
    link: "/tasks",
    linkText: "View Your Tasks",
  },
];

function Guide() {
  return (
    <div className="p-5 pb-28">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-black mt-6">
          User Guide
        </h1>

        <p className="text-gray-500 mb-6">
          Learn how to use the To-Do List system through these simple
          instructions.
        </p>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="px-4 py-4 border-b border-gray-100 last:border-b-0"
            >
              <p className="font-semibold text-black">
                {index + 1}. {step.title}
              </p>

              <p className="text-gray-500 mt-2 leading-relaxed">
                {step.text}
              </p>

              <Link
                to={step.link}
                className="inline-block mt-3 text-sm font-semibold text-[#007AFF] active:opacity-70"
              >
                {step.linkText} →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Guide;