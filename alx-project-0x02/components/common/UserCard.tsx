import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md p-4 shadow-md max-w-md w-full bg-white">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Address:</strong> {address.street}, {address.suite},{" "}
        {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
