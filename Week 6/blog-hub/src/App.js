import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Introduction to React",
      category: "React",
      author: "Rishitha",
      likes: 0,
    },
    {
      id: 2,
      title: "Java Programming Tips",
      category: "Java",
      author: "Rishitha",
      likes: 0,
    },
    {
      id: 3,
      title: "Getting Started with AI",
      category: "AI",
      author: "Rishitha",
      likes: 0,
    },
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const likeBlog = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const addBlog = () => {
    if (title === "" || category === "") {
      alert("Please enter all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      category,
      author: "Rishitha",
      likes: 0,
    };

    setBlogs([...blogs, newBlog]);
    setTitle("");
    setCategory("");
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📝 Blog Hub</h1>

      <input
        type="text"
        placeholder="Search Blog..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <h2>Add New Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <button onClick={addBlog}>➕ Add Blog</button>

      <hr />

      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "20px",
          }}
        >
          <h2>{blog.title}</h2>

          <p>
            <b>Category:</b> {blog.category}
          </p>

          <p>
            <b>Author:</b> {blog.author}
          </p>

          <p>
            <b>Likes:</b> {blog.likes}
          </p>

          <button onClick={() => likeBlog(blog.id)}>
            ❤️ Like
          </button>

          <button
            onClick={() => deleteBlog(blog.id)}
            style={{ marginLeft: "10px" }}
          >
            ❌ Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;