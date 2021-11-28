import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

import "./blog-card.css";

class BlogCard extends React.Component {
  getThumbImage(image) {
    return image ? getImage(image) : "";
  }
  render() {
    return (
      <Card sx={{ maxWidth: 320 }} className="blog-card">
        <CardHeader
          avatar={
            <Avatar>
              <CodeIcon color="success"></CodeIcon>
            </Avatar>
          }
          title={this.props.node.frontmatter.title}
          subheader={this.props.node.frontmatter.date}
        />
        <CardMedia sx={{ maxHeight: 200, overflow: "hidden" }}>
          <GatsbyImage
            image={this.getThumbImage(
              this.props.node.frontmatter.hero_image_thumb
            )}
            alt={this.props.node.frontmatter.hero_image_alt}
          />
        </CardMedia>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">
            <Link to={`/blog/${this.props.node.slug}`}>Read More</Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default BlogCard;
