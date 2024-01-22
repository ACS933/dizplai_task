
import dotenv from "dotenv";
import express, { Express, Request, Response} from "express";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send("hello, this is a message from a typescript express server.")
});

interface FormInputs{
    email: string,
    password: string
  }
  
  const users = [
    {
      id:1,
      name: "billy bob",
      email: "bob@example.com",
      password: "bob23"
    },
    {
      id: 2,
      name: 'other guy',
      email: 'otheremail@email.com',
      password: 'mypassword'
    }
  ];
  
  //login route
  app.post('/login', (req: Request, res: Response) => {
    const {email, password}: FormInputs = req.body;
  
    const user = users.find(user => {
      return user.email === email && user.password === password
    });
  
    if (!user) {
      return res.status(404).send('user not found;')
    }
  
    return res.status(200).json(user);
  })
  

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});