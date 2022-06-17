import chalk from 'chalk';
import express from 'express';
import cors from "cors";

const app = express();


// 1/1/2022

app.get('/', (req, res) => {
    
   

  
});

app.get('/', (req, res) => {
  res.send(holidays);
});



app.listen(5002, ()=>{
    console.log(chalk.bold.yellow("ola o server ta indo"));
});