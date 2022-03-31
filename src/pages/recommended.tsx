import React from "react";
import harteHanks from '../img/Brand-Logo.svg';
import Apple from '../img/Apple_logo_black.svg';
import Twitter from '../img/u6qfBBkF_400x400.jpg';
import  Recommendedtxt from '../components/recommendedtxt'
const Recommended = () => {
    return(
        <div className="r w-[30%]  flex justify-center mt-[5rem] tall:hidden ">

       
        <div className="list w-[25rem] min-h-[20rem] max-h-[35vh]  bg-[#d1d1d1] rounded-[1rem]">
            <p className="font-bold px-[1rem] py-[0.5rem] text-[1.5rem]">You might like</p>
            <div className="recomandation flex flex-col justify-around min-h-[80%]">
               <Recommendedtxt img={harteHanks} name={'Harte Hanks'}/>
               <Recommendedtxt img={Apple} name={'Apple'}/>
               <Recommendedtxt img={Twitter} name={'Twitter'}/>
            </div>
        </div>
        </div>
    )

}

export default Recommended;