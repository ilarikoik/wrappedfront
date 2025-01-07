export interface songInterface {
  song: string;
  ms: number;
  timesPlayed: number;
}

export interface songList {
  songData: songInterface[];
}
