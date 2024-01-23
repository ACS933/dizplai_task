import { useState, ChangeEvent, FormEvent } from "react";
import logo from "./assets/logo.png";
import { getData } from "./utils/data-utils";
import Page1 from "./components/page1/page1";
import PollButtonGroup from "./components/page1/pollButtonGroup";

import "./App.css";
import { response } from "express";

type Poll = {
  pollId: number;
  pollName: string;
  question: string;
  options: JSON[];
};

const App = () => {
  // react hooks

  const [pollQ, setPollQ] = useState("");
  const [questionOptions, setQuestionOptions] = useState("");

  var temp = [{}];
  var temp2: string[] = [];

  function setPoll(item: JSON[], value: JSON[]) {
    item = value;
  }
  try {
    //api call
    const poll = fetch("http://localhost:8000/api/polls/1")
      .then((response) => response.json())
      .then((response) => setPollQ(response.question));
    const options = fetch("http://localhost:8000/api/polls/1")
      .then((response) => response.json())
      .then((response) => setQuestionOptions(JSON.stringify(response.options)));
  } catch (error) {
    alert("poll not found");
  }

  return (
    <div className="App">
      <img src={logo} alt="Dizplai" width="300" height="100" />
      <div className="card">
        <h2 className="pollQuestion">{pollQ}</h2>
        <PollButtonGroup
          stringify={questionOptions}
          onSelectItem={() => console.log("hi")}
        ></PollButtonGroup>
      </div>
    </div>
  );
};

export default App;
