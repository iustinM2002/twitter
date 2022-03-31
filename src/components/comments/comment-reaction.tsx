import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faRetweet,faHeart,faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';

import {randomCommentShareNumber,randomLikeNumber} from '../../utils'


const CommentReaction = () => {
    const [activeLike,setActiveLike] = useState(false);
  return (
    <div className="reaction-zone flex justify-around w-full  py-[0.3rem] ">
    <div className="reaction flex ">
        <FontAwesomeIcon  className={" pt-[6px] text-[#35353588]" } icon={faComment}/>
        <p className="number text-[#27272788] pl-[1rem]">{randomCommentShareNumber()}</p>
    </div>
    <div className="reaction flex ">
        <FontAwesomeIcon className="pt-[6px] text-[#38383888]" icon={faRetweet}/>
        <p className="number text-[#27272788] pl-[1rem]">{randomCommentShareNumber()}</p>
    </div>
    <div className="reaction flex ">
        <FontAwesomeIcon onClick={() => setActiveLike(!activeLike)} className={activeLike ? "pt-[6px] text-[#d6212188] cursor-pointer" :"pt-[6px] text-[#3f3f3f88] cursor-pointer"} icon={faHeart}/>
        <p className="number text-[#27272788] pl-[1rem]">{randomLikeNumber() + "k"}</p>
    </div>
    <div className="reaction flex ">
        <FontAwesomeIcon className="pt-[6px] text-[#2c2c2c88]" icon={faArrowUpFromBracket}/>
        
    </div>
    </div>
  )
}

export default CommentReaction