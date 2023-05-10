import g1 from "../../../assets/g1.png";
import g2 from "../../../assets/g2.png";
import g3 from "../../../assets/g3.png";

const Stat = () => {
  return (
    <div className="   stats h-[250px] shadow flex justify-between bg-black text-white text-center">
      <div className="stat text-white flex justify-center items-center">
        <div className="stat-figure text-primary">
          <img src={g1} alt="" />
        </div>
        <div>
          {" "}
          <div className="stat-desc text-white">We are open monday-friday</div>
          <div className="stat-title text-white font-inter text-[25px] font-bold">7:00 am - 9:00 pm</div>
         
        </div>
      </div>
      <div className="stat text-white flex justify-center items-center">
        <div className="stat-figure text-primary">
          <img src={g2} alt="" />
        </div>
        <div>
          {" "}
          <div className="stat-desc text-white">Have a question?</div>
          <div className="stat-title text-white font-inter text-[25px] font-bold">+2546 251 2658</div>
         
        </div>
      </div>
      <div className="stat text-white flex justify-center items-center">
        <div className="stat-figure text-primary">
          <img src={g3} alt="" />
        </div>
        <div>
          {" "}
          <div className="stat-desc text-white">Need a repair? our address</div>
          <div className="stat-title text-white font-inter text-[25px] font-bold">Liza Street, New York</div>
         
        </div>
      </div>
      
    
    </div>
  );
};

export default Stat;
