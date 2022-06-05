import type { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, ChangeEvent, SyntheticEvent } from "react";
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

const getQuestion = (id: string) => {
  switch (id) {
    case "1":
      return "What is 1 + 1 = ?";
    case "2":
      return "What is 7 * 7 = ?";
    case "3":
    default:
      return "What is 78 / 6 = ?";
  }
};

const Question: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { answers, setAnswers } = useContext(BaseContext);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAnswers({ ...answers, [String(id)]: event.target.value });

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (id === String(Object.keys(answers).length)) {
      router.push("/results");
      return;
    }

    router.push(`/questions/${Number(id) + 1}`);
  };

  if (id !== "1" && id !== "2" && id !== "3") {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{`${id}. ${getQuestion(id)}`}</h1>
        <form onSubmit={onSubmit}>
          <input value={answers[id]} onChange={onChange} />
        </form>
      </main>
    </div>
  );
};

export default Question;
