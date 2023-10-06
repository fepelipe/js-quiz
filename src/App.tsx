import React, { useState } from "react";
import "./App.css";
import { keywords } from "./const";

const App = () => {
  const [score, setScore] = useState(0);
  const [countdownLabel, setCountdownLabel] = useState("05:00");
  const [foundWords, setFoundWords] = useState(new Set());

  const totalKeywords = keywords.length;

  // setInterval(() => {
  //   setCountdownLabel(`${minutes}:${seconds}`);
  // }, 1000);

  const onKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    const keywordIndexFound = keywords.indexOf(event.target.value);

    if (keywordIndexFound > -1) {
      const cell = document.getElementById(`cell${keywordIndexFound + 1}`);
      if (cell) {
        cell.innerHTML = keywords[keywordIndexFound];
        cell.animate(
          [
            { backgroundColor: "#282c34" },
            { backgroundColor: "#61dafb" },
            { backgroundColor: "#282c34" },
            { backgroundColor: "#61dafb" },
            { backgroundColor: "#282c34" },
          ],
          600
        );
      }
      if (!foundWords.has(word)) {
        foundWords.add(word);
        setFoundWords(foundWords);
        setScore(score + 1);
        event.target.value = "";
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="toolbar">
          <div className="keyword">
            <input type="text" id="keywordInput" onChange={onKeywordChange}></input>
          </div>
          <div className="score">
            <div className="scoreTitle">Score</div>
            <div className="scoreCounter">{`${score}/${totalKeywords}`}</div>
          </div>
          <div className="pause">
            <button className="pauseButton"></button>
          </div>
          <div className="timer">
            <div className="timerTitle">Timer</div>
            <div className="timerCountdown">{countdownLabel}</div>
          </div>
        </div>
        <table className="keywords-table">
          <tbody>
            <tr>
              <td id="cell1"></td>
              <td id="cell2"></td>
              <td id="cell3"></td>
              <td id="cell4"></td>
              <td id="cell5"></td>
            </tr>
            <tr>
              <td id="cell6"></td>
              <td id="cell7"></td>
              <td id="cell8"></td>
              <td id="cell9"></td>
              <td id="cell10"></td>
            </tr>
            <tr>
              <td id="cell11"></td>
              <td id="cell12"></td>
              <td id="cell13"></td>
              <td id="cell14"></td>
              <td id="cell15"></td>
            </tr>
            <tr>
              <td id="cell16"></td>
              <td id="cell17"></td>
              <td id="cell18"></td>
              <td id="cell19"></td>
              <td id="cell20"></td>
            </tr>
            <tr>
              <td id="cell21"></td>
              <td id="cell22"></td>
              <td id="cell23"></td>
              <td id="cell24"></td>
              <td id="cell25"></td>
            </tr>
            <tr>
              <td id="cell26"></td>
              <td id="cell27"></td>
              <td id="cell28"></td>
              <td id="cell29"></td>
              <td id="cell30"></td>
            </tr>
            <tr>
              <td id="cell31"></td>
              <td id="cell32"></td>
              <td id="cell33"></td>
              <td id="cell34"></td>
              <td id="cell35"></td>
            </tr>
            <tr>
              <td id="cell36"></td>
              <td id="cell37"></td>
              <td id="cell38"></td>
              <td id="cell39"></td>
              <td id="cell40"></td>
            </tr>
            <tr>
              <td id="cell41"></td>
              <td id="cell42"></td>
              <td id="cell43"></td>
              <td id="cell44"></td>
              <td id="cell45"></td>
            </tr>
            <tr>
              <td id="cell46"></td>
              <td id="cell47"></td>
              <td id="cell48"></td>
              <td id="cell49"></td>
              <td id="cell50"></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
