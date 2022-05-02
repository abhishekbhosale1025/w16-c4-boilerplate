import { bindActionCreators } from "redux";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_PRODUCTS_DATA } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state=initState,action) => {

switch(action.type){

  case GET_DATA_LOADING :
    return {
      ...state,
      isLoading:true ,
      isError:false,
    }

    case GET_DATA_SUCCESS :
    return {
      ...state,
      isLoading:false ,
      isError:false,
      data: action.payload
    }

    case GET_DATA_ERROR :
      return {
        ...state,
        isLoading:false ,
        isError:true,
    
      }

    default:{
      return state ;
    } 
  }

};
export { reducer };
