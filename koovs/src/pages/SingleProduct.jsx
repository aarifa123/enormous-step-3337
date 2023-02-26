import styled from "styled-components"
import LargeWithAppLinksAndSocial from '../components/Footer'
import Navbar from "../components/Navbar"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React, { useState } from "react";
const Container=styled.div`
justify:left;
margin:20px;

`
const Wrapper=styled.div`
padding:50px;
display:flex;
object-fit:cover;
`
const ImgContainer=styled.div`
flex:1;

`
const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
text-align:left
`
const Title=styled.h1`
font-size:30px;
font-weight:400;
margin-bottom:20px;

`
const Desc=styled.p`
margin:20px 0px;
`
const People=styled.p`
margin-bottom:20px

`
const Price=styled.span`
font-weight:400;
font-size:20px
`
const FilterContainer=styled.div``

const Filter=styled.div`
display:flex;
margin-bottom:20px

`
const SelectedText = styled.h2`
  
  font-weight:bold;
  
`;

const Tabcontainer=styled.div``
 const Input=styled.div`

 display:flex;
 justify-content:center;
 align-items:center;
 border:2px solid black ;
 width:60px;
 height:50px;
//  margin:20px;
 border-radius:10px;
 &:hover{
  background-color:black;
  color:white;

 }
 `

 const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  // margin-bottom: 20px;
  border:2px solid black;
  height:50px;
  border-radius:5px;
  margin-bottom:20px
`;

const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  
`;

const QuantityInput = styled.input`
  width: 60px;
  height: 30px;
  text-align: center;
  margin: 0 10px;
`;
const AddToCartButton = styled.button`
  padding: 10px 20px;
  width:70%;
  color: black;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid gray;
  height:50px;
  border-radius:5px;
  &:hover{

    background-color: black;
color:white;

  }
`;
const Buynowbutton = styled.button`

padding: 10px 20px;
width:100%;
color: black;
border: 2px solid gray;
font-size: 1.2rem;
cursor: pointer;

height:50px;
border-radius:5px;

  background-color: black;
color:white;


`
 
export default function SingleProduct() {


  const [selectedInput, setSelectedInput] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const handleInputClick = (text) => {
    setSelectedInput(text);
  
  };


  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log(`Added ${quantity} items to cart`);
  };
  return (
    <div>
<Container>
<Navbar/>
<Wrapper>

  <ImgContainer>
  <Image src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg">

  </Image>
  
  </ImgContainer>
  <InfoContainer>
    <Title>
flower
    </Title>
   
    <Price>
      Rs.3000
      
    </Price>
    <People>Tax included.</People>
    
    <People><RemoveRedEyeIcon/>22 people are viewing this right now</People>
    <FilterContainer>
    {/* {selectedInput && (
        <SelectedText fontWeight={"500px"}>SIZE: {selectedInput}</SelectedText>
      )} */}
       <SelectedText >SIZE: {selectedInput}</SelectedText>
      <Filter>
      <Input onClick={() => handleInputClick("S")}>S</Input>
      <Input onClick={() => handleInputClick("M")}> M</Input>
      <Input onClick={() => handleInputClick("XL")}>XL</Input>
      <Input onClick={() => handleInputClick("XXL")}>XXL</Input>
    
      </Filter>
     
    </FilterContainer>
    <SelectedText>

Quantity
</SelectedText>
<div style={{display:"flex",justifyContent:"space-between" ,marginBottom:"10px"}}>

<QuantityContainer>
        <QuantityButton onClick={handleDecrease}>-</QuantityButton>
        <QuantityInput type="number" value={quantity} readOnly />
        <QuantityButton onClick={handleIncrease}>+</QuantityButton>
      </QuantityContainer>
      <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>

</div>
<Buynowbutton>BUY IT NOW</Buynowbutton>
  </InfoContainer>




   




  
</Wrapper>


<Tabcontainer >
  
<Tabs w={"60%"} marginLeft={"250px"} marginRight={"80px"}>
  <TabList textAlign={"center"} display={"flex"} justifyContent={"center"}  >
    <Tab fontWeight={"600px"}>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Desc>
     Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
 
    </Desc>

    </TabPanel>
    <TabPanel>
    <Desc>
     Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
 ∙ 
    </Desc>

    </TabPanel>
    <TabPanel>
    <Desc>
     Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
 ∙ 
    </Desc>

    </TabPanel>
  </TabPanels>
</Tabs>
  </Tabcontainer>
<LargeWithAppLinksAndSocial/>
    
</Container>


    </div>
  )
}
