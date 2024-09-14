
const express = require('express');
const app = express();
const dbConfig = require('./config/dbConfig.js');
const userRoute = require('./routes/userRoute.js');

app.use(express.json());
app.use('/api/user',userRoute);
const port = process.env.port||5000;
app.listen(port,()=>console.log(`server is listening on port ${port}`));

app.get('/',(req,res)=>{
    res.send('this is root path');
});