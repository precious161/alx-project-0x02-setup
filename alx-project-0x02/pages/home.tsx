import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to the Home Page
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
        <Card
          title="Modern UI"
          content="Our platform offers clean and responsive user interfaces for better experience."
        />
        <Card
          title="Fast Performance"
          content="Optimized code ensures your website runs smoothly and loads quickly."
        />
        <Card
          title="Scalable Design"
          content="Build apps that scale with ease, whether you're starting small or going big."
        />
      </div>
    </div>
  );
};

export default HomePage;
