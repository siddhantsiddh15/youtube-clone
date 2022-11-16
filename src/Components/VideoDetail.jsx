import { Paper, Typography } from '@mui/material';
import YouTube from "react-youtube";
import Spinner from './Spinner';

import {useState, useEffect} from 'react';
export default function VideoDetail(props){
    const [loading, setLoading] = useState(true);
    const {selectedVideo} = props;
    const {id, snippet} = selectedVideo;
    console.log(id)
    console.log(snippet)

    useEffect(() => {
      setLoading(true);
    }, [selectedVideo])


    const opts = {
        height: '480',
        width: '720',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      
      function _onReady(event){
        // access to player in all event handlers via event.target
        
        event.target.pauseVideo();

        setLoading(false)
      }
      
     

      return <div>
        <Paper styling ={{p:2}} elevation={3}>
        {loading && <Spinner speed= "1"
    customText = "Loading..."/> }
        <YouTube videoId={id.videoId} opts={opts} onReady={_onReady} />

        <Typography variant="h5" >
        {snippet.title}
        </Typography>
        <Typography variant="subtitle1">
          {snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2" >
          {snippet.description}
        </Typography>
        </Paper>
        
      </div>;
    
  
    
}