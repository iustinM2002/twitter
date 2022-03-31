import React from "react";
import Textarea from "./textarea";


const AddTweet = ({tweet,setTweet,tweets,setTweets}:{tweet:string,setTweet:any,tweets:string[],setTweets:any}) =>{

    const setTweetsHandler = (e:any) => {
        
        if(tweets.length > 0 ){
            setTweets([...tweets,tweet])
        }else{
            setTweets([tweet]);
            
        }
     
        setTweet("");
        e.preventDefault();

    }
    return(
        <div className="add-tweets border-b-[0.5px]">
            <form action="submit" className="add-tweet flex flex-col">
                <label className="p-[1rem]" htmlFor="">What are you thinking?</label>
               <Textarea tweet={tweet} setTweet={setTweet}></Textarea>
                <div className="tweet-button w-full flex justify-end">
                <button onClick={setTweetsHandler} className="text-white bg-[#36a1f8] px-[0.5rem] py-[0.3rem] my-[1rem] mx-[2rem] rounded-[0.5rem]" type="submit">Add Tweet</button>

                </div>
            </form> 

        </div>

    )
}

export default AddTweet;