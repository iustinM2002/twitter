import React from "react";
// import  compoents
import Tweet from "./Tweet";
import BotTweets from "./bot-tweets";


const Tweets = ({tweets}:{tweets:string[]}) => {
    return(
        <div className="tweets">
             {tweets.map(tweet => tweet !== '' ? (<Tweet tweet={tweet}/>) : "")}
                <BotTweets/>
        </div>
    )
}

export default Tweets;