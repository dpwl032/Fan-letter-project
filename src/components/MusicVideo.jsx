import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

function MusicVideo() {
  return (
    <>
      <YotubVideo>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
          frameBorder="0"
          allowFullScreen
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
