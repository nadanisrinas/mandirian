import Head from "next/head";
import styles from "../styles/Home.module.css";
import ListArticle from "../components/Article/listArticle";
import { Suspense } from "react";
import FilterArticle from "../components/Article/filterArticle";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Article List</p>
        <FilterArticle page={page} setPage={setPage} />

        {/* TODO: issue nextjs with react18  */}
        <Suspense
          fallback={
            <div style={{ width: "100%", height: "100%" }}>
              <CircularProgress color="inherit" />
            </div>
          }
        >
          <ListArticle page={page} setPage={setPage} />
        </Suspense>
      </main>
    </div>
  );
}
