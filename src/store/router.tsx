import loadable from "@loadable/component";
import { createBrowserRouter } from "react-router-dom";

const HomePage = loadable(() => import("../App"));
const RedirectPage = loadable(() => import("@pages/common/RedirectPage"));

export const routerConfig = [
  {
    path: "/main",
    element: <HomePage />,
  },
  { path: "/redirect/kakao", element: <RedirectPage /> },
  { path: "/redirect/naver", element: <RedirectPage /> },
];

export const router = createBrowserRouter(routerConfig);
