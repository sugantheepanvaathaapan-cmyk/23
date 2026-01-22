let audio: HTMLAudioElement | null = null;

export function getAudio() {
  if (!audio) {
    audio = new Audio("/music/our-song.mp3");
    audio.loop = true;
    audio.preload = "auto";
  }
  return audio;
}

export async function playAudio() {
  const a = getAudio();
  await a.play();
}

export function pauseAudio() {
  const a = getAudio();
  a.pause();
}

export async function toggleAudio() {
  const a = getAudio();
  if (a.paused) await a.play();
  else a.pause();
}

export function isPlaying() {
  const a = getAudio();
  return !a.paused;
}
