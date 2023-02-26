import React from 'react'
import Navbar from "../components/Navbar"
import LargeWithAppLinksAndSocial from "../components/Footer"
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { fontSize } from '@mui/system'
const Container=styled.div`




`

const Wrapper=styled.div`
padding:20px;

`
const Title=styled.h1`
font-weight:200;
text-align:center;
font-size:34px;

`
const Top=styled.div`

display:flex;

align-items:center;
justify-content:space-between;

`
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
background-color:black;
color:white
`
const Toptexts=styled.div``
const Toptext=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0 10px;
`
const Bottom=styled.div`

display:flex;
justify-content:space-between;
`
const Info=styled.div`
flex:3;


`


const Product=styled.div`
display:flex;
justify-content:space-between;
text-align:left;
margin:30px
`
const ProductDetails=styled.div`
flex:2;
display:flex;


`
const Image=styled.img`
width:200px;


`
const Details=styled.div`

padding:20px;

display:flex;
justify-content:space-around;
flex-direction:column;

`
const Hr=styled.hr`

border: 0.5px solid lightgray;
`
const Pricedetails=styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column
`
const ProductName=styled.span``
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}


`
const ProductSize=styled.span`


`
const ProductId=styled.span``
const Productamountcontainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`

const ProductAmount=styled.div`
font-size:24px;
margin:5px;
`
const ProductPrice=styled.div`
font-size:30px;

font-weight:200;


`
const Summary=styled.div`
text-align:left;
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`

const SummaryTitle=styled.h1`
font-weight:200;
font-size:24px;


`
const SummaryItem=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==="total"&&"500"};
font-size:${props=>props.type==="total"&&"24px"}

`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:500
`



export default function Cart() {
  return (
    <div>
<Container>
<Navbar/>
<Wrapper>
    <Title>
       Your Bag
    </Title>
    <Top>
        
        <TopButton>Continue Shoping</TopButton>
    <Toptexts>
<Toptext>Your Bag(2)</Toptext>
        <Toptext>Your Wishlisht(0)</Toptext>
    </Toptexts>
    
    <TopButton type='filled'>Checkout Now</TopButton>
    </Top>
    <Bottom>


<Info>
    <Product>


       <ProductDetails>
<Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
<Details>

<ProductName><b>Product:</b>jerssy pant</ProductName>
<ProductId><b>ID</b> 1234dfref</ProductId>
<ProductColor color="black"/>
<ProductSize><b>Size</b> XXl</ProductSize>
</Details>
       </ProductDetails>
       <Pricedetails>
<Productamountcontainer>
    <Add/>
    <ProductAmount>2</ProductAmount>
    <Remove/>
</Productamountcontainer>
<ProductPrice>
    Rs.3000
</ProductPrice>
       </Pricedetails>
      
    </Product>
    <Hr  />
    <Product>


       <ProductDetails>
<Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
<Details>

<ProductName><b>Product:</b>jerssy pant</ProductName>
<ProductId><b>ID</b> 1234dfref</ProductId>
<ProductColor color="black"/>
<ProductSize><b>Size</b> XXl</ProductSize>
</Details>
       </ProductDetails>
       <Pricedetails>
<Productamountcontainer>
    <Add/>
    <ProductAmount>2</ProductAmount>
    <Remove/>
</Productamountcontainer>
<ProductPrice>
    Rs.3000
</ProductPrice>
       </Pricedetails>
       
    </Product>

</Info>
<Summary>
<SummaryTitle>Order Summary</SummaryTitle>
<SummaryItem>

    <SummaryItemText>
subtotal

    </SummaryItemText>
    <SummaryItemPrice>
Rs.3500

    </SummaryItemPrice>
</SummaryItem>
<SummaryItem>

    <SummaryItemText>
Estimated Shipping

    </SummaryItemText>
    <SummaryItemPrice>
Rs.390

    </SummaryItemPrice>
</SummaryItem>
<SummaryItem>

    <SummaryItemText>
 Shipping Discount

    </SummaryItemText>
    <SummaryItemPrice>
Rs.-390

    </SummaryItemPrice>
</SummaryItem>
<SummaryItem type="total">

    <SummaryItemText >
Total

    </SummaryItemText>
    <SummaryItemPrice>
Rs.3500

    </SummaryItemPrice>
</SummaryItem>

<Button>

    Checkout Now
</Button>


</Summary>
    </Bottom>
</Wrapper>
<LargeWithAppLinksAndSocial/>
</Container>



    </div>
  )
}
