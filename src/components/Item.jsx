import React from 'react'


const Item = ({name}) => {

    
    
  return (
   <>
   {name.map((tem,index) => (
    <div className="main-div" key={index}>
        <div className="p1-div">
            <p>{tem.p2}</p>
        </div>
        
        <div className="p2-div">
            <p>{tem.p1}</p>
        </div>
        
        <button type="button" class="btn btn-danger" id="bttn">Delete</button>
    </div>
    
    ))} 
   </>
  )
}

export default Item
