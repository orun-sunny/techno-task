import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    // Filter users based on searchQuery when it changes
    const filtered = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim())
    );
    // Sort filtered users based on the selected option
    const sorted = filtered.sort((a, b) => {
      if (sortOption === "name") {
        return `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`
        );
      } else if (sortOption === "email") {
        return a.email.localeCompare(b.email);
      } else if (sortOption === "company") {
        return a.company.name.localeCompare(b.company.name);
      }
    });
    setFilteredUsers(sorted);
  }, [searchQuery, users, sortOption]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md mr-4 focus:outline-none focus:border-indigo-500"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        >
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by Company name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {filteredUsers.map((user) => (
          <div key={user.id} className="rounded overflow-hidden shadow-lg">
            <Link to={`/user/${user.id}`}>
              <div className="relative">
                <img
                  className="w-full"
                  src={user.image}
                  alt={`User ${user.id}`}
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    <span className="font-bold">27</span>
                    <small>March</small>
                  </div>
                </a>
              </div>
            </Link>
            <div className="px-6 py-4">
              <Link
                to={`/user/${user.id}`}
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                {user.firstName} {user.lastName}
              </Link>
              <p className="text-gray-500 text-sm">
                The city that never sleeps
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
              c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
              c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      />
                    </g>
                  </g>
                </svg>
                <span className="ml-1">6 mins ago</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
