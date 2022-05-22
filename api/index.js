console.log("hello")

const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const orderRoute = require("./routes/order");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successfull!"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/products", productRoute);
app.use("/api/checkout", stripeRoute);
app.listen(process.env.PORT || 4900, () => {

    console.log("Backend server is running ! ");

});