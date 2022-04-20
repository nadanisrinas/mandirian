import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/action";
import CustomCard from "./cardCustom";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ListArticle = ({ page, setPage }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const loadMoreData = () => {
    setPage(page + 1);
    let params = {
      q: "bitcoin",
      apiKey: "70f987d0e66c40ea856ca262778431bf",
      pageSize: 5 * page,
      page: page,
    };
    dispatch(getData(axios, params));
  };

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    let params = {
      q: "bitcoin",
      apiKey: "70f987d0e66c40ea856ca262778431bf",
      pageSize: 5 * page,
      page: page,
    };
    dispatch(getData(axios, params));
  }, []);
  return (
    <div>
      {!data.isLoading &&
        data.data &&
        data.data.map((item) => (
          <CustomCard
            author={item.author}
            title={item.title}
            content={item.content}
            source={item.source}
            description={item.description}
            publishedAt={item.publishedAt}
            urlToImage={item.urlToImage}
            url={item.url}
          />
        ))}
      {!data.isLoading && data.data && (
        <Button onClick={loadMoreData}>Load More</Button>
      )}

      {data.isLoading && (
        <div style={{ width: "100%", height: "100%" }}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
};

export default ListArticle;
