import React from 'react'

function Home(props) {
  console.log("props",props);
  return (
    <div>
    
    <h1>Home component</h1>
    <div className='cart-wrapper'>
     <div className='img-wrapper item' >
     <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="server Problems"/>
     </div>

     <div className='text-wrapper item' >
     <span>
               I-phone
     </span>
     <span>
       Prize : $1000.00 
     </span>
     </div>

     <div className='btn-wrapper item' >
     <button onClick={()=>
      props.addToCartHandler({prize:1000,name:'i-phone 11'})}
     
     >Add to cart</button>
<div className='remove-cart'>
     <button onClick={()=>
      props.removeToCartHandler()}
     
     >Removed to cart</button>
     </div>
     </div>

    </div>
    </div>
  )
}

export default Home
