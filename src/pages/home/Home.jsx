import React from "react";
import Hero from "../../components/hero/Hero";
import Brand from "../../components/brand/Brand";
import Blog from "../../components/blog/Blog";
import Servis from "../../components/servis/Servis";
import Group from "../../components/group/Group";
import Massage from "../../components/massage/Massage";
import Info from "../../components/info/Info";
import Swipper from "../../components/swipper/Swipper";
import Shop from "../../components/shop/Shop";
import ProductInfo from "../../components/productInfo/ProductInfo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Blog />
      <Servis />
      <Group />
      <ProductInfo />
      <Massage />
      <Info />
      <Swipper />
      <Shop />
    </div>
  );
};

export default Home;
