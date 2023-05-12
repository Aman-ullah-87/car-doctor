

const PageHeader = ({children}) => {
    return (
        <div className="relative">
            <img className="w-full " src="https://i.ibb.co/wYTk9tq/checkout.png" alt="" />
            <div className="absolute bg-gradient-to-r from-[#151515] top-0 w-full h-full rounded-lg"><h1 className=" absolute top-1/2 left-24 font-inter text-white font-bold text-5xl">{children}</h1></div>
         </div>
    );
};

export default PageHeader;