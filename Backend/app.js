require('dotenv').config()
const express = require('express')

const { dbconnection } = require('./Config/db');
const cors = require('cors');
const app = express()

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
};
app.use(cors(corsOptions))
app.use(express.json());


require('./Models/product')
const productroutes = require('./Routes/productroutes')
app.use('/product',productroutes)



const PORT =3000

app.listen(PORT, async()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    await dbconnection()
    
})

