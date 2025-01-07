import { useEffect, useState } from "react";
import { songList, songInterface } from "../interface/songInterface";
import sortSongs from "../utils/sortSongs";

export default function Stats({ songData }: songList) {
  const [songs, setSongs] = useState<songInterface[]>(songData);
  const [topX, setTopX] = useState<songInterface[]>([]);
  const [bottomX, setBottomX] = useState<songInterface[]>();

  useEffect(() => {
    const get = async () => {
      const sort = sortSongs(songData);
      setSongs(sort);
      const topFive = [...songs].slice(0, 5);
      setTopX(topFive);
      console.log(topFive);
    };
    get();
  }, []);

  return (
    <div className=" h-fit w-full ">
      <div className=" rounded-xl m-2 h-fit ">
        <h2 className="text-white font-bold text-xl text-center mb-5">
          Top {topX.length} Songs
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
              {topX.map((song, index) => (
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
