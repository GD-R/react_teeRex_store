import React, { useContext, useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';
import DisplayMsgContext from '../Context/DisplayMsgContext';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../features/cartSlice';





const ShopingCart = () => {

    // Redux cart State Subscription and Dispatch
    const {cart} = useSelector((state) => state.cart.value)
    const dispatch = useDispatch();
   
    // Sharing Snackbar States using Context API
    const { allStates: {setOpenSnack, setSnackMessage, setSearchValue} } = useContext(DisplayMsgContext)
   
    // States to manage Subtotal amount
    const [subTotal, setSubtotal] = useState(0);

    // Router function to navigate pages
    const navigate = useNavigate()


    // To run when there is change in cart and set subtotal amount
    useEffect(() => {
      const productsPrice = cart.map((product) => (product.price) * product.qty)
      const finalAmount = productsPrice.reduce((previous,current) => previous + current,0);
      setSubtotal(finalAmount);
    }, [cart])


    // Function defined to run after Order is Placed
    const orderPlaced = () => {
        setOpenSnack(true)
        setSnackMessage("Order Successfully Placed")
        dispatch(emptyCart());
        setSearchValue("")

    }

  return (
    <>

    <div className="container w-full flex justify-center flex-col md:flex-row">
     
       
        <table className="md:basis-3/5 lg:basis-2/5 w-full md:w-[50%] lg:w-[40%] mx-auto shadow-inner table-fixed">
          <thead>
            <tr className="bg-black">
              <th className="font-bold text-indigo-500">Product</th>
              <th className="font-bold text-indigo-500">Qty</th>
              <th className="font-bold text-indigo-500">Total Price</th>
              
            </tr>
          </thead>
          <tbody>

            {
                cart.map((product) => <ProductDetails product={product} key={product.id}/>)
            }
             
          </tbody>
        </table>

        <div className='md:basis-2/6 lg:basis-1/3 md:mx-auto'>
         <p className='text-indigo-500 text-center'>Order Summary</p>
         <hr className='text-indigo-500'/>
         <div className='w-full my-4 flex justify-evenly md:justify-between'>
             <p className='text-lg font-bold text-indigo-500'>SubTotal</p>
             <p className='text-lg font-bold text-indigo-500'><CurrencyRupeeIcon/>{subTotal}</p>
         </div>
         <div className='my-6 text-center'>
         <button onClick={orderPlaced} className="bg-indigo-500 text-white px-32 md:px-20 lg:px-32 py-3 rounded-md text-1xl font-medium hover:bg-indigo-700 transition duration-300">Place Order</button>
         </div>
     </div>
        
        
        
        </div>
      

    </>
  )
}

export default ShopingCart
