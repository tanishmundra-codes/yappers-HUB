import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Home from "./components/Home/Home";
import Layout from "./Layout";
import About from "./components/About/About";
import './index.css';
import Signup from "./components/Signup/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<div className="text-black text-center p-10">404 - Page Not Found</div>} />
    </Route>

  ),
  {
    basename: "/yappers-HUB",
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
