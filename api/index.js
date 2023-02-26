// const express=require("express")
// const app=express()
// const mongoose=require("mongoose")
// const dotenv=require("dotenv")
// const UserRoute=require("./routes/user")
// const authRoute=require("./routes/auth")
// const productRoute=require("./routes/product")
// const cartRoute=require("./routes/cart")
// const orderRoute=require("./routes/order")

// dotenv.config()
// mongoose.connect(
//     process.env.MONGO_URL
// ).then(()=>{
//     console.log("an db connection successful")
// })
// .catch((err)=>{
//     console.log(err)
//     console.log("error in db connection")
// })

// app.use(express.json())
// app.use("/api/auth",authRoute)
// app.use("/api/users",UserRoute)
// app.use("/api/products",productRoute)
// app.use("/api/carts",cartRoute)
// app.use("/api/orders",orderRoute)
// app.listen(process.env.PORT || 5000,()=>{
//     console.log("backend srver is running")
// })
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("an db connection successful");
  })
  .catch((err) => {
    console.log(err);
    console.log("error in db connection");
  });

const cors = require("cors"); // Import the cors package

app.use(cors()); // Enable cors for all routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", UserRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend srver is running");
});
