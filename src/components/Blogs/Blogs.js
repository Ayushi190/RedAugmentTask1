import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const blogPosts = [
    {
      date: "12/08/2024",
      category: "TECHNOLOGY",
      title: "Architectural Design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "15/08/2024",
      category: "INNOVATION",
      title: "Future of AI",
      content:
        "Discover how artificial intelligence is transforming industries and creating new opportunities for businesses worldwide.",
    },
    {
      date: "18/08/2024",
      category: "DESIGN",
      title: "UX Trends 2024",
      content:
        "Explore the latest user experience design trends that are shaping digital products this year.",
    },
    {
      date: "22/08/2024",
      category: "DEVELOPMENT",
      title: "React Best Practices",
      content:
        "Learn the most effective patterns and techniques for building scalable React applications.",
    },
  ];

  return (
    <div className="blog-content-wrapper">
      <header className="blog-hero">
        <h1>
          Discover Blogs With
          <br />
          the Best Insights
        </h1>
        <div className="blog-search">
          <input type="text" placeholder="Search blogs..." />
          <button>→</button>
        </div>
      </header>

      <main className="blog-content">
        <h2>Blogs & Case Studies</h2>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-post" key={index}>
              <div className="post-date">{post.date}</div>
              <div className="post-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
