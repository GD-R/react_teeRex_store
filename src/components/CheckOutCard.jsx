import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../features/cartSlice';

const CheckOutCard = (props) => {
 
    const {name , image, price, id} = props
 
     // Redux Dispatch
    const dispatch = useDispatch()

    // Function defined to delete product from cart
    const deleteProduct = (inputId) => {
        dispatch(removeProduct(inputId))
    }

  return (
    <>
      
      <div className=" flex flex-wrap m-2">

    <div className=" bg-black shadow-md rounded-2xl my-1 cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative mb-1">
        <img className="h-28 rounded-2xl w-full object-cover" src={image}/>
        <p onClick={() => deleteProduct(id)} className="absolute right-2 top-2 bg-black rounded-full p-2 cursor-pointer group">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
   <path  strokeLinecap="round" strokeLinejoin="round"   strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
                     01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
 </svg>

        </p>
      </div>
     
        <div className='flex justify-center md:justify-around'>
          <p className= "text-indigo-500 text-xs md:text-sm mb-0">{name}</p>
          <p className=" text-indigo-500 text-xs md:text-sm mt-0"><CurrencyRupeeIcon fontSize='small' />{price}</p>
        </div>
       
     
    </div>

   
  </div>




    </>
  )
}

export default CheckOutCard
