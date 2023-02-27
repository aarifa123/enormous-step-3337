import React, { useState,useEffect} from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import Singleproduct from './Singleproduct'
import axios from 'axios';

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between

`
export default function Products({cat,filters,sort}) {
console.log(cat,filters,sort)
const[products,setProducts]=useState([])

const[filteredProducts,setFilteredProducts]=useState([])



useEffect(() => {
  const getProducts=async ()=>{
    try{
const res=await axios.get(cat? `http://localhost:5000/api/products?category=${cat}`:"http://localhost:5000/api/products")
setProducts(res.data)
console.log(res)
    }catch(err){

    }
  };
  getProducts()
 
}, [cat])

useEffect(()=>{

cat && setFilteredProducts(

  products.filter(item=>Object.entries(filters).every(([key,value])=>
  item[key].includes(value)
  
  ))
)




},[ products,cat,filters])

useEffect(() => {
  let sortedProducts = [...filteredProducts]; // create a copy of the filtered products array

  if (sort === "newest") {
    sortedProducts.sort((a, b) => a.createdAt - b.createdAt);
  } else if (sort === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  

  setFilteredProducts(sortedProducts);
  console.log(sortedProducts) // update the state with the sorted array
}, [sort]);



return (
  <Container>
    { 
      cat ?
        filteredProducts.map((item) => (
          <Singleproduct item={item} key={item.id}/>
        ))
        :
        products
          .slice(0,8)
          .map((item) => (
            <Singleproduct item={item} key={item.id}/>
          ))
    }
  </Container>
);

  }