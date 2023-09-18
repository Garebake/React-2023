import { useState } from "react";

export function NFL() {
  const [data, setData] = useState("");

  async function getData() {
    const url =
      "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams?rosters=true&teamStats=true";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e93b868fdfmsh972ff6b442ca245p1a9df7jsn20e4f24276f8",
        "X-RapidAPI-Host":
          "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  getData();
  return (
    <div className="ml-16 text-center">
      <h1>NFL Page</h1>
      <p>{data}</p>
    </div>
  );
}
