import React from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import Singleproduct from './Singleproduct'
const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between

`
export default function Products({item}) {
  return (



    <Container>
        
{popularProducts.map((item)=>(
<Singleproduct item={item} key={item.id}/>
))}

    </Container>
  )
}
