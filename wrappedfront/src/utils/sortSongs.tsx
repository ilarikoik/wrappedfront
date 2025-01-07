import { songList, songInterface } from "../interface/songInterface";

export default function sortSongs(songData: songInterface[]) {
  const sorted = [...songData].sort((a, b) => b.ms - a.ms);
  return sorted;
}
export function sortSongsBackwards(songData: songInterface[]) {
  const filtered = [...songData].filter((item) => item.ms > 60000);
  const sorted = [...filtered].sort((a, b) => a.ms - b.ms);
  return sorted;
}
