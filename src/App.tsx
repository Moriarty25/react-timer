import { ChangeEvent, FormEventHandler, useRef, useState } from "react";
import "./App.css";
import { IconHourglass } from "./components/Icons/IconHourglass/IconHourglass";
import { Button } from "./components/Button/Button";
import { IconToggle } from "./components/Icons/IconToggle/IconToggle";
import { IconUturnBack } from "./components/Icons/IconUturnBack/IconUturnBack";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Timer } from "./components/Timer/Timer";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [value, setValue] = useState("");

  function toggleTimer() {
    setIsPlaying(!isPlaying);
  }

  function onReturn() {
    setIsPlaying(true);
  }

  function onInput(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log(value.slice(0, 2), value.slice(3, 5), value.slice(6, 8));
  }

  const hours = Number(value.slice(0, 2));
  const minutes = Number(value.slice(3, 5));
  const seconds = Number(value.slice(6, 8));

  return (
    <div className="App">
      <main className="App-main">
        TIMER
        {!isPlaying ? (
          <>
            <IconHourglass />
            <Timer
              initialHours={hours}
              initialMinute={minutes}
              initialSeconds={seconds}
            />
          </>
        ) : (
          <input
            className="input-time"
            onInput={onInput}
            type="time"
            name="time"
            step={1}
          />
        )}
        <div className="control-panel">
          {!isPlaying && (
            <Button
              size="s"
              bgColor="second"
              icon={<IconUturnBack />}
              onClick={onReturn}
            />
          )}
          <Button
            icon={<IconToggle isPlaying={isPlaying} />}
            onClick={toggleTimer}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
