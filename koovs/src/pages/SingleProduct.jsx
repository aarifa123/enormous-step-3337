import styled from "styled-components"
import LargeWithAppLinksAndSocial from '../components/Footer'
import Navbar from "../components/Navbar"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display:flex;
obj
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
padding:0px 50px
`
const Title=styled.h1`
font-size:30px;
font-weight:400;
`
const Desc=styled.p`
margin:20px 0px;
`
const Price=styled.span`
font-weight:400;
font-size:20px
`
const FilterContainer=styled.div``

const Filter=styled.div``
const Tabcontainer=styled.div``

export default function SingleProduct() {
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
    <Desc>
     Perungulam, Tamil Nadu 623536Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus odio eligendi! Quibusdam aut animi error, dolorum aliquid facere laboriosam veritatis quia cupiditate beatae alias obcaecati hic ut eius id esse vel numquam!
 ∙ 
    </Desc>

    <Price>
      Rs.3000
      
    </Price>

    <FilterContainer>
      <Filter>

      </Filter>
    </FilterContainer>
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
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  </Tabcontainer>
<LargeWithAppLinksAndSocial/>
    
</Container>


    </div>
  )
}
