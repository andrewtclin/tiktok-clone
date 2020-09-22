import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import tiktok1 from "./videos/tiktok1.mp4";
import tiktok2 from "./videos/tiktok2.mp4";
import tiktok3 from "./videos/tiktok3.mp4";
import tiktok4 from "./videos/tiktok4.mp4";
import tiktok5 from "./videos/tiktok5.mp4";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={tiktok1}
          channel="tclin"
          description="OZZY! PT1"
          song="99 problems but REACT ain't 1"
          likes={1023}
          messages={623}
          shares={124}
        />
        <Video
          url={tiktok2}
          channel="tclin"
          description="OZZY! PT2"
          song="99 problems but REACT ain't 1"
          likes={692}
          messages={323}
          shares={99}
        />
        <Video
          url={tiktok3}
          channel="tclin"
          description="OZZY! PT3"
          song="99 problems but REACT ain't 1"
          likes={839}
          messages={242}
          shares={102}
        />
        <Video
          url={tiktok4}
          channel="tclin"
          description="OZZY! PT4"
          song="99 problems but REACT ain't 1"
          likes={521}
          messages={362}
          shares={67}
        />
        <Video
          url={tiktok5}
          channel="tclin"
          description="OZZY! PT5"
          song="99 problems but REACT ain't 1"
          likes={9375}
          messages={689}
          shares={504}
        />
      </div>
    </div>
  );
}

export default App;
