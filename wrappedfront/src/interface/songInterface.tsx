export interface songInterface {
  song: string;
  ms: number;
  timesPlayed: number;
}

export interface songList {
  songData: songInterface[];
}

export interface artistInterface {
  artist: string;
  ms: number;
  timesPlayed: number;
}

export interface artistList {
  artistData: artistInterface[];
}
