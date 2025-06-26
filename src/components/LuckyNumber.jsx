import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
    //REACT HOOK - useState(0)
    const [luckynumber, setLuckyNumber] = useState(0);

  function handleClick() {
    setLuckyNumber(Math.ceil(Math.random() * 35));
    // setLuckyNumber(luckynumber + 1);
    console.log("lucky number is now: " + luckynumber);
  }

  return (
    <div className={styles.container}>
      <h1>Contador = {luckynumber}</h1>
      <button className={styles.button} onClick={handleClick}>
        Clique!
      </button>
    </div>
  );
}
