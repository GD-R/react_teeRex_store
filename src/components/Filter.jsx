import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { applyFilter } from '../features/ProductsSlice';

const Filter = (props) => {

    const {handelDrawer} = props

    // Using Custom Hook - useForm to manage filter inputs
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch()

    // Function Defined to run after applying filter
    const onSubmit = (inputData) => {
        handelDrawer();
      
        const price =  Object.values(inputData).splice(0,3).filter((item) => item? true : false).map((item) => item.split("-").map(Number))
        const gender =  Object.values(inputData).splice(3,2).filter((item) => item? true : false)
        const type =  Object.values(inputData).splice(5,3).filter((item) => item? true : false)
        const color =  Object.values(inputData).splice(8,9).filter((item) => item? true : false)
       
        const userSelectedFilter = Object.assign({},
          price.length > 0 ? {price} : null,
          gender.length > 0 ? {gender} : null,
          type.length > 0 ? {type} : null,
          color.length > 0 ? {color} : null
        )
       
        
        dispatch(applyFilter(userSelectedFilter))

    };


  return (
    <>


<div
  
  
  className="bg-black md:h-screen h-1/2 md:overflow-auto"
>
  {/* <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
    <span className="text-sm font-medium">
      Toggle Filters
    </span>

    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </summary> */}

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex"
  >  
  <div className='flexOne'>
    <fieldset>
      <legend className="block w-full px-5 py-3 text-xs font-medium text-indigo-500">
        PRICE [Rs]
      </legend>

      <div className="px-5 py-2 space-y-2">
        <div className="flex items-center">
          <input
            {...register("price1")}
            type="checkbox"
            value="0-250"
            className="w-5 h-5 rounded"
          />

          <label
            htmlFor="price1"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            0-250
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("price2")}
            type="checkbox"
            value="300-400"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="price2"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            300-400
          </label>
        </div>

        <div className="flex items-center">
          <input
             {...register("price3")}
            type="checkbox"
            value="400-1000"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="price3"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            400-1000
          </label>
        </div>

        
      </div>
    </fieldset>

    <div>
      <fieldset>
        <legend className="block w-full px-5 py-3 text-xs font-medium text-indigo-500">
          Gender
        </legend>

        <div className="px-5 py-2 space-y-2">
          <div className="flex items-center">
            <input
               {...register("gender1")}
              type="checkbox"
              value="Men"
              className="w-5 h-5  rounded"
            />

            <label
              htmlFor="gender1"
              className="ml-3 text-sm font-medium text-indigo-500"
            >
              Men
            </label>
          </div>

          <div className="flex items-center">
            <input
              {...register("gender2")}
              type="checkbox"
              value="Women"
              className="w-5 h-5  rounded"
            />

            <label
              htmlFor="gender2"
              className="ml-3 text-sm font-medium text-indigo-500"
            >
              Women
            </label>
          </div>

         

         

         
        </div>
      </fieldset>
    </div>
    </div>
    <div className='flexTwo'>

    <div>
    <fieldset>
      <legend className="block w-full px-5 py-3 text-xs font-medium text-indigo-500">
        Type
      </legend>

      <div className="px-5 py-2 space-y-2">
        <div className="flex items-center">
          <input
           {...register("type1")}
            type="checkbox"
            value="Polo"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="type1"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Polo
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("type2")}
            type="checkbox"
            value="Hoodie"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="type2"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Hoodie
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("type3")}
            type="checkbox"
            value="Basic"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="type3"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Basic
          </label>
        </div>

      </div>
    </fieldset>
    </div>

    <div>
    <fieldset>
      <legend className="block w-full px-5 py-3 text-xs font-medium text-indigo-500">
        Color
      </legend>

      <div className="px-5 py-2 space-y-2">
        <div className="flex items-center">
          <input
            {...register("color1")}
            type="checkbox"
            value="Black"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color1"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Black
          </label>
        </div>

        <div className="flex items-center">
          <input
          {...register("color2")}
            type="checkbox"
            value="Blue"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color2"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Blue
          </label>
        </div>

        <div className="flex items-center">
          <input
             {...register("color3")}
            type="checkbox"
            value="Pink"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color3"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Pink
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("color4")}
            type="checkbox"
            value="Green"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color4"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Green
          </label>
        </div>

        <div className="flex items-center">
          <input
             {...register("color5")}
            type="checkbox"
            value="Red"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color5"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Red
          </label>
        </div>

        <div className="flex items-center">
          <input
           {...register("color6")}
            type="checkbox"
            value="Grey"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color6"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Grey
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("color7")}
            type="checkbox"
            value="Purple"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color7"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Purple
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("color8")}
            type="checkbox"
            value="White"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color8"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            White
          </label>
        </div>

        <div className="flex items-center">
          <input
            {...register("color9")}
            type="checkbox"
            value="Yellow"
            className="w-5 h-5  rounded"
          />

          <label
            htmlFor="color9"
            className="ml-3 text-sm font-medium text-indigo-500"
          >
            Yellow
          </label>
        </div>

        
      </div>
    </fieldset>
    </div>
    
</div>

    <div className="flex flex-col justify-center items-end gap-5 px-5 py-3 border-t border-gray-200">
      <button
        name="reset"
        type="reset"
        className="text-xs font-medium text-indigo-500 underline rounded"
      >
        Reset All
      </button>

      <button type='submit' className=" cursor-pointer relative inline-block px-1 py-1 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring">
  <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

  <span className="relative text-sm font-medium text-indigo-700 transition-colors group-hover:text-black">
    Apply Filter
  </span>
</button>
    </div>
  </form>
</div>


    </>
  )
}

export default Filter
