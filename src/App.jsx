import "./sass/main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { RootLayout } from "./layouts/RootLayout";
import { About } from "./pages/about/About";
import { useRef } from "react";
import { Blog } from "./pages/blog/Blog";
import { BlogLayout } from "./layouts/BlogLayout";
import { BlogPost } from "./pages/blog/BlogPost";
import { BlogProvider } from "./context/BlogContext";
import { WindowWidthProvider } from "./context/WindowWidthContext";

export const App = () => {
  const reference = useRef(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout reference={reference} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="/"
          element={
            <WindowWidthProvider>
              <BlogProvider>
                <BlogLayout />
              </BlogProvider>
            </WindowWidthProvider>
          }
        >
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
