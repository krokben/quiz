import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useState } from "react";

export type Answers = { 1: string; 2: string; 3: string };

export const BaseContext = createContext<{
  answers: Answers;
  setAnswers: Function;
}>({
  answers: { 1: "", 2: "", 3: "" },
  setAnswers: (answers: Answers) => null,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [answers, setAnswers] = useState<Answers>({ 1: "", 2: "", 3: "" });

  return (
    <BaseContext.Provider
      value={{
        answers,
        setAnswers,
      }}
    >
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Simple Quiz Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </BaseContext.Provider>
  );
}

export default MyApp;
