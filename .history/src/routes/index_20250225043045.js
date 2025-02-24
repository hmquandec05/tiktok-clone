import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";

// Public routes
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/upload",
    component: Upload,
    layout: null,
  },
];

// Private routes
const privateRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
];

export { publicRoutes, privateRoutes };
