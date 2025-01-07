import { useEffect, useState } from "react";
import { songList, songInterface } from "../interface/songInterface";
import sortSongs from "../utils/sortSongs";
import { sortSongsBackwards } from "../utils/sortSongs";

export default function Stats({ songData }: songList) {
  const [songs, setSongs] = useState<songInterface[]>(songData);
  const [topX, setTopX] = useState<songInterface[]>([]);
  const [bottomX, setBottomX] = useState<songInterface[]>();
  const [slider, setSlider] = useState(5);
  const [list, setList] = useState(0);

  useEffect(() => {
    const get = async () => {
      const sort = sortSongs(songData);
      setSongs(sort);

      const topFive = [...songs].slice(0, slider);
      setTopX(topFive);

      const backwards = sortSongsBackwards(songData);
      const bottom = [...backwards].slice(0, slider);
      setBottomX(bottom);
      console.log(bottom);
    };
    get();
  }, [slider]);

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

  return (
    <div className=" h-fit w-full bg-black">
      <div className="font-bold text-2xl bg-gradient-to-r from-violet-600 to-green bg-clip-text text-transparent h-20 w-full flex flex-row p-3 justify-between items-center">
        <p onClick={handleTop} className="cursor-pointer hover:underline">
          Most Listened Songs
        </p>
        <p className="cursor-pointer hover:underline">Artists</p>
        <p onClick={handleBottom} className="cursor-pointer hover:underline">
          Least Listened Songs
        </p>
      </div>
      <div className=" rounded-xl m-2 h-fit ">
        <div className=" flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Amount"
              className="w-12 rounded-md h-6 bg-neutral-300 text-center"
              value={slider}
              onChange={(e) => setSlider(Number(e.target.value))}
            />
          </div>
          <input
            className="w-full"
            type="range"
            min="1"
            max={songData.length}
            value={slider}
            onChange={handleSlider}
          ></input>
        </div>
        <h2 className="text-white font-bold text-xl text-center mb-5">
          {list === 0 ? "Top" : "Bottom"} {slider} Songs
        </h2>
        <div className=" flex justify-center w-full items-center">
          <table className=" w-fit table-fixed ">
            <thead>
              <tr>
                <th className="text-left p-2 text-white w-20 "></th>
                <th className="text-left p-2 text-white">Track</th>
                <th className="p-2 text-white text-center">Times Played</th>
                <th className="text-center p-2 text-white">
                  Total Time Played (min / h)
                </th>
              </tr>
            </thead>
            <tbody>
              {list === 0 &&
                topX.map((song, index) => (
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
