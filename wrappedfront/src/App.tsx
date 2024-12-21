import Dropzone from "./components/Dropzone";

export default function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen bg-black p-1">
        <div className="h-fit w-fit flex flex-col justify-center items-center  mb-10 ">
          <h1 className="font-bold text-[80px] bg-gradient-to-r from-green to-gray bg-clip-text text-transparent">
            Wrapped But Better
          </h1>
          <p className="text-white text-[20px]">
            Spotify wrapped with more info
          </p>
        </div>

        <div className="max-w-[1400px] max-h-[900px] w-[1200px] h-[700px] bg-dark rounded-lg">
          <Dropzone />
        </div>
      </div>
    </>
  );
}
