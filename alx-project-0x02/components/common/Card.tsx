import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
