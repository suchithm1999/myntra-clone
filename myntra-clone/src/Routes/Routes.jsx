import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import ProductDetailsPage from "../components/ProductDetailsPage";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <App />
          </>
        }
      >
        <Route path="" element={<Home />} />
        <Route path="product-details/:id" element={<ProductDetailsPage />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
