import "./App.css";
import React, { useState } from "react";

function App() {
  const [sessionL, setSessionL] = useState(25);
  const [breakL, setbreakL] = useState(5);
  const [minutes, setminutes] = useState(25);
  const [seconds, setseconds] = useState(0);

  let statusBreak = false;
  let init = false;
  let timer = () => {
    setInterval(function () {
      console.log(seconds);
      setseconds(seconds - 1);
    }, 1000);
  };
  const pomodoro_exe = (init) => {
    console.log("inicio" + init);

    switch (init) {
      case true:
        if (seconds === 0) {
          setminutes(minutes - 1);
          setseconds(59);
          timer();
          console.log("antes" + seconds);
        }
        init = false;
        break;
      case false:
        init = true;
        break;
    }
  };
  return (
    <div className="App">
      <h2 id="break-label">Break Length</h2>
      <h2 id="break-length">{breakL}</h2>
      <button
        id="break-decrement"
        onClick={() => {
          if (breakL > 0) {
            setbreakL(breakL - 1);
          }
        }}
      >
        - BR
      </button>
      <button
        id="break-increment"
        onClick={() => {
          if (breakL < 60) {
            setbreakL(breakL + 1);
          }
        }}
      >
        + BR
      </button>

      <h2 id="session-label">Session Length</h2>
      <h2 id="session-length">{sessionL}</h2>
      <button
        id="session-decrement"
        onClick={() => {
          if (sessionL > 0) {
            setSessionL(sessionL - 1);
            setminutes(minutes - 1);
          }
        }}
      >
        {" "}
        - SD
      </button>
      <button
        id="session-increment"
        onClick={() => {
          if (sessionL < 60) {
            setSessionL(sessionL + 1);
            setminutes(minutes + 1);
          }
        }}
      >
        + SD
      </button>

      <h3 id="timer-label">{statusBreak ? "Break" : "Session"}</h3>
      <h4 id="time-left">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h4>
      <button
        id="start_stop"
        onClick={() => {
          init = false ? pomodoro_exe(false) : pomodoro_exe(true);
        }}
      >
        Start/Stop
      </button>
      <button
        id="reset"
        onClick={() => {
          clearInterval(timer);
          setSessionL(25);
          setminutes(25);
          setbreakL(5);
          setseconds(0);
          init = false;
          statusBreak = false;
        }}
      >
        Reset
      </button>
      <audio src="alarm.mp3" id="beep" autoPlay controls></audio>
      <button>Init audio</button>
    </div>
  );
}

export default App;
