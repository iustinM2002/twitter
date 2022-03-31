import React,{useState} from 'react'
import { useQuery } from 'react-query';
import CommentReaction from './comment-reaction';

const randomUser = async () =>{
    
    const response = await fetch('https://randomuser.me/api/');
    const result = await response.json();
    return result;
}
  

const CommentBbot = () => {
    
    const artificalComments : Array<string> = ['How are you?', "Whatzzzzzzup?" , "I'm afraid for the calendar. Its days are numbered." ,"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along." , "Don't call Andreea  :(" ,"All the leaves are brown","And the sky is grey","I've been for a walk","On a winter's day","I'd be safe and warm","If I was in L.A."]
    const randomCommentNumber = () =>{
        return Math.floor(Math.random() * 11)
    }
    const array = [1,2,3,4]
    const {data,isLoading,isError} = useQuery('user', randomUser);
    if(isLoading){
        return <div>...Loading</div>
    }
    if(isError){
        return <div>...isError</div>
    }

    

   
  return (
    <div className="tweet  border-t-[1px] pb-[1rem] border-[#bdbdbd8e] mt-[1rem]">
            <div className="tweet-details w-full flex flex-col">
            <div className="tweet-zone py-[1rem] w-[100%] flex">
            <div className="image mx-[1rem]">
                <img src={data.results[0].picture.medium} className="w-[3.2rem] rounded-full" alt="" />
            </div>
            <div className="user-input">
                <div className="name flex">
                    <p className="font-bold">{data.results[0].name.first + " " + data.results[0].name.last}</p>
                   
                    <p className="text-[#2c2c2ca8] pl-[0.5rem]">{`@${data.results[0].name.first.toLowerCase()}`}</p>
                </div>
            <p>{artificalComments[randomCommentNumber()]}</p>
            </div>
            </div>
            <div className="comments w-full">

            </div>
            </div>
           <CommentReaction/>
            
        </div>)
  
}

export default CommentBbot