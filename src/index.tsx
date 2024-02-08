import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { About } from "@/pages/about/index";
import { Shop } from "@/pages/shop/index";
import App from "@/components/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>...Loading</div>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<div>...Loading</div>}>
            <Shop />
          </Suspense>
        )
      }
    ]
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
