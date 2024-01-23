
import dotenv from "dotenv";
import express, { Express, Request, Response} from "express";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const polls = [{ 
    "pollId": 1,
    "pollName": "Premier League Winner",
    "question": "who will win the premier league?",
    "options" : [
        {
            "optionId": 1,
            "optionText": "Manchester City"
        },

        {
            "optionId": 2,
            "optionText": "Arsenal"
        },

        {
            "optionId": 3,
            "optionText": "Liverpool"
        },

        {
            "optionId": 4,
            "optionText": "Tottenham"
        }
    ] 
  }
  ];

app.get('/', (req: Request, res: Response) => {
    res.send("hello, this is a message from a typescript express server.")
});

interface FormInputs{
    email: string,
    password: string
  }
  

  
 

  app.get('/api/polls/:pollId', (req: Request, res: Response) => {
    const poll = polls.find(c => c.pollId === parseInt(req.params.pollId));
    if (!poll) return res.status(404).send("poll does not exist");
    res.send(poll);
  })
  

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});