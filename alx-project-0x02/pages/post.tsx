import React from "react";
import Header from "@/components/layout/Header"; // ✅ Import Header

const PostsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ✅ Use Header */}
      <main className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-purple-700">All Posts</h1>
        <p className="text-gray-600 mt-2">
          This is a placeholder for the posts page.
        </p>
      </main>
    </div>
  );
};

export default PostsPage;
