import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropsTypes from "prop-types";
import moment from "moment";

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

export default function CustomCard({
  author,
  title,
  content,
  source,
  description,
  publishedAt,
  urlToImage,
  url,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openInNewTab = (href) => {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href: href,
    }).click();
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "0.5rem" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], maxHeight: "50px" }}
            aria-label="author"
          >
            {author?.charAt(0) ?? ""}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title ?? "No Title"}
        subheader={moment(publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      />
      <div
        onClick={() => openInNewTab(url)}
        style={{
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          src={urlToImage ?? ""}
          alt="Img"
        />
      </div>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description ?? ""}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{content ?? "No Content"}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CustomCard.propTypes = {
  author: PropsTypes.string,
  title: PropsTypes.string,
  content: PropsTypes.string,
  source: PropsTypes.object,
  description: PropsTypes.string,
  publishedAt: PropsTypes.string,
  urlToImage: PropsTypes.string,
};
