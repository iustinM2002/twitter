import React from "react";
import profilePicture from '../img/u6qfBBkF_400x400.jpg';
import verifyTweet from '../icons/Twitter_Verified_Badge.svg.png';
// import profileBackground from '../img/600x200.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot , faLink , faCalendar} from '@fortawesome/free-solid-svg-icons';
// import components
import Tweets from "./tweets/Tweets";
const Profile  = () => {
    return(
        <div className="profile">
            <div className={`profile-background min-h-[15rem] bg-profileBackground w-full bg-center bg-cover`}>

            </div>
            <div className="profile-description relative pl-[1rem] border-b-[0.5px]">
                <div className="profile-img">
                    <img className="w-[8rem] rounded-[100%] absolute top-[-75%] left-[5%] border-[5px] border-white" src={profilePicture} alt="" />
                </div>
                <div className="first-row flex flex-col  py-[0.3rem] mt-[3rem]">
                    <div className="verift-row flex">
                    <p className="text-xl font-bold">Twitter</p>
                    <img className="w-[1.5rem] h-[1.5rem] m-[5px]" src={verifyTweet} alt="" />
                    </div>
                    <p className="text-[#646464e0]">@Twitter</p>
                    <p className="text-[1rem] py-[0.5rem]" >What's happening?!</p>
                </div>
                <div className="profile-about-section">
                    <div className="first-line-about flex">
                        <div className="information flex ">
                            <FontAwesomeIcon className="text-[#646464e0] mt-1 mr-1" icon={faLocationDot}/>
                            <p className="text-[#646464e0] ">everywhere</p>
                        </div>
                        <div className="information flex mx-3 ">
                            <FontAwesomeIcon className="text-[#646464e0] mt-1 mr-1" icon={faLink}/>
                            <a href="https://about.twitter.com/en" className="text-[#36a1f8] hover:underline">about.twitter.com</a>
                        </div>
                    </div>
                    <div className="date-joined flex">
                        <FontAwesomeIcon className="text-[#646464e0] mt-1 mr-1" icon={faCalendar}/>
                        <p className="text-[#646464e0] ">Joined February 2007</p>
                    </div>
                    <div className="followers flex pb-[1rem]">
                        <p className="text-[#646464e0] pr-[1rem]"><span className="font-bold pr-[0.5rem] text-black">1</span>Following</p>
                        <p className="text-[#646464e0]"><span className="font-bold pr-[0.5rem] text-black">61M</span>Followers</p>
                    </div>
                </div>
       
            

        </div>
        </div>
    )
}


export default Profile;