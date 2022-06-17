import chalk from 'chalk';
import express from 'express';

const app = express();

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" }
];

// 1/1/2022

app.get('/is-today-holiday', (req, res) => {
    
    const hoje = new Date().toLocaleDateString(); 

    const isHoliday = holidays.find(day=>day.date ===hoje);

    if (isHoliday) {
        res.send(console.log(`Sim, hoje é ${isHoliday.name}`));
        
    } else {
        res.send(console.log("Nao é feriado"));
    }

    //res.send();
});

app.get('/holidays', (req, res) => {
  res.send(holidays);
});



app.listen(5002, ()=>{
    console.log(chalk.bold.yellow("ola o server ta indo"));
});