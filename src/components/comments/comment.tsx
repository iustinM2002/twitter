import React,{useState} from 'react'
// import components
import Comm from './comm';
import CommentBbot from './comment-bot';



const Comment = () => {
    const [comment,setComment] = useState<string>('');
    const [comments,setComments] = useState<string[]>([]);
    
    const addCommentHandler = (e:any) =>{
        setComment(e.target.value)
        
    }
    const submitCommentHandler = (e:any) =>{
        e.preventDefault();
        if(comments.length > 0){
            setComments([...comments,comment])
        }else{
            setComments([comment])
        }
        setComment('')
        

    }
    let randomArray = []
  
  return (
    <div className='border-t-[1px] border-[#bdbdbd8e]'>
       
           <input onChange={addCommentHandler}  defaultValue='' value={comment} className="resize-none border-[0.5px] border-[#9e9e9eb2] m-[2rem] py-[0.5rem] rounded-[0.5rem]  w-[90%] "  ></input>
           <div className="button-comment w-full flex justify-end">
           <button onClick={(e) => submitCommentHandler(e)} className="text-white bg-[#36a1f8] px-[0.5rem] py-[0.3rem]  mx-[2rem] rounded-[0.5rem]" type="submit">Add Comment</button>
           </div>
           {comments.map(comm => <Comm comm={comm}/>)}
         <CommentBbot/>
           
    </div>
  )
}

export default Comment