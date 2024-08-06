import About from "../Containers/about";
import Blog from "../Containers/blog";
import ImageGallery from "../Containers/imageGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ImageGallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
