import type { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { BaseContext } from "./_app";
import styles from "../styles/Results.module.css";

const correctAnswers = {
  "1": "2",
  "2": "49",
  "3": "13",
};

const Results: NextPage = () => {
  const { answers } = useContext(BaseContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Results</h1>
        <ul>
          {Object.entries(answers).map(
            ([id, answer]) =>
              (id === "1" || id === "2" || id === "3") && (
                <li key={id}>
                  {correctAnswers[id] === answer ? (
                    <span className={styles.correct}>{answer}</span>
                  ) : (
                    <span className={styles.incorrect}>Wrong :(</span>
                  )}
                </li>
              )
          )}
        </ul>
        <Link href="/questions/1">
          <a>Try again!</a>
        </Link>
      </main>
    </div>
  );
};

export default Results;
