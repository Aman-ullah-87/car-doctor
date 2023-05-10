import ProductCard from "../ProductCard/ProductCard";


const Products = () => {
    return (
        <div className="py-20 bg-[#e8e8e8]">
        <div className=" space-y-6 text-center">
          <h4 className="font-inter font-bold text-xl text-primary">Popular Products</h4>
          <p className="font-inter font-bold text-5xl text-[#151515]">
          Browse Our Products
          </p>
  
          <p className="font-inter font-semibold text-base capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. 
          </p>
        </div>
       <div className="py-8 grid grid-cols-3 justify-items-center">
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       </div>
         
        <div className="text-center py-12">
          <button className="btn btn-outline text-primary hover:bg-primary hover:border-white">
            More Services
          </button>
        </div>{" "}
      </div>
    );
};

export default Products;