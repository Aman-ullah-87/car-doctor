import image1 from "../../../assets/images/homeCarousel/1.jpg";
import image2 from "../../../assets/images/homeCarousel/2.jpg";
import image3 from "../../../assets/images/homeCarousel/3.jpg";
import image4 from "../../../assets/images/homeCarousel/4.jpg";

const Header = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={image1} className="w-full bg-cover rounded-xl" />
        <div className="absolute text-white  py-36 px-20 w-full h-full space-y-6 bg-gradient-to-r from-[#151515] rounded-xl">
          <h1 className="font-inter font-bold text-6xl  ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <h5>
            There are many variations of passages of available, <br />
            but the majority
            have suffered alteration in some form
          </h5>
        <div className="flex gap-4">  <button className="btn bg-primary">Discover More</button>
          <button className="btn btn-outline bg-transparent text-white ">Latest Project</button></div>
        </div>
        <div className="absolute flex transform gap-4 right-5 bottom-4">
          <a
            href="#slide4"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute text-white  py-36 px-20 w-full h-full space-y-6 bg-gradient-to-r from-[#151515] rounded-xl">
          <h1 className="font-inter font-bold text-6xl  ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <h5>
            There are many variations of passages of available, <br />
            but the majority
            have suffered alteration in some form
          </h5>
        <div className="flex gap-4">  <button className="btn bg-primary hover:text-primary hover:bg-white">Discover More</button>
          <button className="btn btn-outline bg-transparent text-white  hover:bg-primary outline-0 hover:outline-white hover:text-white ">Latest Project</button></div>
        </div>
        <div className="absolute flex transform  gap-4 right-5 bottom-4">
          <a
            href="#slide1"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute flex transform  gap-4 right-5 bottom-4">
          <a
            href="#slide2"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />
        <div className="absolute text-white  py-36 px-20 w-full h-full space-y-6 bg-gradient-to-r from-[#151515] rounded-xl">
          <h1 className="font-inter font-bold text-6xl  ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <h5>
            There are many variations of passages of available, <br />
            but the majority
            have suffered alteration in some form
          </h5>
        <div className="flex gap-4">  <button className="btn bg-primary">Discover More</button>
          <button className="btn btn-outline bg-transparent text-white ">Latest Project</button></div>
        </div>
        <div className="absolute flex transform gap-4 right-5 bottom-4">
          <a
            href="#slide3"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-primary hover:bg-white  hover:text-primary"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
