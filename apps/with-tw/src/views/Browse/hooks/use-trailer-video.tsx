import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export const useTrailerVideo = ({ videoId, width, height }: {
  videoId: string;
  width?: string;
  height?: string;
}) => {

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      color: 'white', // red | white
      disablekb: 1,
      loop: 1,
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    const player = event.target;
    if (!player) return;// sometimes player can be null
    player.setVolume(0);
    player.playVideo();
  };

  const Component = React.useMemo(() => function VideoComponent() {
    return (
      <>
        <YouTube
          style={{
            width,
            height,
          }}
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
        />
      </>
    );
  }, [videoId]);

  return Component;
};