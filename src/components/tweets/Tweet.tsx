import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faRetweet,faHeart,faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../img/u6qfBBkF_400x400.jpg';
import verifyImage from '../../icons/Twitter_Verified_Badge.svg.png';
import Reaction from "./Reaction";
import {randomCommentShareNumber,randomLikeNumber} from '../../utils'
import Comment from "../comments/comment";

const Tweet = React.memo(({tweet}:{tweet:string})=>{
    const [activeComment,setActiveComment] = useState(false);

    
    
    return(
        <div className="tweet  border-b-[1px] pb-[1rem] border-[#bdbdbd8e]">
            <div className="tweet-details w-full flex flex-col">
            <div className="tweet-zone py-[1rem] w-[100%] flex">
            <div className="image mx-[1rem]">
                <img src={profileImage} className="w-[3.2rem] rounded-full" alt="" />
            </div>
            <div className="user-input">
                <div className="name flex">
                    <p className="font-bold">Twitter</p>
                    <img src={verifyImage} className="w-[1.2rem] h-[1.2rem] mt-[3px] mx-[3px]" alt="" />
                    <p className="text-[#2c2c2ca8]">@Twitter</p>
                </div>
            <p>{tweet}</p>
            </div>
            </div>
            <div className="comments w-full">

            </div>
            </div>
            <Reaction activeComment={activeComment} setActiveComment = {setActiveComment}/>
            {activeComment? <Comment/> : ""}
            
        </div>
    )
})

export default Tweet;