import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductItem.css'




const ProductItem = ({nav,id,title,price,desc,imgUrl,childrenComps})=> {
    const ref=useRef()
    const navigate=useNavigate();
    const toggleDesc =(e)=>{
        if(ref.current.style.display){
            ref.current.style.display =''
        }
        else{
            ref.current.style.display ='block'
        }
    }
    
    
    
  return (
    <div data-aos="zoom-in" data-aos-offset="10" data-aos-delay="10" className="product-item">{/*show productDetails when clicked*/}
            <img onClick={()=>{nav?navigate(`/products/details?id=${id}`):console.log('')}} src={imgUrl} alt={title}/>
        <div className="product-details">
            <div onClick={()=>{nav?navigate(`/products/details?id=${id}`):console.log('')}} className="product-title">
                <h1>{title}</h1>
            </div>
            <div onClick={()=>{nav?navigate(`/products/details?id=${id}`):console.log('')}} className="product-price">
                <h2>Price: ₹{price*50}</h2>
            </div>
            <div  className="product-desc">
                <h3 onClick={e=>toggleDesc(e)} id='desc'>Description</h3>
                <p id='Para' ref={ref}>{desc}</p>
            </div>
            {childrenComps}
        </div>
    </div>
  )
}
export default ProductItem;