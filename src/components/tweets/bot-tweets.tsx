import React from "react";
import Tweet from "./Tweet";

const BotTweets = () =>{
   
    const artificalTweets : Array<string> = ['How are you?', "Whatzzzzzzup?" , "I'm afraid for the calendar. Its days are numbered." ,"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along." , "Don't call Andreea  :(" ]
    return(
        <div className="bot-tweets">
            {
                artificalTweets.map(tweet => <Tweet tweet = {tweet}/>)
            }

        </div>
    )
}

export default BotTweets