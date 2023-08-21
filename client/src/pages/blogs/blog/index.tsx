import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/elements/button";

const Blog: Component = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<Blog>();

  const navigate = useNavigate();

  const handleDelete = async () => {
    axios.delete(`/api/blogs/${blogId}`).then((response) => {
      if (response.status !== 200) return;
      navigate("/blogs");
    });
  };

  useEffect(() => {
    if (blog) return;
    axios.get(`/api/blogs/${blogId}`).then((response) => {
      const data = response.data;
      setBlog(data);
    });
  }, []);

  if (!blog) return <>Loading...</>;

  return (
    <Layout>
      <section className="space-y-8">
        <div className="flex gap-4">
          <Button onClick={() => navigate(-1)} intent="secondary">
            Back
          </Button>
          <Button onClick={() => navigate(`/blogs/${blogId}/edit`)}>
            Edit
          </Button>
          <Button onClick={handleDelete} intent="danger">
            Delete
          </Button>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">{blog.title}</h2>
          <p className="text-opacity-80">{blog.content}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
