import about1 from '../../../assets/images/about_us/person.jpg'
import about2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="flex gap-20 py-28 bg-[#E8E8E8]">
            <div className='w-1/2 relative'>
                <img src={about1} alt="" className=' w-[480px] h-[473px] rounded-lg bg-cover' />
                <img src={about2} alt="" className='absolute h-[332px] w-[327px] right-4 -bottom-12  border-8 border-white ' />
            </div>
            <div className='w-1/2 space-y-6'>
                <h4 className='font-inter font-bold text-xl text-primary'>About us</h4>
                <p className='font-inter font-bold text-5xl text-[#151515]'>We are qualified <br /> & of experience <br /> in this field</p>
              
                <p className='font-inter font-semibold text-base capitalize text-[#737373]'>There are many variations of passages of <br /> Lorem Ipsum available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                <p className='font-inter font-semibold text-base capitalize text-[#737373]'>the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly believable.  </p>
                <button className="btn bg-primary hover:text-primary hover:bg-white border-none">Get More Info</button>
            </div>
        </div>
    );
};

export default About;