import React from 'react'
import Navbar from "../components/Navbar"
import LargeWithAppLinksAndSocial from "../components/Footer"
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { fontSize } from '@mui/system'
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
const KEY = process.env.REACT_APP_STRIPE;
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
const cart =useSelector(state=>state.cart)
const [stripeToken, setStripeToken] = useState(null);
// const history = useHistory();

const onToken = (token) => {
  setStripeToken(token);
};
console.log(stripeToken)


useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        // history.push("/success", {
        //   stripeData: res.data,
        //   products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total]);


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
    {cart.products.map(product=>(
        <Product>


<ProductDetails>
<Image src={product.img}></Image>
<Details>

<ProductName><b>Product:</b>{product.title}</ProductName>
<ProductId><b>ID</b> {product._id}</ProductId>
<ProductColor color={product.color}/>
<ProductSize><b>Size</b> {product.size}</ProductSize>
</Details>
</ProductDetails>
<Pricedetails>
<Productamountcontainer>
<Add/>
<ProductAmount>{product.quantity}</ProductAmount>
<Remove/>
</Productamountcontainer>
<ProductPrice>RS.
{product.price*product.quantity}
</ProductPrice>
</Pricedetails>

</Product>

    ))
    }
    <Hr  />
    

</Info>
<Summary>
<SummaryTitle>Order Summary</SummaryTitle>
<SummaryItem>

    <SummaryItemText>
   
Subtotal
    </SummaryItemText>
    <SummaryItemPrice>
Rs. {cart.total}
    </SummaryItemPrice>
</SummaryItem>
<SummaryItem>

    <SummaryItemText>
Estimated Shipping

    </SummaryItemText>
    <SummaryItemPrice>Rs.390

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
   Rs. {cart.total}

    </SummaryItemPrice>
</SummaryItem>

<StripeCheckout
              name="koovs"
              image="https://etimg.etb2bimg.com/thumb/msid-58925166,width-1200,resizemode-4/.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>

</Summary>
    </Bottom>
</Wrapper>
<LargeWithAppLinksAndSocial/>
</Container>



    </div>
  )
}
