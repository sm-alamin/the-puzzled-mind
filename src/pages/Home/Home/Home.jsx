import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import DealsOfTheDay from "../DealsOfTheDay/DealsOfTheDay";
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
            <DealsOfTheDay />
            <ContactUs />
        </div>
    );
};

export default Home;