
const developers = [
  { name: "Adrian Mabuti", role: "Routing and deployment" },
  { name: "Ryan Obedientes", role: "Task list and Done / Not Done features" },
  { name: "Richie Mapa", role: "Task groups pages" },
  { name: "Christian Fermin", role: "Dashboard and styling" },
];

function Developers() {
  return (
    <div className="p-5 pb-28">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-black mt-6">
          Developers
        </h1>

        <p className="text-gray-500 mb-6">
          Meet the group members who developed this application.
        </p>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="px-4 py-4 border-b border-gray-100 last:border-b-0"
            >
              <p className="font-semibold text-black">
                {dev.name}
              </p>

              <p className="text-gray-500 mt-1">
                {dev.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Developers;