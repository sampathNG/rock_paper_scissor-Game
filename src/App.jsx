import React, { useState } from "react";
import "./index.css";
const choices = ["rock", "paper", "scissors"];
function App() {
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [result, setResult] = useState("");
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setCompChoice(computerChoice);
    getResult(choice, computerChoice);
  };
  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-10">Rock, Paper, Scissors</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleUserChoice("rock")}
        >
          Rock
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleUserChoice("paper")}
        >
          Paper
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleUserChoice("scissors")}
        >
          Scissors
        </button>
      </div>
      <div className="mt-10 text-xl font-bold">
        You chose: {userChoice} <br />
        Computer chose: {compChoice} <br />
        <h1>Result : {result}</h1>
      </div>
    </div>
  );
}
export default App;
