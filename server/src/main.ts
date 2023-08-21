import express from "express";
import dotenv from "dotenv";
import database from "./library/database";
import { Prisma } from "@prisma/client";

dotenv.config();

const PORT = process.env.API_PORT;
const SEGMENT = process.env.API_SEGMENT;

const endpoint = (url: string) => `${SEGMENT}${url}`;

const api = express();
api.use(express.json());

api.get(endpoint("/blogs"), async (_, response) => {
  try {
    const blogs = await database.blog.findMany();
    return response.json(blogs);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Server Error" });
  }
});

api.get(endpoint("/blogs/:blogId"), async (request, response) => {
  const { blogId } = request.params;

  try {
    const blog = await database.blog.findUnique({
      where: { id: blogId },
    });
    return response.json(blog);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Server Error" });
  }
});

api.post(endpoint("/blogs"), async (request, response) => {
  const body: Prisma.BlogCreateInput = request.body;

  try {
    const blog = await database.blog.create({
      data: body,
    });
    return response.json(blog);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Server Error" });
  }
});

api.delete(endpoint("/blogs/:blogId"), async (request, response) => {
  const { blogId } = request.params;

  try {
    const blog = await database.blog.delete({
      where: { id: blogId },
    });
    return response.json(blog);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Server Error" });
  }
});

api.put(endpoint("/blogs/:blogId"), async (request, response) => {
  const { blogId } = request.params;
  const body: Prisma.BlogUpdateInput = request.body;

  try {
    const blog = await database.blog.update({
      where: { id: blogId },
      data: body,
    });
    return response.json(blog);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Server Error" });
  }
});

api.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
