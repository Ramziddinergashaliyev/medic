import React, { lazy } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Cart from "./pages/cart/Cart";
// import Admin from "./pages/admin/Admin";
// import Profile from "./pages/admin/profile/Profile";
// const ManageProduct = lazy(() =>
//   import("./pages/admin/manageProduct/ManageProduct")
// );
// const CreateCategory = lazy(() => import("./pages/wishlist/Wishlist"));
// const ManageCategory = lazy(() => import("./pages/admin/manageCategory"));
// const CreateProduct = lazy(() =>
//   import("./pages/admin/createProduct/CreateProduct")
// );
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Home = lazy(() => import("./pages/home/Home"));
const Catolog = lazy(() => import("./pages/catolog/Catolog"));
const Warranty = lazy(() => import("./pages/warranty/Warranty"));
const Feedback = lazy(() => import("./pages/feedback/Feedback"));
const Sale = lazy(() => import("./pages/sale/Sale"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const About = lazy(() => import("./pages/about/About"));
const Article = lazy(() => import("./pages/all-article/Article"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Detail = lazy(() => import("./pages/detail/Detail"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="catolog" element={<Catolog />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="article" element={<Article />} />
          <Route path="/single/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="admin" element={<Admin />}>
            <Route path="profile" element={<Profile />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="manageCategory" element={<ManageCategory />} />
            <Route path="createCategory" element={<CreateCategory />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
