import type { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Question.module.css";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (
    typeof context.params?.id !== "string" ||
    !["1", "2", "3"].includes(context.params.id)
  ) {
    return { notFound: true };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

const Question: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{id}. What is 1+1 = ?</h1>
      </main>
    </div>
  );
};

export default Question;
