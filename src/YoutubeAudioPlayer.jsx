import React, { useEffect, useRef, useState } from 'react';

const YouTubeAudioPlayer = ({ videoId }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    // Check if the YouTube Iframe API script is already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If the API is already loaded, initialize the player immediately
      initializePlayer();
    }

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = initializePlayer;

    // Cleanup function to destroy player when component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const initializePlayer = () => {
    if (!window.YT) {
      console.error('YouTube API failed to load');
      return;
    }
    playerRef.current = new window.YT.Player('youtube-player', {
      videoId,
      events: {
        onReady: () => {
          console.log('Player is ready');
          setIsPlayerReady(true);
        },
      },
      playerVars: {
        origin: window.location.origin,
      },
    });
  };

  const togglePlay = () => {
    if (playerRef.current && isPlayerReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Hidden iframe */}
      <div style={{ display: 'none' }}>
        <div id="youtube-player"></div>
      </div>
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isPlaying ? 'Pause Audio' : 'Play Audio'}
      </button>
    </div>
  );
};

export default YouTubeAudioPlayer;





/**
 <iframe width="560" height="315" src="https://www.youtube.com/embed/B72_HsUR0Vc?si=y_xwYHqz3uiNgFmn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



 <iframe width="560" height="315" src="https://www.youtube.com/embed/eU7nkanMnXA?si=GC_Tk0vWFCpeIrQt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 */