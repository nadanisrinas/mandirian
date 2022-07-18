import axios from "axios";

export default function ArticleDetail({ article }) {
    return (
      <div style={{
        margin : "1%"
      }}>
        <img height="194" src={article?.urlToImage ?? ""} alt="" />
        <div>
          <h1>{ article?.title ?? "" }</h1>
          <p>{article?.description ?? ""}</p>
        </div>
      </div>
    )
  }
  
  export async function getStaticProps() {
    const API_HOST = "https://newsapi.org/v2/everything";
    // const newsTitle = {qInTitle : params.newsTitle}
    const apiKey =  "70f987d0e66c40ea856ca262778431bf"
     const results = await axios({
        url: `${API_HOST}`,
        method: "GET",
        params: {apiKey: "70f987d0e66c40ea856ca262778431bf", q: "apple"},
      })
    console.log("result1s", results)

    
    
    console.log("results", results)
    return {
      props: {
        article: results.data.articles[0]
      }
    }
  }