import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        // Map API "body" to "content"
        const mappedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          content: post.body,
        }));
        setPosts(mappedPosts);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-12 px-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-purple-700">All Posts</h1>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;
