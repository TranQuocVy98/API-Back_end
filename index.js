const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const courseRouter = require("./routes/Course");
const userRouter = require("./routes/User");
const app = express();

dotenv.config()
 
// mongoose.connect((process.env.CONNECT_MONGODB), () => {
//     console.log('lolo')
// }

// // {
// //     useNewUrlParser :true ,
// //     useUnifiedTopology : true
// // }
// );

mongoose.connect(process.env.CONNECT_MONGODB, () => {
    console.log('ket noi db alast thanh công ')
}
);



app.use(bodyParser.json({limit:'50mb'}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('common'))
// Define REST API

app.use('/v1/course',courseRouter)
app.use('/v1/user',userRouter)  

app.get("/api", (req, res) => {
    res.status(200).json("hello")
});
app.post("/person", async (req, res) => {});
app.get("/person/:id", async (req, res) => {});
app.put("/person/:id", async (req, res) => {});
app.delete("/person/:id", async (req, res) => {});


app.listen(9000, () => {
    console.log("Listening at :9000...");
});