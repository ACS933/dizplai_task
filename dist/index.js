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
const polls = [{
        "pollId": 1,
        "pollName": "Premier League Winner",
        "question": "who will win the premier league?",
        "options": [
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
app.get('/', (req, res) => {
    res.send("hello, this is a message from a typescript express server.");
});
app.get('/api/polls/:pollId', (req, res) => {
    const poll = polls.find(c => c.pollId === parseInt(req.params.pollId));
    if (!poll)
        return res.status(404).send("poll does not exist");
    res.send(poll);
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
