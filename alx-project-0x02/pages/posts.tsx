import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-12 px-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-purple-700">All Posts</h1>

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
      </main>
    </div>
  );
};

export default PostsPage;

// Fetch posts at build time
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return {
    props: { posts },
    revalidate: 60, // Optional: re-generate the page every 60 seconds
  };
}
