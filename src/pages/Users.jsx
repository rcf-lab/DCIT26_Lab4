
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError("");

        // Retrieve sample user information from DummyJSON
        const response = await axios.get("https://dummyjson.com/users/1");

        setUser(response.data);
      } catch (error) {
        console.error("Failed to retrieve user information:", error);

        setError(
          "Unable to retrieve user information. Please check your internet connection and try again."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [retry]);

  return (
    <div className="p-5 pb-28">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-black mt-6">
          User Information
        </h1>

        <p className="text-gray-500 mb-6">
          Sample user information retrieved from DummyJSON using Axios.
        </p>

        {/* Loading Indicator */}
        {loading && (
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <p className="text-gray-600">
              Loading user information...
            </p>
          </div>
        )}

        {/* Error Message */}
        {!loading && error && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="font-medium text-red-600">
              {error}
            </p>

            <button
              onClick={() => setRetry((previous) => previous + 1)}
              className="mt-4 rounded-xl bg-[#007AFF] px-5 py-3 font-semibold text-white active:opacity-70"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Retrieved User Information */}
        {!loading && user && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h2 className="text-2xl font-bold text-black">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-gray-500 mt-1">
                @{user.username}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-black">
                  {user.firstName} {user.lastName}
                </p>
              </div>

              <div className="border-b border-gray-100 pb-3">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium text-black break-all">
                  {user.email}
                </p>
              </div>

              <div className="border-b border-gray-100 pb-3">
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium text-black">
                  {user.username}
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs text-gray-400 text-center">
              Information provided by the DummyJSON API.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;