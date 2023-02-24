import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
export default function UppNav() {
  return (
    <div>

<nav class="nav" >
  
  <a class="nav-link" href="https://www.facebook.com/koovs" target="_blank" style={{color:"black" ,fontSize:"12px", display:"flex",margin:"10px",justifyContent:"space-around",marginTop:"0px",marginBottom:"0px"}} ><FaFacebook color="black" size={28} />  <p >1.8M Followers</p>


</a>
  <a class="nav-link" href="https://www.instagram.com/koovsfashion/" target="_blank" style={{color:"black" ,fontSize:"12px",display:"flex",margin:"10px",justifyContent:"space-around",marginTop:"0px",marginBottom:"0px"}}><FaInstagram color="black" size={28}  />  682k Followers</a>
  <p style={{marginLeft:"200px", display:"flex",justifyContent:"center",alignItems:"center"}}>Open doors to a world of fashion | Young and fresh</p>
  {/* <select style={{display:"flex",border:"2px solid green",marginLeft:"570px"}}>
    <option>English</option>
  </select> */}
</nav>
<hr></hr>


    </div>
  )
}
