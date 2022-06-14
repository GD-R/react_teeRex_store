import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayMsgContext from "./Context/DisplayMsgContext";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

function App() {
 
  // States required to update Snackbar component, Managed using Context API 
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("")
  const [alertSeverity , setAlertSeverity] = useState("success")

  // States to manage search input value
  const [searchValue, setSearchValue] = useState("")


  // Snackbar Native function to close display message
  const handleSnackClose = () => {
    setOpenSnack(false)
    setAlertSeverity("success")
  }

  const allStates = {
    openSnack, 
    setOpenSnack,
    snackMessage,
    setSnackMessage,
    alertSeverity , 
    setAlertSeverity,
    handleSnackClose,
    searchValue, 
    setSearchValue
  }

  return (
    <div>
    <DisplayMsgContext.Provider value={{allStates}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
      </DisplayMsgContext.Provider>
    </div>
  );
}

export default App;
