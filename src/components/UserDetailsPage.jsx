import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details based on userId
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched user details:", data); // Log the response data
        setUser(data); // Set the user data
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-page">
      <h1>User Details</h1>
      <div>
        <img src={user.image} alt="User Avatar" />
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>
          Address: {user.address.address}, {user.address.city},{" "}
          {user.address.state}, {user.address.postalCode}
        </p>
        <p>Age: {user.age}</p>
        <p>
          Bank: {user.bank.cardType}, {user.bank.cardNumber}
        </p>
        <p>Birth Date: {user.birthDate}</p>
        <p>Blood Group: {user.bloodGroup}</p>
        <p>
          Company: {user.company.name}, {user.company.department},{" "}
          {user.company.title}
        </p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default UserDetailsPage;
