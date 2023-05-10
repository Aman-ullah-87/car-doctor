

import {  FaUsers} from "react-icons/fa";
const ChooseUs = () => {
    
    const data=[
        {
            id:'c1',
            img:<FaUsers className='w-[76px] h-[84px]'/>,
            title:'Expert Team'
        },
        {
            id:'c2',
            img:<FaUsers className='w-[76px] h-[84px]'/>,
            title:'Expert Team'
        },
        {
            id:'c3',
            img:<FaUsers className='w-[76px] h-[84px]'/>,
            title:'Expert Team'
        },
        {
            id:'c4',
            img:<FaUsers className='w-[76px] h-[84px]'/>,
            title:'Expert Team'
        },
        {
            id:'c5',
            img:<FaUsers className='w-[76px] h-[84px]'/>,
            title:'Expert Team'
        },
        {
            id:'c6',
            img:<FaUsers className='w-[76px] h-[84px]'/>,
            title:'Expert Team'
        }
    ]

  return (
    <div className="py-20">
      <div className=" space-y-6 text-center">
        <h4 className="font-inter font-bold text-xl text-primary">
          Popular Products
        </h4>
        <p className="font-inter font-bold text-5xl text-[#151515]">
          Browse Our Products
        </p>

        <p className="font-inter font-semibold text-base capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className='flex items-center justify-center gap-4 py-8'>
        {data.map(dat =><div key={dat.id} className='w-[170px]  h-[156px]  flex flex-col gap-4 border-2 border-[rgb(232 232 232)] items-center justify-center rounded-lg hover:bg-primary hover:text-white'>
         <div className=''>{dat.img}</div>
         <p className='font-inter font-bold text-lg '>{dat.title}</p>
        </div>)}
      </div>
    </div>
  );
};

export default ChooseUs;
