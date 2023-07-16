import { FC, useState, useEffect } from "react";
import { makeTwoDigit } from '../../helpers/makeTwoDigit';

type TTimerProps = {
  initialHours: number;
  initialMinute: number;
  initialSeconds: number;
  setIsPausing: (isPlaying: boolean) => void;
  setValue: (value: string) => void;
};

export const Timer: FC<TTimerProps> = ({initialHours = 0, initialMinute = 0, initialSeconds = 0, setIsPausing, setValue, }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(myInterval);
        setValue("")
        setIsPausing(true);
      }
      if (minutes === 0 && seconds === 0 && hours) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
      if (minutes && seconds === 0 && hours) {
        setHours(hours);
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes && seconds === 0 && hours === 0) {
        setHours(hours);
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
   
    return () => {
      clearInterval(myInterval);
    };
  }, [hours, minutes, seconds]);

  const hoursSpan = makeTwoDigit(hours);
  const minutesSpan = makeTwoDigit(minutes);
  const secondsSpan = makeTwoDigit(seconds);

  return (
    <>
      {!hours && !minutes && !seconds ? <p>ВРЕМЯ ИСТЕКЛО</p> :  
      <p className="dial" role="timer">
        {hoursSpan + "  : " + minutesSpan + " : " + secondsSpan}
      </p>}
    </>
  );
};
