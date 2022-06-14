import React from 'react'
import ShopingCart from '../components/ShopingCart'
import { useSelector } from 'react-redux';
import SnackBar from '../components/SnackBar';


const Cart = () => {
 
  // Redux cart State Subscription
  const {cart} = useSelector((state) => state.cart.value)

  return (
    <>
     {cart.length > 0 ?  <ShopingCart/> : <p className='text-indigo-500 text-center'>Cart is Empty add items</p> }
     <SnackBar/>
    </>
  )
}

export default Cart
