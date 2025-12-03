"use client";

import { useEffect, useState } from "react";
import { getAllUsers, removeUser } from "./services/api/userService";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const load = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Users Dashboard</h1>
      <a
        href="/users/create"
        className="inline-block mb-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ➕ Create User
      </a>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-left">
              <th className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">ID</th>
              <th className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Name</th>
              <th className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Email</th>
              <th className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u: any, idx) => (
              <tr
                key={u.id}
                className={`border-t dark:border-gray-700 ${idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
                  }`}
              >
                <td className="py-3 px-4">{u.id}</td>
                <td className="py-3 px-4">{u.name}</td>
                <td className="py-3 px-4">{u.email}</td>

                <td className="py-3 px-4">
                  {/* Edit Link */}
                  <a
                    href={`/users/${u.id}/edit`}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </a>

                  {/* Delete button */}
                  <button
                    className="text-red-600 hover:underline"
                    onClick={async () => {
                      await removeUser(u.id);
                      load();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
