import chalk from 'chalk';
import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const user = [
  {
    username: 'bobesponja', 
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
  }
];

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub"
  }
];

 let newestTweets = [
 	{
 		username: "bobesponja",
 		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
 	  tweet: "eu amo o hub"
 	}
 ];

app.post('/sign-up', (req, res) => {
  const {username, avatar} = req.body;
  user.push({username:username, avatar:avatar});
  res.sendStatus(200);
});


app.post('/tweets', (req, res) => {
  const {username, tweet}=req.body;
  tweets.push({username:username, tweet:tweet});
  res.sendStatus(200);
});


app.get('/tweets', (req, res) => {
  if(tweets.length<1){
    res.sendStatus(400); //nunca cai aqui mas se tira, dá problema
  }
  else{
    newestTweets=[];

    for(let i=tweets.length-1;i>tweets.length-11;i--){

      if(tweets[i]){
        const {username,tweet}=tweets[i];
        newestTweets.push({username:username,avatar:user.find(({ username,tweet })=> username === tweets[i].username).avatar, tweet:tweet});
      }

    }
    res.status(201).send(newestTweets);
  }
  
});

app.listen(5000, ()=>{
    console.log(chalk.bold.yellow("server on"));
});

finalmentedasasd