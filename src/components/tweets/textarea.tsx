import React from 'react'

const Textarea = ({tweet,setTweet}:{tweet:any,setTweet:any}) => {
    const updateTweetHandler = (e : any) =>{
        e.preventDefault();
        setTweet(e.target.value);
      
    }
   
  return (
    <div className='w-full'>
         <textarea onChange={(e) => updateTweetHandler(e)} value={tweet} defaultValue='' className="resize-none border-[0.5px] border-[#9e9e9eb2] mx-[2rem] rounded-[1rem] min-h-[5rem] w-[80%] " placeholder="Type something..." name="" id="" cols={20} rows={4}></textarea>
    </div>
  )
}

export default Textarea