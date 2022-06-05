import type { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useContext, ChangeEvent } from "react";
import { BaseContext } from "../_app";
import styles from "../../styles/Question.module.css";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;

  if (id !== "1" && id !== "2" && id !== "3") {
    return { notFound: true };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

const Question: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { answers, setAnswers } = useContext(BaseContext);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAnswers({ ...answers, [String(id)]: event.target.value });

  if (id !== "1" && id !== "2" && id !== "3") {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{id}. What is 1+1 = ?</h1>
        <form>
          <input value={answers[id]} onChange={onChange} />
        </form>
      </main>
    </div>
  );
};

export default Question;
