import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DisplayMsgContext from '../Context/DisplayMsgContext';
import { fetchProducts, filterSearch } from '../features/ProductsSlice';
import './Navbar'

const Navbar = () => {

    // Search Input state from Context api
    const { allStates: {setSearchValue, searchValue} } = useContext(DisplayMsgContext);

    // States to manage total qty in Cart
    const [totalItems , setTotalItems] = useState(0)

     // States to manage SearchBar
	const [hideSearch, setHideSearch] = useState("sr-only");
	const [searchIcon, setSearchIcon] = useState("");

   


     // Router function to navigate pages
	const navigate = useNavigate()
  

     // Redux cart State Subscription and Dispatch
    const {cart} = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
 
  
    // To run when there is change in cart and set qty in Cart
    useEffect(() => {
        if(cart.length === 0) {
            setTotalItems(0)
        }
        else {
            const totalQuantity = cart.map((product) => product.qty)
            const total = totalQuantity.reduce((previous, current) => previous + current, 0);
            setTotalItems(total)
        }
    },[cart])


    // Function to handel search product using search bar
   const handelSearchProduct = (event) => {
       setSearchValue(event.target.value)
       dispatch(filterSearch(event.target.value))
   }


    // Function Defined to hide searchbar when home is clicked
	const handelHomeClick = () => {
		setHideSearch("sr-only");
		setSearchIcon("");
		navigate("/")
        setSearchValue("")
        dispatch(fetchProducts());
	}

    // Function Defined to show searchbar when search is clicked
	const handelSearchClick = () => {
		setHideSearch("");
		setSearchIcon("");

	}
  
    // Function Defined to hide searchbar when Cart is clicked
	const handelCartClick = () => {
		setHideSearch("sr-only");
		setSearchIcon("sr-only");
		navigate("/cart")
	}


  return (
    <>
    

    <div className="w-full max-w-md mx-auto my-4">

        <div className="px-7 bg-[#101820FF] shadow-lg rounded-2xl mb-5">
            <div className="flex">
                <div className="cursor-pointer flex-auto hover:w-full group" onClick={handelHomeClick}>
                    <p  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
                        <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i className="far fa-home text-2xl pt-1"></i><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Home</span>
                        </span>
                    </p>
                </div>

               

                <div className={`cursor-pointer flex-auto hover:w-full group ${searchIcon}`} onClick={handelSearchClick}>
                    <p  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
                        <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i className="far fa-search text-2xl pt-1"></i><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Search</span>
                        </span>
                    </p>
                </div>
                <div className="cursor-pointer flex-auto hover:w-full group" onClick={handelCartClick}>
                    <p  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500">
                        <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                            <i className="fal fa-shopping-cart text-2xl pt-1"></i><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Cart</span>
                        </span>
						<span className="shrink-0 rounded-full bg-black font-mono text-xs font-medium tracking-tight text-white">{totalItems}</span>
                    </p>
					
                </div>
            </div>
        </div>

        
        
       

    </div>


	




<div className={`my-5 w-4/5 md:w-1/2 mx-auto ${hideSearch}`}>

	<form className="flex items-center">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input onChange={handelSearchProduct} value={searchValue} type="text" id="voice-search" className="  text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Products"/>
           
        </div>
       
    </form>


    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>



    </>
  )
}

export default Navbar
