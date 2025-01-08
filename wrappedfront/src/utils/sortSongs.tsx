import {
  songList,
  songInterface,
  artistInterface,
} from "../interface/songInterface";

export default function sortSongs(songData: songInterface[]) {
  const sorted = [...songData].sort((a, b) => b.ms - a.ms);
  return sorted;
}
export function sortSongsBackwards(songData: songInterface[]) {
  const filtered = [...songData].filter((item) => item.ms > 60000);
  const sorted = [...filtered].sort((a, b) => a.ms - b.ms);
  return sorted;
}

export function sortArtists(artistData: artistInterface[]) {
  const sorted = [...artistData].sort((a, b) => b.timesPlayed - a.timesPlayed);
  return sorted;
}
