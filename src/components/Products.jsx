import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProductsData } from "../Redux/actions";
import { Select } from "./Styled";
export const Products = () => {

  const {isLoading,isError,data} = useSelector((state)=>state.data)

  const dispatch = useDispatch()
  
  const Grid = styled.div`

  display:grid ;
  width:100%;
  grid-template-columns :1fr 1fr 1fr;
  border:1px solid red ;
  `
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
     getProductsData(dispatch)
 
    
  },[dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}

        {data.map((el)=>(
          <>

          <div >

              <img src={el.image}/>
              <h1>{el.brand}</h1>
            <h1>{el.title}</h1>
            <h1>{el.price}</h1>

          </div>
         
          
          </>
        ))}
      </Grid>
    </>
  );
};
