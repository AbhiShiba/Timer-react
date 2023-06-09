import { createContext, useState } from "react";
import "./App.css";
import { TimerButtons } from "./Components/TimerButtons/TimerButtons";
import { TimerINInput } from "./Components/TimerINInput/TimerINInput";

export const TimerContext = createContext();

function App() {
  const [seconds, setSeconds] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");

  return (
    <div className="App">
      <div>
        <TimerContext.Provider
          value={{
            seconds: [seconds, setSeconds],
            minute: [minute, setMinute],
            hour: [hour, setHour],
          }}
        >
          <TimerINInput />
          <TimerButtons />
        </TimerContext.Provider>
      </div>
    </div>
  );
}

export default App;
