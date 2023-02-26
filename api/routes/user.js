// const User = require("../models/User");
// const { verifyToken } = require("./verifytoken");

// const router = require("express").Router();
// // UPDATE
// router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
// if(req.body.password){
// //    req.body.password= req.body.password
// }


// try{
// const updatedUser=await User.findByIdAndUpdate(req.params.id,{
// $set:req.body

// },{new:true})


// res.status(200).json(updatedUser)
// }catch(err){
//     res.status(500).json(err)
// }


// })
// module.exports = router;

const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifytoken");

const router = require("express").Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's fields
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;

    // Save the updated user to the database
    const updatedUser = await user.save();

    // Remove the password field from the response
    const { password, ...userWithoutPassword } = updatedUser._doc;

    res.status(200).json(userWithoutPassword);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{


try{
await User.findByIdAndDelete(req.params.id)

res.status(200).json("User has been deleted")
}catch(err){
    res.status(500).json(err)
}

})


//GET USER

router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{


    try{
const user=await User.findById(req.params.id)
    
    const { password, ...userWithoutPassword } = user._doc;
    res.status(200).json(userWithoutPassword);
  } catch(err){
        res.status(500).json(err)
    }
    
    })


    //GET ALL USER

router.get("/",verifyTokenAndAdmin,async(req,res)=>{

const query =req.query.new



    try{
const users=query? await User.find().sort({_id:-1}).limit(5):await User.find()
    
   
    res.status(200).json(users);
  } catch(err){
        res.status(500).json(err)
    }
    
    })


    //GET USER STATS

    router.get("/stats",verifyTokenAndAdmin,async(req,res)=>{
        const date=new Date()
        const lastYear=new Date(date.setFullYear(date.getFullYear() - 1))


try{

const data= await User.aggregate([
{$match:{createdAt:{$gte:lastYear}}},
{
$project:{
    month:{$month:"$createdAt"},
},

},
{
    $group:{
        _id:"$month",
        total:{$sum:1}
    }
}

])
res.status(200).json(data)
}catch(err){
   res(500).json(err)
}

    })
    
module.exports = router;



































// router.get("/usertest", (req, res) => {
//   res.send("get is success");
//   console.log("get is success");
// });
// router.post("/userposttest",(req,res)=>{
//     const username=req.body.username
//     console.log(username)
//     res.send("your username is:" +username)
// })