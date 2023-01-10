import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  // incrementByAmount,
  // incrementAsync,
  // selectCount,
} from "./tokenSlice";
import styles from "./Token.module.css";

export function Token() {
  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const count = useSelector(selectCount);
  // const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    // <div>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={(e) => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() =>
    //         dispatch(incrementByAmount(Number(incrementAmount) || 0))
    //       }
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    //     >
    //       Add Async
    //     </button>
    //   </div>
    // </div>
  );
}
