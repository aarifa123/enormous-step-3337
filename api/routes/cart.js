const Cart = require("../models/Cart");
const User = require("../models/User");
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifytoken");

const router = require("express").Router();

//CREATE cart


router.post("/", verifyToken, async(req,res)=>{
const newCart=new Product(req.Cart)
try{
const savedCart=await newCart.save()
res.status(200).json(savedCart)
}catch(err){
    res.status(500).json(err)
}
}) 


// UPDATE cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id);
    

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE Cart

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{


try{
await Cart.findByIdAndDelete(req.params.id)

res.status(200).json("Cart has been deleted")
}catch(err){
    res.status(500).json(err)
}

})


//GET USER CART

router.get("/find/:userId",verifyTokenAndAuthorization,  async(req,res)=>{


    try{
const Cart=await Cart.findOne({userId:req.params.userId})
    
   

    res.status(200).json(Cart);
  } catch(err){
        res.status(500).json(err)
    }
    
    })


//     //GET ALL 

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
try{
const carts=await Cart.find();
res.status(200).json(carts)

}catch(err){
    res.status(500).json(err)
}
})


   
    
module.exports = router
