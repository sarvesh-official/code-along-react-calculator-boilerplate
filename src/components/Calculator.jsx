import { useState } from "react";
import Buttons from "./Buttons";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };
  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("ERROR");
    }
  };
  const clearInput = () => {
    setInput("");
    setResult("");
  };
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="screen">
        <div className="input">
          <h4>Input</h4>
          <input
            type="text"
            name=""
            id=""
            placeholder="0"
            value={input}
            readOnly
          />
        </div>
        <div className="result">
          <h4>Result</h4>
          <input
            type="text"
            name=""
            id=""
            placeholder="0"
            value={result}
            readOnly
          />
        </div>
      </div>
      <div className="buttons">
        <Buttons function={clearInput} label={"AC"} />
        <Buttons function={deleteLast} label={"DEL"} />
        <Buttons
          function={() => {
            handleInput("-");
          }}
          label={"-"}
        />
        <Buttons
          function={() => {
            handleInput("+");
          }}
          label={"+"}
        />

        <Buttons
          function={() => {
            handleInput("7");
          }}
          label={"7"}
        />
        <Buttons
          function={() => {
            handleInput("8");
          }}
          label={"8"}
        />
        <Buttons
          function={() => {
            handleInput("9");
          }}
          label={"9"}
        />
        <Buttons
          function={() => {
            handleInput("/");
          }}
          label={"/"}
        />

        <Buttons
          function={() => {
            handleInput("4");
          }}
          label={"4"}
        />
        <Buttons
          function={() => {
            handleInput("5");
          }}
          label={"5"}
        />
        <Buttons
          function={() => {
            handleInput("6");
          }}
          label={"6"}
        />
        <Buttons
          function={() => {
            handleInput("*");
          }}
          label={"*"}
        />

        <Buttons
          function={() => {
            handleInput("1");
          }}
          label={"1"}
        />
        <Buttons
          function={() => {
            handleInput("2");
          }}
          label={"2"}
        />
        <Buttons
          function={() => {
            handleInput("3");
          }}
          label={"3"}
        />
        <Buttons
          function={() => {
            handleInput(".");
          }}
          label={"."}
        />

        <button
          onClick={() => {
            handleInput("0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            calculateResult();
          }}
          style={{ gridColumn: "span 3" }}
        >
          =
        </button>
      </div>
    </div>
  );
}
