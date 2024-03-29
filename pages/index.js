/* eslint-disable */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import FilterArticle from "../src/components/Article/filterArticle";
import { Box, CircularProgress } from "@mui/material";
import loadable from '@loadable/component'
import AppBarComponent from "../src/components/Appbar/appbar";
const LisArticleComponent = loadable(() => import('../src/components/Article/listArticle'))
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBarComponent nav={"nav"}/>
        <Box component="nav">
        <p>Article List</p>
        <FilterArticle/>

        <Suspense
          fallback={
            <div styles={{ width: "100%", height: "100%" }}>
              <CircularProgress color="inherit" />
            </div>
          }
        >
          <LisArticleComponent/>
        </Suspense>
        </Box>
      </main>
    </div>
  );
}