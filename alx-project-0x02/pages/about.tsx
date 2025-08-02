import React from "react";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-green-700">About This Project</h1>
      <p className="text-lg text-gray-600 mb-4">
        Below are buttons with different sizes and shapes:
      </p>

      <div className="flex flex-wrap gap-4">
        <Button label="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button label="Large Rounded-full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
