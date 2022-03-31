import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser,faHashtag, faBell, faEnvelope,faBookBookmark,faList,faEllipsis} from '@fortawesome/free-solid-svg-icons';
import twitterIcon from '../icons/twitter-brands.svg';
// components import
import { navElements } from "./nav-elements";


const Nav = () : JSX.Element =>{


    return(
        <nav className="min-h-[100vh] flex flex-col w-[20%] min-w-[30vh]  bg-white  semi-tall:hidden">
            
           <div id="icon" className=""><img className="w-[3rem] mx-[2rem] my-[1rem]" src={twitterIcon} alt="" /></div>

             <ul className="nav-links flex flex-col px-[2rem] w-full text-left">
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faHouseUser}/> Home</li>
                {/* <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faHashtag}/> Explore</li>
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faBell}/> Notifications</li>
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faEnvelope}/> Messages</li>
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faBookBookmark}/> BookMarks</li>
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faList}/> Lists</li>
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faHouseUser}/> Profile</li> */}
                <li className="text-[1.7rem] py-[1rem] font-bold"><FontAwesomeIcon className="px-[0.4rem]" icon={faEllipsis}/> More</li>
            </ul> 
          
            <div  className="flex w-full">
            <button className="tweet-button bg-[#36a1f8]  mx-[2rem] px-[4rem] py-[0.6rem] text-white rounded-[2rem] font-bold">Tweet</button>

            </div>

        </nav>
    )
}

export default Nav;