import React from 'react'
import styled from 'styled-components'
const Container=styled.div`flex:1;
margin:3px;position:relative

`
const Image=styled.img`
width:100%;object-fit:cover
`
const Info=styled.div
`position:absolute;
top:0;
left:0
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:30%;
margin-top:40%
`
const Title=styled.h1`

font-size:22px;font-weight: bold;letter-spacing: .2rem;
margin-bottom:20px;



`
const Button=styled.button`
border:1px solid black;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;



`
export default function Categoryitem({item}) {
  return (
    <Container>

<Image src={item.img}></Image>
<Info>
<Title>
  {item.title}
</Title>
<Button>Shop Now</Button>

</Info>

    </Container>
  )
}
