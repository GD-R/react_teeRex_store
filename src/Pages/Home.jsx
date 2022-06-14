import React, { useContext, useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import Filter from "../components/Filter";
import {useWindowSize} from "@react-hook/window-size";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/ProductsSlice";
import CircularProgress from "@mui/material/CircularProgress";
import SnackBar from "../components/SnackBar";
import DisplayMsgContext from "../Context/DisplayMsgContext";


const Home = () => {


 // Search Input state from Context api
 const { allStates: {searchValue} } = useContext(DisplayMsgContext);

  
  // React Custom Hook
  const [width, height] = useWindowSize();

  // Native Attributes for Drawer Components
  const [direction, setDirection] = useState("right");
  const [draw, setDraw] = useState(false);

  // Redux product api State Subscription and Dispatch
  const { data: products, status, filterMatch } = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  //  Close Drawer
  const handelDrawer = () => {
    setDraw((previous) => !previous);
  };
  
  // Function defined to return Card Component and display Products
  const displayProducts = () => {
    return products.map((product) => {
      return <Card product={product} key={product.id}/>;
    });
  };

  // Fetch data from API after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducts());
    }, 3000);
  }, []);


  // Update the Drawer direction for responsiveness
  useEffect(() => {
    if (width <= 640) {
      console.log("here");
      setDirection("top");
    } else {
      setDirection("right");
    }
  }, [width]);



  return (
    <div>
      <div
        onClick={handelDrawer}
        className="cursor-pointer inline-flex  mx-32 md:mx-24 lg:mx-16 bg-black px-4 py-2"
      >
        <p className="text-indigo-500 text-lg font-bold">Filter</p>
        <FilterAltSharpIcon fontSize="medium" sx={{ color: "#4B0082" }} />
      </div>

      {status === "loading" ? (
        <div className="grid justify-items-center">
          <CircularProgress color="secondary" />
        </div>
      ) : null}


     {searchValue.length > 1 && products.length < 1?
         <p className="text-indigo-500 text-center">No Items, search for different product</p> : null}

     {filterMatch === false && products.length < 1?  <p className="text-indigo-500 text-center">No Items, update Filter</p> : null}
    

      <div className="displayCards grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-5">
        {status === "idle" ? displayProducts() : null}
        {status === "error" ? <h1 className="text-white text-center">Error Please try later</h1> : null}
      </div>


      {/* MUI Drawer Component used for Filter Display */}
      <Drawer
        onBackdropClick={handelDrawer}
        anchor={direction}
        hideBackdrop={false}
        open={draw}
      >
        <Filter handelDrawer={handelDrawer} />
      </Drawer>
      
      {/* MUI Component used to display message */}
      <SnackBar/>

    </div>
  );
};

export default Home;
