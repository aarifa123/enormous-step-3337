const Product = require("../models/Product");
const User = require("../models/User");
const {  verifyTokenAndAdmin } = require("./verifytoken");

const router = require("express").Router();

//CREATE


router.post("/", verifyTokenAndAdmin, async(req,res)=>{
const newProduct=new Product(req.body)
try{
const savedProduct=await newProduct.save()
res.status(200).json(savedProduct)
}catch(err){
    res.status(500).json(err)
}
}) 


// UPDATE Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    // // Update the user's fields
    // user.username = req.body.username || user.username;
    // user.email = req.body.email || user.email;
    // user.password = req.body.password || user.password;

    // // Save the updated user to the database
    // const updatedUser = await user.save();

    // // Remove the password field from the response
    // const { password, ...userWithoutPassword } = updatedUser._doc;

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE Product

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{


try{
await Product.findByIdAndDelete(req.params.id)

res.status(200).json("Product has been deleted")
}catch(err){
    res.status(500).json(err)
}

})


//GET Product

router.get("/find/:id",async(req,res)=>{


    try{
const Product=await Product.findById(req.params.id)
    
   

    res.status(200).json(Product);
  } catch(err){
        res.status(500).json(err)
    }
    
    })


    //GET ALL Products

    router.get("/", async (req, res) => {
        const qNew = req.query.new;
        const qCategory = req.query.category;
      
        try {
          let products;
      
          if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
          } else if (qCategory) {
            products = await Product.find({
              categories: {
                $in: [qCategory],
              },
            });
          } else {
            products = await Product.find();
          }
      
          res.status(200).json(products);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      


   
    
module.exports = router
