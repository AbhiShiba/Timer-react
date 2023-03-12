import React, { useContext, useState } from "react";
import { TimerContext } from "../../App";
import "./TimerButtons.css";

export function TimerButtons() {
  const timerValues = useContext(TimerContext);
  const [sec, setSec] = timerValues.seconds;
  const [minute, setMinute] = timerValues.minute;
  const [hour, setHour] = timerValues.hour;

  const [startDisable, setStartDisable] = useState(false);
  const [stopDisable, setStopDisable] = useState(true);
  const [timerClear, setTimerClear] = useState();

  const StartTimer = () => {
    let x = timerClear;
    setStartDisable(!startDisable);
    setStopDisable(!stopDisable);

    let tsec = sec;
    let min = minute;
    let hr = hour;
    clearInterval(x);
    x = setInterval(() => {
      if (Number(hr) === 0) {
        if (Number(min) === 0) {
          if (Number(tsec) === 0) {
            clearInterval(x);
            return;
          }
        }
      }

      if(Number(hr) !== 0){
        if(Number(min) === 0){
          hr = Number(hr) - 1;
          hr = hr < 10 ? `0${hr}` : hr;
          min = 60;
        }
      }
      
      if (Number(min) !== 0) {
        if (Number(tsec) === 0) {
          min = Number(min) - 1;
          min = min < 10 ? `0${min}` : min;
          tsec = 60;
        }
      }

      tsec = Number(tsec) - 1;
      tsec = tsec < 10 ? `0${tsec}` : tsec;
      setHour(hr);
      setMinute(min);
      setSec(tsec);
    }, 1000);
    setTimerClear(x);
  };

  const StopTimer = () => {
    setStartDisable(!startDisable);
    setStopDisable(!stopDisable);
    clearInterval(timerClear);
  };

  const RestTimer = () => {
    setStartDisable(false);
    setStopDisable(true);
    clearInterval(timerClear);
    setSec("00");
    setMinute("00");
    setHour("00")
  };

  return (
    <div className="timer-btn">
      <button onClick={StartTimer} disabled={startDisable}>
        Start
      </button>
      <button onClick={StopTimer} disabled={stopDisable}>
        Stop
      </button>
      <button onClick={RestTimer}>Reset</button>
    </div>
  );
}
