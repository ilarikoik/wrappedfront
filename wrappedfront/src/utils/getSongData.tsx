export default async function getSongs() {
  try {
    console.log("yyyaa");
    const res = await fetch(`http://localhost:8080/api/datas`);
    const res2 = await res.json();
    return res2;
  } catch (error) {
    console.log(error + "-----");
  }
}

export async function getArtists() {
  try {
    const res = await fetch(`http://localhost:8080/api/artists`);
    const res2 = await res.json();
    return res2;
  } catch (error) {}
}
