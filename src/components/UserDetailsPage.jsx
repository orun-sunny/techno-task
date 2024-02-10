import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched user details:", data); 
        setUser(data); 
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-page bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gray-500 px-4 py-6">
          <h1 className="text-white text-2xl font-bold text-center">
            User Details
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <img
              className="object-cover object-center w-full h-auto rounded-lg"
              src={user.image}
              alt="User Avatar"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 mb-4">{user.role}</p>
            <ul className="text-gray-700">
              <li className="mb-2">
                <strong>First Name:</strong> {user.firstName}
              </li>
              <li className="mb-2">
                <strong>Last Name:</strong> {user.lastName}
              </li>
              <li className="mb-2">
                <strong>Email:</strong> {user.email}
              </li>
            </ul>
            <hr className="my-4" />
            <ul className="text-gray-700">
              <li className="mb-2">
                <strong>Address:</strong> {user.address.address},{" "}
                {user.address.city}, {user.address.state},{" "}
                {user.address.postalCode}
              </li>
              <li className="mb-2">
                <strong>Age:</strong> {user.age}
              </li>
              <li className="mb-2">
                <strong>Bank:</strong> {user.bank.cardType},{" "}
                {user.bank.cardNumber}
              </li>
              <li className="mb-2">
                <strong>Birth Date:</strong> {user.birthDate}
              </li>
              <li className="mb-2">
                <strong>Blood Group:</strong> {user.bloodGroup}
              </li>
              <li className="mb-2">
                <strong>Company:</strong> {user.company.name},{" "}
                {user.company.department}, {user.company.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
