import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/questions/1">
          <a className={styles.link}>Start Quiz!</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
