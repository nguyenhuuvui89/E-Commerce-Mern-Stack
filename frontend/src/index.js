import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route index={true} path="/" element={<HomeScreen/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>

        {/* /* not get the config filter yet*/ }
        <Route path="/product/productName" element={<HomeScreen/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
