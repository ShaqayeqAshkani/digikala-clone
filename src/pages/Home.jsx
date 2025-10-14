import Layout from "../components/layout/Layout";
import StorySlider from "../components/sliders/StorySlider";
import BannerSlider from "../components/sliders/BannerSlider";
import Readables from "../components/sliders/Readables.jsx";
import CategoryItem from "../components/categories/CategoryItem";
import CategoryGrid from "../components/categories/CategoryGrid";
import Gallery from "../components/gallery/Gallery";
import DiscountedProducts from "../components/products/DiscountedProducts";

function Home() {
  return (
    <Layout>
      <StorySlider />
      <BannerSlider />
      <CategoryItem />
      <Gallery />
      <CategoryGrid />
      <DiscountedProducts />
      <Readables />
    </Layout>
  );
}

export default Home;
