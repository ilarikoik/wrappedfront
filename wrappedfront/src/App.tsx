import { useEffect, useState } from "react";
import Dropzone from "./components/Dropzone";
import Stats from "./components/Stats";
import getSongs, { getArtists, getTest } from "./utils/getSongData";
import Artists from "./components/Artists";

export default function App() {
  const [songData, setSongData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  useEffect(() => {
    const get = async () => {
      const artist = await getArtists();
      const data = await getTest();
      if (data) {
        setSongData(data);
      }
      if (artist) {
        setArtistData(artist);
      }
    };
    get();
  }, []);
  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-screen bg-black p-1 pb-20">
        <div className="h-fit w-fit flex flex-col justify-center items-center  mb-10 ">
          <h1 className="font-bold text-[80px] bg-gradient-to-r from-green to-gray bg-clip-text text-transparent">
            Wrapped But Better
          </h1>
          <p className="text-white text-[20px]">
            Spotify wrapped with more info
          </p>
        </div>

        <div className="max-w-[1000px]  w-full h-full bg-black  border-2 border-green rounded-xl pb-4">
          <Dropzone />
          <Stats songData={songData} artistData={artistData}></Stats>
        </div>
      </div>
    </>
  );
}
