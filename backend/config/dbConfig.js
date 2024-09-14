require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;
async function main() {
    await mongoose.connect(uri);
  }
  main()
  .then(()=>{
    console.log('db is connected');
  })
  .catch(err => console.log(err));

  module.exports = mongoose;