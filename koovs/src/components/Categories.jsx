import React from 'react'
import styled from 'styled-components'
import {categoriesdata} from "../data"
import Categoryitem from './categorieitem'


const Container=styled.div`
display:flex;
padding:20px



`






export default function Categories() {
  return (
    <Container>


{categoriesdata.map(item=>(
    <>
    <Categoryitem item={item} key={item.id}/>
   
    
    </>
))}




    </Container>
  )
}
