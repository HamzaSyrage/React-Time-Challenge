import { forwardRef } from "react";
import { createPortal } from "react-dom";
const Moudal = forwardRef(function render(
  { goal, lost, timeLeft, score },
  control
) {
  return createPortal(
    <dialog ref={control} className="result-modal">
      <h2>{lost ? "sorry you lost" : "congratulations you won"}</h2>
      {lost ? (
        <>
          <p>
            never give up <strong>and try again</strong>
          </p>
          <p>
            the goal was <strong>{goal} sec</strong>
          </p>
        </>
      ) : (
        <>
          <p>
            your score is <strong>{score}%</strong>
          </p>
          <p>
            there is <strong> {(timeLeft / 1000).toFixed(2)} sec left</strong>
          </p>
        </>
      )}
      <form method="dialog">
        <button>{lost ? "retry" : "yeah"}</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default Moudal;
