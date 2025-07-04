require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { Users } = require('./model/UsersModel');
const session = require('express-session');
const {OrdersModel} = require('./model/OrdersModel');
// const { default: Orders } = require('../Dashboard/src/components/Orders');

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

main().then(() => {
    console.log("Connected to mongodb database");
}).catch(() => {
    console.log("Something went wrong for connecting to database");
})


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "topsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// app.get('/fakeuser',async(req,res)=>{
//     let newUser = new Users({
//         email:"avinashsaini393@gmail.com",
//         username:"avinash"
//     });
//     let registerUser= await Users.register(newUser,"helloworld");
//     res.send(registerUser);
// });

app.get('/allHoldings', async (req, res) => {
    try{
        let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Failed to fetch holdings', details: err.message });
    }
    
});

app.get('/allPositions', async (req, res) => {
    try{
        let allPosition = await PositionsModel.find({});
    res.json(allPosition);
    }catch(err){
        console.log(err);
    }
    
});

app.post('/signup', async (req, res) => {
    try {
        let { email, name, password } = req.body;
        let newUser = new Users({
            email:email,
            username:name
        });
        let data = await Users.register(newUser, password);
        console.log(data);
        res.status(200).json({message:"User Created successfully"});
    }catch(err){
        console.log(error);
         res.status(409).json({ error: 'User already existing', details: error.message });
    }
   
});

app.get('/logout',(req,res)=>{
    try{
         req.logOut((err)=>{
        if(err){
            console.log(err);
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.redirect("http://localhost:5174/");
    });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Logout failed' });
    }
   

});

app.post('/orders',async (req,res)=>{
    let {name, qty, price, mode} = req.body;
    let newOrder = new OrdersModel({
        name:name,
        qty:qty,
        price:price,
        mode:mode
    });
    await newOrder.save();
    res.status(200).json({message:"Order placed successfully"});
});

app.get("/orders",async (req,res)=>{
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});

app.delete("/orders/:id",async (req,res)=>{
    let {id} = req.params;
    try{
        let result = await OrdersModel.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({message:"Order not found"});
        }
        res.status(200).json({message:"Order deleted successfully"});
    }catch(err){
        console.log(err);
    }
});
// adding data of holdings in database
// app.get('/addHoldings', async(req, res) => {
//     let Holdings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];
//     Holdings.forEach(async(item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         await newHolding.save();
//     });
//     res.send("Holdings data was saved");
// });

//adding data of position
// app.get('/addPosition', async (req, res) => {
//     let Positions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];
//     Positions.forEach(async(item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss
//         });
//         await newPosition.save();
//     });
//     res.send("Position data was saved");
// });

app.listen(PORT, () => {
    console.log(`server is listening to port no: ${process.env.PORT}`);
});
