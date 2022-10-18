var express = require('express');
const  env=require('dotenv').config();
var logger = require('morgan');
var createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors")


const userRouter=require('./routes/user')
const adminRouter=require('./routes/admin')

const app = express();


const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());



mongoose.connect(process.env.mongoURL).then((res) => {
  console.log("mongodb connected")
})


app.use((req,res,next)=>{
  console.log('call reached')
  next()
})



app.use('/',userRouter);
app.use('/admin',adminRouter);




app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err,req, res, next) {
  res.json({err})
});


const PORT=process.env.PORT||5000
app.listen(PORT, () =>
  console.log(` app listening on port ${PORT}!`),
);
