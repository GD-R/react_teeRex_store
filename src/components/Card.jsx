import React, { useContext } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty } from '../features/cartSlice';
import DisplayMsgContext from '../Context/DisplayMsgContext';

const Card = (props) => {

  const {product} = props

    // Sharing Snackbar States using Context API
  const { allStates: {setOpenSnack, setSnackMessage, setAlertSeverity} } = useContext(DisplayMsgContext)
 
// Redux cart State Subscription and Dispatch
 const {cart} = useSelector((state) => state.cart.value)
 const dispatch = useDispatch();


// Function defined to add product/qty to cart
 const addProduct = (inputData) => {

   const cartData = {
    id : inputData.id,
    imageURL : inputData.imageURL,
    name : inputData.name,
    type : inputData.type,
    price: inputData.price,
    color: inputData.color,
    gender : inputData.gender,
    available: inputData.quantity,
    qty: 1
   }

   const cartProduct = cart.find((product) => product.id === cartData.id)

   if(cartProduct) {
     if(cartProduct.qty < cartProduct.available) {
         setOpenSnack(true)
         setSnackMessage("Item already present updated qty")
         dispatch(increaseQty(cartProduct))
     }
     else {
         setAlertSeverity("warning")
         setOpenSnack(true)
         setSnackMessage(`Error - Only ${cartProduct.available} quantity left`)
     }
   }
   else {
    setOpenSnack(true)
    setSnackMessage("Item added to Cart")
    dispatch(addToCart(cartData))
   }

  
 }

  return (
    <>
      
    

  <div className=" flex flex-wrap m-3">

    <div className=" bg-black shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src={product.imageURL}/>
        <p onClick={()  => addProduct(product)} className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
          <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 group-hover:opacity-50 opacity-70" fill="yellow" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-indigo-500 mb-0">{product.name}</p>
          <p className="text-md text-indigo-500 mt-0"><CurrencyRupeeIcon/>{product.price}</p>
        </div>
       
      </div>
    </div>

   
  </div>



    </>
  )
}

export default Card
