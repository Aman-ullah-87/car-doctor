import About from "../About/About";
import Header from "../Header/Header";
import Products from "../Products/Products/Products";
import Service from "../Service/Service";
import Stat from "../Stat/Stat";
import ChooseUs from "./ChooseUs/ChooseUs";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
   
    return (
        <div>
            <Header/>
            <About/>
            <Service/>
            <div className="py-20 bg-[#e8e8e8]">
            <Stat/>
            <Products/>
            
            </div>
            <ChooseUs/>
            <Testimonials/>
           
        </div>
    );
};

export default Home;