import { useRef, useState } from "react";
import Moudal from "./Moudal";
export default function Challenge({ title, goal }) {
  const [StartTime, setStartTime] = useState(false);
  const [lost, setLost] = useState(false);
  const status = useRef();
  const control = useRef();
  const time = useRef();
  let score = useRef();
  // console.log(time.current);

  function handleStart() {
    time.current = goal * 1000;
    status.current = setInterval(() => {
      time.current -= 10;
      // console.log("time:", time.current);
      if (time.current <= 0) {
        console.log("end working : ", time.current);
        setLost(true);
        setStartTime(false);
        control.current.showModal();
        clearInterval(status.current);
      }
    }, 10);
    setStartTime(true);
  }
  function handleEnd() {
    clearInterval(status.current);
    setLost(false);
    setStartTime(false);
    console.log("goal : ", goal * 1000, " current: ", time.current);
    console.log("timeLEft", time.current);
    score.current = (100 - time.current / goal / 10).toFixed(2);
    console.log("score", score);
    control.current.showModal();
  }
  return (
    <>
      <Moudal
        goal={goal}
        lost={lost}
        timeLeft={time.current}
        score={score.current}
        ref={control}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <div className="challenge-time">{goal} sec</div>
        <button onClick={StartTime ? handleEnd : handleStart}>
          {StartTime ? "End" : "Start"}
        </button>
        <div className={StartTime ? "active" : undefined}>
          {StartTime ? "Challenge ongoing..." : "Click the btn"}
        </div>
      </section>
    </>
  );
}
