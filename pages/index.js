import Head from "next/head";
import styles from "../styles/Home.module.css";
import ListArticle from "../components/Article/listArticle";
import { Suspense } from "react";
import FilterArticle from "../components/Article/filterArticle";
import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import loadable from '@loadable/component'
import AppBarComponent from "../components/Appbar/appbar";
const LisArticleComponent = loadable(() => import('../components/Article/listArticle'))
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
            <div style={{ width: "100%", height: "100%" }}>
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
