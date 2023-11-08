import React, { useEffect, useState } from "react";
import "./App.css";
import { keywords } from "./const";

const App = () => {
  const [score, setScore] = useState(0);
  const [countdownLabel, setCountdownLabel] = useState("05:00");
  const [counter, setCounter] = useState(-1);
  const [foundWords, setFoundWords] = useState(new Set());
  const [playButtonBackgroundImage, setPlayButtonBackgroundImage] = useState(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'%3E%3Cpath fill-rule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clip-rule='evenodd' /%3E%3C/svg%3E%0A"
  );
  const [keywordInputDisabled, setKeywordInputDisabled] = useState(true);
  const [paused, setPaused] = useState(true);

  const totalKeywords = keywords.length;
  const playButtonStyle = {
    backgroundImage: `url("${playButtonBackgroundImage}")`,
  };

  useEffect(() => {
    const resumeCountdown = () => {
      const minutes = Math.floor(counter / 60);
      const seconds = counter % 60;
      setCounter(counter - 1);
      setCountdownLabel(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    };
    if (counter > 0 && !paused) {
      const timer = setInterval(resumeCountdown, 1000);
      return () => clearInterval(timer);
    } else if (counter === 0) {
      setCountdownLabel("00:00");
    }
  }, [counter, paused]);

  const onPlayButtonClick = () => {
    setPlayButtonBackgroundImage(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'%3E%3Cpath fill-rule='evenodd' d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z' clip-rule='evenodd' /%3E%3C/svg%3E%0A"
    );
    setKeywordInputDisabled(false);
    if (counter <= 0) setCounter(299);
    setPaused(false);
  };

  const onPauseButtonClick = () => {
    setPlayButtonBackgroundImage(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'%3E%3Cpath fill-rule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clip-rule='evenodd' /%3E%3C/svg%3E%0A"
    );
    setKeywordInputDisabled(true);
    setPaused(true);
  };

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
        <div className="title">
          <h1>Javascript Keywords</h1>
          <div className="subTitle">How many keywords can you name?</div>
        </div>
        <div className="toolbar">
          <div className="keyword" id="keyword">
            <div className="keyword-title">Enter keyword:</div>
            <input
              className="keyword-input"
              type="text"
              id="keywordInput"
              onChange={paused ? undefined : onKeywordChange}
              disabled={keywordInputDisabled}
            />
          </div>
          <div className="score">
            <div className="scoreTitle">Score</div>
            <div className="score-counter">{`${score}/${totalKeywords}`}</div>
          </div>
          <button
            className="play-button"
            id="playButton"
            onClick={paused ? onPlayButtonClick : onPauseButtonClick}
            style={playButtonStyle}
          />
          <div className="timer">
            <div className="timerTitle">Timer</div>
            <div className="timer-countdown">{countdownLabel}</div>
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
