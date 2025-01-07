import { useEffect, useState } from "react";
import Dropzone from "./components/Dropzone";
import Stats from "./components/Stats";
import getSongs from "./utils/getSongData";

export default function App() {
  const [songData, setSongData] = useState([]);
  useEffect(() => {
    const get = async () => {
      const data = await getSongs();
      if (data) {
        setSongData(data);
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
          <Stats songData={songData}></Stats>
        </div>
      </div>
    </>
  );
}
