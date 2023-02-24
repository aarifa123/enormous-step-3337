import React from 'react'
import styled from 'styled-components'
import LargeWithAppLinksAndSocial from '../components/Footer'
import Navbar from "../components/Navbar"
import Products from '../components/Products'


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
  return (
    <Container>
        
  <Navbar />
  <Title>Dresses</Title>
<FilterContainer>
<Filter><Filtertext/>Filter 
<Select>
    <Option disabled selected>Color</Option>
    <Option>White</Option>
    <Option>Black</Option>
    <Option>Red</Option>
    <Option>Blue</Option>
    <Option>Gray</Option>

</Select>

<Select>
    <Option disabled selected>Size</Option>
    <Option>S</Option>
    <Option>L</Option>
    <Option>Xl</Option>
    <Option>XXL</Option>
    <Option>XXXl</Option>

</Select>
</Filter>

<Filter>Sort   
<Select>
    <Option disabled selected>Best Selling</Option>
    <Option>Price, low to high</Option>
    <Option>Price, high to low</Option>
    <Option>Alphabetically, A-Z</Option>
    <Option>Alphabetically, Z-AL</Option>
    <Option>Featured</Option>

</Select>




</Filter>

</FilterContainer>

<Products/>


<LargeWithAppLinksAndSocial/>
    </Container>
  )
}
