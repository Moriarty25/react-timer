import { FC, useState, useEffect } from "react";

type TTimerProps = {
  initialHours: number;
  initialMinute: number;
  initialSeconds: number;
  isPausing: boolean;
};

export const Timer: FC<TTimerProps> = (props) => {
  const { initialHours = 0, initialMinute = 0, initialSeconds = 10, isPausing } = props;
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(myInterval);
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
  });
  
  const hoursSpan = hours < 10 ? "0" + hours : hours;
  const minutesSpan = minutes < 10 ? "0" + minutes : minutes;
  const secondsSpan = seconds < 10 ? "0" + seconds : seconds;

  return (
    <p className="dial" role="timer">
      {hoursSpan + "  : " + minutesSpan + " : " + secondsSpan}
    </p>
  );
};
