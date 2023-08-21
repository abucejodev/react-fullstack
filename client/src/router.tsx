import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blogId" element={<Blogs.Blog />} />
      <Route path="/blogs/create" element={<Blogs.Create />} />
      <Route path="/blogs/:blogId/edit" element={<Blogs.Edit />} />
    </Route>
  )
);

export default router;
