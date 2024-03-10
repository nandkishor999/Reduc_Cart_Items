import React from 'react'

export default function Home(props) {
      //  console.log("Home" ,props)
    return (
    <div className='kk'>
    
    
      <div className='cart-wrapper'>
        <div className='img item' >
         <img src="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg" alt="product" />
        </div>
        <div>
            <span> Iphone </span>
            <span> Price: $1000.00 </span>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{

                props.AddtoCartHandler({price:1000, name: 'Iphone'})
            }} > Add to cart</button>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{
                props.RemovefromCartHandler()
            }} > Remove to cart</button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img item' >
         <img src="https://m.media-amazon.com/images/I/51JaSbauK3L._SX300_SY300_QL70_FMwebp_.jpg" alt="product" />
        </div>
        <div>
            <span> Samsung </span>
            <span> Price: $250.00 </span>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{

                props.AddtoCartHandler({price:1000, name: 'Iphone'})
            }} > Add to cart</button>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{
                props.RemovefromCartHandler()
            }} > Remove to cart</button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img item' >
         <img src="https://m.media-amazon.com/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg" alt="product" />
        </div>
        <div>
            <span> Xiomi </span>
            <span> Price: $175.00 </span>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{

                props.AddtoCartHandler({price:1000, name: 'Iphone'})
            }} > Add to cart</button>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{
                props.RemovefromCartHandler()
            }} > Remove to cart</button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img item' >
         <img src="https://m.media-amazon.com/images/I/41Pwod9tBHL._SX300_SY300_QL70_FMwebp_.jpg" alt="product" />
        </div>
        <div>
            <span> TEchno </span>
            <span> Price: $220.00 </span>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{

                props.AddtoCartHandler({price:1000, name: 'Iphone'})
            }} > Add to cart</button>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{
                props.RemovefromCartHandler()
            }} > Remove to cart</button>
        </div>
      </div>
      <div className='cart-wrapper'>
        <div className='img item' >
         <img src="https://m.media-amazon.com/images/I/412CUiXkkoL._SX300_SY300_QL70_FMwebp_.jpg" alt="product" />
        </div>
        <div>
            <span> Oppo </span>
            <span> Price: $550.00 </span>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{

                props.AddtoCartHandler({price:1000, name: 'Iphone'})
            }} > Add to cart</button>
        </div>
        <div>
            <button className='cartbtn' onClick={()=>{
                props.RemovefromCartHandler()
            }} > Remove to cart</button>
        </div>
      </div>
    
    </div>
  )
}
