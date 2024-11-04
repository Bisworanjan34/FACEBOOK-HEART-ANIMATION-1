"use client"
import { faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import './Animation.css'

const Animation = () => {
  let [input,setInput]=useState('')
  let [showname,setShowname]=useState()
    let [like,setLike]=useState(0)
    let heartRef=useRef(null)
    
    let handleChange=(e)=>{
      setInput(e.target.value)
    }
    let submitfun=()=>{
      if(input){
        setShowname(input)
      }

      setInput('')
    }
    
    let clickfun = () => {
      
    heartRef.current.classList.toggle('active');
    console.log("working");
    
    if(like ===0){
        setLike(like+1)
    }
    else{
        setLike(like-1)
    }
        
    };
    let dblfun=()=>{
      heartRef.current.classList.toggle('active');
      console.log("working");
      
      if(like ===0){
          setLike(like+1)
      }
      else{
          setLike(like-1)
      }
    }
  return (
    <div className="mt-8 mx-auto" ref={heartRef}>
       <h1 className='font-black text-cyan-400 uppercase mb-3'>dblclick to show  pic</h1>
         <div className="container border-0 w-72 h-96 flex justify-end items-center gap-1 relative shadow-xl shadow-cyan-500 " onDoubleClick={dblfun} >
            <div className="facebook absolute top-0 font-normal left-0 border-b-2 rounded ">
                <h5 className='name text-sm'>
                welcome-{like?'jay shree ram':showname}
                </h5>
            </div>
            <div className="box text-md  mr-0 h-24 cursor-pointer flex w-10 flex-col items-center">
                <FontAwesomeIcon icon={faUserCircle} className=' user mb-3 ' width={20}/>
                <FontAwesomeIcon icon={faHeart} 
                className='heart-click  mb-2' onClick={clickfun} width={20}/>
                <p className='text-white'>{like?like+'like':like}</p>
            </div>
             
             <div className="heart absolute top-32 left-24 ">
             <FontAwesomeIcon icon={faHeart} width={100} className='heart-show text-6xl'
             />
             </div>
           {
            like?<div>
               <div className="details">
           
              <p>jay shree ram (shree ram)</p>
             </div>
            </div>
            :
            <div className="div">
                <div className="input-box absolute bottom-14 left-10 ">
              <input type="text"  placeholder='enter your name' className='p-1 rounded ps-2 text-blue-600' onChange={handleChange} value={input} />
             </div>
             <div className="btn-div absolute bottom-3  ">
              <button className='btn-click bg-blue-700 rounded-lg text-white text-center h-15 py-2 text-sm after:bg-orange-600' onClick={submitfun}>click-here</button>
             </div>
            </div>
            
           }
             <div className="anim-box "></div>
            
         </div>
        
         
    </div>
  )
}

export default Animation
