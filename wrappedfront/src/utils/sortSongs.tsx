import { songList, songInterface } from "../interface/songInterface";

export default function sortSongs(songData: songInterface[]) {
  const sorted = [...songData].sort((a, b) => b.ms - a.ms);
  return sorted;
}
