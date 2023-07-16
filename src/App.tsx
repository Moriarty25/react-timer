import { ChangeEvent, useState } from "react";
import "./App.css";
import { IconHourglass } from "./components/Icons/IconHourglass/IconHourglass";
import { Button } from "./components/Button/Button";
import { IconToggle } from "./components/Icons/IconToggle/IconToggle";
import { IconUturnBack } from "./components/Icons/IconUturnBack/IconUturnBack";
import { Timer } from "./components/Timer/Timer";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPausing, setIsPausing] = useState(false);
  const [value, setValue] = useState("");
  const hours = Number(value.slice(0, 2));
  const minutes = Number(value.slice(3, 5));
  const seconds = Number(value.slice(6, 8));

  function toggleTimer() {
    if (value) {
      setIsPlaying(false);
    }
    setIsPausing(!isPausing);
  }
  
  function onReturn() {
    setIsPlaying(true);
  }

  function onInput(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log(value.slice(0, 2), value.slice(3, 5), value.slice(6, 8));
  }

  return (
    <div className="App">
      <main className="App-main">
        <h1>TIMER</h1>
        {!isPlaying ? (
          <>
            <IconHourglass />
            <Timer
              initialHours={hours}
              initialMinute={minutes}
              initialSeconds={seconds}
              setIsPausing={setIsPausing}
              setValue={setValue}
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
              bgColor="secondary"
              icon={<IconUturnBack />}
              onClick={onReturn}
            />
          )}
          <Button
            icon={<IconToggle isPlaying={!isPausing} />}
            onClick={toggleTimer}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
