
//regiter

// const CryptoJs=require("crypto-js")
// router.post("/register",async(req,res)=>{
//     const newUser=new User({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
        
//     });
//     try{
//         const savedUser=await newUser.save()
//         res.status(201).json(savedUser)
//     }catch(err){
//         res.status(500).json(err)
//     }


// })
//LOGIN

// router.post("/login",async(req,res)=>{
//     try{
//         const user=await User.findOne({username:req.body.username})
// !user&&res.status(401).json("Wrong credentials")
// const password=req.body.password
// password!==req.body.password&&res.status(401).json("Wrong credentials")



// res.status(200).json(err)

//     } catch(err){
//         res.status(500).json()
//     }
// })
// router.post("/login", async (req, res) => {
//     try {
//       const user = await User.findOne({ username: req.body.username });
//       if (!user) {
//         return res.status(401).json({ message: "Invalid username or password" });
//       }
//       const passwordMatch = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJs.enc.Utf8);
//       if (passwordMatch !== req.body.password) {
//         return res.status(401).json({ message: "Invalid username or password" });
//       }
//       res.status(200).json(user);
//     } catch (err) {
//       res.status(500).json({ message: "Internal server error" });
//     }
//     console.log("post was success")
//   });
  
// router.post("/login", async (req, res) => {
//     try {
//       const user = await User.findOne({ username: req.body.username });
//       if (!user) {
//         return res.status(401).json({ message: "Invalid username or password" });
//       }
//       const passwordMatch = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJs.enc.Utf8);
//       if (passwordMatch !== req.body.password) {
//         return res.status(401).json({ message: "Invalid username or password" });
//       }
//       res.status(200).json(user);
//     } catch (err) {
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });

const router = require("express").Router();
const User=require("../models/User")
const jwt=require("jsonwebtoken")
  // register
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // login
  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      if (user.password !== req.body.password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

const accessToken=jwt.sign({
  id:user._id,
  isAdmin:user.isAdmin,
},process.env.JWT_SECRETKEY,
{expiresIn:"3d"})

      const { password, ...userWithoutPassword } = user._doc;
      res.status(200).json({...userWithoutPassword,accessToken});
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  



module.exports = router;
//var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");

// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");