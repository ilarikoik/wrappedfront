import { useEffect, useState } from "react";
import {
  songList,
  songInterface,
  artistInterface,
  artistList,
} from "../interface/songInterface";
import sortSongs, { sortArtists } from "../utils/sortSongs";
import { sortSongsBackwards } from "../utils/sortSongs";
import Artists from "./Artists";
import { getArtists } from "../utils/getSongData";

export default function Stats({ songData, artistData }: songList & artistList) {
  const [songs, setSongs] = useState<songInterface[]>(songData);
  const [artists, setArtists] = useState<artistInterface[]>([]);
  const [topX, setTopX] = useState<songInterface[]>([]);
  const [bottomX, setBottomX] = useState<songInterface[]>();
  const [slider, setSlider] = useState(5);
  const [list, setList] = useState(0);

  // KAPPALEET
  useEffect(() => {
    const get = async () => {
      const sort = sortSongs(songData);

      const range = [...sort].slice(0, slider);
      setSongs(range);

      const backwards = sortSongsBackwards(songData);
      const bottom = [...backwards].slice(0, slider);
      setBottomX(bottom);
    };
    get();
  }, [slider, list]);

  // ARTISTIT
  useEffect(() => {
    const get = async () => {
      const sort = sortArtists(artistData);
      const range = [...sort].slice(0, slider);
      setArtists(range);
      console.log(artists);
    };
    get();
  }, [slider, list]);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(event.target.value));
  };

  const handleBottom = () => {
    setList(1);
    if (bottomX) {
      console.log("aaa");
      setSongs(bottomX);
    }
  };
  const handleTop = () => {
    setList(0);
    if (topX) {
      console.log("mm");
      setSongs(topX);
    }
  };
  const handleArtists = () => {
    setList(2);
  };

  //
  // HAKU TOIMINTO KIRJOTTAEN +
  return (
    <div className=" h-fit w-full bg-black">
      <div className="font-bold text-2xl bg-gradient-to-r from-violet-600 to-green bg-clip-text text-transparent h-20 w-full flex flex-row p-3 justify-between items-center">
        <p onClick={handleTop} className="cursor-pointer hover:underline">
          Most Listened Songs
        </p>
        <p onClick={handleArtists} className="cursor-pointer hover:underline">
          Artists
        </p>
        <p className="cursor-pointer hover:underline">Podcasts</p>
        <p onClick={handleBottom} className="cursor-pointer hover:underline">
          Least Listened Songs
        </p>
      </div>
      <div className=" rounded-xl m-2 h-fit ">
        <div className=" flex flex-col justify-center items-center">
          <div className="flex flex-row"></div>
          <input
            className="w-full"
            type="range"
            min="1"
            max={songData.length}
            value={slider}
            onChange={handleSlider}
          ></input>
        </div>
        <h2 className="text-white  font-bold text-xl text-center mb-5">
          {list === 0 ? "Top " : list === 2 ? "Artists " : "Bottom "}
          <input
            type="text"
            placeholder="Amount"
            className="w-12 rounded-md h-8 bg-black border-2 border-white text-center"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
          />{" "}
          {list === 0 || list === 1 ? "Songs" : ""}
        </h2>
      </div>
      <div className=" flex justify-center w-full items-center">
        <table className=" w-fit table-fixed ">
          <thead>
            <tr>
              <th className="text-left p-2 text-white w-20 "></th>
              <th className="text-left p-2 text-white">Name</th>
              <th className="p-2 text-white text-center">Times Played</th>
              <th className="text-center p-2 text-white">
                Total Time Played (min / h)
              </th>
            </tr>
          </thead>
          <tbody>
            {list === 0 &&
              songs.map((song, index) => (
                <tr key={index} className=" w-full ">
                  <td className="text-white font-bold text-xl p-1 text-center">
                    {index + 1}
                  </td>
                  <td className="m-2 text-white font-semibold p-1 ">
                    {song.song}
                  </td>
                  <td className="m-2 text-white font-semibold p-1 text-center">
                    {song.timesPlayed}
                  </td>
                  <td className="m-2 text-white font-semibold p-1 text-center">
                    {(song.ms / 1000 / 60).toFixed(0)} min /{" "}
                    {(song.ms / 1000 / 60 / 60).toFixed(1)} h
                  </td>
                </tr>
              ))}
            {list === 1 &&
              Array.isArray(bottomX) &&
              bottomX.map((song, index) => (
                <tr key={index} className=" w-full ">
                  <td className="text-white font-bold text-xl p-1 text-center">
                    {index + 1}
                  </td>
                  <td className="m-2 text-white font-semibold p-1 ">
                    {song.song}
                  </td>
                  <td className="m-2 text-white font-semibold p-1 text-center">
                    {song.timesPlayed}
                  </td>
                  <td className="m-2 text-white font-semibold p-1 text-center">
                    {(song.ms / 1000 / 60).toFixed(0)} min /{" "}
                    {(song.ms / 1000 / 60 / 60).toFixed(1)} h
                  </td>
                </tr>
              ))}
            {list === 2 && <Artists slider={slider} artists={artists} />}
          </tbody>
        </table>
      </div>
    </div>
  );
}
