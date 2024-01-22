import { useState, ChangeEvent, FormEvent } from "react";
import logo from "./assets/logo.png";
import { getData } from "./utils/data-utils";
import Page1 from "./components/page1/page1";
import Button from "react-bootstrap";
import ButtonGroup from "react-bootstrap";

import "./App.css";

// TypeScript declarations
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const defaultFormFields = {
  email: "",
  password: "",
};

const App = () => {
  // react hooks
  const [user, setUser] = useState<User | null>();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    return setFormFields(defaultFormFields);
  };

  // handle input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // make the API call
      const res: User = await getData(
        "http://localhost:8000/login",
        email,
        password
      );
      setUser(res);
      resetFormFields();
    } catch (error) {
      alert("User Sign In Failed");
    }
  };

  const reload = () => {
    setUser(null);
    resetFormFields();
  };

  return (
    <div className="App-header">
      <h1>{user && `Welcome! ${user.name}`}</h1>
      <div className="card">
        <img src={logo} alt="Dizplai" width="300" height="100" />
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
          >
            <button type="button" className="btn btn-primary">
              Button
            </button>
            <button type="button" className="btn btn-primary">
              Button
            </button>
            <button type="button" className="btn btn-primary">
              Button
            </button>
            <button type="button" className="btn btn-primary">
              Button
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
