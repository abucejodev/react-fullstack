import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/elements/button";
import Layout from "../../../components/layout";
import axios from "axios";
import { useEffect, useState } from "react";

const initialFieldsValue = {
  title: "",
  content: "",
};

const Edit: Component = () => {
  const { blogId } = useParams();

  const [fields, setFields] = useState(initialFieldsValue);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    if (!fields.title || !fields.content) return;
    axios.put(`/api/blogs/${blogId}`, fields).then((response) => {
      if (response.status !== 200) return;
      navigate("/blogs");
    });
  };

  useEffect(() => {
    if (fields.title || fields.content) return;
    axios.get(`/api/blogs/${blogId}`).then((response) => {
      const data: Blog = response.data;
      setFields({
        title: data.title,
        content: data.content,
      });
    });
  }, []);

  return (
    <Layout>
      <form className="space-y-4">
        <div className="flex gap-4 items-center">
          <Button onClick={() => navigate(-1)} intent="secondary">
            Back
          </Button>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
        <label className="flex flex-col space-y-1">
          <span className="font-medium">Title</span>
          <input
            type="text"
            placeholder="New Blog"
            value={fields.title}
            onChange={(event) =>
              setFields((prevState) => ({
                ...prevState,
                title: event.target.value,
              }))
            }
            className="bg-slate-200 rounded px-4 py-2"
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span className="font-medium">Content</span>
          <textarea
            rows={10}
            placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi esse dolores quidem consequuntur eveniet odit neque."
            value={fields.content}
            onChange={(event) =>
              setFields((prevState) => ({
                ...prevState,
                content: event.target.value,
              }))
            }
            className="bg-slate-200 rounded px-4 py-2"
          />
        </label>
      </form>
    </Layout>
  );
};

export default Edit;
