import {useState} from 'react';
import './App.css';
import { IconHourglass } from './components/Icons/IconHourglass/IconHourglass';
import { Button } from './components/Button/Button';
import { IconToggle } from './components/Icons/IconToggle/IconToggle';

function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  function toggleTimer() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="App">
      <header className="App-header">
        <IconHourglass />
        <p>00 : 01 : 30</p>
        <Button
          icon={<IconToggle isPlaying={isPlaying} />}
          onClick={toggleTimer}
        />
      </header>
    </div>
  );
}

export default App;
