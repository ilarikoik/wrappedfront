import { useEffect, useState } from "react";
import { artistInterface, artistList } from "../interface/songInterface";
import { getArtists } from "../utils/getSongData";
import { sortArtists } from "../utils/sortSongs";

interface ArtistsProps {
  slider: number;
  artists: artistInterface[];
}

export default function Artists({ artists }: ArtistsProps) {
  //   const [artists, setArtists] = useState<artistInterface[]>();

  //   // ARTISTIT
  //   useEffect(() => {
  //     const artistData = async () => {
  //       const ar = await getArtists();
  //       const sort = sortArtists(ar);
  //       console.log(sort);
  //       if (ar) {
  //         setArtists(sort);
  //       }
  //       const sliced = sort.slice(0, slider);
  //       setArtists(sliced);
  //     };
  //     artistData();
  //   }, [slider]);

  return (
    <>
      {Array.isArray(artists) &&
        artists.map((artist, index) => (
          <tr key={index} className=" w-full ">
            <td className="text-white font-bold text-xl p-1 text-center">
              {index + 1}
            </td>
            <td className="m-2 text-white font-semibold p-1 ">
              {artist.artist}
            </td>
            <td className="m-2 text-white font-semibold p-1 text-center">
              {artist.timesPlayed}
            </td>
            <td className="m-2 text-white font-semibold p-1 text-center">
              {(artist.ms / 1000 / 60).toFixed(0)} min /{" "}
              {(artist.ms / 1000 / 60 / 60).toFixed(1)} h
            </td>
          </tr>
        ))}
    </>
  );
}
