import Grid from '@mui/material/Grid';
import './App.css';
import youtube from './api/youtube';
import SearchBar from './Components/SearchBar';
import React,{useState, useEffect} from 'react';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList';
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({id:{}, snippet:{}});
  const [videoList, setVideoList] = useState([])
  
  

  useEffect(() => {
    
      setSelectedVideo(videos[0])
      setVideoList(videos.slice(1))


      console.log(videoList)
  }, [videos])


  async function handleSubmit(searchTerm){
      const response = await youtube.get("search",
      {
        params: {
          part:"snippet",
          maxResults:20,
          key : "AIzaSyBqyXlfLlL7Hfv7sd8wvbRSm8eGq5mr840",
          q: searchTerm,
        }
      });
      console.log(searchTerm);
      // if(response){
      //   setVideos(response.data.items);
      // }
    }
  


  return (<>
    <div className="App">
      
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      aligndivs="flex-start"
      rowSpacing={3} 
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
    >
        <Grid item xs={11}>
            <Grid container spacing= {10}>
              <Grid item xs={12}>
                <SearchBar onSubmit = {handleSubmit} />
                </Grid>
              <Grid item xs={8}>
                {selectedVideo && <VideoDetail selectedVideo= {selectedVideo}/>}
              </Grid>
              <Grid item xs={4}>
                {
                  videoList.map(ele => {
                    return <VideoList videoDetails ={ele} />
                  })
                }
              </Grid>
            </Grid>
        </Grid>
    </Grid>
    </div>
    </>
  );
}

export default App;
