import { createContext, useContext, useRef, useState } from "react";

type MusicContextType = {
  playing: boolean;
  toggle: () => void;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MusicContext.Provider value={{ playing, toggle }}>
      {children}
      {/* GLOBAL AUDIO */}
      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        preload="auto"
        onEnded={() => setPlaying(false)}
      />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
}
