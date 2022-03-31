import React,{useState} from 'react'


const Recommendedtxt = ({img,name}:{img:any,name:string}) => {
    const [follow,setFollow] = useState<Boolean>(false);
    const followHandler = () =>{
        setFollow(!follow)
    };
  return (
                <div className="row flex">
                    <img src={img} className="w-[3rem] h-[3rem] mx-[1rem]" alt="" />
                    <div className="text w-full">
                    <p className=" text-[1rem]">{name}</p>
                    <p className="text-[#6b6b6b] text-[0.8rem]">{`@${name.replace(/\s+/g, '').toLowerCase()}`}</p>

                    </div>
                    <div className="follow w-full flex justify-end">
                    <button onClick={followHandler} className={follow ? "text-white bg-[#3d3d3d] px-[1.2rem] py-[0.5rem] rounded-[2rem] m-[1rem]" : "text-white bg-black px-[1.2rem] py-[0.5rem] rounded-[2rem] m-[1rem]"}>{follow ? 'Following' : 'Follow'}</button>
                    </div>
                </div>
  
  )
}

export default Recommendedtxt;