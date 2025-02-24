// Layouts
import HeaderOnly from "~/components/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

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
    layout: HeaderOnly,
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
