// import styled from "styled-components"
// import LargeWithAppLinksAndSocial from '../components/Footer'
// import Navbar from "../components/Navbar"
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import React, { useState,useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios"
// import {publicRequest} from "../requestMethods"
// const Container=styled.div`
// justify:left;
// margin:20px;

// `
// const Wrapper=styled.div`
// padding:50px;
// display:flex;
// object-fit:cover;
// `
// const ImgContainer=styled.div`
// flex:1;

// `
// const Image=styled.img`
// width:100%;
// height:90vh;
// object-fit:cover;
// `
// const InfoContainer=styled.div`
// flex:1;
// padding:0px 50px;
// text-align:left
// `
// const Title=styled.h1`
// font-size:30px;
// font-weight:400;
// margin-bottom:20px;

// `
// const Desc=styled.p`
// margin:20px 0px;
// `
// const People=styled.p`
// margin-bottom:20px

// `
// const Price=styled.span`
// font-weight:400;
// font-size:20px
// `
// const FilterContainer=styled.div``

// const Filter=styled.div`
// display:flex;
// margin-bottom:20px

// `
// const SelectedText = styled.h2`
  
//   font-weight:bold;
  
// `;

// const Tabcontainer=styled.div``
//  const Input=styled.div`

//  display:flex;
//  justify-content:center;
//  align-items:center;
//  border:2px solid black ;
//  width:60px;
//  height:50px;
// //  margin:20px;
//  border-radius:10px;
//  &:hover{
//   background-color:black;
//   color:white;

//  }
//  `

//  const QuantityContainer = styled.div`
//   display: flex;
//   align-items: center;
//   // margin-bottom: 20px;
//   border:2px solid black;
//   height:50px;
//   border-radius:5px;
//   margin-bottom:20px
// `;

// const QuantityButton = styled.button`
//   background-color: transparent;
//   border: none;
//   padding: 5px;
//   font-size: 1.2rem;
//   cursor: pointer;
//   outline: none;
  
// `;

// const QuantityInput = styled.input`
//   width: 60px;
//   height: 30px;
//   text-align: center;
//   margin: 0 10px;
// `;
// const AddToCartButton = styled.button`
//   padding: 10px 20px;
//   width:70%;
//   color: black;
//   border: none;
//   font-size: 1.2rem;
//   cursor: pointer;
//   border: 2px solid gray;
//   height:50px;
//   border-radius:5px;
//   &:hover{

//     background-color: black;
// color:white;

//   }
// `;
// const Buynowbutton = styled.button`

// padding: 10px 20px;
// width:100%;
// color: black;
// border: 2px solid gray;
// font-size: 1.2rem;
// cursor: pointer;

// height:50px;
// border-radius:5px;

//   background-color: black;
// color:white;


// `
 
// export default function SingleProduct() {

// const location=useLocation()
// const id=location.pathname.split("/")[2]

// const [product,setProduct]=useState({})


// useEffect(() => {
//   const getProduct = async () => {
//     try {
//       // const res = await publicRequest.get("/products/find/" + id);
//       // setProduct(res.data);

//       // const res=  await axios.get( "http://localhost:5000/api/products/find/" + id);
//       // console.log(res.data); // Log the updated product data
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   getProduct();
// }, [id]);


//   const [selectedInput, setSelectedInput] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const handleInputClick = (text) => {
//     setSelectedInput(text);
  
//   };


//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     // Add to cart logic goes here
//     console.log(`Added ${quantity} items to cart`);
//   };
//   return (
//     <div>
// <Container>
// <Navbar/>
// <Wrapper>

//   <ImgContainer>
//   <Image src={product.img} alt="product image">

//   </Image>
  
//   </ImgContainer>
//   <InfoContainer>
//     <Title>
// {product.title}
//     </Title>
   
//     <Price>
//     {product.price}
      
//     </Price>
//     <People>Tax included.</People>
    
//     <People><RemoveRedEyeIcon/>22 people are viewing this right now</People>
//     <FilterContainer>
//     <Filter>
// <SelectedText>color</SelectedText>
    
// {product.color.map((c)=>{

// })}

   

//     </Filter>
//     {/* {selectedInput && (
//         <SelectedText fontWeight={"500px"}>SIZE: {selectedInput}</SelectedText>
//       )} */}
//        <SelectedText >SIZE: {selectedInput}</SelectedText>
//       <Filter>
//       <Input onClick={() => handleInputClick("S")}>S</Input>
//       <Input onClick={() => handleInputClick("M")}> M</Input>
//       <Input onClick={() => handleInputClick("XL")}>XL</Input>
//       <Input onClick={() => handleInputClick("XXL")}>XXL</Input>
    
//       </Filter>
     
//     </FilterContainer>
//     <SelectedText>

// Quantity
// </SelectedText>
// <div style={{display:"flex",justifyContent:"space-between" ,marginBottom:"10px"}}>

// <QuantityContainer>
//         <QuantityButton onClick={handleDecrease}>-</QuantityButton>
//         <QuantityInput type="number" value={quantity} readOnly />
//         <QuantityButton onClick={handleIncrease}>+</QuantityButton>
//       </QuantityContainer>
//       <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>

// </div>
// <Buynowbutton>BUY IT NOW</Buynowbutton>
//   </InfoContainer>




   




  
// </Wrapper>


// <Tabcontainer >
  
// <Tabs w={"60%"} marginLeft={"250px"} marginRight={"80px"}>
//   <TabList textAlign={"center"} display={"flex"} justifyContent={"center"}  >
//     <Tab fontWeight={"600px"}>One</Tab>
//     <Tab>Two</Tab>
//     <Tab>Three</Tab>
//   </TabList>

//   <TabPanels>
//     <TabPanel>
//     <Desc>
//      Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
 
//     </Desc>

//     </TabPanel>
//     <TabPanel>
//     <Desc>
//      Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
//  ∙ 
//     </Desc>

//     </TabPanel>
//     <TabPanel>
//     <Desc>
//      Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
//  ∙ 
//     </Desc>

//     </TabPanel>
//   </TabPanels>
// </Tabs>
//   </Tabcontainer>
// <LargeWithAppLinksAndSocial/>
    
// </Container>


//     </div>
//   )
// }
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;