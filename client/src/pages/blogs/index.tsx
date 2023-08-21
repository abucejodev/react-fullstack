import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import axios from "axios";
import Create from "./create";
import Blog from "./blog";
import Button from "../../components/elements/button";
import Edit from "./edit";

const Blogs: Component & {
  Create: typeof Create;
  Blog: typeof Blog;
  Edit: typeof Edit;
} = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (blogs.length) return;
    axios.get("/api/blogs").then((response) => {
      const data = response.data;
      setBlogs(data);
    });
  }, []);

  return (
    <Layout>
      <section className="space-y-8">
        <Button onClick={() => navigate("/blogs/create")}>Create New</Button>

        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <li key={blog.id} className="space-y-2">
              <Link to={`/blogs/${blog.id}`}>
                <h2 className="text-lg font-bold">
                  {index + 1}. {blog.title}
                </h2>
              </Link>
              <p className="text-opacity-80">{blog.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Blogs;

Blogs.Create = Create;
Blogs.Blog = Blog;
Blogs.Edit = Edit;
