import React, { useContext, useEffect, useState } from 'react'
import CheckOutCard from './CheckOutCard'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeProduct } from '../features/cartSlice';
import DisplayMsgContext from '../Context/DisplayMsgContext';

const ProductDetails = (props) => {

  const {product} = props;

  // States to manage product totalPrice amount
  const [totalPrice, setTotalPrice] = useState(0);


  // Sharing Snackbar States using Context API
    const { allStates: {setOpenSnack, setSnackMessage, setAlertSeverity} } = useContext(DisplayMsgContext)
    
  // Redux Dispatch
    const dispatch = useDispatch()
  
  // To run when there is change in product qty and set subtotal amount
    useEffect(() => {
      const calculateTotalPrice = (product.price) * product.qty;
      setTotalPrice(calculateTotalPrice);
    },[product])

  // Function defined to increase product qty
    const handelIncreaseQty = (inputData) => {
        if(inputData.qty < inputData.available){
            dispatch(increaseQty(inputData))
        }
        else {
          setAlertSeverity("warning")
          setOpenSnack(true)
          setSnackMessage(`Error - Only ${inputData.available} quantity left`)
        }
    }
 

     // Function defined to decrease product qty
    const handelDecreaseQty = (inputData) => {
         if(inputData.qty === 1) {
           dispatch(removeProduct(inputData.id))
         }
         else {
          dispatch(decreaseQty(inputData))
         }
    }

  return (
    <>
      
      <tr>
              <td>
                <div className="flex justify-center">
                 <CheckOutCard name={product.name}  id={product.id} image={product.imageURL} price={product.price} />
                </div>
              </td>
              
              <td className="whitespace-nowrap">
                <div className='ml-3 flex justify-center'>
                  <button onClick={() => handelDecreaseQty(product)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                 <p className='text-indigo-500 px-2 py-2'>{product.qty}</p>
                  <button onClick={() => handelIncreaseQty(product)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="text-center text-indigo-500 whitespace-nowrap"><CurrencyRupeeIcon/>{totalPrice}</td>
             
            </tr>

    </>
  )
}

export default ProductDetails
