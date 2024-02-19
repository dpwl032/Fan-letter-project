import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

function MusicVideo() {
  return (
    <>
      <YotubVideo>
        {/* <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src="https://youtu.be/xjBY3MLdvVQ?si=IlL0vQuFQYllKtIN"
          frameBorder="0"
          allowFullScreen
        /> */}
        <YouTube
          videoId="xjBY3MLdvVQ" //동영상 주소
          opts={{
            width: "100%",
            height: "500px",
            playerVars: {
              autoplay: 1, //자동 재생 여부
              modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
              playlist: "xjBY3MLdvVQ", //반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
        />
      </YotubVideo>
    </>
  );
}

export default MusicVideo;

const YotubVideo = styled.div`
  width: 100%;
  height: 410px;
  background-color: black;
`;
const iframeProps = {
  id: "ytplayer",
  type: "text/html",
  width: "1000",
  height: "405",
  src: "https://www.youtube.com/embed/cgdne04i99I",
  frameborder: "0",
  allowfullscreen: "allowfullscreen",
};
