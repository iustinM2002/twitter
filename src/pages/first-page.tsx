import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import verifyTweet from '../icons/Twitter_Verified_Badge.svg.png';
// import components
import Profile from "../components/profile";
import AddTweet from '../components/tweets/add-tweet'
import Tweets from "../components/tweets/Tweets";

const FirstPage = (): JSX.Element =>{
    const [tweets,setTweets] = useState([]);
    const [tweet,setTweet] = useState('');
    return(
        <div className="first-page w-[50%] border-x-[0.5px] border-[#b9b9b95d] semi-tall:w-full">
            <div className="first-line flex pl-[1rem]  bg-white w-[50%] z-10">

                <FontAwesomeIcon className="text-[#36a1f8] text-xl my-[2rem]" icon={faArrowLeft}/>
                    <div className="first-row flex flex-col px-[2rem] py-[1rem]">
                    <div className="verift-row flex">
                    <p className="text-xl font-bold">Twitter</p>
                    <img className="w-[1.5rem] h-[1.5rem] m-[5px]" src={verifyTweet} alt="" />

                    </div>
                    <p className="text-[#646464e0]">10.9k Tweets</p>

                    </div>
            </div>

            <Profile />
            <AddTweet tweet = {tweet} setTweet = {setTweet} tweets={tweets} setTweets = {setTweets}/>
            <Tweets tweets={tweets}/>
               
        </div>
    )
}

export default FirstPage;