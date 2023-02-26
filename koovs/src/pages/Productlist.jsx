import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LargeWithAppLinksAndSocial from '../components/Footer'
import Navbar from "../components/Navbar"
import Products from '../components/Products'

import { useState } from 'react'
const Container=styled.div`

`
const Title=styled.h1`
margin:20px;
font-size:30px
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
font-size:20px;
font-weight:600px;

`
const Filter=styled.div`
margin:20px`
const Filtertext=styled.span`
font-size:20px;
font-weight:600px;
margin-right:20px;
`
const Select=styled.select`
padding:10px;
margin-right:20px;



`
const Option=styled.option``
export default function Productlist() {

const location=useLocation()
const cat=location.pathname.split("/")[2]
const [filter, setFilter] = useState({})
const [sort, setSort] = useState("BestSelling")
const handleFilters=(e)=>{
const value=e.target.value;
setFilter({
...filter,
[e.target.name]:value


})

}



  return (
    <Container>
        
  <Navbar />
  <Title>{cat}</Title>
<FilterContainer>
<Filter><Filtertext/>Filter 
<Select name="color" onChange={handleFilters}>
    <Option disabled >Color</Option>
    <Option>white</Option>
    <Option>black</Option>
    <Option>red</Option>
    <Option>blue</Option>
    <Option>green</Option>
    <Option>multicolor</Option>



</Select>

<Select name="size" onChange={handleFilters}>
    <Option disabled >Size</Option>
    <Option>S</Option>
    <Option>L</Option>
    <Option>M</Option>
    <Option>Xl</Option>
    <Option>XXL</Option>
    <Option>XXXl</Option>

</Select>
</Filter>

<Filter>Sort   
<Select onChange={e=>setSort(e.target.value)}>
    <Option value="newest">Newest</Option>
    <Option  value="asc">Price, low to high</Option>
    <Option value="desc">Price, high to low</Option>
    <Option value="asc2" >Alphabetically, A-Z</Option>
    <Option value="desc2">Alphabetically, Z-A</Option>
    <Option>Featured</Option>

</Select>




</Filter>

</FilterContainer>

<Products cat={cat} filter={filter} sort={sort}/>


<LargeWithAppLinksAndSocial/>
    </Container>
  )
}
