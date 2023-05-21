import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ShopByVideo from "../ShopByVideo/ShopByVideo";


const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <ShopByVideo />
        </div>
    );
};

export default Home;