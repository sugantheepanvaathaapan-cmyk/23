import type { AppProps } from "next/app";
import MusicPlayer from "@/components/MusicPlayer";
import AnniversaryIntro from "@/components/AnniversaryIntro";
import { playAudio } from "@/lib/globalAudio";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnniversaryIntro
        onUnveil={() => {
          // Optional: start music when she taps "Unveil the website"
          // (This is allowed because it's a user click)
          playAudio();
        }}
      />
      <Component {...pageProps} />
      <MusicPlayer />
    </>
  );
}
