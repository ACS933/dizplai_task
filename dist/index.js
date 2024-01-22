"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send("hello, this is a message from a typescript express server.");
});
const users = [
    {
        id: 1,
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
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => {
        return user.email === email && user.password === password;
    });
    if (!user) {
        return res.status(404).send('user not found;');
    }
    return res.status(200).json(user);
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
