import React, { useState } from "react";
import Header from "@/components/layout/Header"; // ✅ Import Header
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      title: "Modern UI",
      content: "Our platform offers clean and responsive user interfaces.",
    },
    {
      title: "Fast Performance",
      content: "Optimized code ensures your website loads quickly.",
    },
  ]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ✅ Use Header */}
      <main className="py-12 px-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to the Home Page
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          + Create New Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
