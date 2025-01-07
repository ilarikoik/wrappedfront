import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);

    const formData = new FormData();

    // Oletetaan, että tiedostot ovat ZIP-tiedostoja
    acceptedFiles.forEach((file) => {
      // Lisää tiedosto FormData-objektiin
      formData.append("file", file); // Kenttä voi olla eri nimi, kuten "zipFile"
    });

    // Lähetetään tiedosto backendille
    fetch("http://localhost:8080/api/files/upload-zip", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // Virheen käsittely
          return response.text().then((text) => {
            throw new Error(`Request failed: ${response.status} - ${text}`);
          });
        }

        // Tarkistetaan, että vastaus on JSON
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Vastaus on JSON-muotoa
        } else {
          return response.text(); // Jos ei ole JSON, käsitellään teksti
        }
      })
      .then((data) => {
        if (typeof data === "string") {
          console.log("Palvelin vastasi tekstillä:", data);
        } else {
          console.log("ZIP-tiedosto lähetetty onnistuneesti:", data);
        }
      })
      .catch((error) => {
        console.error("Virhe tiedoston lähettämisessä:", error);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div className="w-full h-36 bg-black flex flex-col justify-center items-center rounded-2xl">
        <h1 className="flex justify-center p-2"> </h1>
        <div
          className=" bg-black border-2 border-y-gray border-x-green h-2/3 w-4/6 cursor-pointer flex justify-center items-center rounded-2xl text-green font-bold"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop Spotify Zip File here or click here and select</p>
          )}
        </div>
      </div>
    </>
  );
}
