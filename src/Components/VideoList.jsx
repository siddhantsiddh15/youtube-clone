import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function VideoList(props) {

    const {videoDetails} = props;
    const {id, snippet} = videoDetails;
    const {thumbnails} = snippet;
  return (
    <Card sx={{ maxWidth: 345 , m: 2}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          width="70"
          image={thumbnails.high.url}
          alt={snippet.title}
          
        />
      </CardActionArea>
      <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {snippet.title}
          </Typography>
        </CardContent>
    </Card>
  );
}