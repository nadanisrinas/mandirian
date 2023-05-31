/* eslint-disable */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import FilterArticle from "../src/components/Article/filterArticle";
import { Box, CircularProgress } from "@mui/material";
import loadable from '@loadable/component'
import AppBarComponent from "../src/components/Appbar/appbar";
import Script from "next/script";
const LisArticleComponent = loadable(() => import('../src/components/Article/listArticle'))
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <Script
              type="text/javascript"
              async
              dangerouslySetInnerHTML={{
                __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-MCWQ6MS")`,
              }}
            />
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