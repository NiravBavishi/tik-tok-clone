import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src="https://v16m.tiktokcdn.com/96b4fbf374cc9ec69ac87761a72b5e4f/5f38299a/video/tos/useast2a/tos-useast2a-ve-0068c003/8e96d89c1539492f8735e36594a3419b/?a=1233&br=1558&bt=779&cr=0&cs=0&dr=0&ds=3&er=&l=20200813182945010190185147023016D8&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Qzd2VlODh3djMzNTczM0ApNjpmOjRnOzxkNzZkZDo4ZGczMTVpMi5qZGdfLS02MTZzc2AuYWNgYWBhLWEzMzJjMGM6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      {/*<VideoFooter/> */}
      {/*<VideoSidebar/> */}
    </div>
  );
}

export default Video;
