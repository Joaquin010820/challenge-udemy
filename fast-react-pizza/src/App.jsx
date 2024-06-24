import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateUser from "./features/user/CreateUser";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // this error element shown in the whole apps
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        // this is when you send data in server
        action: createOrderAction,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        // this loader is fetching data from an api
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "user/new",
        element: <CreateUser />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
