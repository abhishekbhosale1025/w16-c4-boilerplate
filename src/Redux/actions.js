// use axios for api call
import axios from "axios";
import { useDispatch } from "react-redux";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_PRODUCTS_DATA } from "./actionTypes";

export const getDataLoading =()=>({
    type: GET_DATA_LOADING
})

export const getDataSuccess =(payload)=>({
    type: GET_DATA_SUCCESS,
    payload
})

export const getDataError =()=>({
    type: GET_DATA_ERROR
})


async function getProductsData (dispatch) {

   let res = await axios.get(`https://movie-fake-server.herokuapp.com/products`)

   let data = await res.data;

   console.log(data)

   dispatch({
       type:GET_DATA_SUCCESS,
       payload: data

       
   })
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
