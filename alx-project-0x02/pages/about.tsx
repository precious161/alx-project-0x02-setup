import React from "react";
import Header from "@/components/layout/Header"; // ✅ Import Header
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ✅ Use Header */}
      <main className="py-12 px-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-green-700">
          About This Project
        </h1>
        <p className="text-lg text-gray-600">Below are styled buttons:</p>
        <div className="flex flex-wrap gap-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
