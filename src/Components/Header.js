import React from 'react'

function Header(props) {
  console.log("home",props.data);
  return (
    <div>
    <div className='add-to-cart'>
    <span className='cart-count'>{props.data.length}</span>
    <img src='https://png.pngtree.com/element_our/md/20180620/md_5b29c1dab1cf4.jpg' alt='server issue'/>
    </div>
    
    </div>
  )
}

export default Header;

