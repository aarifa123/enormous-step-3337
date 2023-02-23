
import { LocalShipping,Paid ,SupportAgent,Payments} from '@mui/icons-material';
import React from 'react'

export default function Upfooter() {
  return (
    <div style={{display:"flex",justifyContent:"space-between",}}>
<div style={{display:"flex",margin:"30px"}}>< LocalShipping />
<div>
<h2 style={{fontWeight:"bolder",fontSize:"20px"}}>FreeShipping</h2>
<p>For orders above INR 1500.</p>
</div>

</div>
<div style={{display:"flex",margin:"30px"}}><Paid/>
<div>
<h2 style={{fontWeight:"bolder",fontSize:"20px"}} >MoneyGuarantee</h2>
<p>Within 30 days for an exchange.</p>
</div></div>
<div style={{display:"flex",margin:"30px"}}>
  
  <SupportAgent />
<div>
<h2 style={{fontWeight:"bolder",fontSize:"20px"}}>OnlineSupport</h2>
<p>10 AM - 6 PM, Mon - Sat</p>
</div></div>
<div style={{display:"flex",margin:"30px"}}><Payments/>
<div>
<h2 style={{fontWeight:"bolder",fontSize:"20px"}}>
FlexiblePayment</h2>
<p>

Pay with Multiple Credit Cards</p>
</div></div>


    </div>
  )
}
